export default function StatusPage() {
  const status = [
    {
      t: "Server",
      v: "Online",
      pill: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/20",
    },
    {
      t: "Whitelist",
      v: "Aktiv",
      pill: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/20",
    },
    {
      t: "Teambewerbungen",
      v: "Offen",
      pill: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/20",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Status</h1>
      <p className="mt-2 text-white/70">
        Aktueller Server- und Community-Status.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {status.map((s) => (
          <div
            key={s.t}
            className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div className="text-sm text-white/60">{s.t}</div>

            <div
              className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ring-1 ${s.pill}`}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
