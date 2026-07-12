"use client";

import { useState } from "react";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { useUI } from "@/components/ui-provider";
import {
  UserIcon,
  MoonIcon,
  GlobeIcon,
  BellIcon,
  BookmarkIcon,
  ChatIcon,
  BookIcon,
  UsersIcon,
  ChevronRightIcon,
  LogOutIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { currentUser, bookmarks, history } from "@/lib/mock/account";

export function AccountScreen() {
  const { theme, lang, toggleTheme, setLang } = useUI();
  const [notif, setNotif] = useState(true);

  return (
    <div className="wrap page page-narrow" style={{ margin: "0 auto" }}>
      {/* Profile hero */}
      <div className="acct-hero" style={{ marginBottom: 24 }}>
        <span className="avatar">{currentUser.initials}</span>
        <div>
          <h1 style={{ fontSize: 24, color: "#fff" }}>{currentUser.name}</h1>
          <div style={{ opacity: 0.9, fontSize: 13.5 }}>{currentUser.email}</div>
          <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span className="badge-verified" style={{ background: "rgba(255,255,255,.2)", color: "#fff" }}>
              <ShieldCheckIcon width={13} height={13} /> <Lang en={currentUser.plan.en} bn={currentUser.plan.bn} />
            </span>
            <span style={{ fontSize: 12, opacity: 0.85, alignSelf: "center" }}>
              <Lang en={`Member since ${currentUser.joined}`} bn="সদস্য জানুয়ারি ২০২৬ থেকে" />
            </span>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
        {/* Preferences */}
        <div className="card">
          <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
            <Lang en="Preferences" bn="পছন্দ" />
          </h3>

          <div className="acct-row">
            <span className="ri">
              <MoonIcon width={18} height={18} />
            </span>
            <div>
              <div className="rt">
                <Lang en="Dark mode" bn="ডার্ক মোড" />
              </div>
              <div className="rs">
                <Lang en="Reduce glare in low light" bn="কম আলোতে চোখের আরাম" />
              </div>
            </div>
            <button
              className={`switch ${theme === "dark" ? "on" : ""}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{ marginLeft: "auto" }}
            >
              <i />
            </button>
          </div>

          <div className="acct-row">
            <span className="ri">
              <GlobeIcon width={18} height={18} />
            </span>
            <div>
              <div className="rt">
                <Lang en="Language" bn="ভাষা" />
              </div>
              <div className="rs">
                <Lang en="Interface & content language" bn="ইন্টারফেস ও কনটেন্ট ভাষা" />
              </div>
            </div>
            <div className="seg" style={{ marginLeft: "auto" }}>
              <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
                EN
              </button>
              <button aria-pressed={lang === "bn"} onClick={() => setLang("bn")}>
                বাংলা
              </button>
            </div>
          </div>

          <div className="acct-row">
            <span className="ri">
              <BellIcon width={18} height={18} />
            </span>
            <div>
              <div className="rt">
                <Lang en="Notifications" bn="নোটিফিকেশন" />
              </div>
              <div className="rs">
                <Lang en="Law updates & consultation replies" bn="আইন হালনাগাদ ও পরামর্শ উত্তর" />
              </div>
            </div>
            <button
              className={`switch ${notif ? "on" : ""}`}
              onClick={() => setNotif((n) => !n)}
              aria-label="Toggle notifications"
              style={{ marginLeft: "auto" }}
            >
              <i />
            </button>
          </div>

          <Link className="acct-row" href="/login">
            <span className="ri" style={{ color: "var(--danger)" }}>
              <LogOutIcon width={18} height={18} />
            </span>
            <div>
              <div className="rt">
                <Lang en="Log out" bn="লগ আউট" />
              </div>
            </div>
            <ChevronRightIcon className="rchev" width={18} height={18} />
          </Link>
        </div>

        {/* Bookmarks */}
        <div className="card">
          <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
            <Lang en="Saved sections" bn="সংরক্ষিত ধারা" />
          </h3>
          {bookmarks.map((b) => (
            <Link className="acct-row" key={b.href} href={b.href}>
              <span className="ri" style={{ color: "var(--gold)" }}>
                <BookmarkIcon width={18} height={18} />
              </span>
              <div>
                <div className="rt">
                  <Lang en={b.title.en} bn={b.title.bn} />
                </div>
                <div className="rs mono">{b.ref}</div>
              </div>
              <ChevronRightIcon className="rchev" width={18} height={18} />
            </Link>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 16, fontWeight: 800, marginBottom: 6 }}>
          <Lang en="Recent activity" bn="সাম্প্রতিক কার্যকলাপ" />
        </h3>
        {history.map((h, i) => {
          const Icon = h.kind === "ai" ? ChatIcon : h.kind === "lawyer" ? UsersIcon : BookIcon;
          return (
            <div className="acct-row" key={i}>
              <span className="ri">
                <Icon width={18} height={18} />
              </span>
              <div>
                <div className="rt">
                  <Lang en={h.title.en} bn={h.title.bn} />
                </div>
                <div className="rs">{h.meta}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
