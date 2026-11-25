import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Search, X, Play, Loader2 } from "lucide-react";

export const Route = createFileRoute("/youtube")({
  component: YouTubePage,
});

const CATEGORIES = [
  { label: "For You", query: "IGCSE revision study tips" },
  { label: "Biology", query: "IGCSE biology revision" },
  { label: "Chemistry", query: "IGCSE chemistry revision" },
  { label: "Physics", query: "IGCSE physics revision" },
  { label: "Mathematics", query: "IGCSE maths revision" },
  { label: "English", query: "IGCSE english revision" },
  { label: "History", query: "IGCSE history revision" },
  { label: "Computer Science", query: "IGCSE computer science revision" },
];

interface Video {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  published: string;
}

async function searchYouTube(query: string): Promise<Video[]> {
  const encoded = encodeURIComponent(query);
  // Use the Invidious public API — no key needed, returns real YouTube data
  const instances = [
    "https://iv.datura.network",
    "https://invidious.privacydev.net",
    "https://yt.cdaut.de",
  ];

  for (const base of instances) {
    try {
      const res = await fetch(
        `${base}/api/v1/search?q=${encoded}&type=video&page=1`,
        { signal: AbortSignal.timeout(6000) }
      );
      if (!res.ok) continue;
      const data = await res.json();
      if (!Array.isArray(data)) continue;
      return data.slice(0, 20).map((item: any) => ({
        id: item.videoId,
        title: item.title,
        channel: item.author,
        thumbnail:
          item.videoThumbnails?.find((t: any) => t.quality === "medium")?.url ||
          item.videoThumbnails?.[0]?.url ||
          `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`,
        published: item.publishedText || "",
      }));
    } catch {
      continue;
    }
  }
  throw new Error("All Invidious instances failed");
}

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col gap-2 text-left transition-opacity hover:opacity-90"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-secondary">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex size-12 items-center justify-center rounded-full bg-black/70 text-white">
            <Play className="size-5 fill-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-0.5">
        <p className="line-clamp-2 text-[13px] font-medium leading-snug text-foreground">
          {video.title}
        </p>
        <p className="text-[12px] text-muted-foreground">{video.channel}</p>
        {video.published && (
          <p className="text-[11px] text-muted-foreground/70">{video.published}</p>
        )}
      </div>
    </button>
  );
}

function PlayerModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
        >
          <X className="size-4" /> Close
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="YouTube video player"
          />
        </div>
      </div>
    </div>
  );
}

function YouTubePage() {
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].label);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function fetchVideos(query: string) {
    setLoading(true);
    setError(null);
    setVideos([]);
    try {
      const results = await searchYouTube(query);
      setVideos(results);
    } catch {
      setError("Could not load videos. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  // Load default category on mount
  useEffect(() => {
    fetchVideos(CATEGORIES[0].query);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setActiveCategory("");
    fetchVideos(searchInput.trim());
  }

  function handleCategory(cat: { label: string; query: string }) {
    setActiveCategory(cat.label);
    setSearchInput("");
    fetchVideos(cat.query);
  }

  return (
    <>
      <div className="flex h-dvh flex-col bg-background text-foreground">
        {/* Top bar */}
        <div className="flex shrink-0 items-center gap-3 border-b border-border bg-card px-4 py-3">
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-red-600">
              <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
            </div>
            <span className="text-[16px] font-bold">YouTube</span>
          </div>

          <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search YouTube..."
                className="w-full rounded-full border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60 transition-colors"
            >
              Search
            </button>
          </form>
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
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
          {loading && (
            <div className="flex h-48 items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="size-5 animate-spin" />
              <span className="text-sm">Loading videos...</span>
            </div>
          )}

          {error && !loading && (
            <div className="flex h-48 flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">{error}</p>
              <button
                type="button"
                onClick={() => fetchVideos(activeCategory ? CATEGORIES.find(c => c.label === activeCategory)?.query ?? searchInput : searchInput)}
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && videos.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => setPlayingId(video.id)}
                />
              ))}
            </div>
          )}

          {!loading && !error && videos.length === 0 && (
            <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
              No videos found.
            </div>
          )}
        </div>
      </div>

      {playingId && (
        <PlayerModal videoId={playingId} onClose={() => setPlayingId(null)} />
      )}
    </>
  );
}
