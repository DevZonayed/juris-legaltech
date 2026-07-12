import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import { SectionHead, Disclaimer } from "@/components/ui";

interface LegalDoc {
  title: { en: string; bn: string };
  body: { en: string; bn: string }[];
}

const docs: Record<string, LegalDoc> = {
  disclaimer: {
    title: { en: "Legal disclaimer", bn: "আইনি দাবিত্যাগ" },
    body: [
      {
        en: "Juris provides general legal information based on verified Bangladesh law. It is not, and must not be treated as, legal advice for any specific situation.",
        bn: "জুরিস যাচাইকৃত বাংলাদেশ আইনের উপর ভিত্তি করে সাধারণ আইনি তথ্য প্রদান করে। এটি কোনো নির্দিষ্ট পরিস্থিতির জন্য আইনি পরামর্শ নয় এবং তেমনভাবে গণ্য করা যাবে না।",
      },
      {
        en: "Laws change and their application depends on facts. Always consult a qualified, Bar-verified lawyer before acting on any information here.",
        bn: "আইন পরিবর্তন হয় এবং প্রয়োগ তথ্যের উপর নির্ভর করে। এখানে দেওয়া কোনো তথ্যের ভিত্তিতে পদক্ষেপ নেওয়ার আগে সর্বদা একজন যোগ্য, বার-যাচাইকৃত আইনজীবীর পরামর্শ নিন।",
      },
    ],
  },
  privacy: {
    title: { en: "Privacy policy", bn: "প্রাইভেসি নীতি" },
    body: [
      {
        en: "Your questions, consultations and saved sections are confidential and are used only to provide and improve the service.",
        bn: "আপনার প্রশ্ন, পরামর্শ ও সংরক্ষিত ধারা গোপনীয় এবং শুধুমাত্র সেবা প্রদান ও উন্নয়নের জন্য ব্যবহৃত হয়।",
      },
      {
        en: "We do not sell personal data. Consultations with lawyers are protected and visible only to you and the lawyer.",
        bn: "আমরা ব্যক্তিগত তথ্য বিক্রি করি না। আইনজীবীর সাথে পরামর্শ সুরক্ষিত এবং শুধুমাত্র আপনি ও আইনজীবী দেখতে পান।",
      },
    ],
  },
  terms: {
    title: { en: "Terms of service", bn: "সেবার শর্তাবলি" },
    body: [
      {
        en: "By using Juris you agree to use it for lawful purposes and acknowledge that AI answers are general information, not advice.",
        bn: "জুরিস ব্যবহার করে আপনি এটি বৈধ উদ্দেশ্যে ব্যবহারে সম্মত হন এবং স্বীকার করেন যে এআই উত্তর সাধারণ তথ্য, পরামর্শ নয়।",
      },
      {
        en: "Consultation fees are payable to the lawyer through supported payment methods (bKash, Nagad, Rocket or card).",
        bn: "পরামর্শ ফি সমর্থিত পেমেন্ট মাধ্যমে (বিকাশ, নগদ, রকেট বা কার্ড) আইনজীবীকে প্রদেয়।",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((doc) => ({ doc }));
}

export function generateMetadata({ params }: { params: { doc: string } }): Metadata {
  const d = docs[params.doc];
  return { title: d ? d.title.en : "Legal" };
}

export default function LegalPage({ params }: { params: { doc: string } }) {
  const doc = docs[params.doc];
  if (!doc) notFound();
  return (
    <div className="wrap page page-narrow" style={{ margin: "0 auto" }}>
      <SectionHead
        eyebrow={<Lang en="Legal" bn="আইনগত" />}
        titleEn={doc.title.en}
        titleBn={doc.title.bn}
      />
      <div className="card">
        {doc.body.map((p, i) => (
          <p key={i} style={{ color: "var(--ink-2)", fontSize: 14.5, lineHeight: 1.75, marginBottom: 14 }}>
            <Lang en={p.en} bn={p.bn} />
          </p>
        ))}
        <Disclaimer />
      </div>
    </div>
  );
}
