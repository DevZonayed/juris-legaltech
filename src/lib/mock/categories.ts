import type { LawCategory } from "@/lib/types";

export const categories: LawCategory[] = [
  {
    id: "criminal",
    name: { en: "Criminal law", bn: "ফৌজদারি আইন" },
    desc: { en: "Penal Code, CrPC, offences & punishment", bn: "দণ্ডবিধি, ফৌজদারি কার্যবিধি, অপরাধ ও শাস্তি" },
    count: 42,
    color: "var(--danger)",
    bg: "var(--danger-soft)",
    icon: "criminal",
  },
  {
    id: "property",
    name: { en: "Property & land", bn: "সম্পত্তি ও ভূমি" },
    desc: { en: "Transfer, registration, tenancy & inheritance", bn: "হস্তান্তর, নিবন্ধন, ভাড়া ও উত্তরাধিকার" },
    count: 38,
    color: "var(--info)",
    bg: "var(--info-soft)",
    icon: "property",
  },
  {
    id: "family",
    name: { en: "Family law", bn: "পারিবারিক আইন" },
    desc: { en: "Marriage, divorce, maintenance & custody", bn: "বিবাহ, তালাক, ভরণপোষণ ও অভিভাবকত্ব" },
    count: 27,
    color: "var(--primary)",
    bg: "var(--primary-soft)",
    icon: "family",
  },
  {
    id: "labour",
    name: { en: "Labour & employment", bn: "শ্রম ও কর্মসংস্থান" },
    desc: { en: "Labour Act 2006, wages, termination & safety", bn: "শ্রম আইন ২০০৬, মজুরি, বরখাস্ত ও নিরাপত্তা" },
    count: 19,
    color: "var(--gold)",
    bg: "var(--gold-soft)",
    icon: "labour",
  },
  {
    id: "cyber",
    name: { en: "Cyber & digital", bn: "সাইবার ও ডিজিটাল" },
    desc: { en: "Cyber Security Act, online fraud & data", bn: "সাইবার নিরাপত্তা আইন, অনলাইন প্রতারণা ও ডেটা" },
    count: 11,
    color: "#6C4BB6",
    bg: "#E8E1F5",
    icon: "cyber",
  },
  {
    id: "consumer",
    name: { en: "Consumer rights", bn: "ভোক্তা অধিকার" },
    desc: { en: "Consumer Rights Protection Act, refunds", bn: "ভোক্তা-অধিকার সংরক্ষণ আইন, রিফান্ড" },
    count: 9,
    color: "var(--primary-deep)",
    bg: "var(--primary-soft)",
    icon: "consumer",
  },
  {
    id: "constitution",
    name: { en: "Constitutional", bn: "সাংবিধানিক" },
    desc: { en: "Fundamental rights & the Constitution", bn: "মৌলিক অধিকার ও সংবিধান" },
    count: 7,
    color: "var(--info)",
    bg: "var(--info-soft)",
    icon: "constitution",
  },
  {
    id: "commercial",
    name: { en: "Business & commercial", bn: "ব্যবসা ও বাণিজ্যিক" },
    desc: { en: "Companies, contracts, negotiable instruments", bn: "কোম্পানি, চুক্তি, হস্তান্তরযোগ্য দলিল" },
    count: 16,
    color: "var(--gold-2)",
    bg: "var(--gold-soft)",
    icon: "commercial",
  },
  {
    id: "tax",
    name: { en: "Tax & finance", bn: "কর ও অর্থ" },
    desc: { en: "Income tax, VAT & customs", bn: "আয়কর, মূসক ও শুল্ক" },
    count: 12,
    color: "var(--primary)",
    bg: "var(--primary-soft)",
    icon: "tax",
  },
];

export function getCategory(id: string): LawCategory | undefined {
  return categories.find((c) => c.id === id);
}
