"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function ApplyPage() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen bg-[#050806] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-52 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-400/12 blur-3xl" />
        <div className="absolute -bottom-52 left-10 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-52 right-10 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Team Bewerbung
          </div>

          <h1 className="mt-4 text-4xl font-bold">
            Erzgebirge <span className="text-emerald-200">Roleplay</span>
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Wähle den Bereich, für den du dich bewerben möchtest. Bewerbungen werden über Discord verifiziert.
          </p>

          {status === "loading" ? (
            <div className="mt-6 text-white/60">Lädt…</div>
          ) : !session ? (
            <div className="mt-6 rounded-2xl bg-black/20 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold">Bitte zuerst einloggen</div>
              <p className="mt-2 text-sm text-white/70">
                Damit wir wissen, wer du bist, läuft die Bewerbung über Discord Login.
              </p>
              <button
                onClick={() => signIn("discord")}
                className="mt-5 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-300"
              >
                Mit Discord anmelden
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  key: "supporter",
                  t: "Supporter",
                  d: "Spieler helfen, Tickets bearbeiten, freundlich & zuverlässig.",
                  bullets: ["Kommunikation", "Regeln kennen", "Aktivität"],
                },
                {
                  key: "entwicklung",
                  t: "Entwicklung",
                  d: "Scripts, Features, Bugfixes – bring den Server technisch nach vorne.",
                  bullets: ["Lua/JS/TS", "Sauberer Code", "Teamwork"],
                },
                {
                  key: "high-team",
                  t: "High-Team",
                  d: "Organisation, Moderation, Entscheidungen – Verantwortung übernehmen.",
                  bullets: ["Reife", "Fairness", "Vorbild"],
                },
              ].map((c) => (
                <div key={c.key} className="rounded-2xl bg-black/20 p-6 ring-1 ring-white/10">
                  <div className="text-lg font-semibold text-emerald-300">{c.t}</div>
                  <div className="mt-2 text-sm text-white/70">{c.d}</div>
                  <ul className="mt-4 space-y-1 text-sm text-white/60">
                    {c.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>

                  <Link
                    href={`/apply/${c.key}`}
                    className="mt-6 inline-block w-full rounded-2xl bg-emerald-400 px-4 py-2 text-center text-sm font-semibold text-black hover:bg-emerald-300"
                  >
                    Bewerbung starten
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
