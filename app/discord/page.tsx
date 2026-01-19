export default function DiscordPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Discord</h1>
      <p className="mt-2 text-white/70">
        Hier kommt euer Discord Invite rein + Infos zu Tickets, Support und News.
      </p>

      <div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <div className="text-lg font-semibold text-emerald-200">Discord Invite</div>
        <p className="mt-2 text-sm text-white/70">
          Ersetze später den Link:
        </p>

        <div className="mt-4 rounded-2xl bg-black/20 p-4 text-sm text-white/70 ring-1 ring-white/10">
          https://discord.gg/DEININVITE
        </div>
      </div>
    </main>
  );
}
