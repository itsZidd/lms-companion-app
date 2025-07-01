import { House, CreditCard, Compass } from 'lucide-react';

export type MenuProps = {
    id: number;
    label: string;
    path: string;
    icon: React.ReactNode;
    section?: boolean;
    integration?: boolean;
}

export const LANDING_PAGE_MENU: MenuProps[] = [
    {
        id: 0,
        label: "Home",
        path: "/",
        icon: <House />,
        section: true,
    },
    {
        id: 1,
        label: "Pricing",
        path: "/pricing",
        icon: <CreditCard />,
        section: true,
    },
    {
        id: 2,
        label: "Explore",
        path: "/explore",
        icon: <Compass />,
    },
]