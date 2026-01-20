"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";

export default function ApplyPage() {
  const { data: session, status } = useSession();
  const [team, setTeam] = useState<string | null>(null);

  if (status === "loading") {
    return <div className="p-10 text-white">Lädt…</div>;
  }

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050806] text-white">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Teambewerbung</h1>
          <p className="text-white/70 mb-6">
            Bitte melde dich mit Discord an, um dich zu bewerben.
          </p>
          <button
            onClick={() => signIn("discord")}
            className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400"
          >
            Mit Discord anmelden
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050806] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Teambewerbung</h1>

        {!team ? (
          <div className="grid md:grid-cols-3 gap-4">
            <TeamCard title="Supporter" onClick={() => setTeam("Supporter")} />
            <TeamCard title="Entwicklung" onClick={() => setTeam("Entwicklung")} />
            <TeamCard title="High-Team" onClick={() => setTeam("High-Team")} />
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Bewerbung abgesendet (Demo)");
            }}
            className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4"
          >
            <button
              type="button"
              onClick={() => setTeam(null)}
              className="text-sm text-emerald-300 hover:underline"
            >
              ← Zurück
            </button>

            <h2 className="text-xl font-semibold">
              Bewerbung als {team}
            </h2>

            <Input label="Name / Ingame-Name" />
            <Input label="Alter" />
            <Input label="Warum möchtest du ins Team?" textarea />
            <Input label="Was bringst du mit?" textarea />

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400"
            >
              Bewerbung absenden
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

function TeamCard({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition"
    >
      <div className="text-xl font-semibold text-emerald-300">{title}</div>
      <div className="mt-2 text-sm text-white/70">
        Bewerbe dich als {title}
      </div>
    </button>
  );
}

function Input({
  label,
  textarea,
}: {
  label: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      {textarea ? (
        <textarea className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3" />
      ) : (
        <input className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3" />
      )}
    </label>
  );
}
