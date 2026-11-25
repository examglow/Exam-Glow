import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Crown,
  FileText,
  ClipboardCheck,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Mic,
  NotebookTabs,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Settings,
  Sparkles,
  X,
} from "lucide-react";

import logoMark from "@/assets/logo-mark.png";
import { readProfile, type OnboardingProfile } from "@/lib/onboarding";
import { markLoggedOut } from "@/lib/auth";
import { useAppLayout } from "@/lib/app-layout-context";
import { PaywallModal } from "@/components/paywall-modal";

const primaryItems = [
  { label: "Home", to: "/home", Icon: Home },
  { label: "Notes", to: "/notes", Icon: FileText },
  { label: "Calendar", to: "/calendar", Icon: CalendarDays },
] as const;

const studyItems = [
  { label: "Study Plan", to: "/study-plan", Icon: BookOpen },
  { label: "Chat", to: "/chat", Icon: MessageCircle },
  { label: "Record Lecture", to: "/record-lecture", Icon: Mic },
] as const;

const practiceItems = [
  { label: "Quizzes & Tests", to: "/test", Icon: ClipboardCheck },
  { label: "Flashcards", to: "/flashcards", Icon: NotebookTabs },
  { label: "Assignments", to: "/assignments", Icon: FileText },
] as const;


const courseItems = [
  { label: "Courses", to: "/syllabus-notes", Icon: NotebookTabs },
] as const;

type NavItem = (typeof primaryItems)[number] | (typeof studyItems)[number] | (typeof practiceItems)[number] | (typeof courseItems)[number];

export function DashboardSidebar() {
  const { sidebarCollapsed: layoutCollapsed, setSidebarCollapsed } = useAppLayout();
  const collapsed = layoutCollapsed;
  const setCollapsed = (val: boolean | ((prev: boolean) => boolean)) => {
    if (typeof val === "function") {
      setSidebarCollapsed(val(layoutCollapsed));
    } else {
      setSidebarCollapsed(val);
    }
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem("sidebar.practiceOpen");
    return saved === null ? true : saved === "true";
  });
  const [user, setUser] = useState<{ name: string; email: string }>({ name: "Student", email: "" });
  const [profile, setProfile] = useState<OnboardingProfile>({});
  const [googlePicture, setGooglePicture] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);

  useEffect(() => {
    try {
      const p = readProfile();
      setProfile(p);
      setUser({ name: p.name || "Student", email: p.email || "" });
      const pic = localStorage.getItem("examglow.google_picture");
      if (pic) setGooglePicture(pic);
      if (sessionStorage.getItem("examglow.show_upgrade_on_login") === "true") {
        sessionStorage.removeItem("examglow.show_upgrade_on_login");
        setPaywallOpen(true);
      }
    } catch {}
  }, []);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  // Persist practiceOpen to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("sidebar.practiceOpen", String(practiceOpen));
    } catch {}
  }, [practiceOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const navItem = ({ label, to, Icon }: NavItem, inset = false, mobile = false) => {
    const active = pathname === to;
    const showLabels = mobile || !collapsed;
    return (
      <Link
        key={label}
        to={to}
        title={!showLabels ? label : undefined}
        onClick={() => setMobileOpen(false)}
        className={`group flex h-[33px] items-center gap-3 rounded-lg px-2.5 text-[14px] transition-colors ${
          inset && showLabels ? "pl-2.5" : ""
        } ${active ? "bg-sidebar-active font-medium text-sidebar-foreground shadow-[0_1px_2px_oklch(0_0_0/0.08)]" : "text-sidebar-foreground/85 hover:bg-sidebar-hover hover:text-sidebar-foreground"}`}
      >
        <Icon className="size-[17px] shrink-0" strokeWidth={1.65} aria-hidden />
        {showLabels && <span className="truncate">{label}</span>}
      </Link>
    );
  };

  const sectionLabel = (label: string, show: boolean) =>
    show ? (
      <p className="px-2 pb-1.5 pt-2 text-[11px] font-medium uppercase tracking-[0.06em] text-sidebar-muted">{label}</p>
    ) : (
      <div className="mx-auto my-2 h-px w-6 bg-sidebar-border" />
    );

  const renderSidebar = (mobile = false) => {
    const showLabels = mobile || !collapsed;
    return (
    <aside
      className={`flex h-dvh shrink-0 flex-col overflow-hidden bg-sidebar text-sidebar-foreground ${
        mobile ? "w-full" : `transition-[width] duration-300 ${collapsed ? "w-[68px]" : "w-[244px]"}`
      }`}
    >
      <div className="px-4 pt-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
          <Link to="/home" className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-lg bg-sidebar-accent p-1">
              <img src={logoMark} alt="ExamGlow logo" width={26} height={26} className="size-[26px] rounded-md" />
            </span>
            {showLabels && (
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-[15px] font-semibold">ExamGlow ™</span>
              </span>
            )}
          </Link>
          {mobile ? (
            <button type="button" onClick={() => setMobileOpen(false)} className="flex size-8 items-center justify-center rounded-lg text-sidebar-muted hover:bg-sidebar-hover" aria-label="Close navigation">
              <X className="size-5" />
            </button>
          ) : (
            <button type="button" onClick={() => setCollapsed((v) => !v)} className="hidden size-7 items-center justify-center rounded-md text-sidebar-muted transition-colors hover:bg-sidebar-hover hover:text-sidebar-foreground md:flex" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} title={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
              {collapsed ? <PanelLeftOpen className="size-4" /> : <ChevronsUpDown className="size-4" />}
            </button>
          )}
        </div>
        {showLabels && (
          <div className="mt-4 flex h-[31px] items-center gap-2 rounded-lg bg-sidebar-hover px-2.5 text-sidebar-muted">
            <Search className="size-4" aria-hidden />
            <span className="flex-1 text-[14px]">Search</span>
            <kbd className="text-[12px] font-sans">⌘F</kbd>
          </div>
        )}
      </div>

      <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4 pt-3">
        <nav className="space-y-0.5" aria-label="Main navigation">
          {sectionLabel("Main menu", showLabels)}
          {primaryItems.map((item) => navItem(item, false, mobile))}
        </nav>
        <nav className="mt-3 space-y-0.5" aria-label="Study navigation">
          {sectionLabel("Study", showLabels)}
          {studyItems.map((item) => navItem(item, false, mobile))}
        </nav>
        <div className="mt-3">
          <button type="button" onClick={() => setPracticeOpen((v) => !v)} className="flex w-full items-center justify-between px-2 pb-1.5 pt-2 text-left">
            {showLabels ? (
              <>
                <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-sidebar-muted">Practice</span>
                <ChevronDown className={`size-3.5 text-sidebar-muted transition-transform duration-200 ${practiceOpen ? "" : "-rotate-90"}`} aria-hidden />
              </>
            ) : (
              <span className="mx-auto h-px w-6 bg-sidebar-border" />
            )}
          </button>
          {(!showLabels || practiceOpen) && (
            <nav className="space-y-0.5" aria-label="Practice and activities">
              {practiceItems.map((item) => navItem(item, true, mobile))}
            </nav>
          )}
        </div>
        <nav className="mt-3 space-y-0.5" aria-label="Course navigation">
          {sectionLabel("Course", showLabels)}
          {courseItems.map((item) => navItem(item, false, mobile))}
        </nav>
      </div>

      <div className="relative mx-3 border-t border-sidebar-border py-3">
        {/* Slide-out Menu */}
        {menuOpen && (
          <>
            {/* Click-outside backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
              onClick={() => setMenuOpen(false)}
            />
            <div
              className={`absolute bottom-full mb-2 z-50 overflow-hidden rounded-2xl border border-border bg-card p-2.5 text-foreground shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 ${
                collapsed && !mobile ? "left-0 w-64" : "left-0 right-0"
              }`}
            >
              {/* User header inside slide-out */}
              <div className="flex items-center gap-2.5 px-2 py-2 border-b border-border/70">
                {googlePicture ? (
                  <img
                    src={googlePicture}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="size-9 rounded-full object-cover ring-1 ring-border shrink-0"
                  />
                ) : (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-sm font-bold text-sidebar-accent-foreground">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className="truncate text-xs font-bold text-foreground">{user.name}</p>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                        profile.plan && profile.plan !== "free"
                          ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {profile.plan && profile.plan !== "free" ? "Pro" : "Free"}
                    </span>
                  </div>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {user.email || "Student Account"}
                  </p>
                </div>
              </div>

              {/* Upgrade Button */}
              <div className="pt-2 pb-1">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setPaywallOpen(true);
                  }}
                  className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 px-3 py-2 text-left text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:brightness-105 active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white/20 text-white">
                      <Crown className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight flex items-center gap-1">
                        Upgrade Plan
                        <Sparkles className="size-3 text-amber-200" />
                      </p>
                      <p className="text-[10px] text-amber-100 font-normal leading-tight">PayPal & Cards</p>
                    </div>
                  </div>
                  <ChevronRight className="size-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Settings Button */}
              <Link
                to="/settings"
                onClick={() => {
                  setMenuOpen(false);
                  if (mobile) setMobileOpen(false);
                }}
                className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-foreground hover:bg-secondary/70 transition-colors"
              >
                <Settings className="size-4 text-muted-foreground" />
                <span>Settings & Preferences</span>
              </Link>

              {/* Sign Out Button */}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  if (confirm("Are you sure you want to sign out?")) {
                    markLoggedOut();
                    window.location.href = "/";
                  }
                }}
                className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
              >
                <LogOut className="size-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </>
        )}

        {/* Bottom Profile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex w-full items-center gap-2.5 rounded-xl p-1.5 transition-colors text-left hover:bg-sidebar-hover cursor-pointer ${
            menuOpen ? "bg-sidebar-hover" : ""
          }`}
          aria-expanded={menuOpen}
          aria-label="User account menu"
        >
          {googlePicture ? (
            <img
              src={googlePicture}
              alt={user.name}
              referrerPolicy="no-referrer"
              className="size-8 shrink-0 rounded-full object-cover ring-1 ring-sidebar-border"
            />
          ) : (
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-[13px] font-semibold text-sidebar-accent-foreground">
              {user.name.charAt(0).toUpperCase()}
            </span>
          )}

          {showLabels && (
            <div className="min-w-0 flex-1 leading-tight">
              <span className="block truncate text-[13px] font-semibold">{user.name}</span>
              <span className="block truncate text-[11px] text-sidebar-muted">
                {user.email || (profile.plan && profile.plan !== "free" ? "Pro Member" : "Free Plan")}
              </span>
            </div>
          )}

          {showLabels && (
            <ChevronsUpDown className="size-3.5 shrink-0 text-sidebar-muted" />
          )}
        </button>
      </div>
    </aside>
  );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-3 top-3 z-40 flex size-9 items-center justify-center rounded-xl border border-border/60 bg-background/90 text-foreground shadow-sm backdrop-blur md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="size-4" />
      </button>
      <div className="hidden md:block">{renderSidebar()}</div>
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-overlay transition-opacity duration-300 motion-reduce:transition-none ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {renderSidebar(true)}
        </div>
      </div>
      <PaywallModal open={paywallOpen} onClose={() => setPaywallOpen(false)} />
    </>
  );
}