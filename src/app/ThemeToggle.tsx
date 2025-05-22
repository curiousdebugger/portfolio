"use client";
import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
  }
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="rounded-full p-2 border border-[var(--primary)] bg-[var(--background)] text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
      style={{ fontSize: 20 }}
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Light mode">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Dark mode">
          🌙
        </span>
      )}
    </button>
  );
}
