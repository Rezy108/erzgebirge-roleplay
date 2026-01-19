"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/regeln", label: "Regeln" },
  { href: "/news", label: "News" },
  { href: "/status", label: "Status" },
  { href: "/apply", label: "Teambewerbung" },
  {
    href: "https://discord.gg/erz-rp",
    label: "Discord",
    external: true,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-md ring-1 ring-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Titel */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Erzgebirge Roleplay Logo"
            width={42}
            height={42}
            className="rounded-full ring-2 ring-emerald-400/40"
          />

          <div className="leading-tight">
            <div className="font-semibold text-white">
              Erzgebirge Roleplay
            </div>
            <div className="text-xs text-emerald-300/80">
              Green Theme
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 hover:text-emerald-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition ${
                  pathname === link.href
                    ? "text-emerald-300"
                    : "text-white/70 hover:text-emerald-300"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
