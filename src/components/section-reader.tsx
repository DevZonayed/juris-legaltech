"use client";

import { useState } from "react";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { VerifiedBadge } from "@/components/ui";
import {
  ChevronRightIcon,
  CheckIcon,
  LightbulbIcon,
  InfoIcon,
  CopyIcon,
  ShareIcon,
  BookmarkIcon,
  ChatIcon,
} from "@/components/icons";
import type { LawAct, LawCategory, LawSection } from "@/lib/types";

type Tab = "en" | "bn" | "plain";

export function SectionReader({ act, section, category }: { act: LawAct; section: LawSection; category?: LawCategory }) {
  const [tab, setTab] = useState<Tab>("en");
  const [saved, setSaved] = useState(false);

  return (
    <div className="wrap page page-narrow" style={{ margin: "0 auto" }}>
      <div className="law-card">
        <div className="law">
          <div className="main">
            <div className="crumb">
              <Link href={`/laws/${act.slug}`}>
                <Lang en={act.title.en} bn={act.title.bn} />
              </Link>
              <ChevronRightIcon />
              {section.chapter && (
                <>
                  <span>{section.chapter}</span>
                  <ChevronRightIcon />
                </>
              )}
              <span className="cur">§{section.number}</span>
            </div>

            <h2 className="title lang-en">{section.title.en}</h2>
            <h2 className="title lang-bn bn">{section.title.bn}</h2>

            <div className="meta-line">
              <span>
                <b>
                  <Lang en="Act:" bn="আইন:" />
                </b>{" "}
                {act.actNo}
              </span>
              <span>
                <b>
                  <Lang en="Section:" bn="ধারা:" />
                </b>{" "}
                {section.number}
              </span>
              {section.chapter && (
                <span>
                  <b>
                    <Lang en="Chapter" bn="অধ্যায়" />
                  </b>
                </span>
              )}
              {section.verified && <VerifiedBadge style={{ padding: "2px 8px" }} />}
            </div>

            <div className="tabs lang-tabs">
              <button className={tab === "en" ? "on" : ""} onClick={() => setTab("en")}>
                English
              </button>
              <button className={tab === "bn" ? "on" : ""} onClick={() => setTab("bn")}>
                বাংলা
              </button>
              <button className={tab === "plain" ? "on" : ""} onClick={() => setTab("plain")}>
                <Lang en="Plain language" bn="সহজ ভাষা" />
              </button>
            </div>

            {tab === "en" && <div className="sec-body">{section.body.en}</div>}
            {tab === "bn" && <div className="sec-body bnbody">{section.body.bn}</div>}
            {tab === "plain" && (
              <>
                <div className="sec-body lang-en">{section.plain.en}</div>
                <div className="sec-body bnbody lang-bn">{section.plain.bn}</div>
              </>
            )}

            {tab !== "plain" && (
              <div className="callout plain">
                <div className="ch">
                  <LightbulbIcon width={16} height={16} />
                  <Lang en="In plain language" bn="সহজ ভাষায়" />
                </div>
                <p className="lang-en">{section.plain.en}</p>
                <p className="lang-bn" style={{ fontFamily: "var(--f-bn)" }}>
                  {section.plain.bn}
                </p>
              </div>
            )}

            {section.example && (
              <div className="callout example">
                <div className="ch">
                  <InfoIcon width={16} height={16} />
                  <Lang en="Example" bn="উদাহরণ" />
                </div>
                <p className="lang-en">{section.example.en}</p>
                <p className="lang-bn" style={{ fontFamily: "var(--f-bn)" }}>
                  {section.example.bn}
                </p>
              </div>
            )}

            <div className="tool-row">
              <button className="tb">
                <CopyIcon width={15} height={15} /> <Lang en="Copy" bn="কপি" />
              </button>
              <button className="tb">
                <ShareIcon width={15} height={15} /> <Lang en="Share" bn="শেয়ার" />
              </button>
              <button className={`tb ${saved ? "on" : ""}`} onClick={() => setSaved((s) => !s)}>
                <BookmarkIcon width={15} height={15} />{" "}
                {saved ? <Lang en="Saved" bn="সংরক্ষিত" /> : <Lang en="Bookmark" bn="বুকমার্ক" />}
              </button>
              <Link className="tb" href="/assistant" style={{ color: "var(--primary)", borderColor: "var(--primary)" }}>
                <ChatIcon width={15} height={15} /> <Lang en="Ask AI" bn="এআই" />
              </Link>
            </div>
          </div>

          <aside className="aside">
            <div className="sh">
              <Lang en="Related laws" bn="সম্পর্কিত আইন" />
            </div>
            {(section.related ?? []).map((r) =>
              r.href ? (
                <Link key={r.ref} className="rel" href={r.href}>
                  <div className="rt">
                    <Lang en={r.title.en} bn={r.title.bn} />
                  </div>
                  <div className="rd mono">{r.ref}</div>
                </Link>
              ) : (
                <span key={r.ref} className="rel">
                  <div className="rt">
                    <Lang en={r.title.en} bn={r.title.bn} />
                  </div>
                  <div className="rd mono">{r.ref}</div>
                </span>
              ),
            )}
            {(!section.related || section.related.length === 0) && (
              <p style={{ fontSize: 12.5, color: "var(--muted)" }}>
                <Lang en="No related sections listed." bn="কোনো সম্পর্কিত ধারা নেই।" />
              </p>
            )}

            {section.courtRefs && section.courtRefs.length > 0 && (
              <>
                <div className="sh" style={{ marginTop: 20 }}>
                  <Lang en="Court reference" bn="আদালত রেফারেন্স" />
                </div>
                {section.courtRefs.map((r) => (
                  <span key={r.ref} className="rel">
                    <div className="rt">
                      <Lang en={r.title.en} bn={r.title.bn} />
                    </div>
                    <div className="rd mono">{r.ref}</div>
                  </span>
                ))}
              </>
            )}

            <div
              style={{
                marginTop: 24,
                padding: 14,
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-sm)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              <CheckIcon width={14} height={14} style={{ color: "var(--primary)" }} />
              <Lang
                en={`Verified against ${category?.name.en ?? "the law database"}`}
                bn={`${category?.name.bn ?? "আইন ডেটাবেস"} থেকে যাচাইকৃত`}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
