"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const planLabels: Record<string, string> = {
  starter: "Starter",
  pro: "Pro",
  enterprise: "Enterprise",
};

export default function SubscriptionPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "starter";
  const billing = searchParams.get("billing") || "annual";
  const intent = searchParams.get("intent");
  const planLabel = planLabels[plan] ?? planLabels.starter;

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl border border-foreground/10 p-8 sm:p-12">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
          {intent === "sales" ? "Contact sales" : "Subscription"}
        </p>
        <h1 className="font-display text-4xl tracking-tight">{planLabel} plan selected</h1>
        <p className="mt-4 text-muted-foreground">
          {intent === "sales"
            ? "Tell us about your team and we will help you get started."
            : `Your ${billing} billing preference is ready to continue.`}
        </p>
        <Link href="/" className="inline-flex mt-8 bg-foreground text-background px-6 py-3 text-sm font-medium">
          Back to home
        </Link>
      </div>
    </main>
  );
}
