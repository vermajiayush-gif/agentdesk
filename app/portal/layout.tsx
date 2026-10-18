export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-panel px-6 py-4 font-bold text-brand">AgentDesk</header>
      <main className="mx-auto max-w-3xl p-6">{children}</main>
    </div>
  );
}
