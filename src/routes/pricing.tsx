import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Sparkles, Zap, Award, BookOpen, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import {
  saveProfile,
  readProfile,
  getActiveSubscription,
  syncGoogleAccountPlan,
} from "@/lib/onboarding";
import { detectCurrency, formatPrice, type CurrencyInfo } from "@/lib/paypal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Unlock ExamGlow Premium — Cambridge IGCSE & A-Level Prep" },
      { name: "description", content: "Upgrade to ExamGlow Premium. Access complete Cambridge notes, mock exams, and AI voice tutor. Cancel anytime." },
    ],
  }),
  component: PricingPage,
});

const PLAN_META = [
  { id: "weekly" as const, name: "Weekly Plan", per: "/wk", badge: "EXAM CRAM" },
  { id: "termly" as const, name: "3 Months (Term Pass)", per: "/3mo", badge: "MOST POPULAR" },
  { id: "yearly" as const, name: "1 Year Complete Pass", per: "/yr", badge: "BEST VALUE" },
] as const;

type PlanId = (typeof PLAN_META)[number]["id"];

function planSubline(id: PlanId, c: CurrencyInfo): string {
  const p = formatPrice(id, c);
  switch (id) {
    case "weekly":
      return `${p} billed every week · cancel anytime`;
    case "termly":
      return `${p} billed once per 3 months · save 45%`;
    case "yearly":
      return `${p} billed annually · save 65%`;
  }
}

function PricingPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<PlanId>("termly");
  const [currency, setCurrency] = useState<CurrencyInfo | null>(null);
  const [activeSub, setActiveSub] = useState(() => getActiveSubscription());

  useEffect(() => {
    detectCurrency().then(setCurrency);
    const prof = readProfile();
    const email = prof.email;
    const sub = typeof window !== "undefined" ? window.localStorage.getItem("examglow.google_sub") : null;
    if (email || sub) {
      syncGoogleAccountPlan(email || "", sub || undefined).then((synced) => {
        if (synced) {
          const s = getActiveSubscription(synced);
          if (s) setActiveSub(s);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-dvh bg-background px-4 py-6 text-foreground sm:px-6 lg:px-8">
      {/* Top Bar */}
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <button
          type="button"
          onClick={() => navigate({ to: "/home" })}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors shadow-xs"
        >
          <ArrowLeft className="size-4" /> Back to Dashboard
        </button>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="size-3.5" /> 30-Day Money-Back Guarantee
        </span>
      </div>

      <div className="mx-auto max-w-5xl py-10 sm:py-14 text-center">
        <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          Cambridge Exam Prep
        </span>
        <h1 className="mt-3 text-3xl sm:text-5xl font-black text-foreground tracking-tight">
          Upgrade to ExamGlow Premium
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          Full Cambridge syllabus notes for all 40+ subjects, authentic timed mock examination booklets, instant flashcard revision, and AI voice masterclasses.
        </p>

        {activeSub && (
          <div className="mx-auto mt-6 max-w-lg rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-800 dark:text-emerald-300 text-left">
            <span className="font-bold flex items-center gap-1.5 text-sm text-emerald-700 dark:text-emerald-200">
              <ShieldCheck className="size-4 text-emerald-500" /> Active Subscription Found
            </span>
            <p className="mt-1">
              You currently have an active <strong className="text-foreground">{activeSub.planName}</strong> plan until <strong className="text-foreground">{activeSub.formattedExpiry}</strong> ({activeSub.daysRemaining} days remaining).
            </p>
          </div>
        )}

        {/* Plan Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
          {PLAN_META.map((plan) => {
            const isSelected = selected === plan.id;
            const isPopular = plan.id === "termly";

            return (
              <div
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                className={`relative flex flex-col justify-between rounded-3xl border-2 p-6 sm:p-7 cursor-pointer transition-all ${
                  isSelected
                    ? "border-primary bg-primary/[0.03] shadow-lg scale-[1.02]"
                    : "border-border bg-card hover:border-foreground/30 shadow-xs"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-xs ${
                      isPopular
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground text-background"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-foreground">
                      {currency ? formatPrice(plan.id, currency) : "..."}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {plan.per}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {currency ? planSubline(plan.id, currency) : "Detecting local currency..."}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-border/60 pt-5 text-xs text-foreground/85">
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Full syllabus notes &amp; formulas for all 40+ subjects</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Important Definitions chapters with examiner marking keywords</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Unlimited Cambridge mock exam papers &amp; mark schemes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Interactive flashcard deck conversion</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Yumna AI voice masterclasses &amp; chat tutor</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate({ to: "/checkout", search: { plan: plan.id } });
                  }}
                  className={`mt-8 w-full rounded-2xl py-3 text-xs font-bold transition-transform hover:-translate-y-0.5 shadow-xs ${
                    isSelected
                      ? "bg-ink text-ink-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Checkout CTA */}
        <div className="mx-auto mt-10 max-w-md space-y-3">
          <button
            type="button"
            disabled={!currency}
            onClick={() => navigate({ to: "/checkout", search: { plan: selected } })}
            className="w-full rounded-full bg-ink py-4 text-sm font-bold text-ink-foreground transition-transform hover:-translate-y-0.5 shadow-md disabled:opacity-50"
          >
            {currency ? `Proceed to Checkout · ${formatPrice(selected, currency)}` : "Loading pricing..."}
          </button>
          <p className="text-xs text-muted-foreground">
            Instant online access · PayPal, Debit/Credit Card · Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}
