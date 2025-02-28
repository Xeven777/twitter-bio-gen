"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
export default function ThemeTogglebutton() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size="icon"
      className="rounded-full bg-background/30 backdrop-blur z-50 outline-none ring-0 fixed top-4 right-6 md:right-16"
      variant="outline"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun
        className="w-6 h-6 scale-100 transition-all dark:scale-0"
        color="#F9802D"
      />
      <Moon className="absolute w-6 h-6 scale-0 transition-all dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
