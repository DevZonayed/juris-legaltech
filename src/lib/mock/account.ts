import type { Bilingual } from "@/lib/types";

export const currentUser = {
  name: "Arif Rahman",
  initials: "AR",
  email: "arif.rahman@gmail.com",
  phone: "+880 1712-345678",
  joined: "January 2026",
  plan: { en: "Free plan", bn: "ফ্রি প্ল্যান" },
};

export interface Bookmark {
  title: Bilingual;
  ref: string;
  href: string;
}

export const bookmarks: Bookmark[] = [
  { title: { en: "Cheating & delivery of property", bn: "প্রতারণা ও সম্পত্তি অর্পণ" }, ref: "Penal Code · §420", href: "/laws/penal-code-1860/s-420" },
  { title: { en: "Protection against eviction", bn: "উচ্ছেদের বিরুদ্ধে সুরক্ষা" }, ref: "Premises Rent Control · §18", href: "/laws/premises-rent-control-act-1991/s-18" },
  { title: { en: "Termination by notice", bn: "নোটিশ দ্বারা অবসান" }, ref: "Labour Act 2006 · §26", href: "/laws/labour-act-2006/s-26" },
];

export interface HistoryItem {
  kind: "ai" | "lawyer" | "read";
  title: Bilingual;
  meta: string;
}

export const history: HistoryItem[] = [
  { kind: "ai", title: { en: "Tenant eviction notice", bn: "ভাড়াটিয়া উচ্ছেদ নোটিশ" }, meta: "AI Assistant · Today" },
  { kind: "read", title: { en: "The Penal Code, 1860 · §420", bn: "দণ্ডবিধি, ১৮৬০ · §৪২০" }, meta: "Read · Today" },
  { kind: "lawyer", title: { en: "Consultation with Adv. Sadia Rahman", bn: "আইনজীবী সাদিয়া রহমানের সাথে পরামর্শ" }, meta: "Consultation · Yesterday" },
  { kind: "ai", title: { en: "Cheque dishonour case", bn: "চেক ডিজঅনার মামলা" }, meta: "AI Assistant · 2 days ago" },
];

export interface AppNotification {
  kind: "answer" | "consult" | "law" | "system";
  title: Bilingual;
  body: Bilingual;
  when: string;
  unread: boolean;
}

export const notifications: AppNotification[] = [
  {
    kind: "consult",
    title: { en: "Adv. Sadia Rahman replied", bn: "আইনজীবী সাদিয়া রহমান উত্তর দিয়েছেন" },
    body: { en: "“I've reviewed your notice. Let's talk about next steps.”", bn: "“আপনার নোটিশ দেখেছি। পরবর্তী পদক্ষেপ নিয়ে কথা বলি।”" },
    when: "5m ago",
    unread: true,
  },
  {
    kind: "law",
    title: { en: "New law added to your area", bn: "আপনার এলাকায় নতুন আইন যুক্ত হয়েছে" },
    body: { en: "Cyber Security Act 2023 · §24 is now available.", bn: "সাইবার নিরাপত্তা আইন ২০২৩ · §২৪ এখন উপলব্ধ।" },
    when: "2h ago",
    unread: true,
  },
  {
    kind: "answer",
    title: { en: "Your saved section was updated", bn: "আপনার সংরক্ষিত ধারা হালনাগাদ হয়েছে" },
    body: { en: "Penal Code · §420 now has a plain-language explanation.", bn: "দণ্ডবিধি · §৪২০ এ এখন সহজ-ভাষার ব্যাখ্যা আছে।" },
    when: "1d ago",
    unread: false,
  },
  {
    kind: "system",
    title: { en: "Welcome to Juris", bn: "জুরিসে স্বাগতম" },
    body: { en: "Verified Bangladesh law, answered. Ask your first question.", bn: "যাচাই করা বাংলাদেশ আইন। আপনার প্রথম প্রশ্ন করুন।" },
    when: "3d ago",
    unread: false,
  },
];
