import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useAppLayout, type ThemeMode } from "@/lib/app-layout-context";

/**
 * Slide-out Color Theme Chooser
 * Shows a Color Palette SVG button; on click, the 3 theme buttons (Light, Dark, Pink) slide out!
 */
export function ThemeColorChooser({ className = "" }: { className?: string }) {
  const { themeMode, setThemeMode } = useAppLayout();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const modes: { id: ThemeMode; label: string; icon: typeof Sun }[] = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "pink", label: "Pink", icon: Sparkles },
  ];

  return (
    <div ref={containerRef} className={`relative flex items-center ${className}`}>
      {/* The 3 Theme Options (Slide Out horizontally) */}
      <div
        className={`flex items-center gap-1 overflow-hidden rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ease-out mr-2.5 ${
          open
            ? "max-w-[320px] opacity-100 p-1.5 translate-x-0"
            : "max-w-0 opacity-0 p-0 pointer-events-none translate-x-3 border-transparent"
        } ${
          themeMode === "dark"
            ? "border-[#525252] bg-[#333333]/95 text-white"
            : themeMode === "pink"
            ? "border-[#FBCFE8] bg-[#FFF5F7]/95 text-[#2A171C]"
            : "border-gray-200 bg-white/95 text-gray-800"
        }`}
      >
        {modes.map(({ id, label, icon: Icon }) => {
          const active = themeMode === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setThemeMode(id)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                active
                  ? id === "dark"
                    ? "bg-[#525252] text-white shadow-xs"
                    : id === "pink"
                    ? "bg-[#FFE3E7] text-[#2A171C] shadow-xs"
                    : "bg-blue-600 text-white shadow-xs"
                  : "opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              <Icon className="size-3.5 shrink-0" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Color SVG Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        title={open ? "Close color themes" : "Choose color theme"}
        aria-label="Choose color theme"
        aria-expanded={open}
        className={`size-12 rounded-full border shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
          themeMode === "dark"
            ? "bg-[#333333] border-[#525252] text-white hover:bg-[#3D3D3D]"
            : themeMode === "pink"
            ? "bg-[#FFE3E7] border-[#FBCFE8] text-[#2A171C] hover:bg-[#FCD0D8]"
            : "bg-white border-gray-200 text-blue-600 hover:bg-gray-50"
        }`}
      >
        {/* Color Palette SVG */}
        <svg
          className="size-5.5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
        </svg>
      </button>
    </div>
  );
}
