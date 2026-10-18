import Link from "next/link";
import { adminNav } from "@/components/nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[220px_1fr]">
      <aside className="border-b border-line bg-panel p-4 md:border-b-0 md:border-r">
        <div className="mb-4 text-lg font-bold text-brand">AgentDesk</div>
        <nav aria-label="Admin" className="flex gap-1 overflow-x-auto md:flex-col">
          {adminNav.map((n) => (
            <Link key={n.href} href={n.href} className="whitespace-nowrap rounded-md px-3 py-2 text-sm hover:bg-paper">
              {n.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
