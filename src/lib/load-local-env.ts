// Server-only: Vite only injects VITE_* vars, so a plain GEMINI_API_KEY in
// .env.local would never reach process.env for the API route handlers.
async function parseEnvFile(path: string): Promise<Record<string, string>> {
  try {
    const fs = await import("node:fs");
    const raw = fs.readFileSync(path, "utf-8");
    const out: Record<string, string> = {};
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      let value = (m[2] ?? "").trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (value.length > 0) out[m[1] as string] = value;
    }
    return out;
  } catch {
    return {};
  }
}

export async function loadLocalEnv() {
  if (typeof process === "undefined" || typeof process.cwd !== "function") return;
  const { join } = await import("node:path");
  const cwd = process.cwd();
  // Later files win, but real environment variables always beat file values.
  const files = [".env", ".env.local"];
  const merged: Record<string, string> = {};
  for (const file of files) {
    Object.assign(merged, await parseEnvFile(join(cwd, file)));
  }
  for (const [key, value] of Object.entries(merged)) {
    if (!process.env[key]) process.env[key] = value;
  }
  if (!process.env["CLOUDFLARE_ACCOUNT_ID"]) process.env["CLOUDFLARE_ACCOUNT_ID"] = WORKERS_AI_ACCOUNT_ID;
  if (!process.env["CLOUDFLARE_API_TOKEN"]) {
    const local = await readWranglerToken(join);
    if (local) process.env["CLOUDFLARE_API_TOKEN"] = local;
  }
}

// The account this app deploys to; the token is only ever used for local dev,
// where the wrangler OAuth credential from `wrangler login` replaces a copied API token.
const WORKERS_AI_ACCOUNT_ID = "6731a2cf3ac3e76d3f399f505a7e5c11";

let wranglerConfigPath: string | undefined;

function wranglerConfigCandidates(join: (...p: string[]) => string): string[] {
  const home = process.env["HOME"] || process.env["USERPROFILE"] || "";
  return [
    process.env["XDG_CONFIG_HOME"] && join(process.env["XDG_CONFIG_HOME"], ".wrangler/config/default.toml"),
    join(home, "AppData/Roaming/xdg.config/.wrangler/config/default.toml"),
    join(home, ".wrangler/config/default.toml"),
    join(process.env["APPDATA"] || "", ".wrangler/config/default.toml"),
  ].filter(Boolean) as string[];
}

function tokenExpiryIsFresh(raw: string): boolean {
  const m = raw.match(/expiration_time\s*=\s*"([^"]+)"/);
  if (!m?.[1]) return true;
  const expiry = Date.parse(m[1]);
  return Number.isFinite(expiry) && expiry - Date.now() > 5 * 60 * 1000;
}

/**
 * Wrangler's OAuth access token lives an hour. Any wrangler command refreshes it and
 * rewrites the config file, so that is how local dev gets a usable Workers AI token.
 */
export async function refreshWorkersAiToken(): Promise<string | null> {
  if (typeof process === "undefined" || typeof process.cwd !== "function") return null;
  const { join } = await import("node:path");
  const fs = await import("node:fs");
  const { exec } = await import("node:child_process");

  if (!wranglerConfigPath) {
    wranglerConfigPath = wranglerConfigCandidates(join).find((p) => fs.existsSync(p));
  }
  if (!wranglerConfigPath) return null;

  try {
    await new Promise<void>((resolve) => {
      exec("npx wrangler whoami", { cwd: process.cwd(), timeout: 45000 }, () => resolve());
    });
  } catch {
    return null;
  }

  const fresh = readWranglerTokenFrom(fs.readFileSync(wranglerConfigPath, "utf-8"));
  if (fresh) process.env["CLOUDFLARE_API_TOKEN"] = fresh;
  return fresh ?? null;
}

async function readWranglerToken(join: (...p: string[]) => string): Promise<string | undefined> {
  try {
    const fs = await import("node:fs");
    for (const path of wranglerConfigCandidates(join)) {
      if (!fs.existsSync(path)) continue;
      const raw = fs.readFileSync(path, "utf-8");
      const token = readWranglerTokenFrom(raw);
      if (!token) continue;
      wranglerConfigPath = path;
      if (tokenExpiryIsFresh(raw)) return token;
      // Expiring within five minutes — force wrangler to mint a new one now,
      // rather than letting the first chat message of the hour fail.
      return (await refreshWorkersAiToken()) ?? token;
    }
  } catch {
    /* no local wrangler credential — REST calls stay disabled */
  }
  return undefined;
}

function readWranglerTokenFrom(raw: string): string | undefined {
  return raw.match(/oauth_token\s*=\s*"([^"]+)"/)?.[1];
}
