import { createFileRoute } from "@tanstack/react-router";

import { DashboardLayout } from "@/components/dashboard-page";
import { StudyChat } from "@/components/study-chat";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "AI Study Chat | ExamGlow" },
      {
        name: "description",
        content:
          "Chat with Yumna, your personal AI study tutor made by the ExamGlow team: explain concepts simply, solve math problems, quiz yourself, and ace your exams.",
      },
      { property: "og:title", content: "AI Study Chat | ExamGlow" },
      { property: "og:description", content: "Ask Yumna anything about your syllabus and study material." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  return (
    <DashboardLayout crumbs={[{ label: "Chat" }]}>
      <div className="h-[calc(100dvh-110px)] w-full overflow-hidden flex flex-col rounded-2xl border border-border/80 bg-card">
        <StudyChat className="h-full w-full rounded-none border-0 shadow-none" />
      </div>
    </DashboardLayout>
  );
}
