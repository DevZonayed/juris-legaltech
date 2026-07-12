"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";
export type Lang = "en" | "bn";

interface UIContextValue {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  setLang: (lang: Lang) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

/**
 * Owns the light/dark theme + en/bn language state, mirrors it onto
 * `<html data-theme>` / `<body data-lang>` (which the ported CSS keys off) and
 * persists to localStorage. A no-flash inline script (in the root layout) sets
 * the initial attributes before hydration, so this only syncs React state.
 */
export function UIProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const t = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    const l = (document.body.getAttribute("data-lang") as Lang) || "en";
    setTheme(t);
    setLangState(l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("juris-theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.body.setAttribute("data-lang", next);
    document.documentElement.setAttribute("lang", next);
    try {
      localStorage.setItem("juris-lang", next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ theme, lang, toggleTheme, setLang }), [theme, lang, toggleTheme, setLang]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within <UIProvider>");
  return ctx;
}

/** Inline script string that sets initial theme/lang before first paint. */
export const noFlashScript = `(function(){try{var t=localStorage.getItem('juris-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}var l=localStorage.getItem('juris-lang');if(l==='bn'||l==='en'){document.documentElement.setAttribute('lang',l);document.addEventListener('DOMContentLoaded',function(){document.body.setAttribute('data-lang',l);});}}catch(e){}})();`;
