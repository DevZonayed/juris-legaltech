import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import { SectionHead } from "@/components/ui";
import { LawsExplorer } from "@/components/laws-explorer";

export const metadata: Metadata = {
  title: "Law Database",
  description: "Browse and filter Bangladesh law by category, act and section with plain-language explanations.",
};

export default function LawsPage({ searchParams }: { searchParams: { category?: string } }) {
  return (
    <div className="wrap page">
      <SectionHead
        eyebrow={<Lang en="Law database" bn="আইন ডেটাবেস" />}
        titleEn="Bangladesh law, browsable"
        titleBn="বাংলাদেশ আইন, সহজে ব্রাউজযোগ্য"
        descEn="Explore acts by category, filter by keyword, and sort. Every section has the authoritative text, a plain-language explanation and citations."
        descBn="বিভাগ অনুযায়ী আইন দেখুন, কীওয়ার্ড দিয়ে ফিল্টার করুন ও সাজান। প্রতিটি ধারায় মূল পাঠ, সহজ ভাষার ব্যাখ্যা ও উদ্ধৃতি আছে।"
      />
      <LawsExplorer initialCategory={searchParams.category} />
    </div>
  );
}
