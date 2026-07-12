import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import { SectionHead } from "@/components/ui";
import { LawyersDirectory } from "@/components/lawyers-directory";

export const metadata: Metadata = {
  title: "Verified Lawyers",
  description: "Consult Bangladesh Bar Council–verified lawyers over secure chat consultation.",
};

export default function LawyersPage() {
  return (
    <div className="wrap page">
      <SectionHead
        eyebrow={
          <>
            <Lang en="Marketplace" bn="মার্কেটপ্লেস" /> · Phase 2
          </>
        }
        titleEn="Bar-verified lawyers"
        titleBn="বার-যাচাইকৃত আইনজীবী"
        descEn="Every lawyer is verified against the Bangladesh Bar Council. Filter by area of law and consult over secure chat."
        descBn="প্রতিটি আইনজীবী বাংলাদেশ বার কাউন্সিল থেকে যাচাইকৃত। আইনের ক্ষেত্র অনুযায়ী ফিল্টার করুন ও নিরাপদ চ্যাটে পরামর্শ নিন।"
      />
      <LawyersDirectory />
    </div>
  );
}
