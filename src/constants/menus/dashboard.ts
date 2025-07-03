import { LayoutDashboard, Settings, CreditCard } from "lucide-react"

export type DashboardMenuItem = {
    name: string
    icon: React.ElementType
    href: string
}

export const DASHBOARD_PAGE_MENU: DashboardMenuItem[] = [
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
