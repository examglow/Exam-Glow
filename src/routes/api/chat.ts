import { createFileRoute } from "@tanstack/react-router";
import { routeChat, callTogetherAiStream, type ChatMessage } from "@/lib/ai-router";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: ChatMessage[]; stream?: boolean };
        const userMessages = Array.isArray(body.messages) ? body.messages.slice(-25) : [];

        if (userMessages.length === 0) {
          return new Response(JSON.stringify({ error: "Messages are required" }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        // Check if client requested streaming
        const wantsStream = body.stream === true || request.headers.get("accept")?.includes("text/event-stream");
        if (wantsStream) {
          try {
            const stream = await callTogetherAiStream(userMessages, 2048, 0.7);
            if (stream) {
              return new Response(stream, {
                headers: {
                  "content-type": "text/event-stream; charset=utf-8",
                  "cache-control": "no-cache, no-transform",
                  connection: "keep-alive",
                },
              });
            }
          } catch (err) {
            console.warn("Streaming failed, falling back to batch:", err);
          }
        }

        try {
          const result = await routeChat(userMessages, { maxTokens: 2048, temperature: 0.7 });
          return new Response(
            JSON.stringify({
              text: result.text,
              reasoning: result.reasoning,
              _provider: result.provider,
              _model: result.model,
            }),
            { headers: { "content-type": "application/json" } },
          );
        } catch (err) {
          const msg = err instanceof Error ? err.message : "AI unavailable";
          console.error("Chat API error:", msg);
          return new Response(
            JSON.stringify({ error: "AI tutor is processing. Please try again." }),
            { status: 503, headers: { "content-type": "application/json" } },
          );
        }
      },
    },
  },
});
