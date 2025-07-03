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

    console.log('Menu items:', CHORTEXIA_CONSTANTS.LandingPageMenu)

    switch (orientation) {
        case "desktop":
            return (
                <Card className="font-mono bg-clip-padding backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
                    <CardContent className="p-0 flex gap-2">
                        {CHORTEXIA_CONSTANTS.LandingPageMenu.map((menuItem) => (
                            <Link
                                key={menuItem.name}
                                href={menuItem.href}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/80 hover:text-white"
                            >
                                <menuItem.icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{menuItem.name}</span>
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
