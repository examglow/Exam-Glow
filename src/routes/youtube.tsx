import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, TrendingUp, BookOpen, FlaskConical, Calculator, Globe, Music, Atom } from "lucide-react";

export const Route = createFileRoute("/youtube")({
  component: YouTubePage,
});

const CATEGORIES = [
  { label: "All", query: "study education" },
  { label: "Trending", query: "trending education 2024" },
  { label: "Biology", query: "IGCSE biology revision" },
  { label: "Chemistry", query: "IGCSE chemistry revision" },
  { label: "Physics", query: "IGCSE physics revision" },
  { label: "Mathematics", query: "IGCSE maths revision" },
  { label: "English", query: "IGCSE english revision" },
  { label: "History", query: "IGCSE history revision" },
];

function YouTubePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [iframeSrc, setIframeSrc] = useState(() => {
    // Default: YouTube homepage embedded
    return buildEmbedUrl("study education");
  });

  function buildEmbedUrl(query: string) {
    const encoded = encodeURIComponent(query);
    return `https://www.youtube.com/embed?listType=search&list=${encoded}&autoplay=0`;
  }

  function buildSearchUrl(query: string) {
    const encoded = encodeURIComponent(query);
    return `https://www.youtube.com/results?search_query=${encoded}`;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setActiveCategory("");
    // Open full YouTube search in the iframe via embed search
    setIframeSrc(buildEmbedUrl(searchQuery));
  }

  function handleCategory(cat: { label: string; query: string }) {
    setActiveCategory(cat.label);
    setSearchQuery("");
    setIframeSrc(buildEmbedUrl(cat.query));
  }

  return (
    <div className="flex h-dvh flex-col bg-background text-foreground">
      {/* Top bar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-border bg-card px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-red-600">
            <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
            </svg>
          </div>
          <span className="text-[16px] font-bold">YouTube</span>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2 max-w-xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search YouTube..."
              className="w-full rounded-full border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Open in YouTube */}
        <a
          href={searchQuery ? buildSearchUrl(searchQuery) : "https://www.youtube.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-red-500 hover:text-red-500 transition-colors"
        >
          Open in YouTube ↗
        </a>
      </div>

      {/* Category pills */}
      <div className="scrollbar-none flex shrink-0 gap-2 overflow-x-auto border-b border-border bg-card px-4 py-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            type="button"
            onClick={() => handleCategory(cat)}
            className={`shrink-0 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat.label
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* YouTube iframe — full height */}
      <div className="relative min-h-0 flex-1">
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="YouTube"
        />
      </div>
    </div>
  );
}
