"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const search = useSearchParams();

  // Wenn Middleware dich umleitet, hängt oft ?callbackUrl=... dran
  const callbackUrl = search.get("callbackUrl") || "/";

  useEffect(() => {
    if (status === "authenticated") {
      router.replace(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  if (status === "loading") {
    return <main className="min-h-screen flex items-center justify-center text-white">Lädt…</main>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050806] text-white">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold mb-3">Erzgebirge Roleplay</h1>
        <p className="text-white/70 mb-6">
          Bitte melde dich an, um die Website zu betreten.
        </p>

        <button
          onClick={() => signIn("discord", { callbackUrl })}
          className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400"
        >
          Mit Discord anmelden
        </button>

        {session && (
          <p className="mt-4 text-sm text-emerald-200">
            Du bist eingeloggt – leite weiter…
          </p>
        )}
      </div>
    </main>
  );
}
