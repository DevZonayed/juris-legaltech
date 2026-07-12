import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import { SectionHead, Disclaimer } from "@/components/ui";

export const metadata: Metadata = { title: "Help & FAQ" };

const faqs: { q: { en: string; bn: string }; a: { en: string; bn: string } }[] = [
  {
    q: { en: "Is Juris a substitute for a lawyer?", bn: "জুরিস কি আইনজীবীর বিকল্প?" },
    a: {
      en: "No. Juris gives general legal information grounded in verified Bangladesh law, always with a disclaimer. For advice on your specific situation, consult a verified lawyer.",
      bn: "না। জুরিস যাচাইকৃত বাংলাদেশ আইনের উপর ভিত্তি করে সাধারণ তথ্য দেয়, সবসময় দাবিত্যাগসহ। আপনার নির্দিষ্ট পরিস্থিতির জন্য যাচাইকৃত আইনজীবীর পরামর্শ নিন।",
    },
  },
  {
    q: { en: "Where do the answers come from?", bn: "উত্তরগুলো কোথা থেকে আসে?" },
    a: {
      en: "Only from a verified law database sourced from official Bangladesh legislation. The assistant never guesses — if the law isn't covered, it says so and offers a lawyer.",
      bn: "শুধুমাত্র সরকারি বাংলাদেশ আইন থেকে সংগৃহীত যাচাইকৃত ডেটাবেস থেকে। সহকারী কখনো অনুমান করে না — আইন না থাকলে তা জানায় এবং আইনজীবীর প্রস্তাব দেয়।",
    },
  },
  {
    q: { en: "Can I use it in Bangla?", bn: "আমি কি বাংলায় ব্যবহার করতে পারি?" },
    a: {
      en: "Yes. The entire product is bilingual — ask and read in Bangla or English, switch any time from the top bar.",
      bn: "হ্যাঁ। পুরো পণ্যটি দ্বিভাষিক — বাংলা বা ইংরেজিতে জিজ্ঞাসা ও পড়ুন, উপরের বার থেকে যেকোনো সময় বদলান।",
    },
  },
  {
    q: { en: "How are lawyers verified?", bn: "আইনজীবীরা কীভাবে যাচাই হয়?" },
    a: {
      en: "Each lawyer is checked against Bangladesh Bar Council registration before appearing in the marketplace.",
      bn: "মার্কেটপ্লেসে আসার আগে প্রতিটি আইনজীবীকে বাংলাদেশ বার কাউন্সিল নিবন্ধনের সাথে যাচাই করা হয়।",
    },
  },
  {
    q: { en: "Is my data private?", bn: "আমার তথ্য কি গোপন?" },
    a: {
      en: "Your questions and consultations are confidential. See the Privacy page for how data is handled.",
      bn: "আপনার প্রশ্ন ও পরামর্শ গোপনীয়। ডেটা কীভাবে পরিচালিত হয় তা প্রাইভেসি পেজে দেখুন।",
    },
  },
];

export default function HelpPage() {
  return (
    <div className="wrap page page-narrow" style={{ margin: "0 auto" }}>
      <SectionHead
        eyebrow={<Lang en="Help & FAQ" bn="সাহায্য ও প্রশ্ন" />}
        titleEn="How can we help?"
        titleBn="কীভাবে সাহায্য করতে পারি?"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {faqs.map((f, i) => (
          <div className="card" key={i}>
            <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 16, fontWeight: 800, marginBottom: 8 }}>
              <Lang en={f.q.en} bn={f.q.bn} />
            </h3>
            <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.65 }}>
              <Lang en={f.a.en} bn={f.a.bn} />
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <Disclaimer />
      </div>
    </div>
  );
}
