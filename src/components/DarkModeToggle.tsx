import { Switch } from "@/ui/ui/switch";
import { SunDimIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
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

  console.log(isDark);

  return (
    <div className="flex size-full flex-col items-center justify-between gap-6 rounded-lg bg-white p-8 shadow-md dark:bg-neutral-700 dark:shadow-none">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        Dark mode
      </h3>
      <div className="flex flex-col gap-2">
        {isDark ? (
          <MoonIcon className="size-10 text-neutral-800 dark:text-neutral-100" />
        ) : (
          <SunDimIcon className="size-12 text-neutral-700 dark:text-neutral-100" />
        )}
      </div>
      <Switch
        className="dark-mode-toggle__switch"
        checked={isDark}
        onCheckedChange={(isDark) => setThemeState(isDark ? "dark" : "light")}
      />
    </div>
  );
}
