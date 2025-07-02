import { LayoutDashboard, Settings, CreditCard } from "lucide-react"

export type MenuItem = {
    name: string
    icon: React.ElementType
    href: string
}

export const menuOptions: MenuItem[] = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        name: "Settings",
        icon: Settings,
        href: "/settings",
    },
    {
        name: "Billing",
        icon: CreditCard,
        href: "/billing",
    },
]
