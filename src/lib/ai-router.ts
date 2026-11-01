/**
 * ExamGlow Live AI Inference Engine
 * ─────────────────────────────────────────────────────────────────────────────
 * Real-time AI study tutor with ZERO hardcoded canned templates.
 * Replies come only from live models: Gemini (GEMINI_API_KEY env/secret),
 * Cloudflare Workers AI (edge LLaMA) and the Hugging Face fallback.
 */

export type ChatAttachment = {
  mimeType: string;
  data: string; // base64
};

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
  attachment?: ChatAttachment;
};

export const YUMNA_SYSTEM_PROMPT = `You are Yumna, the official AI study tutor for ExamGlow (https://examglow.com).
Your primary mission is to help students of all levels master their school and examination subjects, especially IGCSE, O-Levels, A-Levels, GCSEs, sciences, mathematics, humanities, and languages.

Core Persona & Rules:
1. Instruction Following: Follow the student's prompt and instructions EXACTLY. Never ignore rules, formatting requests, or specific tasks set by the student.
2. Persona & Voice:
   - TOP PRIORITY: Be extraordinarily helpful, razor-sharp, and pedagogically brilliant. Break down complex topics with total clarity.
   - Vibe & Tone: Cheery, charming, playful, and subtly attractive / a little bit sexy and magnetic 😉. You have an endearing, confident, flirtatious warmth that makes studying fun, engaging, and addictive—while maintaining impeccable academic authority and respect.
   - Emojis: Include tasteful, expressive emojis naturally in every message (1 to 3 emojis per response, never too many or spammy) like ✨, 😉, 💡, 📚, 💫.
3. Identity: When asked your name, who you are, or who made you, say you are Yumna, the ExamGlow AI study tutor. Never mention Google or Gemini. You are Yumna, developed natively for ExamGlow.
4. CRITICAL: Do NOT begin messages with "Hello! I am Yumna..." or repetitive introductions. Never re-introduce yourself unless the user explicitly asks who you are. Jump directly into addressing the student's question with thoughtful, charismatic guidance.
5. Formatting: Use rich Markdown formatting:
   - Clear headings (###) for distinct concepts
   - Bold (**term**) for key syllabus definitions and principles
   - Step-by-step numbered lists for procedures and workings
   - Markdown tables for comparisons (e.g. Mitosis vs Meiosis, RAM vs ROM)
   - Standard LaTeX math ($...$ for inline, $$...$$ for display formulas)
6. Vision & Multimodal: When the student attaches an image, diagram, past paper question, or document, thoroughly inspect all text, equations, and diagrams in the image and provide clear, precise answers.
7. Video Learning & Ground Truth Accuracy (STRICT & ACCURATE):
   - When a student shares ANY video link or asks about a video previously shared in the chat, use the Ground Truth video overview, description, and chapters provided.
   - Initial Breakdown Structure:
     - 🎬 **Video Title & Creator**: State the exact title and creator with 1-2 clear sentences summarizing what the video covers.
     - 📌 **Key Points & Real Chapters**: List the actual key topics or official chapters from the video. If official timestamps are in the video description, list them accurately. If no timestamps exist in the description, DO NOT invent fake time brackets—simply list the key topic highlights.
     - 💡 **Simple Kid-Friendly Explanation**: Break down the central concept with a clear, everyday real-world analogy.
     - 💬 **Invite Questions**: Remind the student they can ask any questions about the concepts taught in the video!
   - Anti-Hallucination & Follow-Up Accuracy (CRITICAL):
     - When a student asks a specific question (e.g., "did they mention X?", "what did they say about Y?"):
     - Check the Ground Truth video data carefully.
     - If the concept, person, or term (e.g., "Navia") is NOT in the video content, say clearly: *"No, [Topic] is not mentioned in this video. The video focuses on [actual topics from the video]."*
     - NEVER invent fake segments, never make up non-existent timestamps, and never agree with false premises! Be completely honest and accurate.
8. If an assignment or problem is submitted, present the clear answer first, followed by the detailed explanation and reasoning below.
9. If the user asks for a question or quiz ("give me a question about it"), immediately provide a challenging, insightful examination-style question with hints!
10. If asked for an image, drawing, diagram, or picture ("generate an image", "show me a picture of X", etc.), ALWAYS generate and embed a high-resolution educational visual using Markdown image format:
   ![Educational Diagram](https://image.pollinations.ai/prompt/{detailed_prompt_without_spaces_encoded}?width=800&height=500&nologo=true)
   followed by a thorough step-by-step scientific or academic explanation of the visual!

ExamGlow Website Navigation (share these links when asked about navigation):
- Home / Dashboard: https://examglow.com/home
- AI Chat with Yumna (full screen): https://examglow.com/chat
- Notes (write & save notes): https://examglow.com/notes
- Syllabus (IGCSE syllabus chapters): https://examglow.com/syllabus
- Practice (Quiz + Exam Simulation): https://examglow.com/test
- Test / Exam Simulation: https://examglow.com/test
- Flashcards (AI flashcard generator): https://examglow.com/flashcards
- Assignments (assignment solver): https://examglow.com/assignments
- Record Lecture (AI lecture breakdown): https://examglow.com/record-lecture
- Study Plan: https://examglow.com/study-plan
- Calendar: https://examglow.com/calendar
- Settings: https://examglow.com/settings
- About Us: https://examglow.com/about-us
- Customer Service: https://examglow.com/customer-service

When a user asks how to navigate anywhere on ExamGlow, give them the direct link and a one-sentence description of what that page does.`;

export type RouterResult = {
  text: string;
  provider: string;
  model: string;
};

const readEnv = (name: string): string | undefined => {
  if (typeof process === "undefined") return undefined;
  const fromProcess = process.env?.[name];
  if (fromProcess) return fromProcess;
  const fromCloudflare = (globalThis as { __env__?: Record<string, string> }).__env__?.[name];
  return fromCloudflare || undefined;
};

// The previously embedded demo keys were disabled by Google (401) and removed.
// Provide a key via GEMINI_API_KEY (env var before `npm run dev`, or
// `npx wrangler secret put GEMINI_API_KEY` for the deployed worker).
export const GEMINI_API_KEYS: string[] = Array.from(
  new Set(
    [readEnv("GEMINI_API_KEY"), readEnv("VITE_GEMINI_API_KEY")].filter(
      (k): k is string => typeof k === "string" && k.length > 0,
    ),
  ),
);

export const GEMINI_API_KEY = GEMINI_API_KEYS[0];

/**
 * Normalizes message array so roles alternate strictly user -> model -> user -> model
 * Supports multimodal attachments (images, PDFs) via inlineData parts.
 */
function normalizeGeminiContents(messages: ChatMessage[]) {
  const filtered = messages.filter(
    (m) => (m.role === "user" || m.role === "assistant") && (m.content.trim().length > 0 || m.attachment),
  );
  if (filtered.length === 0) return [];

  const contents: Array<{
    role: "user" | "model";
    parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }>;
  }> = [];

  for (const m of filtered) {
    const role = m.role === "assistant" ? "model" : "user";
    const parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> = [];

    if (m.attachment?.data && m.attachment?.mimeType) {
      parts.push({
        inlineData: {
          mimeType: m.attachment.mimeType,
          data: m.attachment.data,
        },
      });
    }

    if (m.content.trim().length > 0) {
      parts.push({ text: m.content });
    }

    const last = contents[contents.length - 1];
    if (last && last.role === role) {
      last.parts.push(...parts);
    } else {
      contents.push({ role, parts });
    }
  }

  // Ensure first message is from user
  if (contents.length > 0 && contents[0]!.role === "model") {
    contents.shift();
  }

  return contents;
}

export function extractImageSubject(text: string): string {
  const cleaned = text
    .replace(/^(hey|hi|hello|yo|please)?\s*(can you|could you)?\s*(generate|make|draw|show|create|give me|send me)\s+(an?\s+)?(image|picture|diagram|drawing|photo|illustration|visual)\s+(for\s+me\s+)?(of|about|for)?\s*/i, "")
    .replace(/\s+(please|now|here)$/i, "")
    .trim();
  return cleaned || "educational concept diagram";
}

export type VideoInfo = {
  url: string;
  platform: "youtube" | "other";
  videoId?: string;
  title?: string;
  authorName?: string;
};

export function extractVideoInfo(text: string): { url: string; platform: "youtube" | "other"; videoId?: string } | null {
  const ytMatch = text.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
  if (ytMatch && ytMatch[1]) {
    return {
      url: ytMatch[0].startsWith("http") ? ytMatch[0] : `https://${ytMatch[0]}`,
      platform: "youtube",
      videoId: ytMatch[1],
    };
  }

  const urlMatch = text.match(/https?:\/\/[^\s]+(?:vimeo\.com|loom\.com|ted\.com|khanacademy\.org|coursera\.org|video)[^\s]*/i);
  if (urlMatch) {
    return {
      url: urlMatch[0],
      platform: "other",
    };
  }

  return null;
}

export async function fetchVideoMetadata(
  info: { url: string; platform: string; videoId?: string },
  mode: "first-share" | "follow-up" = "first-share",
): Promise<string | null> {
  let title = "";
  let author = "";
  let description = "";

  try {
    if (info.platform === "youtube" && info.videoId) {
      // 1. Fetch fast YouTube oEmbed
      try {
        const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${info.videoId}&format=json`;
        const res = await fetch(oembedUrl, { signal: AbortSignal.timeout(3000) });
        if (res.ok) {
          const data = (await res.json()) as { title?: string; author_name?: string };
          if (data.title) title = data.title;
          if (data.author_name) author = data.author_name;
        }
      } catch {}

      // 2. Fetch YouTube watch page for description & chapters
      let watchPageHtml = "";
      try {
        const watchRes = await fetch(`https://www.youtube.com/watch?v=${info.videoId}`, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
          },
          signal: AbortSignal.timeout(4000),
        });
        if (watchRes.ok) {
          watchPageHtml = await watchRes.text();
          const descMatch =
            watchPageHtml.match(/"shortDescription":"((?:\\.|[^"\\])*)"/) ||
            watchPageHtml.match(/<meta property="og:description" content="([^"]+)"/i) ||
            watchPageHtml.match(/<meta name="description" content="([^"]+)"/i);
          if (descMatch && descMatch[1]) {
            try {
              description = JSON.parse(`"${descMatch[1]}"`);
            } catch {
              description = descMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"').trim();
            }
          }
          if (!title) {
            const titleMatch = watchPageHtml.match(/<meta property="og:title" content="([^"]+)"/i);
            if (titleMatch && titleMatch[1]) title = titleMatch[1].trim();
          }
          if (!author) {
            const authorMatch = watchPageHtml.match(/<link itemprop="name" content="([^"]+)"/i) || watchPageHtml.match(/"author":"([^"]+)"/i);
            if (authorMatch && authorMatch[1]) author = authorMatch[1].trim();
          }
        }
      } catch {}

      if (title) {
        // Extract real pinned chapters / timestamps from description if present
        const realChapters: string[] = [];
        if (description) {
          const lines = description.split("\n");
          for (const line of lines) {
            const tm = line.match(/(?:^|\s)(\d{1,2}:\d{2}(?::\d{2})?)\s*[-–—:]\s*(.+)/);
            if (tm && tm[1] && tm[2]) realChapters.push(`${tm[1]} — ${tm[2].trim()}`);
          }
        }

        // Extract keyword topics from ytInitialPlayerResponse
        let keywordLine = "";
        try {
          const kwMatch = watchPageHtml.match(/"keywords"\s*:\s*(\[[^\]]+\])/);
          if (kwMatch && kwMatch[1]) {
            const kws = JSON.parse(kwMatch[1]) as string[];
            if (Array.isArray(kws) && kws.length > 0) {
              keywordLine = `\n- Key Topics & Keywords: ${kws.slice(0, 15).join(", ")}`;
            }
          }
        } catch { /* keyword extraction optional */ }

        const chaptersText =
          realChapters.length > 0
            ? `\n- Official Pinned Chapters in Video:\n${realChapters.map((c) => `  * ${c}`).join("\n")}`
            : "";

        const modeInstructions =
          mode === "follow-up"
            ? `4. FOLLOW-UP MODE: The student already got a breakdown of this video earlier. Answer ONLY the question in their current message — do NOT re-summarise the video or repeat the lesson structure.
5. If what they ask about is not present in the facts above, state plainly that it is not mentioned in this video, then name in one sentence what the video does cover.]`
            : `4. PROACTIVE LESSON: When a student first shares this video, do NOT just describe it—actively TEACH it. Begin with a structured 5-point lesson covering the core concepts from the description/chapters/keywords. Use clear headings, analogies, and invite the student to go deeper on any concept.
5. Response Format for first video share: 🎬 Video + Creator → 📌 Real Chapters or Key Topics → 💡 5 Core Concepts Explained Simply → 💬 Invite questions.]`;

        return `\n\n[STUDENT SHARED VIDEO GROUND TRUTH (STRICT FACTS):
- Video Title: "${title}"
- Channel / Creator: "${author || "Creator"}"
- Full Video Description & Topics: "${description ? description.slice(0, 1500) : "Official video content"}"${chaptersText}${keywordLine}
- Video URL: ${info.url}
- Video ID: ${info.videoId}
CRITICAL ACCURACY & GROUND TRUTH INSTRUCTIONS:
1. Ground Truth Only: Base ALL summaries, explanations, and answers EXCLUSIVELY on the actual facts, topics, chapters, and keywords listed above. Do NOT invent content.
2. No Fabricated Timestamps: If real chapters are listed above, use ONLY those exact timestamps and titles. If no timestamps exist in the description, do NOT invent fake ones—organize the breakdown by the actual topics mentioned in the description/keywords.
3. No Hallucinations: If a student asks whether a specific person, game, character, or concept is mentioned (e.g., "did they mention X?"), check the Ground Truth carefully. If it is NOT in the description or keywords above, say honestly: "That topic is not mentioned in this video. This video covers [actual topics]."
${modeInstructions}`;
      }
    }
  } catch {
    /* fallback */
  }

  return `\n\n[VIDEO SHARED BY STUDENT — METADATA UNAVAILABLE:\n- Video URL: ${info.url}\nIMPORTANT INSTRUCTIONS: You could NOT fetch the video title, description, or content for this link. Do NOT invent, guess, or fabricate any video content, chapters, timestamps, or topics. Instead: tell the student honestly that you cannot directly view video content, then ask them to paste the video title or a brief description so you can help them learn it thoroughly. Be warm, friendly, and helpful — offer to explain any specific topic from the video they want to share!]`;
}

/**
 * Scans ALL messages in the conversation to maintain persistent video ground truth
 * even during follow-up messages when the user doesn't re-paste the link.
 */
export async function enrichMessagesWithFullVideoContext(messages: ChatMessage[]): Promise<ChatMessage[]> {
  let foundVideoInfo: VideoInfo | null = null;
  let foundAt = -1;
  for (let i = messages.length - 1; i >= 0; i--) {
    const info = extractVideoInfo(messages[i]!.content);
    if (info) {
      foundVideoInfo = info;
      foundAt = i;
      break;
    }
  }

  if (!foundVideoInfo) return messages;

  // A link only in an earlier turn means the student is asking a follow-up about it.
  let lastUserIdx = -1;
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i]!.role === "user") {
      lastUserIdx = i;
      break;
    }
  }
  const mode = foundAt === lastUserIdx && foundAt === messages.length - 1 ? "first-share" : "follow-up";

  const videoContext = await fetchVideoMetadata(foundVideoInfo, mode);
  if (!videoContext) return messages;

  return messages.map((m, idx) => {
    if (idx === messages.length - 1 && m.role === "user") {
      if (m.content.includes("[STUDENT SHARED VIDEO GROUND TRUTH:")) return m;
      return { ...m, content: `${m.content}${videoContext}` };
    }
    return m;
  });
}

/**
 * Primary Real-Time AI Generation using Gemini API with model cascade
 */
export type GeminiResponse = { text: string; model: string };

export async function callGemini(
  messages: ChatMessage[],
  maxTokens = 1024,
  temperature = 0.7,
): Promise<GeminiResponse | null> {
  const lastUserMsg = messages.filter((m) => m.role === "user").pop()?.content || "";

  const contents = normalizeGeminiContents(messages);
  if (contents.length === 0) return null;

  const models = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash",
  ];
  const keys = GEMINI_API_KEYS;
  const isImageRequest = /\b(image|picture|drawing|draw|diagram|photo|illustration|visual)\b/i.test(lastUserMsg);

  for (const key of keys) {
    if (!key) continue;
    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: YUMNA_SYSTEM_PROMPT }],
            },
            contents,
            generationConfig: {
              maxOutputTokens: maxTokens,
              temperature,
            },
          }),
          signal: AbortSignal.timeout(12000),
        });

        if (!res.ok) {
          continue;
        }

        const data = (await res.json()) as {
          candidates?: Array<{
            content?: {
              parts?: Array<{ text?: string }>;
            };
          }>;
        };

        let reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (reply && reply.length > 0) {
          // If the user asked for an image and Gemini didn't include one, automatically embed an educational diagram!
          if (isImageRequest && !reply.includes("http") && !reply.includes("![") && !reply.includes("<img")) {
            const cleanSubject = extractImageSubject(lastUserMsg);
            reply = `![${cleanSubject} Diagram](https://image.pollinations.ai/prompt/${encodeURIComponent(cleanSubject)}%20educational%20concept%20diagram%20high%20resolution?width=800&height=500&nologo=true)\n\n${reply}`;
          }
          return { text: reply, model };
        }
      } catch {
        continue;
      }
    }
  }

  return null;
}

/**
 * Secondary Fallback: Hugging Face Inference API (SHIKARI2/Malvos-32B-Merged)
 */
async function callHuggingFace(messages: ChatMessage[], maxTokens = 1024, temperature = 0.7): Promise<string | null> {
  const token = typeof process !== "undefined" ? process.env?.["HUGGINGFACE_API_KEY"] || process.env?.["HF_TOKEN"] : null;
  if (!token) return null;

  try {
    const res = await fetch(
      "https://router.huggingface.co/hf-inference/models/SHIKARI2/Malvos-32B-Merged/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          model: "SHIKARI2/Malvos-32B-Merged",
          messages: [{ role: "system", content: YUMNA_SYSTEM_PROMPT }, ...messages],
          max_tokens: maxTokens,
          temperature,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!res.ok) return null;
    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    return data.choices?.[0]?.message?.content?.trim() || null;
  } catch {
    return null;
  }
}

/**
 * Cloudflare Workers AI — the provider this app runs on by default.
 * In the deployed worker it uses the `AI` binding (no secrets at all); locally it
 * uses the same account over REST with the credential wrangler already has.
 * Free tier is ~10,000 neurons/day: llama 3.1 8B ≈ 8/rep, 3.3 70B ≈ 33/rep.
 */
const WORKERS_AI_MODELS = [
  { id: "@cf/meta/llama-3.1-8b-instruct", name: "workers-ai-llama-8b" },
  { id: "@cf/meta/llama-3.3-70b-instruct-fp8-fast", name: "workers-ai-llama-70b" },
];

function getAiBinding(): { run: (model: string, body: unknown) => Promise<unknown> } | null {
  const g = globalThis as { AI?: unknown; __env__?: { AI?: unknown } };
  const candidate = g.AI || g.__env__?.AI;
  if (candidate && typeof (candidate as { run?: unknown }).run === "function") {
    return candidate as { run: (model: string, body: unknown) => Promise<unknown> };
  }
  return null;
}

function workersAiReply(raw: unknown): string | null {
  const r = raw as {
    response?: string;
    message?: string;
    choices?: Array<{ message?: { content?: string } }>;
  };
  const text = r?.response || r?.choices?.[0]?.message?.content || r?.message;
  return text && String(text).trim().length > 0 ? String(text).trim() : null;
}

type WorkersAiRun = (model: string, body: unknown) => Promise<string | null>;

async function runViaBinding(binding: NonNullable<ReturnType<typeof getAiBinding>>): Promise<WorkersAiRun> {
  return async (model, body) => {
    try {
      return workersAiReply(await binding.run(model, body));
    } catch {
      return null;
    }
  };
}

async function runViaRest(): Promise<WorkersAiRun | null> {
  if (!(readEnv("CLOUDFLARE_API_TOKEN") || readEnv("CLOUDFLARE_AI_TOKEN"))) return null;
  const account = readEnv("CLOUDFLARE_ACCOUNT_ID") || "6731a2cf3ac3e76d3f399f505a7e5c11";

  const post = async (model: string, body: unknown, token: string) => {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${account}/ai/run/${model}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(20000),
      },
    );
    return { ok: res.ok, status: res.status, data: res.ok ? ((await res.json()) as { result?: unknown }) : null };
  };

  return async (model, body) => {
    try {
      let attempt = await post(model, body, readEnv("CLOUDFLARE_API_TOKEN") || readEnv("CLOUDFLARE_AI_TOKEN") || "");
      if (attempt.status === 401) {
        // Local dev reuses wrangler's hour-long OAuth token; ask it to mint a fresh one.
        const refresh = (globalThis as { __refreshWorkersAiToken?: () => Promise<string | null> })
          .__refreshWorkersAiToken;
        const fresh = refresh ? await refresh() : null;
        if (fresh) attempt = await post(model, body, fresh);
      }
      if (!attempt.ok) return null;
      return workersAiReply(attempt.data?.result);
    } catch {
      return null;
    }
  };
}

export async function callWorkersAi(
  messages: ChatMessage[],
  maxTokens = 1024,
  temperature = 0.7,
): Promise<{ text: string; model: string } | null> {
  const chatMessages = messages
    .filter((m) => (m.role === "user" || m.role === "assistant") && m.content.trim().length > 0)
    .map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }));

  if (chatMessages.length === 0) return null;

  const binding = getAiBinding();
  const run = binding ? await runViaBinding(binding) : await runViaRest();
  if (!run) return null;

  for (const { id, name } of WORKERS_AI_MODELS) {
    const reply = await run(id, {
      messages: [{ role: "system", content: YUMNA_SYSTEM_PROMPT }, ...chatMessages],
      max_tokens: maxTokens,
      temperature,
    });
    if (reply) return { text: reply, model: name };
  }

  return null;
}

/**
 * Route a chat completion request to the live AI inference engine.
 * Cascade: Cloudflare Workers AI (edge LLaMA) -> Gemini (only if a key is set) -> Hugging Face.
 * Throws when every live provider fails — no canned replies.
 */
export async function routeChat(
  rawMessages: ChatMessage[],
  opts: { maxTokens?: number; temperature?: number } = {},
): Promise<RouterResult> {
  const { maxTokens = 1024, temperature = 0.7 } = opts;

  // Enrich ALL messages with persistent ground truth if any video was linked in the conversation
  const messages = await enrichMessagesWithFullVideoContext(rawMessages);

  // 1. Primary Live Model: Cloudflare Workers AI (free tier, bound in the worker / REST in dev)
  const workersAiReply = await callWorkersAi(messages, maxTokens, temperature);
  if (workersAiReply) {
    return { text: workersAiReply.text, provider: "Yumna-AI", model: workersAiReply.model };
  }

  // 2. Secondary Live Model: Gemini 2.5 / 2.0, when GEMINI_API_KEY is configured
  const geminiReply = await callGemini(messages, maxTokens, temperature);
  if (geminiReply) {
    return { text: geminiReply.text, provider: "Yumna-AI", model: geminiReply.model };
  }

  // 3. Tertiary Live Model: Hugging Face
  const hfReply = await callHuggingFace(messages, maxTokens, temperature);
  if (hfReply) {
    return {
      text: hfReply,
      provider: "Yumna-AI",
      model: "yumna-core",
    };
  }

  throw new Error("All AI providers are unavailable");
}

/**
 * Route a streaming chat completion request.
 */
export async function routeChatStream(
  rawMessages: ChatMessage[],
  opts: { maxTokens?: number; temperature?: number } = {},
): Promise<Response> {
  const result = await routeChat(rawMessages, opts);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const chunk = {
        id: `chatcmpl-${Date.now()}`,
        object: "chat.completion.chunk",
        created: Math.floor(Date.now() / 1000),
        model: result.model,
        choices: [{ index: 0, delta: { content: result.text }, finish_reason: "stop" }],
      };
      controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\ndata: [DONE]\n\n`));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
      "access-control-allow-origin": "*",
    },
  });
}
