import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Highlighter,
  List,
  ListOrdered,
  ListTodo,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Undo2,
  Redo2,
  Plus,
  Trash2,
  Search,
  Maximize2,
  Minimize2,
  Printer,
  Download,
  Copy,
  ChevronDown,
  Check,
  FolderOpen,
  FileText,
  Sparkles,
  BookOpen,
  Columns,
  Minus,
  Table,
  CheckSquare,
  Clock,
  Calendar as CalendarIcon,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-page";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Study Word Processor & Notes | ExamGlow" },
      { name: "description", content: "Professional WordPress-style study document editor and revision notes." },
    ],
  }),
  component: NotesEditorPage,
});

type NoteItem = {
  id: string;
  title: string;
  updatedAt: number;
  content: string;
  category?: string;
};

const DEFAULT_NOTE: NoteItem = {
  id: "note-1",
  title: "Cell Division & Meiosis Summary",
  updatedAt: Date.now(),
  category: "Biology",
  content: `<h1>Cell Division &amp; Meiosis Summary</h1>
<p><strong>Subject:</strong> Biology (0610) &nbsp;&bull;&nbsp; <strong>Chapter:</strong> 3.2 &nbsp;&bull;&nbsp; <strong>Date:</strong> Recent</p>
<hr/>
<h2>1. Overview &amp; Significance</h2>
<p>Meiosis is a specialized form of nuclear division that reduces the chromosome number by half, producing four genetically diverse haploid daughter cells (gametes). It ensures chromosomal stability across generations and introduces essential variation.</p>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 8px; margin: 16px 0;">
  <strong style="color: #1d4ed8;">Key Examination Takeaway:</strong>
  <p style="margin: 4px 0 0 0; color: #1e40af; font-size: 14px;">Always emphasize that crossing over happens during <em>Prophase I</em> and independent assortment occurs in <em>Metaphase I</em>.</p>
</div>

<h2>2. Core Differences: Mitosis vs Meiosis</h2>
<ul>
  <li><strong>Mitosis:</strong> Produces 2 identical diploid cells for growth and repair.</li>
  <li><strong>Meiosis:</strong> Produces 4 non-identical haploid gametes for sexual reproduction.</li>
  <li><strong>Genetic Diversity:</strong> Generated via crossing over of non-sister chromatids and random orientation of bivalents.</li>
</ul>

<h2>3. Key Definitions to Memorize</h2>
<p><strong>Homologous Chromosomes:</strong> Chromosome pairs of the same length, centromere position, and staining pattern possessing genes for the same traits at corresponding loci.</p>
<p><strong>Haploid (n):</strong> A cell or nucleus having a single set of unpaired chromosomes (23 in humans).</p>`,
};

const NOTE_TEMPLATES = [
  {
    name: "Cornell Note System",
    description: "Cues, detailed notes, and bottom summary",
    html: `<h1>Cornell Study Notes: [Topic Name]</h1>
<p style="color:#64748b; font-size:13px;">Subject: ____________ | Date: ____________ | Goal: ____________</p>
<hr/>
<div style="display:grid; grid-template-columns: 1fr 2fr; gap: 20px; margin-top: 16px;">
  <div style="background:#f8fafc; padding:14px; border-radius:10px; border:1px solid #e2e8f0;">
    <h3 style="margin-top:0; font-size:14px; color:#0f172a;">Recall Cues &amp; Questions</h3>
    <ul>
      <li>What is the core definition?</li>
      <li>Key formula / rule?</li>
      <li>Why does this process occur?</li>
      <li>Common exam pitfall?</li>
    </ul>
  </div>
  <div>
    <h3 style="margin-top:0; font-size:14px; color:#0f172a;">Lecture &amp; Text Notes</h3>
    <p>Record extensive details here during study. Use bullet points, bold key terms, and write formulas clearly.</p>
    <ul>
      <li>Point 1: </li>
      <li>Point 2: </li>
      <li>Point 3: </li>
    </ul>
  </div>
</div>
<div style="margin-top:20px; background:#eff6ff; padding:14px; border-radius:10px; border-left:4px solid #3b82f6;">
  <strong style="color:#1e40af;">Summary (In your own words):</strong>
  <p style="margin:6px 0 0; color:#1e3a8a;">Synthesize the main concept in 2–3 concise sentences to solidify recall.</p>
</div>`,
  },
  {
    name: "Past Paper Answer Plan",
    description: "Structured essay & structured question breakdown",
    html: `<h1>Essay &amp; Exam Answer Plan: [Question]</h1>
<p style="color:#64748b; font-size:13px;">Exam Board: Cambridge | Max Marks: 10–15 | Time: 20 mins</p>
<hr/>
<h2>1. Introduction &amp; Thesis (2 marks)</h2>
<p>Define key terms from question. State your definitive thesis roadmap.</p>

<h2>2. Argument 1 / Primary Factor (4 marks)</h2>
<p><strong>Point:</strong> State primary argument clearly.<br/><strong>Explanation:</strong> Explain cause-and-effect mechanism.<br/><strong>Evidence:</strong> Real-world case study or empirical syllabus data.<br/><strong>Link:</strong> Tie back to thesis.</p>

<h2>3. Argument 2 / Counter-Perspective (4 marks)</h2>
<p><strong>Point:</strong> Contrast with alternative perspective.<br/><strong>Evaluation:</strong> Highlight limitations or assumptions.</p>

<h2>4. Evaluative Conclusion (3 marks)</h2>
<p>Synthesize which factor is decisive and provide justified verdict.</p>`,
  },
  {
    name: "Formula & Vocabulary Sheet",
    description: "Definitions, variables, units, and rules",
    html: `<h1>Essential Formulae &amp; Definitions: [Unit]</h1>
<hr/>
<h2>Core Definitions</h2>
<p><strong>Term 1:</strong> Precise mark-scheme definition here.</p>
<p><strong>Term 2:</strong> Precise mark-scheme definition here.</p>
<p><strong>Term 3:</strong> Precise mark-scheme definition here.</p>

<h2>Formula Reference</h2>
<div style="background:#f1f5f9; padding:14px; border-radius:10px; font-family:monospace; margin:14px 0;">
  <strong>Equation:</strong> F = m * a<br/>
  <strong>Variables:</strong> F = Force (Newtons, N), m = Mass (kg), a = Acceleration (m/s²)<br/>
  <strong>Conditions:</strong> Constant mass in inertial frame of reference.
</div>`,
  },
];

const STORAGE_KEY = "examglow.student_notes";

function loadNotes(): NoteItem[] {
  if (typeof window === "undefined") return [DEFAULT_NOTE];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [DEFAULT_NOTE];
    const parsed = JSON.parse(raw) as NoteItem[];
    return parsed.length > 0 ? parsed : [DEFAULT_NOTE];
  } catch {
    return [DEFAULT_NOTE];
  }
}

function saveNotes(notes: NoteItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {}
}

function NotesEditorPage() {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [fullscreen, setFullscreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving">("saved");
  const [searchQuery, setSearchQuery] = useState("");
  const [fontFamily, setFontFamily] = useState("sans");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const editorRef = useRef<HTMLDivElement>(null);
  const saveTimerRef = useRef<any>(null);

  useEffect(() => {
    const loaded = loadNotes();
    setNotes(loaded);
    setActiveId(loaded[0]?.id || DEFAULT_NOTE.id);
  }, []);

  const activeNote = notes.find((n) => n.id === activeId) || notes[0] || DEFAULT_NOTE;

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = activeNote.content || "";
      calculateStats();
    }
  }, [activeId]);

  const calculateStats = () => {
    if (!editorRef.current) return;
    const text = editorRef.current.innerText || "";
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
    setCharCount(text.length);
  };

  const exec = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    triggerAutoSave();
    calculateStats();
  };

  const triggerAutoSave = () => {
    setSaveStatus("saving");
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      if (!editorRef.current) return;
      const html = editorRef.current.innerHTML;
      setNotes((prev) => {
        const next = prev.map((n) =>
          n.id === activeId ? { ...n, content: html, updatedAt: Date.now() } : n
        );
        saveNotes(next);
        return next;
      });
      setSaveStatus("saved");
    }, 500);
  };

  const handleTitleChange = (newTitle: string) => {
    setNotes((prev) => {
      const next = prev.map((n) =>
        n.id === activeId ? { ...n, title: newTitle, updatedAt: Date.now() } : n
      );
      saveNotes(next);
      return next;
    });
  };

  const createNote = () => {
    const newNote: NoteItem = {
      id: `note-${Date.now()}`,
      title: "Untitled Study Document",
      updatedAt: Date.now(),
      category: "General",
      content: `<h1>Untitled Study Document</h1><p>Start drafting your notes or pick a structured template above...</p>`,
    };
    const next = [newNote, ...notes];
    setNotes(next);
    setActiveId(newNote.id);
    saveNotes(next);
  };

  const deleteNote = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (notes.length <= 1) {
      const fresh = [DEFAULT_NOTE];
      setNotes(fresh);
      setActiveId(DEFAULT_NOTE.id);
      saveNotes(fresh);
      return;
    }
    const next = notes.filter((n) => n.id !== id);
    setNotes(next);
    if (id === activeId) {
      setActiveId(next[0]!.id);
    }
    saveNotes(next);
  };

  const insertTemplate = (templateHtml: string) => {
    if (!editorRef.current) return;
    editorRef.current.innerHTML = templateHtml;
    editorRef.current.focus();
    triggerAutoSave();
    calculateStats();
  };

  const insertCallout = (type: "tip" | "warning" | "formula") => {
    let html = "";
    if (type === "tip") {
      html = `<div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 12px 16px; border-radius: 8px; margin: 16px 0;"><strong>💡 Examiner Tip:</strong> Write practical point here...</div><p><br/></p>`;
    } else if (type === "warning") {
      html = `<div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 12px 16px; border-radius: 8px; margin: 16px 0;"><strong>⚠️ Common Mistake:</strong> Avoid confounding these terms...</div><p><br/></p>`;
    } else {
      html = `<div style="background-color: #faf5ff; border-left: 4px solid #a855f7; padding: 12px 16px; border-radius: 8px; margin: 16px 0;"><strong>📐 Formula Definition:</strong> Insert rule and variable units...</div><p><br/></p>`;
    }
    document.execCommand("insertHTML", false, html);
    triggerAutoSave();
  };

  const insertChecklist = () => {
    const html = `<p>&#9744; Key learning objective 1</p><p>&#9744; Key learning objective 2</p><p>&#9744; Key learning objective 3</p><p><br/></p>`;
    document.execCommand("insertHTML", false, html);
    triggerAutoSave();
  };

  const copyAsPlainText = () => {
    if (!editorRef.current) return;
    navigator.clipboard.writeText(editorRef.current.innerText);
    alert("Notes copied to clipboard!");
  };

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout crumbs={[{ label: "Notes" }, { label: activeNote.title }]}>
      <div
        className={`flex flex-col bg-white rounded-3xl border border-border/80 shadow-xs overflow-hidden transition-all ${
          fullscreen ? "fixed inset-0 z-50 rounded-none h-dvh w-dvw" : "min-h-[820px]"
        }`}
      >
        {/* ================= TOP WORDPRESS-STYLE HEADER ================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              title="Toggle Notes Navigator"
            >
              <FolderOpen className="size-3.5 text-gray-500" />
              <span className="hidden sm:inline">Notes ({notes.length})</span>
            </button>

            <input
              type="text"
              value={activeNote.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="font-bold text-base sm:text-lg text-gray-900 bg-transparent focus:outline-none border-b border-transparent focus:border-gray-300 transition truncate max-w-xs sm:max-w-md"
              placeholder="Document Title..."
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Auto-save Status Pill */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              {saveStatus === "saving" ? (
                <>
                  <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Saving draft...</span>
                </>
              ) : (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="text-gray-500">Saved</span>
                </>
              )}
            </div>

            {/* Reading stats */}
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 border-l border-gray-200 pl-3">
              <span>{wordCount} words</span>
              <span>&bull;</span>
              <span>{Math.max(1, Math.ceil(wordCount / 200))} min read</span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5 border-l border-gray-200 pl-3">
              <button
                type="button"
                onClick={copyAsPlainText}
                className="size-8 rounded-lg text-gray-500 hover:bg-gray-100 flex items-center justify-center transition cursor-pointer"
                title="Copy text"
              >
                <Copy className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="size-8 rounded-lg text-gray-500 hover:bg-gray-100 flex items-center justify-center transition cursor-pointer"
                title="Print or Export PDF"
              >
                <Printer className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setFullscreen((v) => !v)}
                className="size-8 rounded-lg text-gray-500 hover:bg-gray-100 flex items-center justify-center transition cursor-pointer"
                title={fullscreen ? "Exit Fullscreen" : "Fullscreen Focus"}
              >
                {fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
              </button>
              <button
                type="button"
                onClick={createNote}
                className="flex items-center gap-1 rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 transition cursor-pointer shadow-xs ml-1"
              >
                <Plus className="size-3.5" />
                <span>New</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= RICH TEXT FORMATTING TOOLBAR ================= */}
        <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-[#FAFBFD] px-4 py-1.5 text-gray-700 select-none">
          {/* History */}
          <div className="flex items-center gap-0.5 pr-1.5 border-r border-gray-200">
            <button
              type="button"
              onClick={() => exec("undo")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Undo (Ctrl+Z)"
            >
              <Undo2 className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("redo")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Redo (Ctrl+Y)"
            >
              <Redo2 className="size-3.5" />
            </button>
          </div>

          {/* Heading Blocks */}
          <div className="flex items-center gap-0.5 px-1.5 border-r border-gray-200">
            <button
              type="button"
              onClick={() => exec("formatBlock", "<p>")}
              className="px-2 py-1 rounded text-xs font-semibold hover:bg-gray-200 text-gray-700"
              title="Paragraph"
            >
              Paragraph
            </button>
            <button
              type="button"
              onClick={() => exec("formatBlock", "<h1>")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xs"
              title="Heading 1"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => exec("formatBlock", "<h2>")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xs"
              title="Heading 2"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => exec("formatBlock", "<h3>")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xs"
              title="Heading 3"
            >
              H3
            </button>
          </div>

          {/* Basic Formats */}
          <div className="flex items-center gap-0.5 px-1.5 border-r border-gray-200">
            <button
              type="button"
              onClick={() => exec("bold")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold"
              title="Bold (Ctrl+B)"
            >
              <Bold className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("italic")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700 italic"
              title="Italic (Ctrl+I)"
            >
              <Italic className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("underline")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700 underline"
              title="Underline (Ctrl+U)"
            >
              <Underline className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("strikeThrough")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700"
              title="Strikethrough"
            >
              <Strikethrough className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("formatBlock", "<pre>")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-700"
              title="Code block"
            >
              <Code className="size-3.5" />
            </button>
          </div>

          {/* Color & Highlight */}
          <div className="flex items-center gap-0.5 px-1.5 border-r border-gray-200">
            <button
              type="button"
              onClick={() => exec("hiliteColor", "#fef08a")}
              className="flex items-center gap-1 px-1.5 py-1 rounded hover:bg-gray-200 text-xs font-medium text-amber-800 bg-amber-100"
              title="Highlight Yellow"
            >
              <Highlighter className="size-3" />
            </button>
            <button
              type="button"
              onClick={() => exec("hiliteColor", "#bbf7d0")}
              className="size-6 rounded bg-emerald-100 hover:bg-emerald-200 border border-emerald-300"
              title="Highlight Green"
            />
            <button
              type="button"
              onClick={() => exec("hiliteColor", "#bae6fd")}
              className="size-6 rounded bg-sky-100 hover:bg-sky-200 border border-sky-300"
              title="Highlight Blue"
            />
            <button
              type="button"
              onClick={() => exec("removeFormat")}
              className="px-1.5 py-1 rounded hover:bg-gray-200 text-[11px] text-gray-500 font-medium"
              title="Clear Highlight"
            >
              Clear
            </button>
          </div>

          {/* Alignment */}
          <div className="flex items-center gap-0.5 px-1.5 border-r border-gray-200">
            <button
              type="button"
              onClick={() => exec("justifyLeft")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Align Left"
            >
              <AlignLeft className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("justifyCenter")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Align Center"
            >
              <AlignCenter className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("justifyRight")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Align Right"
            >
              <AlignRight className="size-3.5" />
            </button>
          </div>

          {/* Lists & Checklists */}
          <div className="flex items-center gap-0.5 px-1.5 border-r border-gray-200">
            <button
              type="button"
              onClick={() => exec("insertUnorderedList")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Bullet List"
            >
              <List className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={() => exec("insertOrderedList")}
              className="size-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600"
              title="Numbered List"
            >
              <ListOrdered className="size-3.5" />
            </button>
            <button
              type="button"
              onClick={insertChecklist}
              className="flex items-center gap-1 px-1.5 py-1 rounded hover:bg-gray-200 text-xs text-gray-700"
              title="Insert Checklist items"
            >
              <CheckSquare className="size-3.5 text-blue-600" />
              <span className="hidden sm:inline text-[11px]">Checklist</span>
            </button>
          </div>

          {/* Callout Inserts */}
          <div className="flex items-center gap-1 pl-1.5">
            <button
              type="button"
              onClick={() => insertCallout("tip")}
              className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-100 transition cursor-pointer"
            >
              + Tip
            </button>
            <button
              type="button"
              onClick={() => insertCallout("warning")}
              className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition cursor-pointer"
            >
              + Pitfall
            </button>
            <button
              type="button"
              onClick={() => insertCallout("formula")}
              className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-semibold hover:bg-purple-100 transition cursor-pointer"
            >
              + Formula
            </button>
          </div>
        </div>

        {/* ================= WORKSPACE BODY: DRAWER + WRITING CANVAS ================= */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Notes Navigator Drawer */}
          {sidebarOpen && (
            <aside className="w-64 sm:w-72 shrink-0 border-r border-gray-200 bg-[#F9FAFB] flex flex-col justify-between">
              <div className="p-3 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documents..."
                    className="w-full rounded-lg border border-gray-200 bg-white pl-8 pr-3 py-1.5 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Note List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredNotes.map((note) => {
                  const isActive = note.id === activeId;
                  const dateStr = new Date(note.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                  return (
                    <div
                      key={note.id}
                      onClick={() => setActiveId(note.id)}
                      className={`group flex items-start justify-between gap-2 p-2.5 rounded-xl cursor-pointer transition ${
                        isActive
                          ? "bg-white text-black shadow-xs border border-gray-200/80 font-semibold"
                          : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <FileText className={`size-3.5 shrink-0 ${isActive ? "text-black" : "text-gray-400"}`} />
                          <h4 className="text-xs truncate">{note.title || "Untitled Document"}</h4>
                        </div>
                        <p className="mt-1 text-[10px] text-gray-400 font-normal pl-5">Edited {dateStr}</p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => deleteNote(note.id, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-rose-500 rounded transition"
                        title="Delete document"
                      >
                        <Trash2 className="size-3" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Study Templates Section */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Document Templates
                </span>
                <div className="space-y-1.5">
                  {NOTE_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.name}
                      type="button"
                      onClick={() => insertTemplate(tmpl.html)}
                      className="w-full text-left p-2 rounded-lg border border-gray-100 hover:border-gray-200 bg-gray-50/50 hover:bg-gray-100/50 transition cursor-pointer text-xs"
                    >
                      <span className="font-semibold text-gray-800 block leading-tight">{tmpl.name}</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5 truncate">{tmpl.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Center Paper Canvas */}
          <main className="flex-1 overflow-y-auto bg-gray-50/60 p-4 sm:p-8 flex justify-center">
            <div className="w-full max-w-[840px] bg-white rounded-2xl border border-gray-200/80 shadow-xs min-h-[720px] p-8 sm:p-14 relative flex flex-col">
              {/* Document Editor Area */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={() => {
                  triggerAutoSave();
                  calculateStats();
                }}
                className={`prose prose-slate max-w-none flex-1 focus:outline-none min-h-[600px] text-gray-800 leading-relaxed text-[15px] ${
                  fontFamily === "serif" ? "font-serif" : fontFamily === "mono" ? "font-mono" : "font-sans"
                }`}
                style={{
                  wordBreak: "break-word",
                }}
              />

              {/* Document Footer */}
              <div className="mt-12 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <span>{wordCount} Words</span>
                  <span>&bull;</span>
                  <span>{charCount} Characters</span>
                </div>
                <div>ExamGlow Word Processor &bull; Auto-sync active</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
}
