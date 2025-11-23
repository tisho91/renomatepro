'use client'
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeMode } from "@/hooks/useThemeMode";

const ToggleTheme = () => {
    const { toggleTheme, isDark } = useThemeMode();
    return (
        <button onClick={toggleTheme}
                className={'text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-600 transition p-2 rounded-full'}>
            {isDark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
        </button>
    )
}

export default ToggleTheme;