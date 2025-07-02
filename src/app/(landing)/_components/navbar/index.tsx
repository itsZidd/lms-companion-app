import React from "react"
import Menu from "./menu"
import Link from "next/link"

type Props = {}

const LandingPageNavBar = (props: Props) => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="rounded-lg border-1 border-b-4 border-r-4 border-slate-700 text-xl px-1 py-1 font-semibold transition-all hover:-translate-y-[2px] text-muted-foreground dark:border-white dark:text-white">
                Corthexia
            </p>
            <Menu orientation="desktop" />
            <div>
                <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-700 px-3 py-1 text-sm font-mono font-medium text-white backdrop-blur-3xl">
                        {true ? "Dashboard" : "Get Started"}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default LandingPageNavBar
