const planned: Record<string, string> = {
  clients: "Prompt 3", reviews: "Prompt 4", posts: "Prompt 5", integrations: "Prompt 2", settings: "Prompt 10",
};

export default function Placeholder({ params }: { params: { section: string } }) {
  const when = planned[params.section];
  return (
    <section>
      <h1 className="text-2xl font-bold capitalize">{params.section}</h1>
      <p className="mt-2 text-muted">{when ? `Ye section ${when} me banega.` : "Ye page maujood nahi hai."}</p>
    </section>
  );
}
