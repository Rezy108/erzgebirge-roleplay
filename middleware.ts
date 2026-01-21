import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Test: ALLE Seiten ausser /login werden nach /login umgeleitet
  if (!url.pathname.startsWith("/login") && !url.pathname.startsWith("/api") && !url.pathname.startsWith("/_next")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
