"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("signup");

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="font-display text-2xl tracking-tight">
          Optimus<span className="text-muted-foreground text-xs align-top ml-1">TM</span>
        </Link>

        <div className="mt-12 border border-foreground/10 p-8 sm:p-10">
          <div className="mb-8">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
              Welcome to Optimus
            </p>
            <h1 className="font-display text-4xl tracking-tight">
              {mode === "signup" ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-sm text-muted-foreground mt-3">
              {mode === "signup" ? "Start building with Optimus today." : "Log in to continue to your workspace."}
            </p>
          </div>

          <div className="grid grid-cols-2 border-b border-foreground/10 mb-8">
            {(["signup", "login"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setMode(tab)}
                className={`pb-3 text-sm font-medium transition-colors ${mode === tab ? "text-foreground border-b-2 border-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {tab === "signup" ? "Sign up" : "Log in"}
              </button>
            ))}
          </div>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            {mode === "signup" && (
              <label className="block text-sm">
                Name
                <input required name="name" className="mt-2 w-full h-12 border border-foreground/15 bg-transparent px-4 outline-none focus:border-foreground" />
              </label>
            )}
            <label className="block text-sm">
              Email
              <input required type="email" name="email" className="mt-2 w-full h-12 border border-foreground/15 bg-transparent px-4 outline-none focus:border-foreground" />
            </label>
            <label className="block text-sm">
              Password
              <input required type="password" name="password" className="mt-2 w-full h-12 border border-foreground/15 bg-transparent px-4 outline-none focus:border-foreground" />
            </label>
            <button type="submit" className="w-full h-12 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
              {mode === "signup" ? "Create account" : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
