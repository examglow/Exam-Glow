import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ListChecks,
  Layers,
  X,
  Mic,
  Volume2,
  VolumeX,
  Plus,
  FileText,
  Image as ImageIcon,
  FileUp,
  Paperclip,
  ArrowUp,
  ArrowUpRight,
  Trash2,
  Loader2,
  Video,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  History,
  Calculator,
  Atom,
  Dna,
  Globe2,
  Code2,
  PanelLeftClose,
  PanelLeftOpen,
  Square,
  Clock,
} from "lucide-react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { MessageResponse } from "@/components/ai-elements/message";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { callGemini, cleanUnnecessaryDollars, type ChatMessage } from "@/lib/ai-router";
import { incrementAiMessageCount } from "@/lib/onboarding";
import { playRealisticVoice, stopRealisticVoice } from "@/lib/gemini-tts";

type UploadedAttachment = {
  name: string;
  type: "pdf" | "image" | "doc";
  mimeType?: string | undefined;
  data?: string | undefined; // base64
  content?: string | undefined;
};

type ChatSession = {
  id: string;
  title: string;
  updatedAt: number;
  messages: ChatMessage[];
};

const CHAT_STORAGE_KEY = "examglow.chat_sessions";
const ACTIVE_SESSION_KEY = "examglow.active_chat_id";

function extractYouTubeId(text: string): string | null {
  if (!text) return null;
  const match = text.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i
  );
  return match ? match[1]! : null;
}

function YouTubeVideoCard({ videoId }: { videoId: string }) {
  return (
    <div className="my-4 overflow-hidden rounded-2xl border border-border bg-card shadow-sm max-w-2xl">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5 text-xs font-medium">
        <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-foreground font-semibold">Video Study Session</span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground ml-auto">
          YouTube Player
        </span>
      </div>
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube Video Player"
          className="absolute inset-0 size-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

const subjectsList = [
  { name: "All Topics", icon: Sparkles },
  { name: "Mathematics", icon: Calculator },
  { name: "Physics", icon: Atom },
  { name: "Biology & Chem", icon: Dna },
  { name: "Computer Science", icon: Code2 },
  { name: "Humanities", icon: Globe2 },
];

const topicStarters = [
  {
    subject: "Mathematics",
    title: "Master Calculus Derivatives",
    prompt: "Explain the chain rule and product rule in calculus with 2 intuitive step-by-step examples.",
    badge: "Calculus",
  },
  {
    subject: "Physics",
    title: "Electromagnetic Induction",
    prompt: "Explain Faraday's Law and Lenz's Law with practical everyday diagrams and past paper tips.",
    badge: "Physics",
  },
  {
    subject: "Biology & Chem",
    title: "Cellular Respiration vs Photosynthesis",
    prompt: "Compare Cellular Respiration and Photosynthesis with a detailed comparison table and energy balance.",
    badge: "Biology",
  },
  {
    subject: "Computer Science",
    title: "Algorithms & Time Complexity",
    prompt: "Explain Big O notation (O(1), O(n), O(n log n), O(n^2)) using real-world sorting analogies.",
    badge: "Algorithms",
  },
  {
    subject: "Humanities",
    title: "Macroeconomics Inflation Models",
    prompt: "Explain Demand-Pull vs Cost-Push inflation and how central banks use interest rates to intervene.",
    badge: "Economics",
  },
  {
    subject: "All Topics",
    title: "Watch & Explain YouTube Lesson",
    prompt: "https://www.youtube.com/watch?v=",
    badge: "Video Tutor",
  },
];

function cleanSpeechText(text: string): string {
  return text
    .replace(
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F1E6}-\u{1F1FF}]/gu,
      ""
    )
    .replace(/[*_#`$]/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .slice(0, 800);
}

export function StudyChat({
  className = "",
  onClose,
  isMini = false,
}: {
  className?: string;
  onClose?: () => void;
  isMini?: boolean;
}) {
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(CHAT_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [currentSessionId, setCurrentSessionId] = useState<string>(() => {
    if (typeof window === "undefined") return "initial";
    return localStorage.getItem(ACTIVE_SESSION_KEY) || `chat-${Date.now()}`;
  });

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState(() => {
    if (typeof window === "undefined") return "";
    const pending = localStorage.getItem("examglow.pending_ai_query");
    if (pending) {
      localStorage.removeItem("examglow.pending_ai_query");
      return pending;
    }
    return "";
  });
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">("ready");
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("All Topics");
  const [playingMsgIdx, setPlayingMsgIdx] = useState<number | null>(null);
  const [voiceLoadingIdx, setVoiceLoadingIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  // Abort controller for in-flight requests
  const abortControllerRef = useRef<AbortController | null>(null);

  // Dictation Speech-to-Text
  const [isDictating, setIsDictating] = useState(false);
  const dictationRecoRef = useRef<any>(null);

  const [uploadOpen, setUploadOpen] = useState(false);
  const [attachment, setAttachment] = useState<UploadedAttachment | null>(null);

  // Mobile virtual keyboard viewport offset
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [viewportBottomOffset, setViewportBottomOffset] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;
    const updateViewport = () => {
      const vv = window.visualViewport;
      if (!vv) return;
      const offset = Math.max(0, window.innerHeight - (vv.offsetTop + vv.height));
      setViewportBottomOffset(offset);
    };

    window.visualViewport.addEventListener("resize", updateViewport);
    window.visualViewport.addEventListener("scroll", updateViewport);
    return () => {
      window.visualViewport?.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("scroll", updateViewport);
    };
  }, []);

  // Load session messages on mount or session switch
  useEffect(() => {
    const existing = sessions.find((s) => s.id === currentSessionId);
    if (existing) {
      setMessages(existing.messages);
    } else {
      setMessages([]);
    }
  }, [currentSessionId]);

  // Save active session to localStorage
  useEffect(() => {
    if (messages.length === 0) return;

    setSessions((prev) => {
      const existingIdx = prev.findIndex((s) => s.id === currentSessionId);
      const title =
        existingIdx >= 0 && prev[existingIdx]!.title !== "New Chat"
          ? prev[existingIdx]!.title
          : messages[0]?.content?.slice(0, 36) || "Study Session";

      const updatedSession: ChatSession = {
        id: currentSessionId,
        title,
        updatedAt: Date.now(),
        messages,
      };

      let next: ChatSession[];
      if (existingIdx >= 0) {
        next = [...prev];
        next[existingIdx] = updatedSession;
      } else {
        next = [updatedSession, ...prev];
      }

      try {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(next));
        localStorage.setItem(ACTIVE_SESSION_KEY, currentSessionId);
      } catch {}

      return next;
    });
  }, [messages, currentSessionId]);

  function stopGenerating() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setStatus("ready");
  }

  function toggleDictation() {
    if (isDictating) {
      dictationRecoRef.current?.stop();
      setIsDictating(false);
      return;
    }

    if (typeof window === "undefined") return;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const dictation = new SpeechRecognition();
    dictation.continuous = true;
    dictation.interimResults = true;
    dictation.lang = "en-US";

    dictation.onresult = (event: any) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        text += event.results[i][0].transcript;
      }
      setInput((prev) => (prev ? `${prev} ${text}` : text));
    };

    dictation.onerror = () => setIsDictating(false);
    dictation.onend = () => setIsDictating(false);

    dictationRecoRef.current = dictation;
    dictation.start();
    setIsDictating(true);
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || status !== "ready") return;

    const userMsg: ChatMessage = {
      role: "user",
      content: trimmed,
      ...(attachment?.data && attachment?.mimeType
        ? { attachment: { mimeType: attachment.mimeType, data: attachment.data } }
        : {}),
    };

    const next: ChatMessage[] = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setAttachment(null);
    setError(null);
    setIsInputFocused(false);
    inputRef.current?.blur();
    setStatus("submitted");
    incrementAiMessageCount();

    let studentContext = "";
    const isGreeting = /^(hey|hi|hello|yo|sup|greetings|good\s+(morning|afternoon|evening))\b/i.test(trimmed);
    if (!isGreeting && trimmed.length > 5) {
      try {
        const recentNotes = localStorage.getItem("examglow.student_notes");
        const profileRaw = localStorage.getItem("examglow.profile");
        if (recentNotes || profileRaw) {
          studentContext = `\n\n(Student Info: ${
            profileRaw ? `Curriculum: ${JSON.parse(profileRaw).curriculum || "IGCSE"}. ` : ""
          }${recentNotes ? `Recent notes written: ${recentNotes.slice(0, 180)}...` : ""})`;
        }
      } catch {}
    }

    const fullMessages = [
      ...messages,
      {
        ...userMsg,
        content: studentContext ? `${userMsg.content}${studentContext}` : userMsg.content,
      },
    ];

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: fullMessages, stream: true }),
        signal: abortController.signal,
      });

      const contentType = res.headers.get("content-type") || "";

      if (contentType.includes("text/event-stream") && res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let accumulatedText = "";
        let hasStartedContent = false;

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine || !trimmedLine.startsWith("data:")) continue;
            const dataStr = trimmedLine.slice(5).trim();
            if (dataStr === "[DONE]") continue;

            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.type === "thinking") {
                // Keep showing the thinking stopwatch
                continue;
              }
              if (parsed.type === "content" && parsed.delta) {
                accumulatedText += parsed.delta;
                if (!hasStartedContent) {
                  hasStartedContent = true;
                  setStatus("streaming");
                }
                setMessages([...next, { role: "assistant", content: accumulatedText }]);
              } else if (parsed.type === "done") {
                break;
              }
            } catch {}
          }
        }

        if (!accumulatedText) {
          const clientRes = await callGemini(fullMessages);
          if (clientRes?.text) {
            setMessages([...next, { role: "assistant", content: clientRes.text }]);
          } else {
            setError("Yumna is taking a moment to reply. Please try again.");
          }
        }
      } else {
        const data = (await res.json()) as { text?: string; error?: string };
        let replyText = data.text;
        if (!replyText || data.error || replyText.trim().length < 20) {
          const clientRes = await callGemini(fullMessages);
          if (clientRes?.text) replyText = clientRes.text;
        }
        if (!replyText) {
          setError("Yumna is taking a moment to reply. Please try again.");
        } else {
          setMessages([...next, { role: "assistant", content: replyText }]);
        }
      }
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      try {
        const directRes = await callGemini(fullMessages);
        if (directRes?.text) {
          setMessages([...next, { role: "assistant", content: directRes.text }]);
        } else {
          setError("Network connection issue. Please check your internet and try again.");
        }
      } catch {
        setError("Network connection issue. Please check your internet and try again.");
      }
    } finally {
      setStatus("ready");
      abortControllerRef.current = null;
      inputRef.current?.focus();
    }
  }

  function handleNewChat() {
    stopGenerating();
    const newId = `chat-${Date.now()}`;
    setCurrentSessionId(newId);
    setMessages([]);
    setInput("");
    setAttachment(null);
    setError(null);
    setShowHistory(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(ACTIVE_SESSION_KEY, newId);
    }
  }

  function handleSelectSession(s: ChatSession) {
    stopGenerating();
    setCurrentSessionId(s.id);
    setMessages(s.messages);
    setShowHistory(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(ACTIVE_SESSION_KEY, s.id);
    }
  }

  function handleDeleteSession(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    const updated = sessions.filter((s) => s.id !== id);
    setSessions(updated);
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    if (currentSessionId === id) {
      handleNewChat();
    }
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  }

  async function handleFileUpload(file: File, type: "pdf" | "image" | "doc") {
    setUploadOpen(false);
    if (file.size > 10_000_000) {
      setError("File is too large. Please upload files under 10MB.");
      return;
    }

    if (type === "image" || type === "pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const match = result.match(/^data:(.*?);base64,(.*)$/);
        if (match && match[2]) {
          setAttachment({
            name: file.name,
            type,
            mimeType: match[1] || (type === "pdf" ? "application/pdf" : file.type || "image/jpeg"),
            data: match[2],
          });
        }
      };
      reader.readAsDataURL(file);
      return;
    }

    if (type === "doc") {
      try {
        const text = await file.text();
        setAttachment({
          name: file.name,
          type,
          content: text.slice(0, 5000),
        });
      } catch {}
    }
  }

  const currentSession = sessions.find((s) => s.id === currentSessionId);
  const filteredStarters =
    selectedSubject === "All Topics"
      ? topicStarters
      : topicStarters.filter((t) => t.subject === selectedSubject || t.subject === "All Topics");

  return (
    <div className={`relative flex h-full w-full flex-col bg-card text-foreground ${className}`}>
      {/* Hidden file inputs */}
      <input
        ref={pdfInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFileUpload(file, "pdf");
        }}
      />
      <input
        ref={imgInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFileUpload(file, "image");
        }}
      />
      <input
        ref={docInputRef}
        type="file"
        accept=".txt,.md,.doc,.docx"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFileUpload(file, "doc");
        }}
      />

      {/* ── TOP NAV BAR (Expansive & Sleek) ── */}
      <header className="shrink-0 border-b border-border bg-card/95 px-6 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          {/* Left: Chat info + History Toggle */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setShowHistory((v) => !v)}
              className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 transition cursor-pointer"
              title="Toggle Chat History"
            >
              {showHistory ? <PanelLeftClose className="size-4" /> : <PanelLeftOpen className="size-4" />}
            </button>

            <div className="min-w-0 flex items-center gap-2.5">
              <span className="font-semibold text-base text-foreground truncate">
                {currentSession?.title && currentSession.title !== "New Chat"
                  ? currentSession.title
                  : "Study Tutor"}
              </span>
            </div>
          </div>

          {/* Right: New Chat & Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleNewChat}
              className="flex items-center gap-1.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-xs font-semibold transition shadow-sm cursor-pointer"
            >
              <Plus className="size-3.5" />
              <span>New Chat</span>
            </button>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground hover:bg-secondary transition cursor-pointer"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── MAIN CHAT AREA (Wide Layout with Slide History) ── */}
      <div className="relative flex flex-1 min-h-0 w-full overflow-hidden">
        {/* Left Drawer / Sidebar: Chat History */}
        {showHistory && (
          <aside className="absolute inset-y-0 left-0 z-40 flex w-80 max-w-[85%] flex-col border-r border-border bg-card shadow-2xl animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <History className="size-4 text-neutral-500 dark:text-neutral-400" />
                <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Conversations</span>
              </div>
              <button
                type="button"
                onClick={() => setShowHistory(false)}
                className="size-7 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {sessions.length === 0 ? (
                <div className="py-16 text-center text-xs text-neutral-400">
                  No past conversations yet.
                </div>
              ) : (
                sessions.map((s) => {
                  const isActive = s.id === currentSessionId;
                  return (
                    <div
                      key={s.id}
                      onClick={() => handleSelectSession(s)}
                      className={`group flex items-center justify-between gap-2 rounded-xl px-3.5 py-3 text-left transition cursor-pointer ${
                        isActive
                          ? "bg-black dark:bg-neutral-800 text-white"
                          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-neutral-100"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className={`text-sm truncate font-medium ${isActive ? "text-white" : ""}`}>
                          {s.title}
                        </p>
                        <p
                          className={`text-[10px] mt-0.5 ${
                            isActive ? "text-neutral-300 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-500"
                          }`}
                        >
                          {new Date(s.updatedAt).toLocaleDateString([], {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          · {s.messages.length} messages
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleDeleteSession(s.id, e)}
                        className={`size-6 shrink-0 flex items-center justify-center rounded-lg transition opacity-0 group-hover:opacity-100 ${
                          isActive
                            ? "hover:bg-white/20 text-white/80"
                            : "hover:bg-red-50 dark:hover:bg-red-950/40 text-red-500"
                        }`}
                        title="Delete chat"
                      >
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="border-t border-border p-3">
              <button
                type="button"
                onClick={handleNewChat}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black dark:bg-neutral-100 py-2.5 text-xs font-semibold text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition cursor-pointer"
              >
                <Plus className="size-3.5" />
                Start Fresh Session
              </button>
            </div>
          </aside>
        )}

        {/* ── CHAT SCROLL STREAM (Spaciously Spread Max-W-5XL) ── */}
        <Conversation className="flex-1 overflow-y-auto">
          <ConversationContent className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-8 lg:px-12">
            {messages.length === 0 ? (
              /* ── SPREAD OUT EMPTY STATE ── */
              <div className="w-full py-4 space-y-8 animate-in fade-in duration-300">
                {/* Hero section */}
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto pt-6 pb-2">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-black dark:bg-neutral-800 text-white font-bold text-xl shadow-md mb-4 border border-border">
                    Y
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                    What are we mastering today?
                  </h1>
                  <p className="mt-2.5 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Ask Yumna anything from past exam questions, difficult formulas, or paste a video link to study together.
                  </p>
                </div>

                {/* Subject Selector Tabs */}
                <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {subjectsList.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setSelectedSubject(name)}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition cursor-pointer shrink-0 ${
                        selectedSubject === name
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80"
                      }`}
                    >
                      <Icon className="size-3.5" />
                      <span>{name}</span>
                    </button>
                  ))}
                </div>

                {/* Prompt Starters Grid */}
                <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredStarters.map(({ title, prompt, badge }) => (
                    <button
                      key={title}
                      type="button"
                      onClick={() => {
                        if (prompt.includes("youtube.com")) {
                          setInput("https://www.youtube.com/watch?v=");
                          setTimeout(() => inputRef.current?.focus(), 50);
                        } else {
                          void send(prompt);
                        }
                      }}
                      className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-left transition hover:border-foreground/30 hover:shadow-md cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground border border-border/50">
                            {badge}
                          </span>
                          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground transition">
                          {title}
                        </h3>
                        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {prompt}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* ── MESSAGES: USER HAS BUBBLE, AI HAS NO BUBBLE (SPREAD OUT) ── */
              messages.map((m, i) => {
                const isUser = m.role === "user";

                if (isUser) {
                  return (
                    /* User Message: Styled Bubble on the Right */
                    <div key={i} className="flex justify-end w-full">
                      <div className="flex max-w-[80%] sm:max-w-[70%] flex-col items-end gap-2">
                        {extractYouTubeId(m.content) && (
                          <YouTubeVideoCard videoId={extractYouTubeId(m.content)!} />
                        )}
                        <div className="rounded-3xl rounded-tr-sm bg-neutral-900 dark:bg-neutral-800 border border-transparent dark:border-neutral-700 px-5 py-3.5 text-sm sm:text-[15px] leading-relaxed text-white shadow-sm">
                          <p className="whitespace-pre-wrap">{m.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                }

                /* AI Message: NO BUBBLE, NO BORDER, NO BACKGROUND BOX - SPREAD NATURALLY */
                const isLastStreaming = status === "streaming" && i === messages.length - 1;

                return (
                  <div key={i} className="flex items-start gap-4 w-full group py-2">
                    {/* Yumna Avatar Mark */}
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-black dark:bg-neutral-800 text-white font-bold text-xs mt-1 shadow-sm border border-border">
                      Y
                    </div>

                    {/* Clean unboxed body flowing across the reading width */}
                    <div className="min-w-0 flex-1 space-y-3">
                      {/* Name / author bar */}
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Yumna</span>
                        <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-400">AI Study Tutor</span>
                        {isLastStreaming && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full ml-1">
                            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Streaming live…
                          </span>
                        )}
                      </div>

                      {/* Content: Clean Markdown directly on the canvas without bubble */}
                      <div className="ai-markdown-content text-sm sm:text-[15px] leading-relaxed text-foreground">
                        <MessageResponse>{cleanUnnecessaryDollars(m.content)}</MessageResponse>
                      </div>

                      {/* Bottom utility bar: Listen, Copy, Stop */}
                      {!isLastStreaming && (
                        <div className="flex items-center gap-3 pt-2 text-xs text-neutral-500 dark:text-neutral-400">
                          {/* Copy button */}
                          <button
                            type="button"
                            onClick={() => handleCopy(cleanUnnecessaryDollars(m.content), i)}
                            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition cursor-pointer"
                            title="Copy message"
                          >
                            {copiedIdx === i ? (
                              <>
                                <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="size-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>

                          {/* Voice Listen Button */}
                          {playingMsgIdx === i ? (
                            <button
                              type="button"
                              onClick={() => {
                                stopRealisticVoice();
                                setPlayingMsgIdx(null);
                                setVoiceLoadingIdx(null);
                              }}
                              className="flex items-center gap-1.5 rounded-lg bg-black dark:bg-neutral-100 px-3 py-1 font-medium text-white dark:text-neutral-900 transition hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
                            >
                              <VolumeX className="size-3.5" />
                              <span>Stop</span>
                            </button>
                          ) : voiceLoadingIdx === i ? (
                            <button
                              type="button"
                              onClick={() => {
                                stopRealisticVoice();
                                setVoiceLoadingIdx(null);
                              }}
                              className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
                            >
                              <Loader2 className="size-3.5 animate-spin" />
                              <span>Preparing voice…</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                setVoiceLoadingIdx(i);
                                playRealisticVoice(cleanSpeechText(cleanUnnecessaryDollars(m.content)), {
                                  onStart: () => {
                                    setVoiceLoadingIdx(null);
                                    setPlayingMsgIdx(i);
                                  },
                                  onEnd: () => {
                                    setVoiceLoadingIdx(null);
                                    setPlayingMsgIdx(null);
                                  },
                                  onError: () => {
                                    setVoiceLoadingIdx(null);
                                    setPlayingMsgIdx(null);
                                  },
                                });
                              }}
                              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition cursor-pointer"
                              title="Listen with realistic voice"
                            >
                              <Volume2 className="size-3.5" />
                              <span>Listen</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}

            {/* ── CLEAN THINKING TEXT WITH 2-SECOND LIGHT GLAZE ── */}
            {status === "submitted" && (
              <div className="flex items-start gap-4 w-full py-2 animate-in fade-in duration-200">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-black dark:bg-neutral-800 text-white font-bold text-xs mt-1 shadow-sm border border-border">
                  Y
                </div>

                <div className="min-w-0 flex-1 pt-1.5 flex items-center gap-3">
                  <span className="thinking-glaze text-[15px] font-medium tracking-tight select-none text-foreground">
                    Thinking…
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50/80 px-5 py-3 text-sm text-red-600 flex items-center justify-between">
                <span>{error}</span>
                <button
                  type="button"
                  onClick={() => setError(null)}
                  className="text-red-400 hover:text-red-700 font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>

      {/* ── EXPANSIVE BOTTOM DOCK / COMPOSER ── */}
      <div
        style={viewportBottomOffset > 0 ? { transform: `translateY(-${viewportBottomOffset}px)` } : undefined}
        className="z-30 shrink-0 border-t border-border bg-card/95 px-6 pb-6 pt-3.5 backdrop-blur-md transition-all duration-200"
      >
        <div className="mx-auto w-full max-w-5xl">
          {/* Active Attachment preview */}
          {attachment && (
            <div className="mb-2.5 flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary px-3.5 py-2 text-xs text-secondary-foreground">
              <span className="flex min-w-0 items-center gap-2">
                <Paperclip className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                <span className="truncate font-semibold">{attachment.name}</span>
                <span className="shrink-0 rounded-md bg-card border border-border px-1.5 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
                  {attachment.type}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setAttachment(null)}
                className="shrink-0 text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}

          {/* Upload Dropdown Popover */}
          {uploadOpen && (
            <div className="mb-3 w-72 rounded-2xl border border-border bg-card p-2.5 shadow-xl text-foreground">
              <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Upload &amp; Analyze
              </p>
              <div className="mt-1 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => pdfInputRef.current?.click()}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-medium hover:bg-secondary transition cursor-pointer"
                >
                  <FileText className="size-4 shrink-0 text-muted-foreground" />
                  <div>
                    <span className="block font-semibold text-foreground">PDF Past Paper</span>
                    <span className="block text-[10px] text-muted-foreground">Upload exam questions or mark scheme</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => imgInputRef.current?.click()}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-medium hover:bg-secondary transition cursor-pointer"
                >
                  <ImageIcon className="size-4 shrink-0 text-muted-foreground" />
                  <div>
                    <span className="block font-semibold text-foreground">Image / Diagram</span>
                    <span className="block text-[10px] text-muted-foreground">Homework photo or circuit graph</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => docInputRef.current?.click()}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-medium hover:bg-secondary transition cursor-pointer"
                >
                  <FileUp className="size-4 shrink-0 text-muted-foreground" />
                  <div>
                    <span className="block font-semibold text-foreground">Text Notes</span>
                    <span className="block text-[10px] text-muted-foreground">Upload .txt or markdown summary</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Tutor Mode Quick Launcher Chips */}
          <div className="mb-2.5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0">
              Tutor:
            </span>
            {[
              { label: "💡 Explain Simply", prefix: "Explain this step-by-step with simple intuitive analogies: " },
              { label: "📝 Solve Exam Question", prefix: "Solve this past paper problem with full mark scheme workings: " },
              { label: "⚡ 3-Question Drill", prefix: "Give me 3 rigorous examination questions on: " },
              { label: "📐 Formula Sheet", prefix: "List all key formulas, units, and definitions for: " },
              { label: "🎯 Common Mistakes", prefix: "What are the most frequent student mistakes examiners look for in: " },
            ].map(({ label, prefix }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setInput(prefix);
                  inputRef.current?.focus();
                }}
                className="rounded-full border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1 text-[11px] font-medium transition cursor-pointer shrink-0"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Wide Composer Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (status !== "ready") return;
              inputRef.current?.blur();
              setIsInputFocused(false);
              void send(input);
            }}
            className={`rounded-2xl border bg-card p-2.5 transition shadow-sm ${
              isInputFocused
                ? "border-primary/60 ring-2 ring-primary/10"
                : "border-border"
            }`}
          >
            <textarea
              ref={inputRef}
              rows={2}
              value={input}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (status !== "ready") return;
                  inputRef.current?.blur();
                  setIsInputFocused(false);
                  void send(input);
                }
              }}
              placeholder="Ask Yumna anything… (paste a question, formula, or YouTube video link)"
              className="max-h-48 w-full resize-none bg-transparent px-3 py-1.5 text-sm sm:text-base leading-relaxed text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            />

            <div className="mt-1 flex items-center justify-between border-t border-border/60 pt-2 px-1">
              <div className="flex items-center gap-1.5">
                {!isMini && (
                  <button
                    type="button"
                    onClick={() => setUploadOpen((v) => !v)}
                    title="Upload file or image"
                    className={`flex size-8 items-center justify-center rounded-xl transition cursor-pointer ${
                      uploadOpen
                        ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                    }`}
                  >
                    <Plus className="size-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={toggleDictation}
                  title={isDictating ? "Stop voice dictation" : "Voice dictation"}
                  className={`flex h-8 items-center gap-1.5 rounded-xl px-2.5 text-xs font-medium transition cursor-pointer ${
                    isDictating
                      ? "bg-rose-500 text-white"
                      : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
                >
                  <Mic className="size-3.5" />
                  <span className="hidden sm:inline">
                    {isDictating ? "Listening…" : "Dictate"}
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden text-[11px] text-neutral-400 dark:text-neutral-500 sm:inline">
                  Enter to send · Shift+Enter for newline
                </span>

                {status !== "ready" ? (
                  <button
                    type="button"
                    onClick={stopGenerating}
                    title="Stop generating"
                    className="flex size-8 items-center justify-center rounded-xl bg-neutral-900 dark:bg-neutral-700 text-white hover:bg-neutral-700 dark:hover:bg-neutral-600 transition cursor-pointer shadow-sm"
                  >
                    <Square className="size-3 fill-white" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!input.trim() && !attachment}
                    className={`flex size-8 items-center justify-center rounded-xl transition cursor-pointer ${
                      input.trim() || attachment
                        ? "bg-black dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
                    }`}
                  >
                    <ArrowUp className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
