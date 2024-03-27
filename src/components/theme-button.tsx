"use client"

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      className="p-2 hover:bg-inherit"
      variant={"ghost"}
      onClick={toggleTheme}
    >
      <DropdownMenuShortcut>
        {isDark ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </DropdownMenuShortcut>
    </Button>
  );
}