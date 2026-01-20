"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const publicAdminIds =
  (process.env.NEXT_PUBLIC_ADMIN_DISCORD_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export default function Navbar() {
  const { data: session, status } = useSession();
  const discordId = (session?.user as any)?.discordId as string | undefined;
  const isAdmin = !!discordId && publicAdminIds.includes(discordId);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-bold">
          Erzgebirge Roleplay
        </Link>

        <nav className="flex items-center gap-3 text-sm">
          <Link className="text-white/70 hover:text-white" href="/regeln">Regeln</Link>
          <Link className="text-white/70 hover:text-white" href="/apply">Teambewerbung</Link>
          <a className="text-white/70 hover:text-white" href="https://discord.gg/erz-rp" target="_blank" rel="noreferrer">
            Discord
          </a>

          {status !== "loading" && !session && (
            <button
              onClick={() => signIn("discord")}
              className="ml-2 rounded-xl bg-emerald-500 px-3 py-2 font-semibold text-black hover:bg-emerald-400"
            >
              Discord Login
            </button>
          )}

          {status !== "loading" && session && (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className="ml-2 rounded-xl bg-emerald-500/20 px-3 py-2 font-semibold text-emerald-200 hover:bg-emerald-500/30"
                >
                  Admin
                </Link>
              )}

              <button
                onClick={() => signOut()}
                className="rounded-xl bg-white/10 px-3 py-2 hover:bg-white/15"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
