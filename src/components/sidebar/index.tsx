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
import { menuOptions } from "@/lib/constant"
import clsx from "clsx"
import { Separator } from "../ui/separator"

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()
    return (
        <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-2 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link className="flex font-bold flex-row" href="/">
                    <p className="rounded-lg border-1 border-b-2 border-r-2 border-slate-700 px-1 py-1 text-xs text-muted-foreground dark:border-white dark:text-white">
                        Corthexia
                    </p>
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
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
                                    className="font-mono bg-slate-600 text-black dark:text-slate-300 backdrop-blur-xl"
                                >
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
                <Separator />
            </div>
        </nav>
    )
}

export default MenuOptions
