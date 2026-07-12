import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import {
  SectionHead,
  Button,
  CitationChip,
  Disclaimer,
  VerifiedBadge,
  Stars,
} from "@/components/ui";
import { BookmarkIcon, SearchIcon } from "@/components/icons";
import { mockups, phoneMockups } from "@/lib/mock/mockups";

export const metadata: Metadata = {
  title: "Design System",
  description: "The Juris design system — tokens, components, states and the full screen delivery map.",
};

const colorTokens = [
  { name: "Primary Deep", hex: "#064E3B" },
  { name: "Primary", hex: "#0E7C5A" },
  { name: "Primary Dark-UI", hex: "#37C892" },
  { name: "Primary Soft", hex: "#E2F0E9" },
  { name: "Gold / Cite", hex: "#9C7218" },
  { name: "Gold Soft", hex: "#F4E9CD" },
  { name: "Danger", hex: "#B23A2B" },
  { name: "Info", hex: "#1F6FEB" },
  { name: "Ink", hex: "#10221C" },
  { name: "Muted", hex: "#6E7A72" },
  { name: "Paper", hex: "#F6F4ED" },
  { name: "Paper Dark", hex: "#081410" },
];

export default function StyleGuidePage() {
  return (
    <>
      {/* MOCKUP GALLERY */}
      <div className="mock-band">
        <section className="wrap section">
          <SectionHead
            eyebrow={<Lang en="00 · Hi-fi mockups" bn="০০ · হাই-ফাই মকআপ" />}
            titleEn="Every screen, visualised"
            titleBn="প্রতিটি স্ক্রিন, দৃশ্যমান"
            descEn="High-fidelity reference visuals for each core screen — the approval target the coded product is built to match."
            descBn="প্রতিটি মূল স্ক্রিনের হাই-ফিডেলিটি রেফারেন্স ভিজ্যুয়াল — কোডেড পণ্য যার সাথে মিলিয়ে তৈরি।"
            maxWidth={720}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="cat-grid">
            {mockups.map((m) => (
              <figure className="mock" key={m.file}>
                <div className="browser">
                  <div className="bar">
                    <div className="dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="url">juris.com.bd · {m.id}</div>
                  </div>
                  <img src={`/assets/mockups/${m.file}.png`} alt={`${m.en} mockup`} loading="lazy" />
                </div>
                <figcaption>
                  <span className="id">{m.id}</span> <Lang en={m.en} bn={m.bn} />
                  <span className="cap-sub"> · {m.kind}</span>
                  <span className={`tag ${m.tag === "Phase 2" ? "p2" : m.kind === "admin" ? "tadm" : ""}`}>{m.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mock-phones" style={{ marginTop: 34 }}>
            {phoneMockups.map((m) => (
              <figure key={m.file}>
                <img src={`/assets/mockups/${m.file}.png`} alt={`${m.en} mobile mockup`} loading="lazy" />
                <figcaption>
                  <span className="id">{m.id}</span> <Lang en={m.en} bn={m.bn} />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      {/* FOUNDATIONS */}
      <section className="wrap section">
        <SectionHead
          eyebrow={<Lang en="01 · Foundations" bn="০১ · ভিত্তি" />}
          titleEn="A design system built for trust"
          titleBn="আস্থার জন্য তৈরি ডিজাইন সিস্টেম"
          descEn="One token set powers web, mobile and admin — in light and dark. Deep green signals authority; gold marks anything verified or cited."
          descBn="একটি টোকেন সেট ওয়েব, মোবাইল ও অ্যাডমিনকে চালায় — আলো ও অন্ধকারে।"
        />
        <div className="grid tokens-grid">
          <div className="panel">
            <h3>Color tokens</h3>
            <div className="sub">Semantic, theme-aware. Verified against WCAG AA.</div>
            <div className="swatches">
              {colorTokens.map((c) => (
                <div className="sw" key={c.name}>
                  <div
                    className="chip"
                    style={{ background: c.hex, border: c.hex === "#F6F4ED" ? "1px solid #E3DFD3" : undefined }}
                  />
                  <div className="meta">
                    <b>{c.name}</b>
                    <span>{c.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3>Type &amp; script</h3>
            <div className="sub">Fraunces · Plus Jakarta Sans · Noto Sans Bengali · IBM Plex Mono.</div>
            <div className="type-row">
              <div className="d1">Aa আইন</div>
              <div className="lbl">Fraunces · 40 / 600</div>
            </div>
            <div className="type-row">
              <div className="d2">Section 375</div>
              <div className="lbl">Display · 28 / 600</div>
            </div>
            <div className="type-row">
              <div className="d3">The Penal Code, 1860</div>
              <div className="lbl">UI · 20 / 700</div>
            </div>
            <div className="type-row">
              <div className="d4 bn">দণ্ডবিধি, ১৮৬০</div>
              <div className="lbl">Bengali · 16 / 600</div>
            </div>
            <div className="type-row">
              <div className="d5 mono">Act XLV · § 375(a)</div>
              <div className="lbl">Mono · tabular</div>
            </div>
            <div style={{ marginTop: 22 }}>
              <div className="lbl" style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--muted)", marginBottom: 14 }}>
                SPACING SCALE · 4pt base
              </div>
              <div className="scale-strip">
                {[
                  { h: 16, s: "4", b: "xs" },
                  { h: 24, s: "8", b: "sm" },
                  { h: 36, s: "12", b: "md" },
                  { h: 52, s: "16", b: "lg" },
                  { h: 72, s: "24", b: "xl" },
                  { h: 96, s: "32", b: "2xl" },
                ].map((u) => (
                  <div className="u" style={{ height: u.h }} key={u.b}>
                    <span>{u.s}</span>
                    <b>{u.b}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={<Lang en="02 · Components" bn="০২ · উপাদান" />}
          titleEn="Build once, reuse everywhere"
          titleBn="একবার তৈরি, সর্বত্র ব্যবহার"
        />
        <div className="grid comp-grid">
          <div className="comp">
            <span className="cn">Buttons</span>
            <Button variant="primary" size="sm">
              Ask AI
            </Button>
            <Button variant="ghost" size="sm">
              Save section
            </Button>
            <Button variant="gold" size="sm">
              Talk to a lawyer
            </Button>
          </div>
          <div className="comp">
            <span className="cn">Citation chips</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <CitationChip>Penal Code · §420</CitationChip>
              <CitationChip>DMA 2010 · §57</CitationChip>
              <CitationChip>Const. · Art.27</CitationChip>
            </div>
          </div>
          <div className="comp">
            <span className="cn">Disclaimer banner</span>
            <Disclaimer />
          </div>
          <div className="comp">
            <span className="cn">Verified &amp; rating</span>
            <VerifiedBadge en="Bar Council verified" bn="বার কাউন্সিল যাচাইকৃত" />
            <Stars rating={4.6} count={128} />
          </div>
          <div className="comp">
            <span className="cn">Search bar + voice</span>
            <div className="searchbar">
              <SearchIcon />
              <span className="ph">
                <Lang en="Search acts, sections…" bn="আইন, ধারা খুঁজুন…" />
              </span>
              <span className="mic">
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                </svg>
              </span>
            </div>
          </div>
          <div className="comp">
            <span className="cn">OTP input</span>
            <div className="otp">
              {["4", "7", "2", "", "", ""].map((d, i) => (
                <div className={`cell ${i === 3 ? "active" : ""}`} key={i}>
                  {d}
                </div>
              ))}
            </div>
          </div>
          <div className="comp">
            <span className="cn">Tabs &amp; toast</span>
            <div className="tabs">
              <button className="on">বাংলা</button>
              <button>English</button>
              <button>Plain</button>
            </div>
            <div className="toast">
              <span className="dot" />
              <Lang en="Saved to bookmarks" bn="বুকমার্কে সংরক্ষিত" />
            </div>
          </div>
          <div className="comp">
            <span className="cn">Verification stepper</span>
            <div className="stepper">
              <div className="st done">
                <span className="dot">
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </div>
              <div className="bar fill" />
              <div className="st now">
                <span className="dot">2</span>
              </div>
              <div className="bar" />
              <div className="st">
                <span className="dot">3</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, fontWeight: 700, color: "var(--muted)" }}>
              <span>Submitted</span>
              <span style={{ color: "var(--primary)" }}>Under review</span>
              <span>Verified</span>
            </div>
          </div>
          <div className="comp">
            <span className="cn">Empty state</span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center" }}>
              <span className="emptyico">
                <BookmarkIcon width={26} height={26} />
              </span>
              <div className="st-t">
                <Lang en="No bookmarks yet" bn="কোনো বুকমার্ক নেই" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATES */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={<Lang en="03 · State matrix" bn="০৩ · অবস্থা ম্যাট্রিক্স" />}
          titleEn="Every screen ships five states"
          titleBn="প্রতিটি স্ক্রিনে পাঁচটি অবস্থা"
          descEn="Default, loading (skeletons), empty, error and offline — designed, not left to chance."
          descBn="ডিফল্ট, লোডিং, খালি, ত্রুটি ও অফলাইন — পরিকল্পিত।"
        />
        <div className="grid states">
          <div className="state">
            <div className="sh">Loading</div>
            <div className="sb" style={{ alignItems: "stretch", justifyContent: "flex-start" }}>
              <div className="sk big" />
              <div className="sk" />
              <div className="sk w70" />
              <div className="sk w45" />
            </div>
          </div>
          <div className="state">
            <div className="sh">Empty</div>
            <div className="sb">
              <div className="emptyico">
                <BookmarkIcon width={26} height={26} />
              </div>
              <div className="st-t">
                <Lang en="No bookmarks yet" bn="কোনো বুকমার্ক নেই" />
              </div>
              <p>
                <Lang en="Save a section to find it here." bn="এখানে খুঁজতে ধারা সংরক্ষণ করুন।" />
              </p>
            </div>
          </div>
          <div className="state">
            <div className="sh">Error</div>
            <div className="sb">
              <div className="emptyico" style={{ background: "var(--danger-soft)", color: "var(--danger)" }}>
                <svg viewBox="0 0 24 24" width={26} height={26} fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
              </div>
              <div className="st-t">
                <Lang en="Something went wrong" bn="কিছু সমস্যা হয়েছে" />
              </div>
              <p>
                <Lang en="We couldn't load this." bn="লোড করা যায়নি।" />
              </p>
            </div>
          </div>
          <div className="state">
            <div className="sh">Offline</div>
            <div className="sb">
              <div className="emptyico" style={{ background: "var(--gold-soft)", color: "var(--gold)" }}>
                <BookmarkIcon width={26} height={26} />
              </div>
              <div className="st-t">
                <Lang en="You're offline" bn="আপনি অফলাইন" />
              </div>
              <p>
                <Lang en="Saved laws are still readable." bn="সংরক্ষিত আইন এখনও পড়া যাবে।" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
