import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { Lang } from "@/components/lang";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div className="fb">
          <Link className="brand" href="/">
            <BrandMark className="mark" />
            <span>
              Juris
              <small>বাংলাদেশ আইন · NexaLance</small>
            </span>
          </Link>
        </div>
        <div className="legal">
          <div style={{ marginBottom: 10, fontWeight: 700, color: "var(--ink)" }}>Ref NLX-LEGALTECH · v1.0 · 2026</div>
          <Link href="/legal/disclaimer">Disclaimer</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/help">Help</Link>
          <br />
          <div style={{ marginTop: 14, maxWidth: 340, fontSize: 11.5 }}>
            <Lang
              en="This platform presents general legal information. It is not legal advice."
              bn="এই প্ল্যাটফর্ম সাধারণ আইনি তথ্য উপস্থাপন করে। এটি আইনি পরামর্শ নয়।"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
