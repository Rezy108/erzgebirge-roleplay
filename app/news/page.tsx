export default function NewsPage() {
  const news = [
    { date: "19.01.2026", title: "Website online", text: "Erzgebirge RP Website ist live – Green Theme & Discord Login." },
    { date: "20.01.2026", title: "Teambewerbungen offen", text: "Supporter / Entwicklung / High-Team – bewerbt euch direkt über das Portal." },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">News</h1>
      <p className="mt-2 text-white/70">Aktuelle Updates rund um Erzgebirge Roleplay.</p>

      <div className="mt-6 space-y-4">
        {news.map((n) => (
          <div key={n.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-xs text-white/60">{n.date}</div>
            <div className="mt-1 text-lg font-semibold text-emerald-200">{n.title}</div>
            <div className="mt-2 text-sm text-white/70">{n.text}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
