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
} from "lucide-react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { MessageResponse } from "@/components/ai-elements/message";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { callGemini, type ChatMessage } from "@/lib/ai-router";
import {
  incrementAiMessageCount,
} from "@/lib/onboarding";
import { playRealisticVoice, stopRealisticVoice } from "@/lib/gemini-tts";
import studentDesk from "@/assets/student-desk.jpg";
import studentsGrass from "@/assets/students-grass.jpg";
import logoMark from "@/assets/logo-mark.png";

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
  const match = text.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
  return match ? match[1]! : null;
}

function YouTubeVideoCard({ videoId }: { videoId: string }) {
  return (
    <div className="my-3 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-3.5 py-2 text-xs font-medium">
        <span className="flex size-2 rounded-full bg-lavender animate-pulse" />
        <span className="text-foreground">Watching with Yumna</span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground ml-auto">Ask about any timestamp</span>
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

const VIDEO_SUGGESTION_PLACEHOLDER = "https://www.youtube.com/watch?v=";

const suggestions = [
  { label: "Paste a YouTube link — I'll watch & teach it", meta: "Video walkthroughs", Icon: Video, isVideo: true, tone: "bg-lilac" },
  { label: "Explain photosynthesis step-by-step", meta: "Biology explainer", Icon: BookOpen, isVideo: false, tone: "bg-mint" },
  { label: "Quiz me on quadratic equations", meta: "Practice questions", Icon: ListChecks, isVideo: false, tone: "bg-lavender" },
  { label: "How do electric circuits work?", meta: "Physics basics", Icon: Layers, isVideo: false, tone: "bg-surface" },
] as const;

// Helper to strip emojis from speech text so speech synthesizer never speaks emoji descriptions
function cleanSpeechText(text: string): string {
  return text
    .replace(
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F1E6}-\u{1F1FF}]/gu,
      "",
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
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"ready" | "submitted">("ready");
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [playingMsgIdx, setPlayingMsgIdx] = useState<number | null>(null);
  const [voiceLoadingIdx, setVoiceLoadingIdx] = useState<number | null>(null);


  // Dictation Speech-to-Text (inside the input box)
  const [isDictating, setIsDictating] = useState(false);
  const dictationRecoRef = useRef<any>(null);

  const [uploadOpen, setUploadOpen] = useState(false);
  const [attachment, setAttachment] = useState<UploadedAttachment | null>(null);

  // Mobile input focus & viewport docking
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [viewportBottomOffset, setViewportBottomOffset] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);

  // Listen to mobile virtual keyboard visualViewport changes
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

  // Save active session to localStorage whenever messages change
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
    if (!trimmed || status === "submitted") return;


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

    // Context from student learning activity to tailor response (only for substantive study questions, not simple greetings)
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

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: fullMessages }),
      });
      const data = (await res.json()) as { text?: string; error?: string };
      let replyText = data.text;

      // Fallback: If server returned nothing, error, or an extremely short reply, call Gemini API directly in-browser!
      if (!replyText || data.error || replyText.trim().length < 20) {
        const clientRes = await callGemini(fullMessages);
        if (clientRes?.text) {
          replyText = clientRes.text;
        }
      }

      if (!replyText) {
        setError("Yumna is taking a moment to reply. Please try again.");
      } else {
        setMessages([...next, { role: "assistant", content: replyText }]);
      }
    } catch {
      // Direct browser fallback if /api/chat network failed
      try {
        const directRes = await callGemini(fullMessages);
        if (directRes?.text) {
          setMessages([...next, { role: "assistant", content: directRes.text }]);
        } else {
          setError("Network error — check your connection and try again.");
        }
      } catch {
        setError("Network error — check your connection and try again.");
      }
    } finally {
      setStatus("ready");
      inputRef.current?.focus();
    }
  }

  function handleNewChat() {
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

  // Handle file uploads with base64 conversion for Gemini Multimodal Vision
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

  return (
    <div className={`relative flex h-full w-full flex-col bg-background ${className}`}>

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

      {/* Chat header */}
      <header className="shrink-0 border-b border-border bg-background py-3.5 pl-14 pr-4 md:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <p className="flex shrink-0 items-baseline gap-3">
            <span className="font-display text-[21px] leading-none">Yumna</span>
            <span className="hidden truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground lg:block">
              AI Study Tutor
            </span>
          </p>
          <nav className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={handleNewChat}
              className="flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-medium text-ink-foreground transition-opacity hover:opacity-90"
            >
              <Plus className="size-3.5" />
              <span className="hidden sm:inline">New chat</span>
            </button>
            <button
              type="button"
              onClick={() => setShowHistory((v) => !v)}
              className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                showHistory
                  ? "border-foreground/40 bg-secondary text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="hidden sm:inline">History</span>
              <span className="sm:hidden">Chat</span>
              {sessions.length > 0 && (
                <span className="ml-1.5 text-[10px] tabular-nums opacity-70">{sessions.length}</span>
              )}
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* History Slide-Over Drawer */}
      {showHistory && (
        <div className="absolute inset-y-0 left-0 z-30 flex w-80 max-w-[85%] flex-col border-r border-border bg-card animate-in slide-in-from-left duration-200">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Chat history</p>
            <button
              type="button"
              onClick={() => setShowHistory(false)}
              className="size-7 flex items-center justify-center rounded-full hover:bg-secondary text-muted-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {sessions.length === 0 ? (
              <div className="py-12 text-center text-xs text-muted-foreground">
                No past conversations yet.
              </div>
            ) : (
              sessions.map((s) => {
                const isActive = s.id === currentSessionId;
                return (
                  <div
                    key={s.id}
                    onClick={() => handleSelectSession(s)}
                    className={`group flex items-center justify-between gap-2 border-b border-border/60 px-2 py-3.5 text-left transition-colors cursor-pointer last:border-b-0 hover:bg-secondary/50 ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm truncate ${isActive ? "font-display text-[15px]" : "font-medium"}`}>{s.title}</p>
                      <p className="text-[10px] uppercase tracking-[0.14em] mt-0.5 opacity-70">
                        {new Date(s.updatedAt).toLocaleDateString([], { month: "short", day: "numeric" })} · {s.messages.length} msgs
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => handleDeleteSession(s.id, e)}
                      className="size-6 shrink-0 flex items-center justify-center rounded hover:bg-destructive/10 hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Conversation */}
      <Conversation className="flex-1 overflow-y-auto">
        <ConversationContent className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6 sm:px-6">
          {messages.length === 0 ? (
            <div className="w-full py-4">
              {/* Ink hero band — matches the home page */}
              <section className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-8 text-ink-foreground sm:px-8 sm:py-10">
                <img
                  src={logoMark}
                  alt=""
                  width={512}
                  height={512}
                  className="pointer-events-none absolute -right-8 -top-10 size-52 opacity-10 invert"
                />
                <div className="relative grid gap-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-3 py-1 text-xs font-semibold">
                      <span className="size-1.5 rounded-full bg-lavender" aria-hidden />
                      The study desk
                    </span>
                    <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,2.8rem)] leading-[1.05]">
                      Hi, I&apos;m <span className="display-italic">Yumna</span>
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/75">
                      Your dedicated IGCSE study tutor. Paste a problem, ask me to explain a theorem,
                      review past paper questions — or paste any YouTube link and I&apos;ll watch it with you.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <figure>
                      <img
                        src={studentDesk}
                        alt="A student working at a library computer desk"
                        className="aspect-[0.85] w-[130px] rounded-2xl object-cover sm:w-[150px]"
                      />
                      <figcaption className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-ink-foreground/50">
                        Study desk
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        src={studentsGrass}
                        alt="Students sitting on the grass after class"
                        className="aspect-[0.85] w-[130px] rounded-2xl object-cover sm:w-[150px]"
                      />
                      <figcaption className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-ink-foreground/50">
                        After class
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>

              {/* Suggestion tiles — home quick-action style */}
              <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Try asking</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {suggestions.map(({ label, meta, Icon, isVideo, tone }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      if (isVideo) {
                        setInput(VIDEO_SUGGESTION_PLACEHOLDER);
                        setTimeout(() => inputRef.current?.focus(), 50);
                      } else {
                        void send(label);
                      }
                    }}
                    className={`group rounded-3xl ${tone} p-5 text-left transition-transform hover:-translate-y-1`}
                  >
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-card">
                      <Icon className="size-4.5" aria-hidden />
                    </span>
                    <strong className="mt-4 flex items-center gap-1.5 text-[15px] font-semibold">
                      <span className="min-w-0">{label}</span>
                      <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                    </strong>
                    <span className="mt-1 block text-sm text-foreground/60">{meta}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m, i) => {
              const mine = m.role !== "assistant";
              return (
                <div key={i} className={`flex items-end gap-2.5 ${mine ? "justify-end" : ""}`}>
                  {!mine && (
                    <span className="mb-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[13px] text-ink-foreground">
                      Y
                    </span>
                  )}
                  {mine ? (
                    <div className="flex max-w-[82%] flex-col items-end gap-2 sm:max-w-[75%]">
                      {extractYouTubeId(m.content) && (
                        <YouTubeVideoCard videoId={extractYouTubeId(m.content)!} />
                      )}
                      <div className="rounded-3xl rounded-br-md bg-ink px-4 py-3 text-sm leading-relaxed text-ink-foreground">
                        <p className="whitespace-pre-wrap">{m.content}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="min-w-0 text-sm leading-relaxed">
                      <MessageResponse>{m.content}</MessageResponse>
                      <div className="mt-2 flex items-center gap-2">
                        {playingMsgIdx === i ? (
                          <button
                            type="button"
                            onClick={() => {
                              stopRealisticVoice();
                              setPlayingMsgIdx(null);
                              setVoiceLoadingIdx(null);
                            }}
                            className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[11px] font-medium text-ink-foreground transition-opacity hover:opacity-90"
                          >
                            <VolumeX className="size-3.5" />
                            <span>Stop speaking</span>
                          </button>
                        ) : voiceLoadingIdx === i ? (
                          <button
                            type="button"
                            onClick={() => {
                              stopRealisticVoice();
                              setVoiceLoadingIdx(null);
                            }}
                            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                            title="Preparing realistic voice with Yumna... Click to cancel"
                          >
                            <Loader2 className="size-3.5 animate-spin" />
                            <span>Preparing voice…</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setVoiceLoadingIdx(i);
                              playRealisticVoice(m.content, {
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
                            className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
                          >
                            <Volume2 className="size-3.5" />
                            <span>Listen to explanation</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}

          {status === "submitted" && (
            <div className="flex items-end gap-2.5">
              <span className="mb-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[13px] text-ink-foreground">
                Y
              </span>
              <div className="flex items-center gap-2 py-1.5">
                <Loader2 className="size-3.5 animate-spin text-muted-foreground" />
                <Shimmer className="text-sm text-muted-foreground">Yumna is thinking…</Shimmer>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-2.5 text-xs text-destructive">
              {error}
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      {/* Composer */}
      <div
        style={viewportBottomOffset > 0 ? { transform: `translateY(-${viewportBottomOffset}px)` } : undefined}
        className="z-30 shrink-0 border-t border-border bg-background px-4 pb-4 pt-3 transition-all duration-200 sm:px-6"
      >
        <div className="mx-auto w-full max-w-3xl">
          {/* Attachment banner */}
          {attachment && (
            <div className="mb-2 flex items-center justify-between gap-3 rounded-2xl bg-secondary px-3 py-1.5 text-xs text-foreground">
              <span className="flex min-w-0 items-center gap-2">
                <Paperclip className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                <span className="truncate font-semibold">{attachment.name}</span>
                <span className="shrink-0 rounded bg-card px-1.5 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
                  {attachment.type}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setAttachment(null)}
                aria-label="Remove attachment"
                className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}

          {/* Upload Popover */}
          {uploadOpen && (
            <div className="mb-2 w-72 rounded-3xl border border-border bg-card p-2.5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)]">
              <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Upload &amp; analyze
              </p>
              <div className="mt-1 flex flex-col">
                <button
                  type="button"
                  onClick={() => pdfInputRef.current?.click()}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-xs font-medium transition-colors hover:bg-secondary/60"
                >
                  <FileText className="size-4 shrink-0 text-muted-foreground" />
                  <span>
                    <span className="block font-medium">PDF document</span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Syllabus or past exam paper</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => imgInputRef.current?.click()}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-xs font-medium transition-colors hover:bg-secondary/60"
                >
                  <ImageIcon className="size-4 shrink-0 text-muted-foreground" />
                  <span>
                    <span className="block font-medium">Image / diagram</span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Homework photo or chart</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => docInputRef.current?.click()}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-xs font-medium transition-colors hover:bg-secondary/60"
                >
                  <FileUp className="size-4 shrink-0 text-muted-foreground" />
                  <span>
                    <span className="block font-medium">Text / notes</span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-muted-foreground">.txt or markdown notes</span>
                  </span>
                </button>
              </div>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              inputRef.current?.blur();
              setIsInputFocused(false);
              void send(input);
            }}
            className={`rounded-3xl border bg-card p-2.5 transition-colors sm:p-3 ${
              isInputFocused ? "border-foreground/40" : "border-border"
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
                  inputRef.current?.blur();
                  setIsInputFocused(false);
                  void send(input);
                }
              }}
              placeholder="Ask Yumna anything… (paste a question, formula, or link)"
              className="max-h-40 w-full resize-none bg-transparent px-2 py-1.5 text-[15px] leading-relaxed text-foreground outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {!isMini && (
                  <button
                    type="button"
                    onClick={() => setUploadOpen((v) => !v)}
                    title="Upload file or image"
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-secondary ${
                      uploadOpen ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Plus className="size-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={toggleDictation}
                  title={isDictating ? "Stop Dictation" : "Dictate with voice"}
                  className={`flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-colors ${
                    isDictating
                      ? "bg-lavender text-ink-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Mic className="size-4" />
                  <span className="hidden sm:inline">{isDictating ? "Listening…" : "Dictate"}</span>
                </button>
              </div>
              <button
                type="submit"
                onClick={() => {
                  inputRef.current?.blur();
                  setIsInputFocused(false);
                }}
                disabled={!input.trim() && !attachment}
                title="Send message"
                className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all ${
                  input.trim() || attachment
                    ? "cursor-pointer bg-ink text-ink-foreground hover:opacity-90"
                    : "cursor-not-allowed bg-secondary text-muted-foreground opacity-50"
                }`}
              >
                <ArrowUp className="size-4" />
              </button>
            </div>
          </form>

          <p className="mt-1.5 hidden text-center text-[11px] text-muted-foreground sm:block">
            Press <kbd className="rounded bg-secondary px-1 font-sans">Enter</kbd> to send · <kbd className="rounded bg-secondary px-1 font-sans">Shift+Enter</kbd> for new line
          </p>
        </div>
      </div>
    </div>
  );
}
