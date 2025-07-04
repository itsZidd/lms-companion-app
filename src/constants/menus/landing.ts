import { House, CreditCard, Compass } from "lucide-react"

export type LandingMenuItem = {
    id: number
    name: string
    icon: React.ElementType
    href: string
    section?: boolean
}

export const LANDING_PAGE_MENU: LandingMenuItem[] = [
    {
        id: 1,
        name: "Home",
        icon: House,
        href: "/",
        section: true,
    },
    {
        id: 2,
        name: "Pricing",
        icon: CreditCard,
        href: "/pricing",
        section: true,
    },
    {
        id: 3,
        name: "Explore",
        icon: Compass,
        href: "/explore",
        section: true,
    },
]
