"use client";

import { useMemo, useState, Fragment } from "react";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { VerifiedBadge } from "@/components/ui";
import { SearchLink } from "@/components/search-link";
import { FilterIcon, GlobeIcon, SearchIcon } from "@/components/icons";
import type { SearchResult } from "@/lib/mock/search";
import { popularQueries } from "@/lib/mock/search";

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function highlight(text: string, q: string) {
  const terms = Array.from(new Set([q.trim(), ...q.trim().split(/\s+/)])).filter((t) => t.length > 2);
  if (terms.length === 0) return text;
  const re = new RegExp(`(${terms.map(esc).join("|")})`, "ig");
  const parts = text.split(re);
  const lower = new Set(terms.map((t) => t.toLowerCase()));
  return parts.map((part, i) =>
    lower.has(part.toLowerCase()) ? <mark key={i}>{part}</mark> : <Fragment key={i}>{part}</Fragment>,
  );
}

export function SearchScreen({ query, results }: { query: string; results: SearchResult[] }) {
  const cats = useMemo(() => {
    const map = new Map<string, string>();
    results.forEach((r) => map.set(r.categoryName.en, r.categoryName.bn));
    return Array.from(map.entries());
  }, [results]);

  const [filter, setFilter] = useState<string | null>(null);
  const shown = filter ? results.filter((r) => r.categoryName.en === filter) : results;

  return (
    <div className="wrap page">
      <div className="search-screen" style={{ padding: 0, maxWidth: 880, margin: "0 auto" }}>
        <SearchLink defaultValue={query} autoFocus placeholderEn="Search acts, sections…" placeholderBn="আইন, ধারা খুঁজুন…" />

          {query && results.length > 0 && (
            <>
              <div className="filters">
                <button className={`fpill ${!filter ? "on" : ""}`} onClick={() => setFilter(null)}>
                  <FilterIcon />
                  <Lang en="All" bn="সব" />
                </button>
                {cats.map(([en, bn]) => (
                  <button key={en} className={`fpill ${filter === en ? "on" : ""}`} onClick={() => setFilter(en)}>
                    <Lang en={en} bn={bn} />
                  </button>
                ))}
                <span className="fpill">
                  <GlobeIcon />
                  বাংলা + EN
                </span>
              </div>

              <div className="res-meta">
                <Lang
                  en={`${shown.length} result${shown.length === 1 ? "" : "s"} · sorted by relevance`}
                  bn={`${shown.length}টি ফলাফল · প্রাসঙ্গিকতা অনুযায়ী`}
                />
              </div>

              {shown.map((r) => (
                <Link key={r.href} href={r.href} className="res">
                  <div className="rtop">
                    <span className="cat">
                      <Lang en={r.categoryName.en} bn={r.categoryName.bn} />
                    </span>
                    {r.section.verified && <VerifiedBadge style={{ padding: "2px 8px" }} />}
                    <span className="sec-no">§{r.section.number}</span>
                  </div>
                  <h4>
                    <Lang
                      en={`${r.act.title.en} — ${r.section.title.en}`}
                      bn={`${r.act.title.bn} — ${r.section.title.bn}`}
                    />
                  </h4>
                  <p className="lang-en">{highlight(r.snippet.en, query)}</p>
                  <p className="lang-bn bn">{highlight(r.snippet.bn, query)}</p>
                </Link>
              ))}
            </>
          )}

          {query && results.length === 0 && (
            <div style={{ textAlign: "center", padding: "56px 20px" }}>
              <div className="emptyico" style={{ margin: "0 auto 14px" }}>
                <SearchIcon width={26} height={26} />
              </div>
              <div className="st-t" style={{ marginBottom: 6 }}>
                <Lang en={`No results for “${query}”`} bn={`“${query}” এর জন্য ফলাফল নেই`} />
              </div>
              <p style={{ color: "var(--muted)", fontSize: 13.5 }}>
                <Lang
                  en="Try a different keyword, or ask the AI assistant to explain it."
                  bn="ভিন্ন কীওয়ার্ড চেষ্টা করুন, অথবা এআই সহকারীকে জিজ্ঞাসা করুন।"
                />
              </p>
            </div>
          )}

          {!query && (
            <div style={{ padding: "24px 0" }}>
              <div className="sh-row" style={{ marginBottom: 12 }}>
                <Lang en="Popular searches" bn="জনপ্রিয় অনুসন্ধান" />
              </div>
              <div className="filters">
                {popularQueries.map((p) => (
                  <Link key={p} href={`/search?q=${encodeURIComponent(p)}`} className="fpill">
                    <SearchIcon />
                    {p}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
  );
}
