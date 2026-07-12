import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import { VerifiedBadge } from "@/components/ui";
import { getCategory } from "@/lib/mock/categories";
import { acts, getAct } from "@/lib/mock/acts";
import { ChevronRightIcon, BookIcon } from "@/components/icons";

export function generateStaticParams() {
  return acts.map((a) => ({ act: a.slug }));
}

export function generateMetadata({ params }: { params: { act: string } }): Metadata {
  const act = getAct(params.act);
  return { title: act ? act.title.en : "Act" };
}

export default function ActPage({ params }: { params: { act: string } }) {
  const act = getAct(params.act);
  if (!act) notFound();
  const cat = getCategory(act.categoryId);

  // Group sections by chapter for a structured, act-detail layout.
  const groups = new Map<string, typeof act.sections>();
  for (const s of act.sections) {
    const key = s.chapter ?? "General provisions";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }

  return (
    <div className="wrap page page-narrow" style={{ margin: "0 auto" }}>
      <div className="crumb">
        <Link href="/laws">
          <Lang en="Law database" bn="আইন ডেটাবেস" />
        </Link>
        <ChevronRightIcon />
        {cat && (
          <>
            <Link href={`/laws?category=${cat.id}`}>
              <Lang en={cat.name.en} bn={cat.name.bn} />
            </Link>
            <ChevronRightIcon />
          </>
        )}
        <span className="cur">
          <Lang en={act.title.en} bn={act.title.bn} />
        </span>
      </div>

      <div className="card" style={{ marginBottom: 26 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
          <span className="badge-verified">
            <BookIcon width={14} height={14} /> {act.actNo}
          </span>
          <VerifiedBadge en="Verified source" bn="যাচাইকৃত উৎস" />
        </div>
        <h1 style={{ fontSize: 30, marginBottom: 8 }}>
          <Lang en={act.title.en} bn={act.title.bn} />
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 15, maxWidth: 640 }}>
          <Lang en={act.summary.en} bn={act.summary.bn} />
        </p>
        <div className="meta-line" style={{ marginTop: 16, marginBottom: 0 }}>
          <span>
            <b>
              <Lang en="Year:" bn="সাল:" />
            </b>{" "}
            {act.year}
          </span>
          <span>
            <b>
              <Lang en="Sections:" bn="ধারা:" />
            </b>{" "}
            {act.sections.length}
          </span>
          <span>
            <b>
              <Lang en="Category:" bn="বিভাগ:" />
            </b>{" "}
            <Lang en={cat?.name.en ?? ""} bn={cat?.name.bn ?? ""} />
          </span>
        </div>
      </div>

      {Array.from(groups.entries()).map(([chapter, sections]) => (
        <div key={chapter} style={{ marginBottom: 28 }}>
          <h3
            style={{
              fontFamily: "var(--f-ui)",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".06em",
              color: "var(--faint)",
              marginBottom: 12,
            }}
          >
            {chapter}
          </h3>
          <div className="section-list">
            {sections.map((s) => (
              <Link key={s.slug} href={`/laws/${act.slug}/${s.slug}`} className="sl">
                <span className="sn">§{s.number}</span>
                <div>
                  <div className="stt">
                    <Lang en={s.title.en} bn={s.title.bn} />
                  </div>
                  <div className="sd">
                    <Lang
                      en={s.plain.en.slice(0, 90) + (s.plain.en.length > 90 ? "…" : "")}
                      bn={s.plain.bn.slice(0, 70) + (s.plain.bn.length > 70 ? "…" : "")}
                    />
                  </div>
                </div>
                {s.verified && <VerifiedBadge style={{ padding: "2px 8px" }} />}
                <ChevronRightIcon className="schev" width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
