"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const adminIds =
  (process.env.NEXT_PUBLIC_ADMIN_DISCORD_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export default function Home() {
  const { data: session, status } = useSession();
  const userId = (session?.user as any)?.discordId as string | undefined;
  const isAdmin = !!userId && adminIds.includes(userId);

  return (
    <main className="min-h-screen bg-[#050806] text-white">
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
              Erzgebirge Roleplay
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
              Erzgebirge Roleplay
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/75">
              Realistisches FiveM Midcore Roleplay mit klaren Regeln,
              aktiver Community und einem starken Team.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400 transition"
              >
                Teambewerbung
              </Link>

              <Link
                href="/regeln"
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Regeln
              </Link>

              <a
                href="https://discord.gg/erz-rp"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Discord
              </a>
            </div>

            {/* LOGIN / LOGOUT / ADMIN */}
            <div className="mt-6 flex flex-wrap gap-3">
              {status !== "loading" && !session && (
                <button
                  onClick={() => signIn("discord")}
                  className="rounded-xl bg-emerald-500 px-5 py-2 font-semibold text-black hover:bg-emerald-400"
                >
                  Mit Discord anmelden
                </button>
              )}

              {status !== "loading" && session && (
                <>
                  <span className="rounded-xl bg-white/5 px-4 py-2 text-sm text-white/70 border border-white/10">
                    Eingeloggt als {(session.user as any)?.name}
                  </span>

                  <button
                    onClick={() => signOut()}
                    className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                  >
                    Logout
                  </button>

                  {isAdmin && (
                    <Link
                      href="/admin"
                      className="rounded-xl bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/30"
                    >
                      Admin
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row gap-6 text-sm text-white/70">
          <div>🟢 Midcore Roleplay</div>
          <div>🛡️ Klare Regeln & Fairplay</div>
          <div>👥 Aktives Team & Support</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row gap-3 justify-between text-sm text-white/60">
          <div>© {new Date().getFullYear()} Erzgebirge Roleplay</div>
          <div className="flex gap-4">
            <Link href="/regeln" className="hover:text-white/80">Regeln</Link>
            <Link href="/apply" className="hover:text-white/80">Teambewerbung</Link>
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
