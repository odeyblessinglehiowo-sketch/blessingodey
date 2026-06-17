"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      aria-label="Toggle Theme"
      className="
        relative
        h-10
        w-20
        rounded-full
        border
        border-zinc-700
        bg-zinc-900
        shadow-inner
        transition-all
        duration-300
      "
    >
      <div
        className={`
          absolute
          top-0.5
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${
            isDark
              ? "left-1"
              : "left-[44px]"
          }
        `}
      >
        {isDark ? (
          <Moon
            size={16}
            className="text-black"
          />
        ) : (
          <Sun
            size={16}
            className="text-black"
          />
        )}
      </div>
    </button>
  );
}