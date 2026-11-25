import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export type ThemeMode = "light" | "dark" | "pink";

export interface ChatMessage {
  id: string;
  role: "agent" | "user";
  text: string;
  time?: string;
}

interface AppLayoutContextValue {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  toggleChat: () => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  messages: ChatMessage[];
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
  isAiLoading: boolean;
}

const AppLayoutContext = createContext<AppLayoutContextValue | null>(null);

const THEME_STORAGE_KEY = "examglow.color_mode";

function applyThemeClasses(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("dark", "theme-dark", "theme-pink", "theme-light");
  if (mode === "dark") {
    root.classList.add("dark", "theme-dark");
  } else if (mode === "pink") {
    root.classList.add("theme-pink");
  } else {
    root.classList.add("theme-light");
  }
}

export function AppLayoutProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (saved === "light" || saved === "dark" || saved === "pink") return saved;
    } catch {}
    return "light";
  });

  const [chatOpen, setChatOpenState] = useState(false);
  const [manualSidebarCollapsed, setManualSidebarCollapsed] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "agent",
      text: "Hey! 👋 I'm Yumna, made by the ExamGlow team. I have complete syllabus knowledge, revision notes, and exam insights across all your subjects. What would you like to study or revise today?",
    },
  ]);

  useEffect(() => {
    applyThemeClasses(themeMode);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    } catch {}
  }, [themeMode]);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathnameRef = useRef(pathname);

  // Reset chat open state on page navigation so sidebar does NOT stay stuck collapsed
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setChatOpenState(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handlePopState = () => {
      setChatOpenState(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
  };

  const setChatOpen = (open: boolean) => {
    setChatOpenState(open);
  };

  const toggleChat = () => {
    setChatOpenState((prev) => !prev);
  };

  // When chat is open, left sidebar smoothly collapses to 68px.
  // When chat closes, sidebar comes back to normal!
  const sidebarCollapsed = chatOpen ? true : manualSidebarCollapsed;

  const sendMessage = async (text: string) => {
    if (!text.trim() || isAiLoading) return;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsAiLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are Yumna, an extraordinarily sharp, fast, and helpful AI tutor made by the ExamGlow team. You provide clear, concise answers, exam tips, and syllabus guidance directly without fluff.",
            },
            ...messages.map((m) => ({ role: m.role === "agent" ? "assistant" : "user", content: m.text })),
            { role: "user", content: text.trim() },
          ],
        }),
      });

      if (res.ok) {
        const data = (await res.json()) as { text?: string };
        if (data.text) {
          setMessages((prev) => [
            ...prev,
            { id: (Date.now() + 1).toString(), role: "agent", text: data.text! },
          ]);
          setIsAiLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("AI chat request failed, using instant response:", err);
    }

    // Instant helpful fallback response
    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        role: "agent",
        text: `Got it! I'm here to help with your question regarding "${text.trim()}". Let me know if you want a detailed breakdown or practice questions!`,
      },
    ]);
    setIsAiLoading(false);
  };

  const clearMessages = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "agent",
        text: "Conversation cleared. How can I assist your ExamGlow studies today?",
      },
    ]);
  };

  return (
    <AppLayoutContext.Provider
      value={{
        themeMode,
        setThemeMode,
        chatOpen,
        setChatOpen,
        toggleChat,
        sidebarCollapsed,
        setSidebarCollapsed: setManualSidebarCollapsed,
        messages,
        sendMessage,
        clearMessages,
        isAiLoading,
      }}
    >
      {children}
    </AppLayoutContext.Provider>
  );
}

export function useAppLayout() {
  const ctx = useContext(AppLayoutContext);
  if (!ctx) {
    // Return safe default if rendered outside provider
    return {
      themeMode: "light" as ThemeMode,
      setThemeMode: () => {},
      chatOpen: false,
      setChatOpen: () => {},
      toggleChat: () => {},
      sidebarCollapsed: false,
      setSidebarCollapsed: () => {},
      messages: [],
      sendMessage: async () => {},
      clearMessages: () => {},
      isAiLoading: false,
    };
  }
  return ctx;
}
