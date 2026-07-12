"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { Lang } from "@/components/lang";
import { useUI } from "@/components/ui-provider";
import { adminNav } from "@/lib/mock/admin";
import {
  GridIcon,
  UsersIcon,
  ShieldIcon,
  BookIcon,
  ShieldCheckIcon,
  BarChartIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
  ChevronLeftIcon,
} from "@/components/icons";
import type { AdminNavItem } from "@/lib/mock/admin";

function NavIcon({ name }: { name: AdminNavItem["icon"] }) {
  switch (name) {
    case "dashboard":
      return <GridIcon />;
    case "users":
      return <UsersIcon />;
    case "shield":
      return <ShieldIcon />;
    case "book":
      return <BookIcon />;
    case "review":
      return <ShieldCheckIcon />;
    case "reports":
      return <BarChartIcon />;
    case "settings":
      return <SettingsIcon />;
  }
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, lang, toggleTheme, setLang } = useUI();
  const isActive = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));

  return (
    <div className="admin-root">
      <aside className="anav" style={{ display: "flex", flexDirection: "column" }}>
        <div className="ab">
          <BrandMark style={{ width: 30, height: 30 }} /> Juris
        </div>
        {adminNav.map((item) => (
          <Link key={item.href} href={item.href} className={`ni ${isActive(item.href) ? "on" : ""}`}>
            <NavIcon name={item.icon} />
            <Lang en={item.label.en} bn={item.label.bn} />
          </Link>
        ))}
        <div className="aside-foot">
          <Lang en="Admin console · v1.0" bn="অ্যাডমিন কনসোল · v1.0" />
        </div>
      </aside>

      <div className="admin-content">
        <div className="admin-mobile-nav">
          {adminNav.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "on" : ""}>
              <Lang en={item.label.en} bn={item.label.bn} />
            </Link>
          ))}
        </div>

        <div className="admin-topbar">
          <Link className="back" href="/">
            <ChevronLeftIcon width={16} height={16} />
            <Lang en="Back to site" bn="সাইটে ফিরুন" />
          </Link>
          <span className="spacer" />
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
          </button>
          <span className="avatar" style={{ width: 34, height: 34, fontSize: 13, background: "var(--primary)" }}>
            FE
          </span>
        </div>

        <div className="amain-wrap">{children}</div>
      </div>
    </div>
  );
}
