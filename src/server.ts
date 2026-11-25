import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { loadLocalEnv, refreshWorkersAiToken } from "./lib/load-local-env";

// Must resolve before server-entry loads: ai-router snapshots process.env at import time.
const envReady = loadLocalEnv();

// Dev-only token repair hook, reached from ai-router's REST path on a 401.
(globalThis as { __refreshWorkersAiToken?: () => Promise<string | null> }).__refreshWorkersAiToken =
  refreshWorkersAiToken;

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = envReady
      .then(() => import("@tanstack/react-start/server-entry"))
      .then((m) => (m.default ?? m) as ServerEntry);
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// HTML documents carry no content fingerprint, so caching one pins a stale page until the
// browser's own TTL expires. Static hashed assets (/assets/*) are served separately by Cloudflare
// Assets and keep their immutable rule; only the SSR HTML needs to be revalidated every visit.
function withNoStoreHtml(response: Response): Response {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;
  if ((response.headers.get("cache-control") ?? "").includes("no-store")) return response;

  const headers = new Headers(response.headers);
  headers.set("cache-control", "no-store");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    // Workers AI arrives as a per-request binding; ai-router reads it off globalThis.
    const ai = (env as { AI?: unknown } | undefined)?.AI;
    if (ai && !(globalThis as { AI?: unknown }).AI) {
      (globalThis as { AI?: unknown }).AI = ai;
      (globalThis as { __env__?: Record<string, unknown> }).__env__ = env as Record<string, unknown>;
    }
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return withNoStoreHtml(await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return withNoStoreHtml(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
