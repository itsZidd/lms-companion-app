"use client"

// Clerk SignedIn/SignedOut removed for migration to new auth provider
// TODO: Replace with your new auth provider's logic for signed-in/signed-out UI
import React from "react"
import Menu from "./menu"
import Link from "next/link"
import ModeToggle from "@/components/ui/mode-toggle"
import { LogIn } from "lucide-react"

const LandingPageNavBar = () => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <Link href="/">
                <p className="rounded-lg border-1 border-b-4 border-r-4 border-slate-700 text-xl px-1 py-1 font-semibold transition-all hover:-translate-y-[2px] text-slate-700 dark:border-white dark:text-white">
                    Corthexia
                </p>
            </Link>
            <Menu orientation="desktop" />
            <div className="flex items-center gap-2">
                <ModeToggle className="mr-3" />
                {/* TODO: Add your new auth provider's sign-in/sign-out logic here */}
            </div>
        </div>
    )
}

export default LandingPageNavBar
