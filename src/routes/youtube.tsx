import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Search, X, Play, Loader2, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/youtube")({
  component: YouTubePage,
});

const API_KEY_STORAGE = "examglow.youtube_api_key";
const DEFAULT_API_KEY = "AIzaSyDlFA-LCfMNjZ8ZrR0UUMlKsI7dsE34EGs";

const CATEGORIES = [
  { label: "For You", query: "IGCSE revision study" },
  { label: "Biology", query: "IGCSE biology revision" },
  { label: "Chemistry", query: "IGCSE chemistry revision" },
  { label: "Physics", query: "IGCSE physics revision" },
  { label: "Mathematics", query: "IGCSE maths GCSE" },
  { label: "English", query: "IGCSE english language revision" },
  { label: "History", query: "IGCSE history revision" },
  { label: "Computer Science", query: "IGCSE computer science revision" },
  { label: "Economics", query: "IGCSE economics revision" },
];

interface Video {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  duration?: string;
  viewCount?: string;
  published?: string;
  description?: string;
}

async function fetchVideos(query: string, apiKey: string): Promise<Video[]> {
  const encoded = encodeURIComponent(query);
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encoded}&type=video&maxResults=20&relevanceLanguage=en&key=${apiKey}`;

  const searchRes = await fetch(searchUrl);
  if (!searchRes.ok) {
    const err = await searchRes.json();
    throw new Error(err?.error?.message || "YouTube API error");
  }
  const searchData = await searchRes.json();
  const items: Video[] = (searchData.items || []).map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    channel: item.snippet.channelTitle,
    thumbnail:
      item.snippet.thumbnails?.medium?.url ||
      item.snippet.thumbnails?.default?.url ||
      `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
    published: item.snippet.publishedAt
      ? new Date(item.snippet.publishedAt).getFullYear().toString()
      : "",
    description: item.snippet.description,
  }));
  return items;
}

// ── API Key Setup Screen ───────────────────────────────────────────────────────
function SetupScreen({ onSave }: { onSave: (key: string) => void }) {
  const [input, setInput] = useState("");
  const [testing, setTesting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const key = input.trim();
    if (!key) return;
    setTesting(true);
    setError("");
    try {
      await fetchVideos("test", key);
      onSave(key);
    } catch (err: any) {
      setError(err.message || "Invalid API key. Please check and try again.");
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-background px-4 text-foreground">
      <div className="w-full max-w-md space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-red-600 shadow-lg">
            <svg viewBox="0 0 24 24" className="size-9 fill-white" aria-hidden>
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold">Connect YouTube</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter a free YouTube Data API key to browse and search real videos inside ExamGlow.
          </p>
        </div>

        {/* Steps */}
        <div className="rounded-xl border border-border bg-card p-4 text-sm space-y-3">
          <p className="font-semibold text-foreground">How to get a free API key:</p>
          <ol className="space-y-2 text-muted-foreground list-none">
            {[
              <>Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-red-500 underline underline-offset-2">console.cloud.google.com</a></>,
              "Create a new project (or select an existing one)",
              'Search for "YouTube Data API v3" and enable it',
              'Go to Credentials → Create Credentials → API Key',
              "Copy the key and paste it below",
            ].map((step, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-[11px] font-bold text-red-500">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Key input */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Key className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="AIza..."
              className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          {error && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">{error}</p>
          )}
          <button
            type="submit"
            disabled={testing || !input.trim()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60 transition-colors"
          >
            {testing ? <Loader2 className="size-4 animate-spin" /> : null}
            {testing ? "Verifying..." : "Connect YouTube"}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          The free tier gives 10,000 units/day — more than enough for daily use. Your key is stored only on this device.
        </p>
      </div>
    </div>
  );
}

// ── Video Card ─────────────────────────────────────────────────────────────────
function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col gap-2 text-left"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-secondary">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="flex size-11 scale-75 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
            <Play className="size-5 fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-0.5">
        <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-foreground">
          {video.title}
        </p>
        <p className="text-[12px] text-muted-foreground">{video.channel}</p>
        {video.published && (
          <p className="text-[11px] text-muted-foreground/60">{video.published}</p>
        )}
      </div>
    </button>
  );
}

// ── Player Modal ───────────────────────────────────────────────────────────────
function PlayerModal({ video, onClose }: { video: Video; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="line-clamp-2 text-sm font-semibold text-white">{video.title}</p>
            <p className="mt-0.5 text-xs text-white/60">{video.channel}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg border border-white/20 px-2.5 py-1.5 text-xs text-white/70 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="size-3" /> YouTube
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-lg border border-white/20 text-white/70 hover:text-white transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Player */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={video.title}
          />
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
function YouTubePage() {
  const [apiKey, setApiKey] = useState<string>(
    () => localStorage.getItem(API_KEY_STORAGE) || DEFAULT_API_KEY
  );
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].label);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [playing, setPlaying] = useState<Video | null>(null);

  const load = useCallback(
    async (query: string) => {
      if (!apiKey) return;
      setLoading(true);
      setError(null);
      setVideos([]);
      try {
        const results = await fetchVideos(query, apiKey);
        setVideos(results);
      } catch (err: any) {
        setError(err.message || "Failed to load videos.");
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );

  // Load default category on mount / when key is set
  useEffect(() => {
    if (apiKey) load(CATEGORIES[0].query);
  }, [apiKey]);

  function saveKey(key: string) {
    localStorage.setItem(API_KEY_STORAGE, key);
    setApiKey(key);
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setActiveCategory("");
    load(searchInput.trim());
  }

  function handleCategory(cat: { label: string; query: string }) {
    setActiveCategory(cat.label);
    setSearchInput("");
    load(cat.query);
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
            <span className="hidden text-[16px] font-bold sm:block">YouTube</span>
          </div>

          <form onSubmit={handleSearch} className="flex flex-1 items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
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
              className="shrink-0 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60 transition-colors"
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

        {/* Grid */}
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
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const cat = CATEGORIES.find((c) => c.label === activeCategory);
                    load(cat ? cat.query : searchInput);
                  }}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/70 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!loading && !error && videos.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => setPlaying(video)}
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

      {playing && (
        <PlayerModal video={playing} onClose={() => setPlaying(null)} />
      )}
    </>
  );
}
