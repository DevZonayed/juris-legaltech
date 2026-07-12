import Link from "next/link";
import { Lang } from "@/components/lang";
import { LinkButton, VerifiedBadge, SectionHead, Stars } from "@/components/ui";
import { categories } from "@/lib/mock/categories";
import { lawyers } from "@/lib/mock/lawyers";
import { CategoryIcon } from "@/components/category-icon";
import {
  ChatIcon,
  BookIcon,
  SearchIcon,
  ShieldCheckIcon,
  GlobeIcon,
  CheckIcon,
  UsersIcon,
  ChevronRightIcon,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Bangladesh Legal-Tech · Ref NLX-LEGALTECH</span>
            <h1>
              <span className="lang-en">
                Verified Bangladesh law, <em>answered.</em>
              </span>
              <span className="lang-bn">
                যাচাই করা বাংলাদেশ আইন, <em>এখন সহজ।</em>
              </span>
            </h1>
            <p className="lede lang-en">
              An AI legal assistant grounded strictly in verified Bangladesh law — never guesswork. Search the full law
              database and consult Bar-verified lawyers. Bilingual, by design.
            </p>
            <p className="lede lang-bn" style={{ fontFamily: "var(--f-bn)" }}>
              একটি এআই আইন সহকারী — যা শুধুমাত্র যাচাই করা বাংলাদেশ আইনের উপর ভিত্তি করে উত্তর দেয়, অনুমান নয়। সম্পূর্ণ আইন ডেটাবেস
              খুঁজুন এবং যাচাইকৃত আইনজীবীর পরামর্শ নিন।
            </p>
            <p className="bn-lede lang-en">এই তথ্য শুধুমাত্র সাধারণ তথ্যের জন্য। এটি আইনি পরামর্শ নয়।</p>
            <div className="hero-cta">
              <LinkButton href="/assistant" variant="primary">
                <ChatIcon />
                <Lang en="Ask the assistant" bn="প্রশ্ন করুন" />
              </LinkButton>
              <LinkButton href="/laws" variant="ghost">
                <BookIcon />
                <Lang en="Browse the law" bn="আইন দেখুন" />
              </LinkButton>
            </div>
            <div className="trust-row">
              <div className="ti">
                <ShieldCheckIcon width={18} height={18} />
                <Lang en="Citations on every answer" bn="প্রতিটি উত্তরে উদ্ধৃতি" />
              </div>
              <div className="ti">
                <GlobeIcon width={18} height={18} />
                <Lang en="বাংলা + English" bn="বাংলা ও ইংরেজি" />
              </div>
              <div className="ti">
                <CheckIcon width={18} height={18} />
                <Lang en="WCAG AA · Light / Dark" bn="সহজলভ্য · আলো / অন্ধকার" />
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/hero.png"
              alt="Illustration of Bangladesh law statutes, scales of justice and an AI answer bubble"
            />
            <div className="float a">
              <VerifiedBadge en="Verified source" bn="যাচাইকৃত উৎস" />
            </div>
            <div className="float b">
              <SearchIcon width={15} height={15} /> 12,400+ sections indexed
            </div>
          </div>
        </div>
        <div className="stat-band">
          <div className="s">
            <b>1,665</b>
            <span>
              <Lang en="acts indexed" bn="আইন সূচিবদ্ধ" />
            </span>
          </div>
          <div className="s">
            <b>12,400+</b>
            <span>
              <Lang en="sections searchable" bn="ধারা অনুসন্ধানযোগ্য" />
            </span>
          </div>
          <div className="s">
            <b>2</b>
            <span>
              <Lang en="languages, one system" bn="ভাষা, এক সিস্টেম" />
            </span>
          </div>
          <div className="s">
            <b>100%</b>
            <span>
              <Lang en="answers cited" bn="উত্তর উদ্ধৃত" />
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- FEATURES */}
      <section className="section wrap">
        <SectionHead
          eyebrow={<Lang en="Why Juris" bn="কেন জুরিস" />}
          titleEn="Legal help you can actually trust"
          titleBn="যে আইনি সহায়তায় আপনি সত্যিই ভরসা করতে পারেন"
          descEn="Three ways in — one grounded, verified source of truth for Bangladesh law."
          descBn="তিনটি প্রবেশপথ — বাংলাদেশ আইনের একটি নির্ভরযোগ্য, যাচাইকৃত উৎস।"
        />
        <div className="feature-grid">
          <div className="feature">
            <div className="fi">
              <ChatIcon width={24} height={24} />
            </div>
            <h3>
              <Lang en="Grounded AI assistant" bn="নির্ভরযোগ্য এআই সহকারী" />
            </h3>
            <p>
              <Lang
                en="Ask in plain Bangla or English. Every answer cites the exact Act and Section, and says so honestly when the law doesn't cover your question."
                bn="সহজ বাংলা বা ইংরেজিতে জিজ্ঞাসা করুন। প্রতিটি উত্তর সঠিক আইন ও ধারা উদ্ধৃত করে, এবং আইন না থাকলে সৎভাবে জানায়।"
              />
            </p>
          </div>
          <div className="feature">
            <div className="fi">
              <BookIcon width={24} height={24} />
            </div>
            <h3>
              <Lang en="Full law database" bn="সম্পূর্ণ আইন ডেটাবেস" />
            </h3>
            <p>
              <Lang
                en="Browse acts by category, read sections with plain-language explanations and real examples, in both languages."
                bn="বিভাগ অনুযায়ী আইন ব্রাউজ করুন, সহজ ভাষায় ব্যাখ্যা ও বাস্তব উদাহরণসহ ধারা পড়ুন — দুই ভাষায়।"
              />
            </p>
          </div>
          <div className="feature">
            <div className="fi">
              <UsersIcon width={24} height={24} />
            </div>
            <h3>
              <Lang en="Bar-verified lawyers" bn="বার-যাচাইকৃত আইনজীবী" />
            </h3>
            <p>
              <Lang
                en="When you need a human, consult a Bangladesh Bar Council–verified lawyer over secure chat consultation."
                bn="যখন মানুষ দরকার, নিরাপদ চ্যাটে বাংলাদেশ বার কাউন্সিল-যাচাইকৃত আইনজীবীর পরামর্শ নিন।"
              />
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- HOW IT WORKS */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={<Lang en="How it works" bn="যেভাবে কাজ করে" />}
          titleEn="From question to grounded answer"
          titleBn="প্রশ্ন থেকে নির্ভরযোগ্য উত্তর"
        />
        <div className="steps-row">
          <div className="step-item">
            <div className="num">1</div>
            <h3>
              <Lang en="Ask your question" bn="প্রশ্ন করুন" />
            </h3>
            <p>
              <Lang
                en="Type or speak in Bangla or English — describe your situation in your own words."
                bn="বাংলা বা ইংরেজিতে লিখুন বা বলুন — নিজের ভাষায় পরিস্থিতি বর্ণনা করুন।"
              />
            </p>
          </div>
          <div className="step-item">
            <div className="num">2</div>
            <h3>
              <Lang en="We retrieve the law" bn="আইন খুঁজে আনি" />
            </h3>
            <p>
              <Lang
                en="The assistant searches only the verified law database and gathers the exact relevant sections."
                bn="সহকারী শুধুমাত্র যাচাইকৃত ডেটাবেস খুঁজে প্রাসঙ্গিক ধারাগুলো সংগ্রহ করে।"
              />
            </p>
          </div>
          <div className="step-item">
            <div className="num">3</div>
            <h3>
              <Lang en="Get a cited answer" bn="উদ্ধৃতিসহ উত্তর পান" />
            </h3>
            <p>
              <Lang
                en="A plain-language answer with citations, a disclaimer, and the option to talk to a lawyer."
                bn="সহজ ভাষায় উত্তর, উদ্ধৃতি, দাবিত্যাগ এবং আইনজীবীর সাথে কথা বলার সুযোগ।"
              />
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- CATEGORIES */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={<Lang en="Law database" bn="আইন ডেটাবেস" />}
          titleEn="Browse Bangladesh law by category"
          titleBn="বিভাগ অনুযায়ী বাংলাদেশ আইন"
        />
        <div className="cat-grid">
          {categories.slice(0, 6).map((cat) => (
            <Link key={cat.id} href={`/laws?category=${cat.id}`} className="cat-card">
              <div className="ci" style={{ background: cat.bg, color: cat.color }}>
                <CategoryIcon name={cat.icon} />
              </div>
              <h3>
                <Lang en={cat.name.en} bn={cat.name.bn} />
              </h3>
              <div className="cd">
                <Lang en={cat.desc.en} bn={cat.desc.bn} />
              </div>
              <div className="cn">
                {cat.count} <Lang en="acts" bn="আইন" />
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <LinkButton href="/laws" variant="ghost" size="sm">
            <Lang en="View all categories" bn="সব বিভাগ দেখুন" />
            <ChevronRightIcon width={16} height={16} />
          </LinkButton>
        </div>
      </section>

      {/* ------------------------------------------------------- LAWYERS */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={
            <>
              <Lang en="Marketplace" bn="মার্কেটপ্লেস" /> · Phase 2
            </>
          }
          titleEn="Verified lawyers, ready to help"
          titleBn="যাচাইকৃত আইনজীবী, সাহায্যে প্রস্তুত"
        />
        <div className="grid-3">
          {lawyers.slice(0, 3).map((l) => (
            <Link key={l.slug} href={`/lawyers/${l.slug}`} className="lawyer-card">
              <div className="lc-top">
                <span className="avatar" style={{ background: l.avatarColor }}>
                  {l.initials}
                </span>
                <div>
                  <div className="lc-name">{l.name}</div>
                  <div className="lc-spec">
                    <Lang en={l.location.en} bn={l.location.bn} /> ·{" "}
                    {l.specialties.map((s) => s.en).join(", ")}
                  </div>
                </div>
              </div>
              {l.verified && <VerifiedBadge en="Bar Council verified" bn="বার কাউন্সিল যাচাইকৃত" />}
              <div className="lc-foot">
                <Stars rating={l.rating} count={l.reviews} />
                <b>৳{l.feePerSession.toLocaleString()}</b>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <LinkButton href="/lawyers" variant="gold" size="sm">
            <Lang en="Find a lawyer" bn="আইনজীবী খুঁজুন" />
          </LinkButton>
        </div>
      </section>

      {/* ----------------------------------------------------------- CTA */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="cta-band">
          <h2>
            <Lang en="Get a grounded answer in seconds" bn="সেকেন্ডেই নির্ভরযোগ্য উত্তর পান" />
          </h2>
          <p>
            <Lang
              en="No sign-up needed to start. Ask your first legal question in Bangla or English."
              bn="শুরু করতে সাইন-আপ লাগবে না। বাংলা বা ইংরেজিতে প্রথম প্রশ্ন করুন।"
            />
          </p>
          <LinkButton href="/assistant" variant="gold">
            <ChatIcon />
            <Lang en="Ask the assistant" bn="প্রশ্ন করুন" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
