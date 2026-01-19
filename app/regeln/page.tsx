"use client";

import { useMemo, useState } from "react";

type Rule = {
  title: string;
  text: string;
  badge?: string;
};

export default function RegelnPage() {
const rules = [
  {
    title: "§1 Allgemeines Verhalten",
    badge: "Grundlage",
    text: `
Grundlage für ein funktionierendes Roleplay ist ein respektvoller und reifer Umgang.

— Respekt & Umgang —
• Jeder Spieler wird respektvoll behandelt, unabhängig von Rang oder Erfahrung.
• Beleidigungen, Provokationen, Diskriminierung oder toxisches Verhalten sind verboten.
• OOC-Konflikte haben im RP nichts verloren.

— Verhalten auf dem Server —
• Szenen dürfen nicht absichtlich gestört werden.
• Provokationen mit dem Ziel, RP zu zerstören, sind untersagt.
• Entscheidungen des Teams sind zu akzeptieren.

— Verantwortung —
• Jeder Spieler ist verpflichtet, das Regelwerk zu kennen.
• Unwissenheit schützt nicht vor Sanktionen.
`,
  },
  {
    title: "§2 Roleplay & Midcore-RP",
    badge: "Midcore",
    text: `
Erzgebirge Roleplay basiert auf Midcore-RP – realistisch, aber spielbar.

— Charakterdarstellung —
• Dein Charakter ist ein normaler Mensch, kein Held.
• Emotionen wie Angst, Schmerz oder Stress müssen ausgespielt werden.
• Entscheidungen haben Konsequenzen.

— Spielstil —
• Kein Comedy-RP oder absichtlich lächerliches Verhalten.
• Szenen müssen ausgespielt und dürfen nicht grundlos abgebrochen werden.
• RP ist gemeinsames Erzählen, kein Gewinnen.
`,
  },
  {
    title: "§3 Metagaming",
    badge: "Verboten",
    text: `
Metagaming zerstört Immersion und ist strengstens verboten.

— OOC-Wissen —
• Infos aus Discord, Streams oder OOC-Chats dürfen nicht ins RP.
• Nach dem Tod vergessenes Wissen darf nicht genutzt werden.

— Externe Hilfen —
• Keine Nutzung von Streams, Karten oder Tools zur RP-Vorteilsbeschaffung.
• Weitergabe von OOC-Wissen an andere Spieler ist untersagt.
`,
  },
  {
    title: "§4 Powergaming",
    badge: "Verboten",
    text: `
Powergaming liegt vor, wenn anderen Spielern keine realistische Reaktion möglich ist.

— Unzulässig —
• Unrealistische Aktionen ohne RP-Aufbau.
• Erzwingen von Handlungen bei anderen Spielern.
• Übermenschliche Fähigkeiten oder Actionfilm-Szenen.

— Fairness —
• RP muss immer Gegenreaktionen zulassen.
• Überzahl-Situationen realistisch ausspielen.
`,
  },
  {
    title: "§5 Fail-RP & Lebensschutz",
    badge: "Sehr wichtig",
    text: `
Dein Charakter schützt sein Leben jederzeit.

— Lebenswert —
• Angst vor Verletzungen und Tod ist Pflicht.
• Kein Springen aus Höhen oder Selbstmordaktionen.
• Kein Alleingang gegen Überzahl ohne Aufbau.

— Nachwirkungen —
• Schwere Verletzungen erfordern Krankenhaus- oder Genesungs-RP.
• Wiederholtes Fail-RP wird streng sanktioniert.
`,
  },
  {
    title: "§6 Support & Team",
    badge: "Pflicht",
    text: `
Das Team sorgt für Ordnung und Fairness auf dem Server.

— Supportnutzung —
• Bei Problemen ist der Support zu kontaktieren.
• Öffentliche Diskussionen über Entscheidungen sind untersagt.

— Teamentscheidungen —
• Anweisungen des Teams sind bindend.
• Umgehung oder Missachtung wird sanktioniert.
`,
  },
];




  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#050806] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-52 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-400/12 blur-3xl" />
        <div className="absolute -bottom-52 left-10 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-52 right-10 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-14">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Offizielles Regelwerk
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Erzgebirge <span className="text-emerald-200">Roleplay</span> Regeln
          </h1>

          <p className="mt-3 max-w-3xl text-white/70">
            Midcore-RP bedeutet: realistisch, respektvoll und mit Konsequenzen.
            Lies die Regeln aufmerksam – sie sind verbindlich für alle Spieler.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
            <div className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
              ✅ Klar & verständlich
            </div>
            <div className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
              ✅ Aufklappbar (Accordion)
            </div>
            <div className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
              ✅ Green Theme
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative mx-auto max-w-6xl px-6 pb-14 pt-10">
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Regeln (aufklappbar)</h2>
              <p className="mt-1 text-sm text-white/60">
                Klick auf eine Regel, um Details zu sehen.
              </p>
            </div>

            <button
              onClick={() => setOpen(null)}
              className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15"
            >
              Alles schließen
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {rules.map((r, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={r.title}
                  className="rounded-2xl bg-black/20 ring-1 ring-white/10"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/20" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-semibold">
                            {r.title}
                          </span>
                          {r.badge ? (
                            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
                              {r.badge}
                            </span>
                          ) : null}
                        </div>
                        <div className="text-sm text-white/60">
                          Erzgebirge RP • Regelabschnitt
                        </div>
                      </div>
                    </div>

                    <span
                      className={[
                        "text-white/70 transition",
                        isOpen ? "rotate-90" : "rotate-0",
                      ].join(" ")}
                    >
                      ▶
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="px-5 pb-5">
                      <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/70 ring-1 ring-white/10">
                        {r.text}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-emerald-400/10 p-4 text-sm text-emerald-100 ring-1 ring-emerald-300/20">
            Tipp: Wenn du unsicher bist, frag im Support nach – lieber einmal zu
            viel als einmal zu wenig.
          </div>
        </div>
      </section>
    </main>
  );
}
