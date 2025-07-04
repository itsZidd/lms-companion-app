"use client"

import Search from '@/components/search'
import React from 'react'
import { SignOutButton } from "@clerk/nextjs"

const Navbar = () => {
    return (
        <div className='py-2 px-3 flex gap-5 justify-between items-center'>
            <Search />
            <SignOutButton>
                <button className="px-4 py-2 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-100 font-mono hover:bg-slate-300 dark:hover:bg-slate-600 transition">
                    Log Out
                </button>
            </SignOutButton>
        </div>
    )
}

export default Navbar