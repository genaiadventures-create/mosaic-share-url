import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { refClickEvent, sendRefClick } from "./app/ref-click.ts";

// Runs for /get only (see matcher). Counts campaign clicks server-side; see app/ref-click.ts.
// The response is never modified or delayed: the POST is handed to waitUntil.
export function middleware(request: NextRequest, event: NextFetchEvent) {
  const endpoint = process.env.REF_CLICK_ENDPOINT;
  if (endpoint) {
    const click = refClickEvent({
      method: request.method,
      searchParams: request.nextUrl.searchParams,
      headers: request.headers,
    });
    if (click) {
      event.waitUntil(sendRefClick(click, { endpoint, token: process.env.REF_CLICK_TOKEN }));
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/get"] };
