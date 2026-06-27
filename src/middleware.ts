import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf)$).*)"],
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-frame-options", "DENY");
  response.headers.set("x-content-type-options", "nosniff");
  response.headers.set("referrer-policy", "strict-origin-when-cross-origin");
  response.headers.set("permissions-policy", "geolocation=(), microphone=(), camera=()");
  response.headers.set("x-dns-prefetch-control", "on");
  response.headers.set("x-xss-protection", "1; mode=block");
  response.headers.set("strict-transport-security", "max-age=63072000; includeSubDomains; preload");

  const uploadCheck = request.headers.get("content-type");
  if (request.method === "POST" && uploadCheck?.includes("multipart/form-data")) {
    response.headers.set("x-upload-policy", "strict");
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const isAuthenticated = request.cookies.get("embabi-auth")?.value === "authenticated";
    if (!isAuthenticated) {
      const loginUrl = new URL("/auth", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}
