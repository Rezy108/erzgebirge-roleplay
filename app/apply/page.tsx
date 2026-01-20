"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";

type Team = "Supporter" | "Entwicklung" | "High-Team";

export default function ApplyPage() {
  const { data: session, status } = useSession();
  const [team, setTeam] = useState<Team | null>(null);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center text-white">Lädt…</div>;
  }

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#050806] text-white">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 max-w-md text-center">
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
        <h1 className="text-3xl font-bold mb-2">Teambewerbung</h1>
        <p className="text-white/70 mb-8">
          Wähle den Bereich aus, für den du dich bewerben möchtest.
        </p>

        {!team ? (
          <div className="grid md:grid-cols-3 gap-4">
            <TeamCard title="Supporter" onClick={() => setTeam("Supporter")} />
            <TeamCard title="Entwicklung" onClick={() => setTeam("Entwicklung")} />
            <TeamCard title="High-Team" onClick={() => setTeam("High-Team")} />
          </div>
        ) : (
          <ApplicationForm team={team} onBack={() => setTeam(null)} />
        )}
      </div>
    </main>
  );
}

function TeamCard({ title, onClick }: { title: Team; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition text-left"
    >
      <div className="text-xl font-semibold text-emerald-300">{title}</div>
      <div className="mt-2 text-sm text-white/70">
        Bewerbe dich als {title}
      </div>
    </button>
  );
}

function ApplicationForm({ team, onBack }: { team: Team; onBack: () => void }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <button onClick={onBack} className="mb-4 text-sm text-emerald-300 hover:underline">
        ← Zurück
      </button>

      <h2 className="text-2xl font-bold mb-6">Bewerbung als {team}</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Bewerbung wurde abgeschickt (Demo)");
        }}
        className="space-y-5"
      >
        {/* Allgemein */}
        <Input label="Name / Spitzname (optional)" />
        <Input label="Alter" required />
        <Input label="Discord-Name" required />
        <Input label="Ingame-Name" required />

        {/* Supporter */}
        {team === "Supporter" && (
          <>
            <Textarea label="Hast du Erfahrungen im Roleplay oder Community-Management?" />
            <Textarea label="Wie würdest du mit toxischen Spielern umgehen?" />
            <Textarea label="Was macht für dich gutes Roleplay aus?" />
            <Textarea label="Warum möchtest du Supporter werden?" />
          </>
        )}

        {/* Entwicklung */}
        {team === "Entwicklung" && (
          <>
            <Textarea label="Welche technischen Fähigkeiten hast du?" />
            <Textarea label="Hast du Erfahrung mit FiveM, Lua, JS oder Webentwicklung?" />
            <Textarea label="An welchen Projekten hast du bereits gearbeitet?" />
            <Textarea label="Wie viel Zeit kannst du für Entwicklung aufbringen?" />
          </>
        )}

        {/* High-Team */}
        {team === "High-Team" && (
          <>
            <Textarea label="Warum möchtest du ins High-Team?" />
            <Textarea label="Hast du Führungs- oder Teamleiter-Erfahrung?" />
            <Textarea label="Wie würdest du interne Konflikte lösen?" />
            <Textarea label="Was möchtest du am Server langfristig verbessern?" />
          </>
        )}

        <Textarea label="Gibt es noch etwas, das wir über dich wissen sollten?" />

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400"
        >
          Bewerbung absenden
        </button>
      </form>
    </div>
  );
}

function Input({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      <input
        required={required}
        className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 outline-none focus:border-emerald-400"
      />
    </label>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      <textarea
        rows={4}
        className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 outline-none focus:border-emerald-400"
      />
    </label>
  );
}
