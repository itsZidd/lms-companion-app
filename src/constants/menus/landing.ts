import { House, CreditCard, Compass } from "lucide-react"

export type LandingMenuItem = {
    name: string
    icon: React.ElementType
    href: string
    section?: boolean
}

export const LANDING_PAGE_MENU: LandingMenuItem[] = [
    {
        name: "Home",
        icon: House,
        href: "/",
        section: true,
    },
    {
        name: "Pricing",
        icon: CreditCard,
        href: "/pricing",
        section: true,
    },
    {
        name: "Explore",
        icon: Compass,
        href: "/explore",
        section: true,
    },
]
