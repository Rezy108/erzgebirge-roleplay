"use client";

import { useEffect, useMemo } from "react";
import { signIn } from "next-auth/react";

const CSS = `
/* === AUS DEINER HTML DATEI (style tag) === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-dark: #0a0e17;
  --bg-card: #13182b;
  --bg-card-hover: #1a2139;
  --neon: #00ff88;
  --neon-glow: rgba(0, 255, 136, 0.3);
  --accent: #00d4ff;
  --accent-glow: rgba(0, 212, 255, 0.3);
  --text: #e8edf5;
  --text-muted: #8b92a8;
  --border: rgba(255, 255, 255, 0.1);
  --warning: #ffc107;
  --danger: #ff4757;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg-dark);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Navigation */
.top-nav {
  background: rgba(19, 24, 43, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  gap: 20px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  transition: transform 0.3s ease;
}

.nav-logo:hover { transform: translateY(-2px); }

.nav-logo-icon {
  font-size: 28px;
  filter: drop-shadow(0 0 10px var(--neon-glow));
}

.nav-logo-text { display: flex; flex-direction: column; line-height: 1.2; }

.nav-logo-text span:first-child { font-size: 1.1rem; color: var(--neon); }
.nav-logo-text span:last-child { font-size: 0.75rem; color: var(--text-muted); }

.nav-links { display: flex; gap: 8px; flex-wrap: wrap; }

.nav-link {
  padding: 8px 16px;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  white-space: nowrap;
}

.nav-link:hover { color: var(--neon); background: rgba(0, 255, 136, 0.1); }
.nav-link.active {
  color: var(--neon);
  background: rgba(0, 255, 136, 0.15);
  box-shadow: 0 0 20px var(--neon-glow);
}

.login-section-nav { display: flex; align-items: center; gap: 12px; }

.discord-login-nav {
  padding: 10px 24px;
  background: linear-gradient(135deg, var(--neon), #00d4ff);
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--neon-glow);
  border: none;
  cursor: pointer;
}

.discord-login-nav:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px var(--neon-glow);
}

/* Mobile Menu */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(19, 24, 43, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 20px;
  z-index: 999;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}

.mobile-nav.active { display: block; }
.mobile-nav .nav-link { display: block; padding: 12px 16px; margin-bottom: 8px; }
.mobile-nav .discord-login-nav { display: block; text-align: center; margin-top: 16px; }

/* Hero Section */
.hero-section {
  position: relative;
  padding: 120px 20px 80px;
  text-align: center;
  background: linear-gradient(135deg, #0a0e17 0%, #1a1f35 100%);
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--neon-glow) 0%, transparent 70%);
  animation: pulse 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.5; }
}

/* ... DER REST DEINES CSS IST OK ...
   Du kannst hier einfach das komplette CSS aus deiner HTML weiter einfügen,
   falls du noch mehr hast. (Wenn du willst, sag ich dir gleich einen Copy-Paste Trick.) */
`;

const RAW_BODY = `
<!-- Navigation -->
<nav class="top-nav">
  <div class="nav-content">
    <a href="/" class="nav-logo">
      <div class="nav-logo-icon">🏔️</div>
      <div class="nav-logo-text">
        <span>Erzgebirge</span>
        <span>Roleplay Portal</span>
      </div>
    </a>

    <div class="nav-links">
      <a href="/" class="nav-link">Startseite</a>
      <a href="/news" class="nav-link">News</a>
      <a href="/status" class="nav-link">Status</a>
      <a href="/regeln" class="nav-link active">Regelwerk</a>
      <a href="/apply" class="nav-link">Teambewerbung</a>
      <a href="https://discord.gg/erz-rp" class="nav-link" target="_blank" rel="noopener noreferrer">Discord</a>
    </div>

    <div class="login-section-nav">
      <button class="mobile-menu-btn" data-action="toggleMobileMenu">☰</button>
      <button class="discord-login-nav" data-action="discordLogin">Discord Login</button>
    </div>
  </div>
</nav>

<!-- Mobile Navigation -->
<div class="mobile-nav" id="mobileNav">
  <a href="/" class="nav-link">Startseite</a>
  <a href="/news" class="nav-link">News</a>
  <a href="/status" class="nav-link">Status</a>
  <a href="/regeln" class="nav-link active">Regelwerk</a>
  <a href="/apply" class="nav-link">Teambewerbung</a>
  <a href="https://discord.gg/erz-rp" class="nav-link" target="_blank" rel="noopener noreferrer">Discord</a>

  <button class="discord-login-nav" data-action="discordLogin">Discord Login</button>
</div>

<!-- Hero Section -->
<div class="hero-section">
  <div class="hero-content">
    <div class="hero-badge">
      <span>⭐</span>
      <span>MIDCORE ROLEPLAY</span>
    </div>
    <h1 class="hero-title">Erzgebirge Roleplay</h1>
    <p class="hero-subtitle">Offizielles Regelwerk – Deine Grundlage für authentisches und realistisches Roleplay im Erzgebirge</p>
  </div>
</div>

<!-- Main Content -->
<div class="container">
  <div class="intro-card">
    <div class="intro-content">
      <h2>📌 Willkommen im Erzgebirge</h2>
      <p>Unser Server basiert auf <strong>Midcore Roleplay</strong>, das bedeutet:</p>
      <ul>
        <li>Du spielst realistisch</li>
        <li>Du handelst so, wie ein echter Mensch handeln würde</li>
        <li>Du trägst Konsequenzen für das Verhalten deines Charakters</li>
        <li>Kein Comedy-RP, kein Clown-Verhalten, keine Actionfilm-Szenen ohne Vorbereitung</li>
      </ul>
      <p style="margin-top: 20px;"><strong>Einreise:</strong> Die Einreise in die Region erfolgt traditionell mit der Transportmaschine Flugnummer 9472 (A400), die neue Zivilisten, Handwerker und Bergarbeiter in die Gegend bringt.</p>
      <p style="margin-top: 12px; font-style: italic;">⚠️ Aufgrund einer kürzlichen Flugverspätung von 1 Stunde können Einreisende aktuell zeitverzögert ankommen.</p>
    </div>
  </div>

  <div class="rules-grid">

    <!-- Beispiel: Eine Regelkarte (du kannst hier 1:1 ALLE weiteren Karten aus deiner HTML rein kopieren) -->
    <div class="rule-card" data-action="toggleRule">
      <div class="rule-header">
        <div class="rule-header-left">
          <div class="rule-icon">🎯</div>
          <div class="rule-title-section">
            <h3>§1 Allgemeine Grundprinzipien</h3>
            <span class="rule-subtitle">Respekt, Verbindlichkeit & Kommunikation</span>
          </div>
        </div>
        <div class="rule-toggle">▶</div>
      </div>
      <div class="rule-content">
        <div class="rule-body">
          <h4>§1.1 RP-Eignung statt Altersgrenze</h4>
          <ul>
            <li>Es gibt keine Altersbeschränkung – entscheidend ist RP-Verständnis</li>
            <li>Logisches und vernünftiges Handeln ist Pflicht</li>
            <li>Keine trolligen oder unlogischen Rollen</li>
            <li>Passendes Einfügen in die Midcore-RP-Welt</li>
          </ul>

          <h4 style="margin-top: 24px;">§1.2 Respektvoller Umgang</h4>
          <ul>
            <li>Jeder Spieler wird respektvoll behandelt</li>
            <li>Rassismus, Beleidigungen und toxisches Verhalten sind verboten</li>
            <li>Konflikte gehören ins RP, nicht ins OOC</li>
            <li>Bei Problemen wird Support genutzt, nicht öffentlich gestritten</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ✅ HIER kannst du jetzt ALLE weiteren <div class="rule-card"> ... </div> Blöcke aus deiner HTML einfügen -->

  </div>

  <div class="footer-note">
    <span>⛏️</span> Glück Auf! <span>⛏️</span>
  </div>
</div>
`;

export default function RegelnClient() {
  const html = useMemo(() => RAW_BODY, []);

  useEffect(() => {
    const mobileNav = document.getElementById("mobileNav");

    const onDocClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || !mobileNav) return;

      const menuBtn = document.querySelector('[data-action="toggleMobileMenu"]') as HTMLElement | null;

      // Mobile menu close when clicking outside
      if (
        mobileNav.classList.contains("active") &&
        !mobileNav.contains(target) &&
        menuBtn &&
        !menuBtn.contains(target)
      ) {
        mobileNav.classList.remove("active");
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const actionEl = target.closest("[data-action]") as HTMLElement | null;
      if (!actionEl) return;

      const action = actionEl.getAttribute("data-action");

      if (action === "toggleMobileMenu") {
        mobileNav?.classList.toggle("active");
        return;
      }

      if (action === "discordLogin") {
        signIn("discord");
        return;
      }

      if (action === "toggleRule") {
        const card = actionEl.classList.contains("rule-card")
          ? actionEl
          : (actionEl.closest(".rule-card") as HTMLElement | null);

        if (!card) return;

        const content = card.querySelector(".rule-content") as HTMLElement | null;
        const toggle = card.querySelector(".rule-toggle") as HTMLElement | null;

        content?.classList.toggle("active");
        toggle?.classList.toggle("active");
        return;
      }
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <style jsx global>{CSS}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
