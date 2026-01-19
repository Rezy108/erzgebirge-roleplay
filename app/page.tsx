"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Hintergrundbild */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          opacity: 0.35,
        }}
      />

      {/* Dunkles Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/65" />

      {/* Inhalt */}
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-1 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Erzgebirge Roleplay
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
          Erzgebirge <span className="text-emerald-300">Roleplay</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/75">
          Midcore Roleplay mit klaren Regeln, realistischer Spielweise
          und einer aktiven Community.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {status === "loading" ? (
            <div className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold ring-1 ring-white/20">
              Lädt…
            </div>
          ) : !session ? (
            <button
              onClick={() => signIn("discord")}
              className="rounded-2xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-300"
            >
              Mit Discord anmelden
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15"
            >
              Abmelden
            </button>
          )}

          <Link
            href="/apply"
            className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15"
          >
            Teambewerbung
          </Link>
        </div>

        <div className="mt-12 flex gap-6 text-sm text-white/65">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Discord verifiziert
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Midcore Regeln
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aktives Team
          </div>
        </div>
      </div>
    </main>
  );
}
