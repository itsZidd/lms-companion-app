"use client"

import { Loader2 } from "lucide-react"

const AuthLoading = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Loader2 className="animate-spin text-slate-700 dark:text-slate-200" />
        </div>
    )
}

export default AuthLoading
