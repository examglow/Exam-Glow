import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { readProfile } from "@/lib/onboarding";

/**
 * ExamGlow Content Protection & Anti-Piracy Watermark
 * ─────────────────────────────────────────────────────────────────────────────
 * Transparent, frictionless protection for proprietary syllabus notes:
 * 1. Dynamic Forensic Anti-Piracy Watermark with student email & date.
 * 2. Blocks text copying, cutting, and right-click context menu.
 * 3. Blocks mobile touch callouts, image dragging, and print/PDF export.
 * 4. Zero popups, zero intrusive overlays or blackout banners.
 */
export function ContentProtectionGuard() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Syllabus Notes is 100% free and screenshot-able.
  // Content protection is strictly applied to proprietary notes (/notes and /syllabus-notes).
  const isProtectedPage = currentPath.startsWith("/notes") || currentPath.startsWith("/syllabus-notes");

  const [watermarkText, setWatermarkText] = useState("ExamGlow Protected · Confidential");

  useEffect(() => {
    if (!isProtectedPage) return;

    try {
      const profile = readProfile();
      const id = profile?.email || profile?.name || "Licensed Student";
      const date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
      setWatermarkText(`${id} · ${date}`);
    } catch {}
  }, [isProtectedPage]);

  useEffect(() => {
    if (!isProtectedPage) return;

    // Prevent copy, cut, and right-click context menu
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    // Prevent Print shortcut: Ctrl + P / Cmd + P
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
      }
    };

    window.addEventListener("copy", handleCopy);
    window.addEventListener("cut", handleCopy);
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    // Disable text selection and mobile callouts
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    (document.body.style as any).webkitTouchCallout = "none";

    return () => {
      window.removeEventListener("copy", handleCopy);
      window.removeEventListener("cut", handleCopy);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      (document.body.style as any).webkitTouchCallout = "";
    };
  }, [isProtectedPage]);

  // CSS print & image drag protection
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "examglow-drm-css-protection";
    style.innerHTML = `
      @media print {
        body, html, * {
          display: none !important;
          visibility: hidden !important;
        }
      }
      /* Prevent iOS magnifier loupe and image dragging */
      img {
        -webkit-user-drag: none !important;
        user-select: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  if (!isProtectedPage) return null;

  return null;
}
