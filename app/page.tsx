import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6">
      <h1 className="text-4xl font-bold tracking-tight">AgentDesk</h1>
      <p className="text-muted">Hotel aur restaurant ke reviews aur social media, ek dashboard se.</p>
      <div className="flex gap-3">
        <Link href="/login" className="rounded-md bg-brand px-4 py-2 font-semibold text-paper">Sign in</Link>
      </div>
    </main>
  );
}
