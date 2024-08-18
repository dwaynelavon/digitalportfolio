import { Button } from "@/ui/ui/button";
import { Switch } from "@/ui/ui/switch";
import { SunDimIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function DarkModeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<"light" | "dark" | "system">("dark");
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDark);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button
      className={className}
      onClick={() => {
        setThemeState(isDark ? "light" : "dark");
      }}
      variant="ghost"
    >
      {isDark ? (
        <SunDimIcon className="size-6 text-neutral-700 dark:text-neutral-100" />
      ) : (
        <MoonIcon className="size-6 text-neutral-700 dark:text-neutral-100" />
      )}
    </Button>
  );
}
