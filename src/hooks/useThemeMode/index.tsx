import { useTheme } from "next-themes";

export const useThemeMode = () => {
    const { setTheme, theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const toggleTheme = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    }
    const isDark = currentTheme === "dark";

    return {
        toggleTheme,
        isDark,
    }
}