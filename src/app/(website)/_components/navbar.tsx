import React from "react";

import { Menu, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {};

const LandingPageNavBar = (props: Props) => {
    return (
        <nav className="fixed inset-x-0 top-0 z-[10] h-fit border-b py-2 px-2">
            <div className="flex w-full justify-between items-center">
                <div className="text-3xl font-semibold flex items-center gap-x-3">
                    <Menu className="w-8 h-8" />
                    <p className="w-auto h-auto rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-mono transition-all hover:-translate-y-[2px] md:block dark:border-white">
                        LMS&nbsp;Companion
                    </p>
                </div>
                <div className="hidden gap-x-10 items-center lg:flex">
                    <Link href="/" className="bg-[#006A67] py-2 px-5 font-mono text-lg rounded-full hover:bg-[#006A67]/80">Home</Link>
                    <Link href="/" className="bg-[#006A67] py-2 px-5 font-mono text-lg rounded-full hover:bg-[#006A67]/80">Pricing</Link>
                    <Link href="/" className="bg-[#006A67] py-2 px-5 font-mono text-lg rounded-full hover:bg-[#006A67]/80">Contact</Link>
                </div>
                <Link href="/auth/sign-in" className="font-mono text-lg">
                    <Button className="text-base flex gap-x-2"><User fill="#000" />Login</Button>
                </Link>
            </div>
        </nav>
    );
};

export default LandingPageNavBar;
