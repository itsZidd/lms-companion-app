import React from "react";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

type Props = {};

const LandingPageNavBar = (props: Props) => {
    return (
        <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
            <p className="rounded-lg border-1 border-b-4 border-r-4 border-black text-xl px-1 py-1 font-semibold font-mono transition-all hover:-translate-y-[2px] dark:border-white">
                Corthexia
            </p>
            <Menu orientation="desktop" />
            <div>
                <Link href="/sign-in"><Button variant="outline" className="text-base flex gap-2 rounded-2xl font-mono"><User fill="#000" />Login</Button></Link>
            </div>
        </div>
    );
};

export default LandingPageNavBar;
