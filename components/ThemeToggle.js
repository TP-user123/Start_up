"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const activeTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(activeTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("northstar-theme", nextTheme); } catch {}
    setTheme(nextTheme);
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  const ThemeIcon = theme === "dark" ? Sun : Moon;
  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`} aria-pressed={theme === "light"}>
    <span className="theme-toggle-icon"><ThemeIcon size={15} strokeWidth={1.8} /></span>
    <span className="theme-toggle-label">{nextTheme === "light" ? "Light" : "Dark"}</span>
  </button>;
}
