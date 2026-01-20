export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#050806]">
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Erzgebirge Roleplay • Green Theme
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
              Erzgebirge Roleplay
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/75">
              Realistisches FiveM Midcore Roleplay mit klaren Regeln, aktiver
              Community und einem Team, das ständig verbessert.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/apply"
                className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition"
              >
                Teambewerbung starten
              </a>
              <a
                href="/regeln"
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Regeln ansehen
              </a>
              <a
                href="https://discord.gg/erz-rp"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row gap-6 text-sm text-white/70">
          <div>🟢 Midcore Roleplay</div>
          <div>🛡️ Klare Regeln & Fairplay</div>
          <div>👥 Aktives Team & Support</div>
        </div>
      </section>

      {/* ÜBER ERZ (zentriert, clean) */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Worum geht es bei Erzgebirge Roleplay?
        </h2>
        <p className="mt-5 text-white/70 leading-relaxed">
          Erzgebirge Roleplay steht für ruhiges, realistisches FiveM Roleplay ohne
          Chaos. Klare Regeln, saubere Administration und eine Community, die
          langfristiges RP schätzt.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/60">
          <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">
            Discord verifiziert
          </span>
          <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">
            Midcore Regeln
          </span>
          <span className="rounded-full bg-white/5 px-4 py-2 border border-white/10">
            Bewerbungen offen
          </span>
        </div>
      </section>

      {/* STATUS + NEWS nebeneinander */}
      <section className="mx-auto max-w-6xl px-6 pb-16 grid gap-6 md:grid-cols-2">
        {/* STATUS */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Server Status</h3>
            <span className="rounded-full bg-emerald-400/15 border border-emerald-400/25 px-3 py-1 text-sm text-emerald-200">
              Online / im Aufbau
            </span>
          </div>

          <p className="mt-4 text-white/70">
            Der Server wird aktiv weiterentwickelt. Updates und Infos bekommst du
            immer direkt auf unserem Discord.
          </p>

          <a
            href="https://discord.gg/erz-rp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition"
          >
            Zum Discord
          </a>
        </div>

        {/* NEWS */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Neuigkeiten</h3>
            <a href="/news" className="text-sm text-emerald-200 hover:text-emerald-100">
              Alle News →
            </a>
          </div>

          <ul className="mt-4 space-y-3 text-white/70 text-sm">
            <li className="rounded-xl bg-black/25 border border-white/10 p-4">
              <div className="font-semibold text-emerald-200">Website Update</div>
              <div className="mt-1 text-white/70">
                Startseite modernisiert & Struktur verbessert.
              </div>
            </li>
            <li className="rounded-xl bg-black/25 border border-white/10 p-4">
              <div className="font-semibold text-emerald-200">Teambewerbungen offen</div>
              <div className="mt-1 text-white/70">
                Supporter • Entwicklung • High-Team gesucht.
              </div>
            </li>
            <li className="rounded-xl bg-black/25 border border-white/10 p-4">
              <div className="font-semibold text-emerald-200">Server Fortschritt</div>
              <div className="mt-1 text-white/70">
                Optimierungen und neue Features in Arbeit.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row gap-3 justify-between text-sm text-white/60">
          <div>© {new Date().getFullYear()} Erzgebirge Roleplay</div>
          <div className="flex gap-4">
            <a href="/regeln" className="hover:text-white/80">Regeln</a>
            <a href="/apply" className="hover:text-white/80">Teambewerbung</a>
            <a
              href="https://discord.gg/erz-rp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80"
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
