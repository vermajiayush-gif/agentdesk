"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setMessage(null);
    const { error } = await createClient().auth.signInWithPassword({ email, password });
    if (error) { setMessage("Email ya password galat hai."); setBusy(false); return; }
    window.location.href = "/auth/callback";
  }

  async function magicLink() {
    if (!email) { setMessage("Pehle email daalo."); return; }
    setBusy(true); setMessage(null);
    const { error } = await createClient().auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback`, shouldCreateUser: false },
    });
    setMessage(error ? "Link nahi bhej paye. Thodi der baad try karo." : "Login link email par bhej diya.");
    setBusy(false);
  }

  const field = "w-full rounded-md border border-line bg-panel px-3 py-2";
  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-6">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <form onSubmit={signIn} className="flex flex-col gap-3">
        <label className="text-sm">Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} autoComplete="email" />
        </label>
        <label className="text-sm">Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={field} autoComplete="current-password" />
        </label>
        <button disabled={busy} className="rounded-md bg-brand px-4 py-2 font-semibold text-paper disabled:opacity-60">Sign in</button>
        <button type="button" disabled={busy} onClick={magicLink} className="rounded-md border border-line px-4 py-2">Email me a login link</button>
      </form>
      {message && <p role="status" className="text-sm text-muted">{message}</p>}
    </main>
  );
}
