import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (hostname !== "www.ardashev.dev") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.hostname = "ardashev.dev";
  destination.protocol = "https:";
  destination.port = "";

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: "/:path*",
};
