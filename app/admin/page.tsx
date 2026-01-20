import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

function isAdmin(discordId?: string) {
  const list = (process.env.ADMIN_DISCORD_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return !!discordId && list.includes(discordId);
}

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const discordId = (session?.user as any)?.discordId as string | undefined;

  if (!session) redirect("/api/auth/signin");
  if (!isAdmin(discordId)) {
    return (
      <main className="min-h-screen bg-[#050806] text-white flex items-center justify-center p-6">
        <div className="max-w-md rounded-2xl bg-white/5 border border-white/10 p-6">
          <h1 className="text-2xl font-bold">⛔ Kein Zugriff</h1>
          <p className="mt-2 text-white/70">
            Du bist nicht als Admin eingetragen.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050806] text-white p-8">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="mt-2 text-white/70">Hier kommen Bewerbungen & Tools rein.</p>
    </main>
  );
}
