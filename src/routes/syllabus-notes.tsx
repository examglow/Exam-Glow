import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  ChevronRight,
  Search,
  ArrowLeft,
  Volume2,
  Loader2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  X,
  HelpCircle,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-page";
import {
  playRealisticVoice,
  stopRealisticVoice,
  pauseRealisticVoice,
  resumeRealisticVoice,
  preloadGeminiSpeech,
  cleanSpeechText,
  unlockAudio,
} from "@/lib/gemini-tts";
import type { SubjectNotes, Chapter } from "@/lib/notes/types";
import { SYLLABUS_NOTES } from "@/lib/syllabus-notes";
import { formatMathAndMarkdown } from "@/lib/render-math";
import { sound } from "@/components/arcade/sound-fx";

export const Route = createFileRoute("/syllabus-notes")({
  head: () => ({
    meta: [
      { title: "Syllabus Notes — Cambridge IGCSE | ExamGlow" },
      {
        name: "description",
        content:
          "Structured, high-yield chapter revision notes for every Cambridge IGCSE subject with interactive diagrams, voice masterclasses, and active recall checkpoints.",
      },
    ],
  }),
  component: SyllabusNotesPage,
});

// ─── Dot colours per category ─────────────────────────────────────────────────

const catDot: Record<string, string> = {
  Sciences: "bg-emerald-500",
  Mathematics: "bg-blue-500",
  English: "bg-violet-500",
  Languages: "bg-pink-500",
  "Business & Economics": "bg-amber-500",
  Humanities: "bg-orange-500",
  Technology: "bg-cyan-500",
};

// ─── Full chapter document reader & 20-Min Yumna Masterclass Player ───────────

const TOTAL_LECTURE_SECONDS = 1200; // 20:00 exactly

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

type LectureSection = {
  title: string;
  tag: string;
  script: string;
};

function build20MinChapterLecture(chap: Chapter): LectureSection[] {
  const sections: LectureSection[] = [];
  const cleanIntro = cleanSpeechText(chap.intro);

  // 1. Welcome & Orientation
  sections.push({
    title: "Masterclass Kickoff & Big Picture",
    tag: "Part 1: Orientation",
    script: `Hello and welcome to your complete twenty-minute deep-dive masterclass for Chapter ${chap.number}: ${chap.title}. I am Yumna, your personal tutor. Over the next twenty minutes, we are not simply reading through notes. We are going to unpack every concept layer by layer, understand how it connects to everything else, explore real-world examples, and make sure you can answer any Cambridge exam question on this topic with complete confidence. Let me give you the big picture first. This chapter is one of the most important in your entire syllabus because it forms the backbone of the ideas that follow. Every examiner marking your script will be looking for evidence that you truly understand the underlying mechanism, not just a memorised definition. So throughout this masterclass, every time I give you a fact, I will also give you the reason why it works that way, and I will give you a worked example of how it appears in an exam question. Let's begin.`,
  });

  // 2. Real-world relevance
  sections.push({
    title: "Why This Concept Exists in the Real World",
    tag: "Part 2: Motivation",
    script: `Before we dive into the technical content, let's answer the most important question a student can ask: why does this actually matter outside the classroom? The answer for ${chap.title} is this. ${cleanIntro.slice(0, 300)}. Now let me give you a real-world example to anchor this. Think about the last time you encountered something related to this topic in your daily life. Scientists, engineers, doctors, economists, and designers all rely on these exact principles every single day. When you understand the principle behind it rather than just the words, you gain the ability to apply it to situations you have never seen before, which is precisely what Cambridge A-star questions demand. Keep that motivation in mind throughout this entire masterclass.`,
  });

  // 3. Decoding first principles
  sections.push({
    title: "First Principles & Fundamental Definitions",
    tag: "Part 3: Definitions",
    script: `Now let's build the foundation. The most common mistake students make is trying to memorise a definition word-for-word without understanding what each part of that definition actually means. Let's decode it piece by piece. The core definition here is: ${cleanIntro.slice(0, 280)}. Notice that this definition has two parts. The first part tells you what the thing is. The second part tells you what it does or how it behaves. When an examiner awards marks for a definition, they are looking for both parts. Writing only one of them costs you half the marks. So let me say it again, more slowly. First: identify the subject. Second: explain its function or behaviour. Third: if possible, state the conditions under which it applies. If you follow that three-part structure every time, you will never lose a definition mark again.`,
  });

  // 4. Subheadings deep elaboration
  chap.subheadings.forEach((sub, sIdx) => {
    const cleanBody = cleanSpeechText(sub.body);
    const bullets = sub.groups
      .flatMap((g) => g.bullets)
      .map((b) => cleanSpeechText(b))
      .filter(Boolean);

    // Concept Exploration — expanded with cause-effect reasoning
    sections.push({
      title: `${sub.title}: Concept Breakdown`,
      tag: `Topic ${sIdx + 1}A`,
      script: `Let's move into our next key topic: ${sub.title}. I want you to really understand this one, not just memorise it, so let's break it down in three stages. Stage one: what is it? Stage two: how does it work step by step? Stage three: what does it connect to? Here is the explanation. ${cleanBody.slice(0, 350)}. Now let's think about the mechanism. There is always a cause and an effect. When you change one input, a specific output changes as a consequence. Being able to trace that chain from cause to effect, using precise terminology at every step, is what an examiner rewards with full marks. Let me highlight the most important part of this concept that students most often get wrong or oversimplify.`,
    });

    // Practical worked examples & key bullet points — expanded
    if (bullets.length > 0) {
      const topBullets = bullets.slice(0, Math.min(4, bullets.length)).join(". Next: ");
      sections.push({
        title: `${sub.title}: Key Syllabus Points & Examples`,
        tag: `Topic ${sIdx + 1}B`,
        script: `Now let's go through the specific details for ${sub.title} that Cambridge mark schemes test directly. I am going to go through each point carefully, explain why it is true, and give you an example for each one. Point one: ${topBullets}. For each of these, imagine an examiner asking you to explain the significance. A weak answer simply states the fact. A strong answer states the fact, explains the underlying mechanism, and gives a specific example or application. For instance, if you are asked about this in a structured question, start with the principle, then describe the process step by step, then conclude with the outcome. That three-step approach guarantees you cover everything the mark scheme is looking for.`,
      });
    }

    // Examiner Traps — richer and more specific
    sections.push({
      title: `${sub.title}: Examiner Pitfalls & How to Avoid Them`,
      tag: `Topic ${sIdx + 1}C`,
      script: `Here is something examiners know that most students don't realise until after the exam. For the topic of ${sub.title}, there are three classic mistakes that appear year after year in the Cambridge examiner reports. Mistake one: using the correct term but in the wrong context. Mistake two: describing what happens without explaining why it happens. Mistake three: leaving out units, conditions, or qualifications that the mark scheme requires. Let me give you a strategy for each. For mistake one: always re-read the question and check you are answering what was actually asked. For mistake two: after every statement you write, ask yourself "why?" and add that reason. For mistake three: when in doubt, include the condition. Writing "under standard conditions" or "in a controlled environment" shows the examiner you understand the limits of the concept. These three habits alone can add five to eight marks to a typical exam paper.`,
    });
  });

  // 5. Synthesis — richer connections
  sections.push({
    title: "System Integration: Connecting All Concepts",
    tag: "Synthesis",
    script: `Now that we have analysed every individual section of Chapter ${chap.number}: ${chap.title}, let's zoom out and see the whole picture. In Cambridge exams, the highest-mark questions — typically the extended response or essay questions — require you to connect multiple ideas together rather than treat them as isolated facts. So let's practise that now. Every concept we covered today is part of a single system. The early sections defined the foundation. The middle sections showed the mechanisms and how they interact. The final sections showed the consequences and applications. When you answer a twelve-mark question, you should be moving through that same structure: foundation, mechanism, consequence. If you can draw a mental flowchart linking the topics from this chapter, you are ready for any synoptic question the examiner can write. Let's also think about how Chapter ${chap.number} connects to the chapters before and after it in the syllabus, because Cambridge increasingly writes questions that span multiple topics.`,
  });

  // 6. Exam strategy — much more detailed
  sections.push({
    title: "Exam Question Walkthrough & Model Answers",
    tag: "Exam Strategy",
    script: `Let's now simulate a real Cambridge examination scenario using ${chap.title} as our topic. I want you to picture yourself in the exam hall. The question reads: "Explain the relationship between [the main concept] and [its consequence]. Use examples to support your answer. [6 marks]". How do you approach this? Here is the exact formula. Sentence one: state the precise definition of the main concept. Sentence two: describe the step-by-step mechanism or process. Sentence three: identify the consequence and explain why it follows from the mechanism. Sentence four: give a named, specific example — not a vague one. Sentence five: if you have time, state the exception or the condition under which this does not apply, because that shows the examiner the depth of your understanding. For a four-mark question, use sentences one through three. For a six-mark question, add sentence four. For an eight or ten mark question, add sentence five and a comparison or evaluation. Following this formula every single time removes the guesswork and ensures you systematically hit every mark scheme point.`,
  });

  // 7. Diagram mastery — more instructive
  sections.push({
    title: "Diagram & Visual Representation Mastery",
    tag: "Diagrams",
    script: `Pay very close attention to this section, because diagrams are worth more marks than most students realise. For Chapter ${chap.number}, Cambridge regularly includes diagram-based questions that ask you to label, annotate, complete, or interpret a visual representation of the concept. Here is how to approach every diagram question. First: identify what type of diagram it is — is it a process diagram, a structural diagram, a graph, or a cycle? Second: find the labels and arrows, because they tell you what the examiner expects you to name and explain. Third: every label you add should be accompanied by a brief function — not just the name. For example, do not just write the name of a structure. Write the name and add a colon followed by its specific function. This is the difference between one mark and two marks on every label. Fourth: if asked to sketch a diagram from memory, always include a title, labels with functions, arrows showing direction of process, and a scale or units if it involves quantities. Practise sketching the key diagrams from this chapter until you can reproduce them accurately in under two minutes.`,
  });

  // 8. Rapid Recall — expanded with actual technique
  sections.push({
    title: "Rapid Recall & Active Retrieval Checkpoint",
    tag: "Recall Drill",
    script: `This section uses the most powerful learning technique known to cognitive science: active retrieval. Research consistently shows that trying to recall information without looking at your notes strengthens your memory far more effectively than re-reading or highlighting. So here is what I want you to do right now. Pause mentally and ask yourself these three questions about ${chap.title}. Question one: what is the single most important definition from this chapter? Can you state it in two sentences without looking? Question two: what is the step-by-step process or mechanism? Can you describe it in the correct order? Question three: what is a real-world example or application of this concept that you could use in an exam answer? If you can answer all three confidently, you are in an excellent position. If any one of them feels uncertain, go back to your notes for that specific point, then close them and try again. This recall-and-verify cycle is how you build the long-term memory you need for exam day.`,
  });

  // 9. Conclusion — motivating and complete
  sections.push({
    title: "20-Minute Masterclass Conclusion & What to Do Next",
    tag: "Completion",
    script: `Congratulations. You have completed your full twenty-minute masterclass on Chapter ${chap.number}: ${chap.title}. In the last twenty minutes, you have covered the complete theoretical foundation, the step-by-step mechanisms, specific worked examples, examiner pitfalls to avoid, a model answer formula, diagram technique, and an active retrieval drill. That is the equivalent of a full private tutoring session compressed into twenty minutes. Here is what I recommend you do immediately after this session. First: open your physical notes or textbook and glance through Chapter ${chap.number} one more time — now that you have heard the full explanation, the written content will click into place much more easily. Second: attempt at least one past paper question on this topic, applying the model answer formula we practised. Third: come back and listen to this masterclass again in three to four days to consolidate the memory through spaced repetition. You have invested twenty minutes today that will save you hours of confusion in the exam hall. Keep up this dedication. You are building something extraordinary.`,
  });

  return sections;
}

function ChapterDoc({
  chapter,
  allChapters,
  color,
  subjectId,
  onBack,
  onNext,
  onPrev,
}: {
  chapter: Chapter;
  allChapters: Chapter[];
  color: string;
  subjectId: string;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [masteredSections, setMasteredSections] = useState<Record<number, boolean>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [isLectureActive, setIsLectureActive] = useState(false);
  const [lectureSectionIdx, setLectureSectionIdx] = useState(0);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lectureSectionsRef = useRef<LectureSection[]>([]);
  const currentSectionRef = useRef<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const backFiredRef = useRef(false);

  // Load mastered state from local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`chapter_mastery_${subjectId}_${chapter.number}`);
      if (saved) {
        try {
          setMasteredSections(JSON.parse(saved));
        } catch {}
      }
    }
  }, [subjectId, chapter.number]);

  const toggleMastered = (idx: number) => {
    setMasteredSections((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      if (next[idx]) {
        sound.playCorrect();
      }
      if (typeof window !== "undefined") {
        localStorage.setItem(`chapter_mastery_${subjectId}_${chapter.number}`, JSON.stringify(next));
      }
      return next;
    });
  };

  const toggleRevealAnswer = (idx: number) => {
    setRevealedAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }));
    sound.playFlip();
  };

  const totalSections = chapter.subheadings.length;
  const masteredCount = Object.values(masteredSections).filter(Boolean).length;
  const masteryPercentage = Math.round((masteredCount / Math.max(1, totalSections)) * 100);

  const idx = allChapters.findIndex((c) => c.number === chapter.number);
  const hasNext = idx < allChapters.length - 1;
  const hasPrev = idx > 0;

  // 20-minute timer ticker
  useEffect(() => {
    if (isPlaying && !isPaused && isLectureActive) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => {
          if (prev >= TOTAL_LECTURE_SECONDS - 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            stopRealisticVoice();
            setIsPlaying(false);
            setIsPaused(false);
            return TOTAL_LECTURE_SECONDS;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, isPaused, isLectureActive]);

  function playSection(index: number, sections: LectureSection[]) {
    if (index < 0 || index >= sections.length) {
      if (elapsedSeconds < TOTAL_LECTURE_SECONDS - 30) {
        playSection(Math.max(0, sections.length - 4), sections);
        return;
      }
      setIsPlaying(false);
      setIsPaused(false);
      setIsVoiceLoading(false);
      setIsLectureActive(false);
      stopRealisticVoice();
      return;
    }

    currentSectionRef.current = index;
    setLectureSectionIdx(index);
    setIsVoiceLoading(true);
    setIsPlaying(false);
    setIsPaused(false);

    const section = sections[index];
    if (!section) {
      setIsPlaying(false);
      setIsPaused(false);
      setIsVoiceLoading(false);
      setIsLectureActive(false);
      return;
    }

    // Preload next section in background
    const nextSection = sections[index + 1];
    if (nextSection) {
      void preloadGeminiSpeech(nextSection.script);
    }

    playRealisticVoice(section.script, {
      onStart: () => {
        setIsVoiceLoading(false);
        setIsPlaying(true);
        setIsPaused(false);
      },
      onEnd: () => {
        const nextIdx = currentSectionRef.current + 1;
        if (nextIdx < sections.length) {
          playSection(nextIdx, sections);
        } else if (elapsedSeconds < TOTAL_LECTURE_SECONDS - 30) {
          playSection(Math.max(0, sections.length - 4), sections);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
          setIsVoiceLoading(false);
          setIsLectureActive(false);
        }
      },
      onError: () => {
        setIsVoiceLoading(false);
        setIsPlaying(false);
        setIsPaused(false);
      },
    });
  }

  function handleStartLecture() {
    unlockAudio();
    if (isLectureActive) {
      if (isPaused) {
        resumeRealisticVoice();
        setIsPaused(false);
        setIsPlaying(true);
      } else if (isPlaying) {
        pauseRealisticVoice();
        setIsPaused(true);
        setIsPlaying(false);
      }
      return;
    }

    const sections = build20MinChapterLecture(chapter);
    lectureSectionsRef.current = sections;
    setIsLectureActive(true);
    setElapsedSeconds(0);
    playSection(0, sections);
  }

  function handlePause() {
    pauseRealisticVoice();
    setIsPaused(true);
    setIsPlaying(false);
  }

  function handleResume() {
    resumeRealisticVoice();
    setIsPaused(false);
    setIsPlaying(true);
  }

  function handleStop() {
    stopRealisticVoice();
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsLectureActive(false);
    setIsPlaying(false);
    setIsPaused(false);
    setIsVoiceLoading(false);
    setElapsedSeconds(0);
  }

  function handleNextSection() {
    const sections = lectureSectionsRef.current;
    if (currentSectionRef.current + 1 < sections.length) {
      stopRealisticVoice();
      playSection(currentSectionRef.current + 1, sections);
    }
  }

  function handlePrevSection() {
    const sections = lectureSectionsRef.current;
    if (currentSectionRef.current > 0) {
      stopRealisticVoice();
      playSection(currentSectionRef.current - 1, sections);
    }
  }

  const scrollToSection = (secIndex: number) => {
    const element = document.getElementById(`section-${secIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    return () => {
      stopRealisticVoice();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [chapter.number]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dataset["readingChapter"] = "true";
    return () => {
      delete document.body.dataset["readingChapter"];
      stopRealisticVoice();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    backFiredRef.current = false;
    handleStop();
  }, [chapter.number]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background overflow-hidden">
      {/* ── Compact top bar ── */}
      <div className="shrink-0 border-b border-border/60 bg-background px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
        <button
          onClick={() => {
            if (backFiredRef.current) return;
            backFiredRef.current = true;
            handleStop();
            onBack();
          }}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          <ArrowLeft className="size-4" />
          <span>Back</span>
        </button>

        <p className="text-xs font-semibold text-muted-foreground truncate text-center flex-1 px-2">
          Ch.{chapter.number} · {chapter.title}
        </p>

        <button
          type="button"
          onClick={handleStartLecture}
          className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
            isVoiceLoading ? "bg-primary/15 text-primary cursor-wait"
            : isPlaying ? "bg-primary text-primary-foreground"
            : isPaused ? "bg-amber-500/15 text-amber-600"
            : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          {isVoiceLoading ? <Loader2 className="size-3.5 animate-spin" /> : isPlaying ? <Pause className="size-3.5 fill-current" /> : <Volume2 className="size-3.5" />}
          <span className="hidden sm:inline">{isPlaying ? "Pause" : isPaused ? "Resume" : "Listen"}</span>
        </button>
      </div>

      {/* ── Scrollable document ── */}
      <div ref={scrollRef} className="relative flex-1 overflow-y-auto overflow-x-hidden">
        <article className="mx-auto max-w-3xl w-full px-4 sm:px-8 pb-40 pt-8">

          {/* Chapter title block */}
          <header className="mb-10">
            <div className="flex items-start gap-4 mb-5">
              <div className={`size-14 shrink-0 rounded-2xl ${color} flex items-center justify-center text-2xl font-black text-white shadow-md`}>
                {chapter.number}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-1">
                  Cambridge IGCSE · Chapter {chapter.number}
                </p>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground leading-tight tracking-tight">
                  {chapter.title}
                </h1>
              </div>
            </div>
            <div
              className="text-base leading-7 text-foreground/80 prose prose-sm dark:prose-invert max-w-none border-l-4 border-primary/30 pl-4 mb-6"
              dangerouslySetInnerHTML={{ __html: formatMathAndMarkdown(chapter.intro) }}
            />
            <div className="flex flex-wrap gap-2">
              {chapter.subheadings.map((sub, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => scrollToSection(sIdx)}
                  className="px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-xs font-medium text-foreground/70 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  {sIdx + 1}. {sub.title}
                </button>
              ))}
            </div>
          </header>

          {/* Sections */}
          <div className="space-y-0">
            {chapter.subheadings.map((sub, si) => {
              const isAnswerRevealed = !!revealedAnswers[si];
              return (
                <section
                  id={`section-${si}`}
                  key={si}
                  className="scroll-mt-16 py-8 border-b border-border/40 last:border-0"
                >
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-black text-white ${color}`}>
                        {si + 1}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Section {si + 1}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-foreground leading-snug tracking-tight">
                      {sub.title}
                    </h2>
                  </div>

                  <div
                    className="prose prose-base dark:prose-invert max-w-none
                      prose-headings:font-bold prose-headings:text-foreground
                      prose-h3:text-[17px] prose-h3:mt-6 prose-h3:mb-2
                      prose-h4:text-[15px] prose-h4:mt-5 prose-h4:mb-1.5
                      prose-p:leading-7 prose-p:text-[15px] prose-p:text-foreground/85 prose-p:mb-3
                      prose-strong:font-semibold prose-strong:text-foreground
                      prose-li:text-[14.5px] prose-li:leading-7
                      prose-ol:ml-5 prose-ol:list-decimal prose-ol:space-y-1
                      prose-ul:ml-5 prose-ul:list-disc prose-ul:space-y-1
                      prose-table:text-sm prose-table:w-full
                      prose-th:bg-muted/60 prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-xs prose-th:uppercase prose-th:tracking-wide
                      prose-td:px-3 prose-td:py-2 prose-td:text-foreground/85
                      prose-code:text-[12.5px] prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                      [&_figure]:my-6 [&_mark]:bg-yellow-200/70 dark:[&_mark]:bg-yellow-900/40 [&_mark]:rounded [&_mark]:px-0.5
                    "
                    dangerouslySetInnerHTML={{ __html: formatMathAndMarkdown(sub.body) }}
                  />

                  {sub.groups.length > 0 && (
                    <div className="mt-6 space-y-6">
                      {sub.groups.map((grp, gi) => (
                        <div key={gi}>
                          {grp.subTitle && (
                            <h3 className="mb-3 text-[15px] font-bold text-foreground flex items-center gap-2">
                              <span className={`inline-block size-2 rounded-full ${color} shrink-0`} />
                              {grp.subTitle}
                            </h3>
                          )}
                          <ul className="space-y-3">
                            {grp.bullets.map((pt, pi) => (
                              <li key={pi} className="flex items-start gap-3">
                                <span className={`mt-2 size-1.5 shrink-0 rounded-full ${color} opacity-70`} />
                                <div
                                  className="flex-1 text-[14.5px] leading-7 text-foreground/85 prose prose-sm dark:prose-invert max-w-none
                                    prose-strong:font-semibold prose-strong:text-foreground
                                    prose-code:text-[12px] prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                                    [&_mark]:bg-yellow-200/70 dark:[&_mark]:bg-yellow-900/40 [&_mark]:rounded [&_mark]:px-0.5"
                                  dangerouslySetInnerHTML={{ __html: formatMathAndMarkdown(pt) }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {sub.recap && sub.recap.length > 0 && (
                    <div className="mt-8 rounded-2xl border border-border bg-muted/20 overflow-hidden">
                      <div className="flex items-center gap-2 border-b border-border/50 bg-muted/40 px-4 py-3">
                        <HelpCircle className="size-4 text-primary shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground">Exam Practice</span>
                      </div>
                      <div className="p-4 space-y-4">
                        {sub.recap.map((q, qi) => (
                          <div key={qi} className="space-y-1.5">
                            <p className="text-[14px] font-semibold text-foreground leading-snug">
                              <span className={`inline-flex size-5 mr-2 items-center justify-center rounded text-[10px] font-black text-white ${color}`}>{qi + 1}</span>
                              {q}
                            </p>
                            <button
                              type="button"
                              onClick={() => toggleRevealAnswer(si * 100 + qi)}
                              className="ml-7 text-[12px] font-semibold text-primary hover:underline flex items-center gap-1"
                            >
                              {revealedAnswers[si * 100 + qi] ? "Hide hint" : "Examiner hint"}
                              <ChevronDown className={`size-3 transition-transform ${revealedAnswers[si * 100 + qi] ? "rotate-180" : ""}`} />
                            </button>
                            {revealedAnswers[si * 100 + qi] && (
                              <div className="ml-7 rounded-lg bg-primary/5 border border-primary/20 px-3 py-2 text-[12.5px] text-foreground/80 leading-relaxed animate-in fade-in">
                                Use precise Cambridge terminology. State the definition, describe the mechanism step-by-step, give a named example. For "Explain" always add a causal <em>because</em> clause.
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {masteryPercentage >= 100 && (
            <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/8 to-teal-500/8 p-8 text-center space-y-3">
              <Trophy className="size-10 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-black text-foreground">Chapter {chapter.number} Complete</h3>
              <p className="text-sm text-muted-foreground">Now try past paper questions to solidify this knowledge.</p>
            </div>
          )}

          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-border pt-8">
            <button
              type="button"
              onClick={hasPrev ? onPrev : onBack}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="size-4" />
              {hasPrev ? `Chapter ${allChapters[idx - 1]?.number}` : "All Chapters"}
            </button>
            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                className={`flex items-center justify-center gap-2 rounded-xl ${color} px-5 py-3 text-sm font-bold text-white shadow-sm hover:opacity-90 transition-opacity`}
              >
                Ch.{allChapters[idx + 1]?.number}: {allChapters[idx + 1]?.title}
                <ChevronRight className="size-4" />
              </button>
            )}
          </div>
        </article>
      </div>
      {/* Floating lecture bar */}
      {isLectureActive && (
        <div className="fixed bottom-0 inset-x-0 sm:bottom-4 sm:inset-x-4 sm:max-w-xl sm:mx-auto z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="relative overflow-hidden rounded-t-2xl sm:rounded-2xl border-t sm:border border-black/10 dark:border-white/10 bg-background/98 backdrop-blur-xl shadow-2xl px-4 pt-3 pb-4">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-muted/40">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${Math.min(100, (elapsedSeconds / TOTAL_LECTURE_SECONDS) * 100)}%` }} />
            </div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="size-9 shrink-0 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                {isVoiceLoading ? <Loader2 className="size-4 animate-spin" /> : isPlaying ? <Volume2 className="size-4" /> : <Pause className="size-4" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Yumna Voice · {formatTime(elapsedSeconds)} / 20:00</p>
                <p className="text-xs font-medium text-foreground truncate">{lectureSectionsRef.current[lectureSectionIdx]?.title || chapter.title}</p>
              </div>
              <button type="button" onClick={handleStop} className="size-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-rose-500 transition-colors">
                <X className="size-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={handlePrevSection} disabled={lectureSectionIdx === 0} className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"><SkipBack className="size-4" /></button>
              {isVoiceLoading ? (
                <button type="button" disabled className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center cursor-wait"><Loader2 className="size-4 animate-spin" /></button>
              ) : isPaused ? (
                <button type="button" onClick={handleResume} className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md"><Play className="size-4 fill-current ml-0.5" /></button>
              ) : (
                <button type="button" onClick={handlePause} className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md"><Pause className="size-4 fill-current" /></button>
              )}
              <button type="button" onClick={handleNextSection} disabled={lectureSectionIdx === lectureSectionsRef.current.length - 1} className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"><SkipForward className="size-4" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Horizontal Line Row Component (Matches syllabus & past-questions line UI) ─

function SubjectNoteRow({
  subject,
  onSelectChapter,
}: {
  subject: SubjectNotes;
  onSelectChapter: (c: Chapter) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/80 last:border-b-0">
      {/* Clickable horizontal line row */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 py-3.5 px-4 sm:px-0 text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
      >
        <ChevronRight
          className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-90 text-foreground" : ""}`}
        />
        <div className={`size-2.5 rounded-full ${subject.color}`} />
        <span className="font-bold text-foreground">{subject.name}</span>
        <span className="font-mono text-xs">{subject.code}</span>
        <span className="text-xs">
          {subject.chapters.length} comprehensive chapter{subject.chapters.length > 1 ? "s" : ""}
        </span>
        <div className="flex-1" />
        <span className="text-xs font-semibold text-muted-foreground/70">
          {open ? "Hide chapters" : "View chapters"}
        </span>
      </button>

      {/* Expanded chapter list */}
      {open && (
        <div className="pb-3 pt-1 -mx-4 sm:mx-0 sm:pl-8 space-y-px">
          {subject.chapters.map((ch) => (
            <button
              key={ch.number}
              type="button"
              onClick={() => onSelectChapter(ch)}
              className="flex w-full items-center gap-3 border-b border-border/50 last:border-b-0 px-4 py-3 text-left transition-colors hover:bg-muted/40"
            >
              {/* Chapter number */}
              <div
                className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${subject.color} text-white`}
              >
                {ch.number}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {ch.title}
                </p>
                <p className="truncate text-xs text-muted-foreground mt-0.5">
                  {ch.subheadings.length} sections · {ch.subheadings.map((s) => s.title).slice(0, 3).join(", ")}...
                </p>
              </div>

              <span className="text-xs font-semibold text-muted-foreground">
                Read →
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Syllabus Notes Page ─────────────────────────────────────────────────

function SyllabusNotesPage() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectNotes | null>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sciences", "Mathematics", "Languages", "English", "Business & Economics", "Humanities", "Technology"];

  const getSubjectCategory = (code: string): string => {
    if (["0610", "0620", "0625", "0680", "0697", "0654", "0653", "0617"].includes(code)) return "Sciences";
    if (["0580", "0606"].includes(code)) return "Mathematics";
    if (["0520", "0530", "0504", "0525", "0508", "0480"].includes(code)) return "Languages";
    if (["0500", "0510", "0475", "0408"].includes(code)) return "English";
    if (["0455", "0450", "0452", "0454"].includes(code)) return "Business & Economics";
    if (["0470", "0460", "0495", "0490", "0471", "0457", "0478", "0413", "0453"].includes(code)) return "Humanities";
    if (["0417", "0478", "0445", "0648", "0400", "0410", "0411", "0573"].includes(code)) return "Technology";
    return "Sciences";
  };

  const filtered = SYLLABUS_NOTES.filter((s) => {
    const matchCat = activeCategory === "All" || getSubjectCategory(s.code) === activeCategory;
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.code.includes(search);
    return matchCat && matchSearch;
  });

  // Group by category like syllabus.tsx
  const grouped = categories
    .filter((c) => c !== "All")
    .map((cat) => ({
      cat,
      subjects: filtered.filter((s) => getSubjectCategory(s.code) === cat),
    }))
    .filter((g) => g.subjects.length > 0);

  const openNext = () => {
    if (!selectedSubject || !activeChapter) return;
    const idx = selectedSubject.chapters.findIndex((c) => c.number === activeChapter.number);
    const nextCh = selectedSubject.chapters[idx + 1];
    if (!nextCh) return;
    setActiveChapter(nextCh);
  };

  const openPrev = () => {
    if (!selectedSubject || !activeChapter) return;
    const idx = selectedSubject.chapters.findIndex((c) => c.number === activeChapter.number);
    if (idx > 0) {
      setActiveChapter(selectedSubject.chapters[idx - 1]!);
    }
  };

  return (
    <>
      {activeChapter && selectedSubject && (
        <ChapterDoc
          chapter={activeChapter}
          allChapters={selectedSubject.chapters}
          color={selectedSubject.color}
          subjectId={selectedSubject.id}
          onBack={() => setActiveChapter(null)}
          onNext={openNext}
          onPrev={openPrev}
        />
      )}

      <DashboardLayout crumbs={[{ label: "Course" }, { label: "Syllabus Notes" }]}>
        <div className="w-full py-2">
          {/* Hero banner */}
          <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-lavender/60 via-lilac/40 to-mint/50 px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Cambridge IGCSE
                </p>
                <h1 className="mt-1 font-serif text-3xl font-bold sm:text-4xl text-foreground">
                  Syllabus Notes
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {SYLLABUS_NOTES.length} subjects · Comprehensive chapter breakdowns · Full Cambridge IGCSE coverage
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-2xl bg-card/70 px-5 py-3 backdrop-blur shadow-sm">
                <BookOpen className="size-5 text-muted-foreground" aria-hidden />
                <div>
                  <p className="text-xl font-bold">{SYLLABUS_NOTES.length}</p>
                  <p className="text-xs text-muted-foreground">Subjects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search + Category Filter Bar */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search subject or code..."
                className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground/40 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background shadow-sm"
                      : "border border-border/80 bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Subjects List */}
          <div className="rounded-none sm:rounded-3xl border-y sm:border border-border bg-card sm:px-6 py-4 shadow-sm -mx-4 sm:mx-0">
            {grouped.map(({ cat, subjects }) => (
              <div key={cat} className="mb-6 last:mb-0">
                <div className="flex items-center gap-2 border-b border-border pb-2 pt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground px-4 sm:px-0">
                  <span className={`size-2 rounded-full ${catDot[cat] ?? "bg-foreground"}`} />
                  <span>{cat}</span>
                  <span className="font-normal text-muted-foreground/60">({subjects.length})</span>
                </div>

                <div className="divide-y divide-border/60">
                  {subjects.map((sub) => (
                    <SubjectNoteRow
                      key={sub.id}
                      subject={sub}
                      onSelectChapter={(ch) => {
                        setSelectedSubject(sub);
                        setActiveChapter(ch);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
