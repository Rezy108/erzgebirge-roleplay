"use client";

import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className="min-h-screen flex items-center justify-center text-white">Lädt…</main>;
  }

  if (session) {
    // Schon eingeloggt -> Hinweis
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050806] text-white">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3">Du bist schon eingeloggt ✅</h1>
          <p className="text-white/70">Geh einfach zurück auf die Seite.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050806] text-white">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold mb-3">Erzgebirge Roleplay</h1>
        <p className="text-white/70 mb-6">
          Bitte melde dich an, um die Website zu betreten.
        </p>

        <button
          onClick={() => signIn("discord", { callbackUrl: "/" })}
          className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400"
        >
          Mit Discord anmelden
        </button>
      </div>
    </main>
  );
}
