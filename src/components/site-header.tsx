"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { useUI } from "@/components/ui-provider";
import { MoonIcon, SunIcon, UserIcon } from "@/components/icons";
import { Lang } from "@/components/lang";

interface NavItem {
  href: string;
  en: string;
  bn: string;
}

const NAV: NavItem[] = [
  { href: "/assistant", en: "AI Assistant", bn: "সহকারী" },
  { href: "/laws", en: "Law Database", bn: "আইন" },
  { href: "/search", en: "Search", bn: "অনুসন্ধান" },
  { href: "/lawyers", en: "Lawyers", bn: "আইনজীবী" },
  { href: "/admin", en: "Admin", bn: "অ্যাডমিন" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, lang, toggleTheme, setLang } = useUI();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="topbar">
      <div className="wrap">
        <Link className="brand" href="/">
          <BrandMark className="mark" />
          <span>
            Juris
            <small>বাংলাদেশ আইন · NexaLance</small>
          </span>
        </Link>

        <nav className="nav-pills">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>
              <Lang en={item.en} bn={item.bn} />
            </Link>
          ))}
        </nav>

        <div className="top-actions">
          <div className="seg" role="group" aria-label="Language">
            <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
            <button aria-pressed={lang === "bn"} onClick={() => setLang("bn")}>
              বাংলা
            </button>
          </div>
          <button className="toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <MoonIcon width={16} height={16} /> : <SunIcon width={16} height={16} />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <Link className="icon-btn" href="/account" aria-label="Account">
            <UserIcon width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className="wrap">
        <nav className="mobile-nav">
          <Link href="/">
            <Lang en="Home" bn="হোম" />
          </Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              <Lang en={item.en} bn={item.bn} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
