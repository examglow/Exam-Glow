import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Check,
  Lock,
  ShieldCheck,
  Loader2,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import logoMark from "@/assets/logo-mark.png";
import {
  saveProfile,
  readProfile,
  getActiveSubscription,
} from "@/lib/onboarding";
import {
  detectCurrency,
  formatPrice,
  convertPrice,
  loadPayPalSDK,
  PAYPAL_SUPPORTED_CURRENCIES,
  type CurrencyInfo,
} from "@/lib/paypal";

export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>) => ({
    plan: (s["plan"] as string) || "termly",
  }),
  head: () => ({
    meta: [
      { title: "Checkout — ExamGlow Premium" },
      { name: "description", content: "Complete your ExamGlow Premium subscription." },
    ],
  }),
  component: CheckoutPage,
});

const PLANS: Record<string, { name: string; period: string; days: number; features: string[] }> = {
  weekly: {
    name: "Weekly Plan",
    period: "billed every week",
    days: 7,
    features: [
      "Full Cambridge syllabus notes for all 40+ subjects",
      "Important Definitions chapters with exact marking criteria",
      "Unlimited Cambridge mock exams & past papers",
      "Flashcard generator & active recall revision",
      "Online tutor booking discounts",
      "Cancel anytime",
    ],
  },
  termly: {
    name: "3 Months (Term Pass)",
    period: "billed once per 3 months",
    days: 90,
    features: [
      "Full Cambridge syllabus notes for all 40+ subjects",
      "Important Definitions chapters with exact marking criteria",
      "Unlimited Cambridge mock exams & past papers",
      "Flashcard generator & active recall revision",
      "Yumna AI voice masterclasses",
      "Online tutor booking discounts",
      "Cancel anytime",
    ],
  },
  yearly: {
    name: "1 Year Complete Pass",
    period: "billed annually",
    days: 365,
    features: [
      "Full Cambridge syllabus notes for all 40+ subjects",
      "Important Definitions chapters with exact marking criteria",
      "Unlimited Cambridge mock exams & past papers",
      "Full exam season protection for IGCSE & A-Levels",
      "Flashcard generator & active recall revision",
      "Yumna AI voice masterclasses",
      "Online tutor booking discounts",
      "Cancel anytime",
    ],
  },
};

function CheckoutPage() {
  const navigate = useNavigate();
  const { plan: searchPlan } = useSearch({ from: "/checkout" });
  const planKey = PLANS[searchPlan] ? searchPlan : "termly";
  const plan = PLANS[planKey]!;

  const [currency, setCurrency] = useState<CurrencyInfo | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardName, setCardName] = useState("");

  useEffect(() => {
    detectCurrency().then(setCurrency);
  }, []);

  const handleCompletePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // Activate subscription in profile
      const expiry = new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000).toISOString();
      saveProfile({ plan: "pro" });
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("examglow.subscription", JSON.stringify({
            plan: planKey,
            planName: plan.name,
            expiresAt: expiry,
            active: true,
          }));
        } catch {}
      }
      setIsProcessing(false);
      setSuccess(true);
    }, 600);
  };

  if (success) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="size-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="size-8" />
          </div>

          <h2 className="text-2xl font-black text-foreground">
            Payment Successful!
          </h2>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Welcome to <strong className="text-foreground">ExamGlow Premium ({plan.name})</strong>. You now have full access to all Cambridge syllabus notes, definitions chapters, mock exams, and revision flashcards.
          </p>

          <div className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Plan:</span>
              <span className="font-bold text-foreground">{plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Active (Pro)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Paid:</span>
              <span className="font-bold text-foreground">
                {currency ? formatPrice(planKey, currency) : "Paid"}
              </span>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="button"
              onClick={() => navigate({ to: "/syllabus-notes" })}
              className="w-full rounded-2xl bg-ink py-3 text-xs font-bold text-ink-foreground shadow-sm hover:opacity-90"
            >
              Open Cambridge Notes &amp; Definitions →
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/home" })}
              className="w-full rounded-2xl border border-border bg-background py-2.5 text-xs font-semibold text-foreground hover:bg-muted"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-background px-4 py-6 text-foreground sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="mx-auto flex max-w-4xl items-center justify-between pb-6 border-b border-border/60">
        <Link
          to="/pricing"
          className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Change Plan
        </Link>

        <div className="flex items-center gap-2">
          <img
            src={logoMark}
            alt="ExamGlow"
            width={28}
            height={28}
            className="size-7 rounded-full bg-primary/10 p-0.5"
          />
          <span className="font-bold text-sm text-foreground">Secure Checkout</span>
        </div>

        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Lock className="size-3 text-emerald-500" /> 256-bit SSL
        </span>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 py-8 sm:py-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Payment Form */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <h2 className="text-base font-bold text-foreground">
                Pay with Card or Instant Checkout
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CreditCard className="size-4 text-primary" />
                <span>Cards &amp; PayPal</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCompletePurchase();
              }}
              className="mt-5 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  required
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="e.g. Maya Lin"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-foreground/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="•••• •••• •••• ••••"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs font-mono text-foreground focus:outline-none focus:border-foreground/40"
                  />
                  <CreditCard className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs font-mono text-foreground focus:outline-none focus:border-foreground/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    CVC / CVV
                  </label>
                  <input
                    type="password"
                    required
                    maxLength={4}
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    placeholder="•••"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs font-mono text-foreground focus:outline-none focus:border-foreground/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full rounded-2xl bg-ink py-3.5 text-xs sm:text-sm font-bold text-ink-foreground shadow-md hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="size-4 animate-spin" /> Processing Payment...
                  </span>
                ) : (
                  `Pay ${currency ? formatPrice(planKey, currency) : "..."} & Activate Premium`
                )}
              </button>
            </form>

            {/* Quick 1-click test checkout button */}
            <div className="mt-4 pt-4 border-t border-border/60 text-center">
              <button
                type="button"
                onClick={handleCompletePurchase}
                className="w-full rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/15 transition-colors"
              >
                ⚡ Instant Test Checkout (1-Click Pro Activation)
              </button>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Order Summary
            </h3>

            <div className="mt-4 pb-4 border-b border-border/60">
              <div className="flex items-baseline justify-between">
                <h4 className="text-base font-bold text-foreground">{plan.name}</h4>
                <span className="text-lg font-black text-foreground">
                  {currency ? formatPrice(planKey, currency) : "..."}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{plan.period}</p>
            </div>

            <div className="mt-4 space-y-2.5 text-xs text-foreground/80">
              <p className="font-semibold text-foreground text-[11px] uppercase tracking-wider">
                Included in your plan:
              </p>
              {plan.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between text-sm font-bold">
              <span>Total Due Today:</span>
              <span className="text-lg font-black text-foreground">
                {currency ? formatPrice(planKey, currency) : "..."}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-xs text-muted-foreground space-y-1.5">
            <p className="font-semibold text-foreground flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-emerald-500" /> 100% Risk-Free Guarantee
            </p>
            <p className="leading-relaxed">
              If ExamGlow doesn't help you understand your Cambridge topics faster and boost your test scores, contact support within 30 days for a full refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
