import { useState, useRef, useEffect } from "react";
import {
  RotateCcw,
  SquarePen,
  Trash2,
  X,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  ArrowUp,
  Loader2,
  Bot,
} from "lucide-react";
import { useAppLayout } from "@/lib/app-layout-context";
import { ThemeColorChooser } from "@/components/theme-color-chooser";
import { MessageResponse } from "@/components/ai-elements/message";
import { cleanUnnecessaryDollars } from "@/lib/ai-router";

/**
 * Chatbot SVG Button Trigger
 * Located at bottom-right of the screen:
 * - Shows a Chatbot SVG icon
 * - On click, opens the Yumna right drawer
 * - Once open, the chatbot SVG goes away (hides)
 * - Once the chatbot closes, the chatbot SVG comes back
 */
export function ChatbotSvgTrigger({ className = "" }: { className?: string }) {
  const { chatOpen, setChatOpen, themeMode } = useAppLayout();

  // The SVG disappears when the chatbot panel is open!
  if (chatOpen) return null;

  return (
    <button
      type="button"
      onClick={() => setChatOpen(true)}
      title="Open Yumna"
      aria-label="Open Yumna"
      className={`size-12 rounded-full border shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 animate-in fade-in zoom-in-75 ${
        themeMode === "dark"
          ? "bg-blue-600 border-blue-500 text-white hover:bg-blue-700"
          : themeMode === "pink"
          ? "bg-[#FFE3E7] border-[#FBCFE8] text-[#2A171C] hover:bg-[#FCD0D8]"
          : "bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
      } ${className}`}
    >
      {/* Chatbot SVG */}
      <svg
        className="size-6 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    </button>
  );
}

/**
 * Bottom-right floating controls:
 * - Color choosing button (color SVG icon; on click 3 themes slide out)
 * - Chatbot SVG button (on click opens right Yumna drawer; disappears while open)
 * - When drawer opens, smoothly shifts to the left side so it never blocks the input or send button!
 * - When drawer closes, smoothly shifts back to the bottom right!
 */
export function BottomRightFloatingControls() {
  const { chatOpen } = useAppLayout();

  return (
    <div
      className={`fixed bottom-6 z-50 flex items-center pointer-events-auto transition-all duration-300 ease-in-out ${
        chatOpen
          ? "right-auto left-6 sm:left-auto sm:right-[436px]"
          : "right-6"
      }`}
      role="region"
      aria-label="Bottom screen controls"
    >
      <ThemeColorChooser />
      <ChatbotSvgTrigger className="ml-2" />
    </div>
  );
}

export function ExamGlowAiDrawer() {
  const { chatOpen, setChatOpen, messages, sendMessage, clearMessages, isAiLoading, themeMode } =
    useAppLayout();
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  if (!chatOpen) return null;

  const handleSend = () => {
    if (!input.trim() || isAiLoading) return;
    const text = input;
    setInput("");
    void sendMessage(text);
  };

  const handleCopy = (id: string, text: string) => {
    void navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <aside
      aria-label="Yumna AI Assistant"
      className="w-full sm:w-[420px] shrink-0 h-full p-3 sm:p-4 pl-0 flex flex-col transition-all duration-300 ease-in-out animate-in slide-in-from-right duration-300 z-30"
    >
      <div
        className={`h-full w-full rounded-3xl border flex flex-col overflow-hidden shadow-xl transition-colors ${
          themeMode === "dark"
            ? "border-[#525252] bg-[#333333] text-white"
            : themeMode === "pink"
            ? "border-[#FBCFE8] bg-white text-[#2A171C]"
            : "border-gray-200 bg-white text-gray-900"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-5 py-4 border-b transition-colors ${
            themeMode === "dark"
              ? "border-[#525252] bg-[#333333]"
              : themeMode === "pink"
              ? "border-[#FCE7F3] bg-[#FFF5F7]"
              : "border-gray-100 bg-white"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className={`flex size-7 items-center justify-center rounded-lg shadow-xs ${
              themeMode === "pink" ? "bg-[#FFE3E7] text-[#2A171C]" : "bg-black text-white dark:bg-white dark:text-black"
            }`}>
              <Bot className="size-4.5" />
            </div>
            <h3 className="text-sm font-bold tracking-tight">Yumna</h3>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 opacity-70">
            <button
              type="button"
              onClick={clearMessages}
              title="New Conversation"
              className="p-1 rounded-md hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setInput("");
              }}
              title="Reset Input"
              className="p-1 rounded-md hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <SquarePen className="size-4" />
            </button>
            <button
              type="button"
              onClick={clearMessages}
              title="Clear History"
              className="p-1 rounded-md hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Trash2 className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              title="Close Panel"
              className="p-1 rounded-md hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div
          className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            themeMode === "dark"
              ? "bg-[#2D2D2D]"
              : themeMode === "pink"
              ? "bg-[#FFF5F7]"
              : "bg-[#FAFAFA]"
          }`}
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${
                m.role === "agent" ? "items-start" : "items-end"
              }`}
            >
              {m.role === "agent" ? (
                <div
                  className={`max-w-[95%] rounded-2xl p-4 shadow-2xs border text-xs sm:text-[13.5px] leading-relaxed ${
                    themeMode === "dark"
                      ? "bg-[#383838] border-[#525252] text-white"
                      : themeMode === "pink"
                      ? "bg-white border-[#FBCFE8] text-[#2A171C]"
                      : "bg-white border-gray-100 text-gray-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-inherit opacity-60">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-500">
                      YUMNA
                    </span>
                    <span className="text-[10px]">{m.time || "Just now"}</span>
                  </div>

                  <div className="ai-markdown-content overflow-x-auto">
                    <MessageResponse>{cleanUnnecessaryDollars(m.text)}</MessageResponse>
                  </div>

                  {/* Actions under agent message */}
                  <div className="mt-3 pt-2 flex items-center gap-3 border-t border-inherit opacity-60 text-xs">
                    <button
                      type="button"
                      onClick={() => handleCopy(m.id, m.text)}
                      className="hover:opacity-100 flex items-center gap-1 transition-opacity cursor-pointer"
                    >
                      {copiedId === m.id ? (
                        <Check className="size-3 text-emerald-500" />
                      ) : (
                        <Copy className="size-3" />
                      )}
                      <span>{copiedId === m.id ? "Copied" : "Copy"}</span>
                    </button>
                    <button
                      type="button"
                      className="hover:opacity-100 transition-opacity cursor-pointer"
                      title="Helpful"
                    >
                      <ThumbsUp className="size-3" />
                    </button>
                    <button
                      type="button"
                      className="hover:opacity-100 transition-opacity cursor-pointer"
                      title="Not helpful"
                    >
                      <ThumbsDown className="size-3" />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium shadow-2xs ${
                    themeMode === "pink"
                      ? "bg-[#FFE3E7] text-[#2A171C] border border-[#FBCFE8]"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {m.text}
                </div>
              )}
            </div>
          ))}

          {isAiLoading && (
            <div className="flex items-center gap-2 text-xs opacity-60 pl-2">
              <Loader2 className="size-3.5 animate-spin text-blue-500" />
              <span>Yumna is thinking...</span>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input area */}
        <div
          className={`p-3 sm:p-4 border-t transition-colors ${
            themeMode === "dark"
              ? "border-[#525252] bg-[#333333]"
              : themeMode === "pink"
              ? "border-[#FCE7F3] bg-[#FFF5F7]"
              : "border-gray-100 bg-white"
          }`}
        >
          <div
            className={`rounded-2xl border p-2.5 shadow-2xs flex items-end gap-2 focus-within:ring-2 focus-within:ring-blue-500/30 transition-all ${
              themeMode === "dark"
                ? "border-[#525252] bg-[#2D2D2D] text-white"
                : themeMode === "pink"
                ? "border-[#FBCFE8] bg-white text-[#2A171C]"
                : "border-gray-200 bg-[#F9FAFB] text-gray-900"
            }`}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={2}
              placeholder="Ask Yumna anything about your syllabus or questions..."
              className="w-full resize-none border-0 bg-transparent text-xs sm:text-sm placeholder:opacity-50 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || isAiLoading}
              aria-label="Send message"
              className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-95 disabled:opacity-40 cursor-pointer ${
                themeMode === "pink"
                  ? "bg-[#FFE3E7] text-[#2A171C] hover:bg-[#FCD0D8]"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

// Backward-compatibility aliases
export const YumnaDrawer = ExamGlowAiDrawer;
export const DueOtterAiDrawer = ExamGlowAiDrawer;
export function DueOtterBottomTrigger() {
  // Completely removed from the bottom screen per user's instruction
  return null;
}
