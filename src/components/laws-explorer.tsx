"use client";

import { useState } from "react";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { useUI } from "@/components/ui-provider";
import { VerifiedBadge } from "@/components/ui";
import { CategoryIcon } from "@/components/category-icon";
import { categories, getCategory } from "@/lib/mock/categories";
import { acts } from "@/lib/mock/acts";
import { SearchIcon, MicIcon, ChevronRightIcon, SlidersIcon, ChevronDownIcon } from "@/components/icons";

type Sort = "year-desc" | "year-asc" | "az" | "sections";

export function LawsExplorer({ initialCategory }: { initialCategory?: string }) {
  const { lang } = useUI();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCategory && getCategory(initialCategory) ? initialCategory : "all");
  const [sort, setSort] = useState<Sort>("year-desc");

  const query = q.trim().toLowerCase();
  let list = acts.filter((a) => {
    const inCat = cat === "all" || a.categoryId === cat;
    const text = `${a.title.en} ${a.title.bn} ${a.actNo} ${a.summary.en}`.toLowerCase();
    const inText = !query || text.includes(query) || a.sections.some((s) => `${s.title.en} ${s.title.bn} ${s.number}`.toLowerCase().includes(query));
    return inCat && inText;
  });

  list = [...list].sort((a, b) => {
    if (sort === "year-desc") return b.year - a.year;
    if (sort === "year-asc") return a.year - b.year;
    if (sort === "sections") return b.sections.length - a.sections.length;
    return a.title.en.localeCompare(b.title.en);
  });

  const activeCat = cat !== "all" ? getCategory(cat) : undefined;
  const showGrid = cat === "all" && !query;
  const hasFilters = cat !== "all" || !!query || sort !== "year-desc";

  return (
    <>
      {/* Filter toolbar */}
      <div className="card" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 26 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <div className="searchbar" style={{ flex: 1, minWidth: 240, height: 46 }}>
            <SearchIcon />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === "bn" ? "আইন বা ধারা খুঁজুন…" : "Filter acts or sections…"}
              aria-label="Filter law database"
            />
            <button type="button" className="mic" aria-label="Voice search">
              <MicIcon width={16} height={16} />
            </button>
          </div>
          <div className="select-field">
            <SlidersIcon width={16} height={16} />
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} aria-label="Sort">
              <option value="year-desc">{lang === "bn" ? "নতুন আগে" : "Newest first"}</option>
              <option value="year-asc">{lang === "bn" ? "পুরনো আগে" : "Oldest first"}</option>
              <option value="az">{lang === "bn" ? "নাম (A–Z)" : "Name (A–Z)"}</option>
              <option value="sections">{lang === "bn" ? "বেশি ধারা" : "Most sections"}</option>
            </select>
            <ChevronDownIcon className="chev" width={15} height={15} />
          </div>
        </div>

        <div className="filters" style={{ margin: 0 }}>
          <button className={`fpill ${cat === "all" ? "on" : ""}`} onClick={() => setCat("all")}>
            <Lang en="All categories" bn="সব বিভাগ" />
          </button>
          {categories.map((c) => (
            <button key={c.id} className={`fpill ${cat === c.id ? "on" : ""}`} onClick={() => setCat(c.id)}>
              <Lang en={c.name.en} bn={c.name.bn} />
            </button>
          ))}
        </div>

        <div className="toolbar-meta">
          <span>
            <Lang en={`${list.length} act${list.length === 1 ? "" : "s"}`} bn={`${list.length}টি আইন`} />
          </span>
          {hasFilters && (
            <button
              className="clear"
              onClick={() => {
                setQ("");
                setCat("all");
                setSort("year-desc");
              }}
            >
              <Lang en="Clear filters" bn="ফিল্টার সাফ" />
            </button>
          )}
        </div>
      </div>

      {/* Category grid (only on the unfiltered overview) */}
      {showGrid && (
        <div className="cat-grid" style={{ marginBottom: 40 }}>
          {categories.map((c) => (
            <button key={c.id} className="cat-card" style={{ textAlign: "left", cursor: "pointer" }} onClick={() => setCat(c.id)}>
              <div className="ci" style={{ background: c.bg, color: c.color }}>
                <CategoryIcon name={c.icon} />
              </div>
              <h3>
                <Lang en={c.name.en} bn={c.name.bn} />
              </h3>
              <div className="cd">
                <Lang en={c.desc.en} bn={c.desc.bn} />
              </div>
              <div className="cn">
                {c.count} <Lang en="acts" bn="আইন" />
              </div>
            </button>
          ))}
        </div>
      )}

      <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 18, fontWeight: 800, marginBottom: 16 }}>
        {activeCat ? (
          <Lang en={`${activeCat.name.en} — acts`} bn={`${activeCat.name.bn} — আইন`} />
        ) : query ? (
          <Lang en="Matching acts" bn="মিলে যাওয়া আইন" />
        ) : (
          <Lang en="All acts" bn="সব আইন" />
        )}
      </h3>

      {list.length === 0 ? (
        <div style={{ textAlign: "center", padding: "48px 20px" }}>
          <div className="emptyico" style={{ margin: "0 auto 14px" }}>
            <SearchIcon width={26} height={26} />
          </div>
          <div className="st-t" style={{ marginBottom: 6 }}>
            <Lang en="No acts match your filters" bn="আপনার ফিল্টারে কোনো আইন নেই" />
          </div>
        </div>
      ) : (
        <div className="section-list">
          {list.map((act) => {
            const c = getCategory(act.categoryId);
            return (
              <Link key={act.slug} href={`/laws/${act.slug}`} className="sl">
                <span className="sn" style={c ? { background: c.bg, color: c.color } : undefined}>
                  {act.year}
                </span>
                <div>
                  <div className="stt">
                    <Lang en={act.title.en} bn={act.title.bn} />
                  </div>
                  <div className="sd">
                    {act.actNo} · {act.sections.length} <Lang en="sections" bn="ধারা" /> ·{" "}
                    <Lang en={c?.name.en ?? ""} bn={c?.name.bn ?? ""} />
                  </div>
                </div>
                <VerifiedBadge style={{ padding: "2px 8px" }} />
                <ChevronRightIcon className="schev" width={18} height={18} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
