// Clerk middleware removed for migration to new auth provider
// TODO: Implement new middleware for your chosen authentication system
import { NextResponse } from "next/server"

export function middleware() {
    // No-op middleware for now
    return NextResponse.next()
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
}
