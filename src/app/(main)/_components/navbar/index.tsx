// Clerk SignOutButton removed for migration to new auth provider
// TODO: Add your new auth provider's sign-out logic here
"use client"

import Search from '@/components/search'
import React from 'react'

const Navbar = () => {
    return (
        <div className='py-2 px-3 flex gap-5 justify-between items-center'>
            <Search />
            {/* TODO: Add your new auth provider's sign-out button here */}
        </div>
    )
}

export default Navbar