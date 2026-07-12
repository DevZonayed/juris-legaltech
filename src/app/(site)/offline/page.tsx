import type { Metadata } from "next";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { WifiOffIcon, DownloadIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Offline" };

export default function OfflinePage() {
  return (
    <div className="wrap page" style={{ display: "grid", placeItems: "center", minHeight: "60vh", textAlign: "center" }}>
      <div style={{ maxWidth: 460 }}>
        <div
          className="emptyico"
          style={{ margin: "0 auto 18px", background: "var(--gold-soft)", color: "var(--gold)", width: 64, height: 64 }}
        >
          <WifiOffIcon width={30} height={30} />
        </div>
        <h1 style={{ fontSize: 28, marginBottom: 10 }}>
          <Lang en="You’re offline" bn="আপনি অফলাইন" />
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>
          <Lang
            en="Check your connection and try again. Sections you’ve saved are still readable offline."
            bn="আপনার সংযোগ পরীক্ষা করে আবার চেষ্টা করুন। সংরক্ষিত ধারা এখনও অফলাইনে পড়া যাবে।"
          />
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/">
            <Lang en="Retry" bn="পুনরায়" />
          </Link>
          <Link className="btn btn-ghost" href="/account">
            <DownloadIcon width={17} height={17} /> <Lang en="Open downloads" bn="ডাউনলোড খুলুন" />
          </Link>
        </div>
      </div>
    </div>
  );
}
