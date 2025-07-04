"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { DASHBOARD_PAGE_MENU } from "@/constants/menus/dashboard"
import clsx from "clsx"
import { Separator } from "../ui/separator"
import ModeToggle from "../ui/mode-toggle"

const MenuOptions = () => {
    const pathName = usePathname()
    return (
        <nav className="h-screen flex flex-col justify-between py-2 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link className="flex flex-row" href="/">
                    <p className="rounded-lg border-2 border-b-4 border-r-3 border-slate-700 px-2 py-2 text-md text-slate-700 dark:border-white dark:text-white">
                        C.
                    </p>
                </Link>
                <TooltipProvider>
                    {DASHBOARD_PAGE_MENU.map((menuItem) => (
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href={menuItem.href}
                                            className={clsx(
                                                "group h-8 w-8 flex items-center justify-center rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-700",
                                                {
                                                    "bg-slate-200 dark:bg-slate-700":
                                                        pathName ===
                                                        menuItem.href,
                                                },
                                            )}
                                        >
                                            <menuItem.icon />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="right"
                                >
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
                <Separator />
            </div>
            <div className="flex items-center justify-center pb-4">
                <ModeToggle />
            </div>
        </nav>
    )
}

export default MenuOptions
