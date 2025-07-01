"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CHORTEXIA_CONSTANTS } from "@/constants"
import { useNavigation } from "@/hooks/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"

type MenuProps = {
    orientation: "desktop" | "mobile"
}
type Props = { orientation: MenuProps }

const Menu = ({ orientation }: MenuProps) => {
    const { section, onSetSection } = useNavigation()
    switch (orientation) {
        case "desktop":
            return (
                <Card className="font-mono bg-clip-padding backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
                    <CardContent className="p-0 flex gap-2">
                        {CHORTEXIA_CONSTANTS.LandingPageMenu.map((menuItem) => (
                            <Link
                                href={menuItem.path}
                                {...(menuItem.section && {
                                    onClick: () => onSetSection(menuItem.path),
                                })}
                                className={cn(
                                    "rounded-xl flex gap-2 py-2 px-4 items-center transition-all",
                                    section == menuItem.path
                                        ? "bg-white text-black dark:bg-black dark:text-white hover:bg-white/80 dark:hover:bg-black/80"
                                        : "text-muted-foreground hover:bg-muted-foreground/10",
                                )}
                                key={menuItem.id}
                            >
                                {menuItem.icon}
                                {menuItem.label}
                            </Link>
                        ))}
                    </CardContent>
                </Card>
            )
        case "mobile":
            return <div></div>
        default:
            return <></>
    }
}

export default Menu
