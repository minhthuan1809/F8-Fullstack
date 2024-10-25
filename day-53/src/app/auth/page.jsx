// src/app/minhthuan/page.jsx
"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        )}
      </button>

      <div></div>
    </main>
  );
}
