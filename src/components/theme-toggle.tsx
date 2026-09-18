"use client";

import { useEffect, useReducer, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_EVENT = "site-theme-change";

function getThemeFromDom(): Theme {
  const value = document.documentElement.dataset.theme;
  return value === "light" ? "light" : "dark";
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeFromDom,
    () => "dark" as Theme,
  );
  const [hydrated, markHydrated] = useReducer(() => true, false);

  useEffect(() => {
    markHydrated();
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  const label = hydrated
    ? theme === "dark"
      ? "Light mode"
      : "Dark mode"
    : "Theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      aria-label={
        hydrated
          ? `Switch to ${theme === "dark" ? "light" : "dark"} theme`
          : "Toggle color theme"
      }
    >
      {label}
    </button>
  );
}
