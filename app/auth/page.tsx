"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function AuthPageContent() {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "starter";
  const billing = searchParams.get("billing") || "annual";
  const intent = searchParams.get("intent");
  const oauthError = searchParams.get("error");

  async function handleGoogleSignIn() {
    const next = `/subscription?plan=${encodeURIComponent(plan)}&billing=${encodeURIComponent(billing)}${intent ? `&intent=${encodeURIComponent(intent)}` : ""}`;
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
    const { error } = await createClient().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL
          ? `${process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL}?next=${encodeURIComponent(next)}`
          : redirectTo,
      },
    });

    if (error) {
      router.replace(`/auth?plan=${encodeURIComponent(plan)}&billing=${encodeURIComponent(billing)}&error=oauth`);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="font-display text-2xl tracking-tight">
          Optimus<span className="text-muted-foreground text-xs align-top ml-1">TM</span>
        </Link>

        <div className="mt-12 border border-foreground/10 p-8 sm:p-10">
          <div className="mb-8">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">Welcome to Optimus</p>
            <h1 className="font-display text-4xl tracking-tight">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
            <p className="text-sm text-muted-foreground mt-3">{mode === "signup" ? "Start building with Optimus today." : "Log in to continue to your workspace."}</p>
          </div>

          <div className="grid grid-cols-2 border-b border-foreground/10 mb-8">
            {(["signup", "login"] as const).map((tab) => (
              <button key={tab} type="button" onClick={() => setMode(tab)} className={`pb-3 text-sm font-medium transition-colors ${mode === tab ? "text-foreground border-b-2 border-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {tab === "signup" ? "Sign up" : "Log in"}
              </button>
            ))}
          </div>

          {oauthError && <p role="alert" className="mb-5 border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">Google sign-in could not be completed. Please try again.</p>}

          <button type="button" onClick={handleGoogleSignIn} className="flex h-12 w-full items-center justify-center gap-3 border border-foreground/15 font-medium transition-colors hover:bg-foreground/5">Continue with Google</button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-foreground/10" /><span>or use email</span><span className="h-px flex-1 bg-foreground/10" /></div>

          <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); if (mode === "signup") router.push(`/subscription?plan=${encodeURIComponent(plan)}&billing=${encodeURIComponent(billing)}${intent ? `&intent=${encodeURIComponent(intent)}` : ""}`); }}>
            {mode === "signup" && <label className="block text-sm">Name<input required name="name" className="mt-2 w-full h-12 border border-foreground/15 bg-transparent px-4 outline-none focus:border-foreground" /></label>}
            <label className="block text-sm">Email<input required type="email" name="email" className="mt-2 w-full h-12 border border-foreground/15 bg-transparent px-4 outline-none focus:border-foreground" /></label>
            <label className="block text-sm">Password<input required type="password" name="password" className="mt-2 w-full h-12 border border-foreground/15 bg-transparent px-4 outline-none focus:border-foreground" /></label>
            <button type="submit" className="w-full h-12 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">{mode === "signup" ? "Create account" : "Log in"}</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function AuthPage() {
  return <Suspense fallback={null}><AuthPageContent /></Suspense>;
}
