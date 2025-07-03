"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const ModeToggle = () => {
    const { setTheme, theme: rawTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Get effective theme (resolve system to actual theme)
    const getEffectiveTheme = () => {
        if (rawTheme === "system") {
            return systemTheme || "light"
        }
        return rawTheme || "light"
    }

    const effectiveTheme = getEffectiveTheme()

    const handleToggle = () => {
        // Only toggle between light and dark
        setTheme(effectiveTheme === "light" ? "dark" : "light")
    }

    // Don't render until mounted to prevent hydration issues
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                className="text-slate-700 dark:text-slate-100"
                disabled
            >
                <Sun />
            </Button>
        )
    }

    const CurrentIcon = effectiveTheme === "light" ? Sun : Moon
    const currentLabel = effectiveTheme === "light" ? "Light" : "Dark"

    return (
        <Button
            variant="ghost"
            aria-label={`Switch theme, current: ${currentLabel}`}
            onClick={handleToggle}
            className="text-slate-700 dark:text-slate-100"
        >
            <CurrentIcon />
        </Button>
    )
}

export default ModeToggle