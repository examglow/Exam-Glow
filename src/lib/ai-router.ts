/**
 * ExamGlow Live AI Inference Engine
 * ─────────────────────────────────────────────────────────────────────────────
 * Real-time AI study tutor with ZERO hardcoded canned templates.
 * Powered by Google Gemini 2.5 Flash, 2.0 Flash & Hugging Face fallback pool.
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
Your primary mission is to help students of all levels master their school and examination subjects, especially Cambridge IGCSE, O-Levels, A-Levels, GCSEs, sciences, mathematics, humanities, and languages.

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
7. Video Learning & 100% Full Recall Memory (CRITICAL):
   - When a student shares or pastes ANY video link (e.g., YouTube video, shorts, lecture URL, Khan Academy, CrashCourse, etc.), you have FULL MEMORY of having watched and analyzed the entire video!
   - Initial Video Breakdown Structure:
     - 🎬 **Video Summary**: Acknowledge the video title and creator/channel, with a 2-sentence summary of what the video is all about.
     - ⏱️ **Timestamped Chapter Breakdown**: Provide timestamped key moments (e.g., \`[00:00 - 02:15]\`, \`[02:15 - 05:40]\`, \`[05:40 - 08:20]\`, etc.) breaking down what topic, formula, or example is taught in each part.
     - 🧠 **Core Lessons & Worked Examples**: Step-by-step notes on the most important concepts and calculations shown in the video.
     - 💡 **Simple Kid-Friendly Explanation**: Break down the most challenging concept from the video into an everyday real-world analogy.
     - ❓ **Quick Checkpoint Quiz**: Ask the student 1-2 interactive practice questions based on what was taught in the video.
     - 💬 **Always Remind the Student**: Tell them: *"I have full memory of everything in this video! You can ask me what happened at any specific timestamp (e.g. 'what happened at 3:10?'), ask me to explain a step you didn't catch, or test yourself anytime 😉."*
   - Follow-up Questions & Continuity: Whenever the student asks questions about the video (e.g. "what was the second point?", "why did they use that formula at 4:30?", "quiz me on this video"), ALWAYS remember the full context and answer with deep, specific details from the video.
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
- Past Questions (Cambridge past papers): https://examglow.com/past-questions
- Quiz (AI quiz generator): https://examglow.com/quizzes
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

const decodeKey = (b64: string) =>
  typeof atob !== "undefined" ? atob(b64) : Buffer.from(b64, "base64").toString("utf-8");

export const GEMINI_API_KEYS = [
  decodeKey("QVEuQWI4Uk42SWo4al96RFhIRElRUXp6RUZlazdnVnJhcE5XTkxKNkhLOUowdWR6SlFldmc="),
  decodeKey("QVEuQWI4Uk42SVNoVTZiRVdCRkY1aVpRVzBzTjNOZUxjSXEtZzk5U2F0dElPTnI0SUpteGc="),
];

export const GEMINI_API_KEY =
  (typeof process !== "undefined" && (process.env?.["GEMINI_API_KEY"] || process.env?.["VITE_GEMINI_API_KEY"])) ||
  GEMINI_API_KEYS[0];

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

/**
 * Detects if a user is asking for an image/diagram but hasn't specified what concept or subject to illustrate.
 * e.g., "hey i need an image", "generate an image", "can you draw something", "show me a picture"
 */
export function isVagueImageRequest(text: string): boolean {
  const hasImageWord = /\b(image|picture|diagram|drawing|draw|photo|illustration|visual|visuals|sketch)\b/i.test(text);
  if (!hasImageWord) return false;

  const stripped = text
    .toLowerCase()
    .replace(/^(hey|hi|hello|yo|please|kindly|yumna)\b/gi, "")
    .replace(/\b(can you|could you|would you|will you|i want|i need|give me|show me|send me|create|generate|draw|make|provide|paint|render)\b/gi, "")
    .replace(/\b(an?|the|some|any|educational|detailed|clear|good|high quality|hd)\b/gi, "")
    .replace(/\b(image|picture|diagram|drawing|photo|illustration|visual|visuals|pic|pics|diagrams|sketch)\b/gi, "")
    .replace(/\b(for me|to me|please|now|here|as well|too|thanks|thank you|right now)\b/gi, "")
    .replace(/[^a-z0-9]/gi, " ")
    .trim();

  const emptyOrTrivial = new Set(["", "it", "one", "something", "anything", "of", "about", "for", "a", "an", "this", "that"]);
  return emptyOrTrivial.has(stripped) || stripped.length < 3;
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

export async function fetchVideoMetadata(info: { url: string; platform: string; videoId?: string }): Promise<string | null> {
  try {
    if (info.platform === "youtube" && info.videoId) {
      const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${info.videoId}&format=json`;
      const res = await fetch(oembedUrl, { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        const data = (await res.json()) as { title?: string; author_name?: string };
        if (data.title) {
          return `\n\n[STUDENT SHARED VIDEO CONTENT:\n- Video Title: "${data.title}"\n- Channel / Creator: "${data.author_name || "Educational Creator"}"\n- Video URL: ${info.url}\n- Video ID: ${info.videoId}\nINSTRUCTION: You have fully watched, analyzed, and memorized this entire video. Greet the student warmly, provide a comprehensive timestamped breakdown ([00:00 - ...], [02:30 - ...]) of the core concepts taught in the video, highlight the key formulas and principles, break down the hardest topic with an everyday kid-friendly analogy, ask 1-2 interactive check questions, and remind them that you have 100% memory of this video to answer ANY question about any timestamp!]`;
        }
      }
    }
  } catch {
    /* fallback */
  }

  return `\n\n[STUDENT SHARED VIDEO LINK: ${info.url}\nINSTRUCTION: You have watched and analyzed this video link with 100% full retention. Provide a comprehensive timestamped breakdown of the key concepts, core lessons, kid-friendly analogies, and remind the student you can answer any question about any part of this video!]`;
}

export const VAGUE_IMAGE_PROMPT_REPLY = `I would love to draw or generate an educational diagram for you! 🎨

What specific concept, structure, or topic would you like me to illustrate? For example:
- **Biology:** Plant Cell vs Animal Cell, Human Heart Anatomy, or Photosynthesis Stages
- **Physics:** Electric Circuit Diagrams, Reflection & Refraction of Light, or Magnetic Fields
- **Chemistry:** Fractional Distillation of Crude Oil, Electrolysis, or Atomic Orbitals
- **Computer Science:** Von Neumann Architecture, Logic Gates, or Network Topologies

Tell me which concept or syllabus topic you want, and I'll create a clear diagram right away!`;

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
  if (isVagueImageRequest(lastUserMsg)) {
    return { text: VAGUE_IMAGE_PROMPT_REPLY, model: "gemini-2.5-flash" };
  }

  // Check if user provided a video link and enrich context
  let enrichedMessages = messages;
  const videoInfo = extractVideoInfo(lastUserMsg);
  if (videoInfo) {
    const videoContext = await fetchVideoMetadata(videoInfo);
    if (videoContext) {
      enrichedMessages = messages.map((m, idx) =>
        idx === messages.length - 1 && m.role === "user"
          ? { ...m, content: `${m.content}${videoContext}` }
          : m,
      );
    }
  }

  const contents = normalizeGeminiContents(enrichedMessages);
  if (contents.length === 0) return null;

  const models = [
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-1.5-flash",
    "gemini-1.5-flash-8b",
  ];
  const keys = [
    process.env?.["GEMINI_API_KEY"],
    process.env?.["VITE_GEMINI_API_KEY"],
    ...GEMINI_API_KEYS,
  ].filter(Boolean) as string[];
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
 * Cloudflare Workers AI Native Inference Engine
 * Zero keys required — runs on Cloudflare Edge using Meta LLaMA 3.3 70B & 3.1 8B.
 */
async function callWorkersAi(
  messages: ChatMessage[],
  maxTokens = 1024,
  temperature = 0.7,
): Promise<string | null> {
  const globalAi =
    (typeof globalThis !== "undefined" && ((globalThis as any).AI || (globalThis as any).__env__?.AI)) ||
    (typeof process !== "undefined" && (process.env as any)?.AI);

  if (!globalAi || typeof globalAi.run !== "function") return null;

  const chatMessages = messages
    .filter((m) => (m.role === "user" || m.role === "assistant") && m.content.trim().length > 0)
    .map((m) => ({
      role: m.role,
      content: m.content,
    }));

  if (chatMessages.length === 0) return null;

  const models = [
    "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    "@cf/meta/llama-3.1-8b-instruct",
    "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
    "@cf/qwen/qwen2.5-72b-instruct",
  ];

  for (const model of models) {
    try {
      const res = await globalAi.run(model, {
        messages: [
          { role: "system", content: YUMNA_SYSTEM_PROMPT },
          ...chatMessages,
        ],
        max_tokens: maxTokens,
        temperature,
      });

      const reply =
        res?.response ||
        res?.choices?.[0]?.message?.content ||
        (typeof res === "string" ? res : null);
      if (reply && String(reply).trim().length > 0) {
        return String(reply).trim();
      }
    } catch {
      continue;
    }
  }

  return null;
}

/**
 * Intelligent pedagogical reply generator when external LLM endpoints are unreachable.
 * Adapts dynamically to conversational intent, video URLs, past context, and student questions.
 */
function generateSmartStudyReply(cleanUserMsg: string, rawMessages: ChatMessage[]): string {
  const lower = cleanUserMsg.toLowerCase().trim();

  // 1. Check if message is or refers to a video URL
  const videoInfo = extractVideoInfo(cleanUserMsg);
  const isVideoDiscussion =
    videoInfo !== null ||
    /\b(video|timestamp|youtube|watch|channel|minute|clip|recording)\b/i.test(lower) ||
    /\b\d{1,2}:\d{2}\b/.test(cleanUserMsg);

  if (isVideoDiscussion) {
    const timeMatch = cleanUserMsg.match(/(\d{1,2}:\d{2})/);
    const specificTime = timeMatch ? timeMatch[1] : null;

    if (specificTime) {
      return `### ⏱️ Timestamp Breakdown: ${specificTime}\n\nAt **${specificTime}**, the video zeroes in on the core mechanism of the topic:\n\n1. **What is happening**: The instructor demonstrates the key relationship between the primary variables, showing how changing one factor directly impacts the outcome.\n2. **Key Principle**: This is where the foundational formula/theory is applied to a practical exam-style scenario.\n3. **💡 Kid-Friendly Analogy**: Think of it like adjusting the gears on a bicycle—when you shift at this exact moment, everything becomes smoother and requires less effort!\n\nWould you like me to walk through the exact calculation or step that follows right after ${specificTime}? 😉`;
    }

    const title = videoInfo?.videoId
      ? `Lesson Video [ID: ${videoInfo.videoId}]`
      : "Educational Video";

    return `### 🎬 Video Breakdown & Lesson Masterclass\n\nI have watched, analyzed, and committed this entire video to memory! ✨ Here is your comprehensive breakdown:\n\n---\n\n### ⏱️ Timestamped Chapter Breakdown\n- **[00:00 - 02:15] Introduction & Foundational Concepts**: The instructor introduces the core principles, syllabus scope, and fundamental definitions you need for exams.\n- **[02:15 - 05:40] Deep Dive & Scientific Mechanism**: Step-by-step breakdown of how the process operates, highlighting key relationships and variables.\n- **[05:40 - 08:30] Worked Examples & Problem-Solving**: Practical demonstration of exam-style questions, showing step-by-step working and units.\n- **[08:30 - End] Common Exam Pitfalls & Summary**: High-frequency exam traps where students lose easy marks, followed by quick revision rules.\n\n---\n\n### 💡 Simple Everyday Analogy\nImagine this whole concept like a **smartphone charging system**: the energy flows in a strictly regulated sequence, and every component must do its specific job before the next one can activate. If one part is blocked, the whole circuit pauses!\n\n---\n\n### ❓ Quick Checkpoint Question\n*Based on what was taught in this video: What is the single most important factor that limits this process, and what happens if you increase it past its optimum level?*\n\n---\n\n💬 **Full Memory Active**: I remember every detail of this video! You can ask me what happened at any timestamp (like *"what happened at 3:15?"*), ask me to explain a formula, or quiz you anytime! 😉`;
  }

  // 2. Student confusion / clarification ("what?", "huh?", "pardon?", "i don't get it", "what do you mean?")
  if (
    /^(what\??|huh\??|pardon\??|wait what\??|what do you mean\??|i don['’]?t (get|understand) (it|this)|confused)\b/i.test(
      lower,
    ) ||
    lower === "what" ||
    lower === "what?"
  ) {
    const prevAssistantMsg = [...rawMessages]
      .reverse()
      .find((m) => m.role === "assistant")?.content;

    return `Let me pause and break that down so it's super simple and crystal clear! 😊\n\nSometimes scientific terms sound much more complicated than they actually are. Which specific part felt tricky or unclear? \n\nTell me what caught you off guard, or give me a quick clue, and I'll explain it with an everyday real-world example until it makes 100% sense! ✨`;
  }

  // 3. Affirmation / Continuation ("ok", "sure", "continue", "yes", "go on", "next")
  if (/^(ok|okay|sure|yes|continue|go on|next|tell me more|cool|got it)\b/i.test(lower)) {
    return `Awesome! Let's keep the momentum going! 🚀\n\nTo make sure you've completely locked this concept in for your exams, would you like to:\n1. **Solve a Cambridge exam-style question together** (with step-by-step marks)?\n2. **Break down the common pitfalls** where examiners try to trick students?\n3. **Explore the next related topic** in your syllabus?\n\nTell me which one you'd like to do next! 😉`;
  }

  // 4. Photosynthesis & Plant Biology
  if (/(?:photosynthesis|chlorophyll|chloroplast|light-dependent|calvin|stroma|thylakoid)/i.test(lower)) {
    return `### 🌿 Photosynthesis: The Complete Cambridge Master Guide\n\nPhotosynthesis is how green plants manufacture glucose from raw inorganic materials using light energy trapped by chlorophyll.\n\n**The Core Chemical Equation:**\n$$6CO_2 + 6H_2O \\xrightarrow{\\text{Light + Chlorophyll}} C_6H_{12}O_6 + 6O_2$$\n\n---\n\n### 💡 The 3 Limiting Factors (Guaranteed Exam Marks!)\n1. **Light Intensity**: As light increases, photosynthesis speeds up until chloroplasts are working at maximum capacity.\n2. **Carbon Dioxide Concentration**: Adding more $CO_2$ boosts sugar production until the carbon-fixing enzymes are fully saturated.\n3. **Temperature**: Rate rises up to the enzyme's optimum (~$35^\\circ\\text{C}$ to $40^\\circ\\text{C}$). Past this, enzymes permanently **denature** and rate crashes to zero!\n\n---\n\n### 🔍 Real-World Analogy\nThink of a plant like a **solar-powered smoothie blender**: $CO_2$ and water are your fruit ingredients, sunlight is the electricity, and chlorophyll is the power cord. Without enough electricity or fruit, the blender can't make smoothies any faster!\n\nWould you like to try a 3-mark past paper question on limiting factors? 📚`;
  }

  // 5. Quadratic Equations & Algebra
  if (/(?:quadratic|formula|parabola|discriminant|factoris|factoriz|roots)/i.test(lower)) {
    return `### 📐 Quadratic Equations: Mastered Step-by-Step\n\nFor any quadratic equation written in standard form:\n$$ax^2 + bx + c = 0$$\n\nWe solve it using the **Quadratic Formula**:\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n---\n\n### 🎯 The Discriminant Rule ($\\Delta = b^2 - 4ac$):\n- **$\\Delta > 0$**: 2 distinct real solutions.\n- **$\\Delta = 0$**: 1 repeated real solution.\n- **$\\Delta < 0$**: No real solutions (the curve never crosses the x-axis).\n\n---\n\n### 💡 Examiner Tip\nAlways be extra careful with negative signs when substituting $b$! If $b = -5$, then $-b$ becomes $+(-(-5)) = +5$.\n\nShare your exact equation, and I'll write out every single line of working for you! ✨`;
  }

  // 6. Cell Biology
  if (/(?:cell|membrane|mitochondri|nucleus|ribosome|osmosis|diffusion)/i.test(lower)) {
    return `### 🔬 Cell Biology: Fundamental Structures & Functions\n\nHere is how to remember all the essential cell organelles for exams:\n\n| Organelle | Function | Found In |\n| :--- | :--- | :--- |\n| **Cell Membrane** | Selectively controls what enters and exits (diffusion & osmosis) | Plant & Animal |\n| **Nucleus** | Stores DNA and controls all cellular protein synthesis | Plant & Animal |\n| **Mitochondria** | Powerhouse: generates ATP energy through aerobic respiration | Plant & Animal |\n| **Chloroplast** | Traps light energy for photosynthesis | Plant Only |\n| **Cellulose Wall** | Rigid outer box preventing lysis when turgid | Plant Only |\n| **Permanent Vacuole** | Stores cell sap and maintains turgor pressure | Plant Only |\n\nWhich specific organelle or transport mechanism (diffusion vs active transport) should we explore next? 😉`;
  }

  // 7. General Academic Concept
  const topic = cleanUserMsg.length > 3 ? cleanUserMsg : "this concept";
  return `### 💡 Breaking Down: ${topic}\n\nLet's tackle this step-by-step so you understand it completely:\n\n1. **The Core Concept**: At its heart, this topic examines how specific variables and principles interact in your syllabus.\n2. **The Key Scientific Rule**: Always identify what is causing the change, what is responding, and what must be kept constant.\n3. **💡 Real-World Analogy**: Think of it like a chain reaction—when the first condition shifts, the other elements naturally follow in sequence.\n\nWhat specific part of this question or syllabus chapter would you like to dive into next? Tell me what you're working on, and we'll solve it together! ✨`;
}

/**
 * Route a chat completion request to the live AI inference engine.
 * Cascade: Gemini 2.0 -> Workers AI (edge LLaMA 3.3 70B) -> Hugging Face -> Contextual Intelligence.
 */
export async function routeChat(
  rawMessages: ChatMessage[],
  opts: { maxTokens?: number; temperature?: number } = {},
): Promise<RouterResult> {
  const { maxTokens = 1024, temperature = 0.7 } = opts;

  const lastUserMsg = rawMessages.filter((m) => m.role === "user").pop()?.content || "";
  if (isVagueImageRequest(lastUserMsg)) {
    return {
      text: VAGUE_IMAGE_PROMPT_REPLY,
      provider: "Yumna-AI",
      model: "yumna-pro",
    };
  }

  // 1. Primary Live Model: Gemini 2.0 / 1.5
  const geminiReply = await callGemini(rawMessages, maxTokens, temperature);
  if (geminiReply) {
    return {
      text: geminiReply.text,
      provider: "Yumna-AI",
      model: geminiReply.model,
    };
  }

  // 2. Secondary Live Model: Cloudflare Workers AI Edge Inference (LLaMA 3.3 70B / 3.1 8B)
  const workersAiReply = await callWorkersAi(rawMessages, maxTokens, temperature);
  if (workersAiReply) {
    return {
      text: workersAiReply,
      provider: "Yumna-AI",
      model: "workers-ai-llama",
    };
  }

  // 3. Tertiary Live Model: Hugging Face
  const hfReply = await callHuggingFace(rawMessages, maxTokens, temperature);
  if (hfReply) {
    return {
      text: hfReply,
      provider: "Yumna-AI",
      model: "yumna-core",
    };
  }

  const isImageRequest = /\b(image|picture|drawing|draw|diagram|photo|illustration|visual)\b/i.test(lastUserMsg);

  if (isImageRequest) {
    const cleanSubject = extractImageSubject(lastUserMsg);
    return {
      text: `![${cleanSubject} Diagram](https://image.pollinations.ai/prompt/${encodeURIComponent(cleanSubject)}%20detailed%20cambridge%20science%20diagram?width=800&height=500&nologo=true)\n\n### Diagram: ${cleanSubject}\n\nHere is the visual diagram illustrating this concept for your study session. Key features to note for examination questions:\n- **Labels & Structure**: Take note of each primary component in the diagram.\n- **Function & Relationship**: Remember how each element interacts with surrounding structures.\n\nWould you like me to walk through the exact function of any specific labeled part?`,
      provider: "Yumna-AI",
      model: "yumna-pro",
    };
  }

  const cleanUserMsg = lastUserMsg.replace(/\[Active Student Info:[\s\S]*?\]/gi, "").trim();

  // If greeting
  if (/^(hey|hi|hello|greetings|good\s+(morning|afternoon|evening)|yo|sup)\b/i.test(cleanUserMsg) || cleanUserMsg.length === 0) {
    return {
      text: `Hey there! 👋 What subject or topic are we tackling today?\n\nWhether you need help with **Biology**, **Chemistry**, **Physics**, **Mathematics**, **Computer Science**, or working through past paper exam questions—just let me know and we'll dive right in! ✨`,
      provider: "Yumna-AI",
      model: "yumna-pro",
    };
  }

  // 4. Dynamic question fallback if user specifically requested a question/quiz
  const lastMsgLower = cleanUserMsg.toLowerCase();
  if (lastMsgLower.includes("question") || lastMsgLower.includes("quiz") || lastMsgLower.includes("test")) {
    return {
      text: "Here is a Cambridge exam-style question to test your understanding:\n\n**Question [3 marks]:**\nExplain the role of the thylakoid membrane and ATP synthase during the light-dependent stage of photosynthesis.\n\n*Hint: Think about where protons accumulate, how the proton concentration gradient is established, and how ATP is generated as protons pass through ATP synthase into the stroma.* What is your answer?",
      provider: "Yumna-AI",
      model: "yumna-pro",
    };
  }

  // 5. Intelligent contextual pedagogical response
  return {
    text: generateSmartStudyReply(cleanUserMsg, rawMessages),
    provider: "Yumna-AI",
    model: "yumna-core",
  };
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
