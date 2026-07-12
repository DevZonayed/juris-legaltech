import type { Bilingual } from "@/lib/types";

export interface Kpi {
  label: Bilingual;
  value: string;
  delta: string;
  trend: "up" | "down" | "warn";
  icon: "users" | "chat" | "flag" | "gap";
}

export const kpis: Kpi[] = [
  { label: { en: "Total users", bn: "মোট ব্যবহারকারী" }, value: "48,210", delta: "▲ 6.2% this week", trend: "up", icon: "users" },
  { label: { en: "Questions asked", bn: "প্রশ্ন জিজ্ঞাসিত" }, value: "12,904", delta: "▲ 11% this week", trend: "up", icon: "chat" },
  { label: { en: "Flagged answers", bn: "ফ্ল্যাগড উত্তর" }, value: "37", delta: "Needs review", trend: "warn", icon: "flag" },
  { label: { en: "Coverage gaps", bn: "কভারেজ গ্যাপ" }, value: "14", delta: "▲ 3 new topics", trend: "down", icon: "gap" },
];

export interface ChartCol {
  x: string;
  value: string;
  pct: number;
}

export const questionsPerDay: ChartCol[] = [
  { x: "Sat", value: "1.4k", pct: 52 },
  { x: "Sun", value: "1.7k", pct: 64 },
  { x: "Mon", value: "1.3k", pct: 48 },
  { x: "Tue", value: "2.1k", pct: 78 },
  { x: "Wed", value: "1.9k", pct: 70 },
  { x: "Thu", value: "2.4k", pct: 88 },
  { x: "Fri", value: "2.6k", pct: 96 },
];

export interface QueueItem {
  initials: string;
  color: string;
  title: string;
  sub: string;
  status: "pending" | "flag" | "ok";
  statusLabel: string;
}

export const verificationQueue: QueueItem[] = [
  { initials: "MK", color: "#6C4BB6", title: "Adv. Md. Kamal", sub: "Bar reg. 2018 · Dhaka", status: "pending", statusLabel: "Pending" },
  { initials: "NF", color: "var(--primary)", title: "Adv. Nusrat F.", sub: "Bar reg. 2020 · Ctg", status: "pending", statusLabel: "Pending" },
  { initials: "RH", color: "var(--danger)", title: "Answer #4821 flagged", sub: "Low confidence · tenancy", status: "flag", statusLabel: "Flag" },
  { initials: "SB", color: "var(--gold-2)", title: "Adv. S. Barua", sub: "Bar reg. 2015 · Sylhet", status: "ok", statusLabel: "Verified" },
];

export interface CoverageGap {
  query: string;
  asks: string;
  category: string;
  status: "flag" | "pending" | "ok";
  statusLabel: string;
}

export const coverageGaps: CoverageGap[] = [
  { query: "“Ride-share driver accident liability”", asks: "218", category: "Transport", status: "flag", statusLabel: "No data" },
  { query: "“Online loan app harassment”", asks: "176", category: "Cyber", status: "pending", statusLabel: "Sourcing" },
  { query: "“Freelancer tax on foreign income”", asks: "142", category: "Tax", status: "flag", statusLabel: "No data" },
  { query: "“Tenant security deposit refund”", asks: "119", category: "Property", status: "ok", statusLabel: "Drafted" },
];

export interface AdminUser {
  initials: string;
  color: string;
  name: string;
  email: string;
  role: "User" | "Lawyer" | "Admin" | "Editor";
  joined: string;
  status: "active" | "pending" | "suspended";
  questions: number;
}

export const adminUsers: AdminUser[] = [
  { initials: "AR", color: "var(--primary)", name: "Arif Rahman", email: "arif.r@gmail.com", role: "User", joined: "12 Jan 2026", status: "active", questions: 47 },
  { initials: "SR", color: "#6C4BB6", name: "Adv. Sadia Rahman", email: "sadia@juris.com.bd", role: "Lawyer", joined: "03 Nov 2025", status: "active", questions: 12 },
  { initials: "MK", color: "var(--gold-2)", name: "Adv. Md. Kamal", email: "kamal.h@gmail.com", role: "Lawyer", joined: "28 Feb 2026", status: "pending", questions: 0 },
  { initials: "TI", color: "var(--info)", name: "Tania Islam", email: "tania.i@yahoo.com", role: "User", joined: "19 Mar 2026", status: "active", questions: 133 },
  { initials: "NH", color: "var(--danger)", name: "Nadim Hasan", email: "nadim@spam.co", role: "User", joined: "07 Apr 2026", status: "suspended", questions: 4 },
  { initials: "FE", color: "var(--primary-deep)", name: "Farhana Editor", email: "farhana@juris.com.bd", role: "Editor", joined: "01 Sep 2025", status: "active", questions: 0 },
];

export interface FlaggedAnswer {
  id: string;
  question: string;
  answerExcerpt: string;
  reason: string;
  confidence: number;
  category: string;
  status: "pending" | "flag" | "ok";
  statusLabel: string;
}

export const flaggedAnswers: FlaggedAnswer[] = [
  {
    id: "4821",
    question: "Can my landlord increase rent by 50% mid-contract?",
    answerExcerpt: "Rent increases are generally regulated and a landlord may not raise rent arbitrarily during a fixed term…",
    reason: "Low retrieval confidence — source coverage weak",
    confidence: 41,
    category: "Property · Tenancy",
    status: "flag",
    statusLabel: "Flagged",
  },
  {
    id: "4809",
    question: "Is dowry demand after marriage punishable?",
    answerExcerpt: "Demanding dowry is an offence under the Dowry Prohibition Act and can lead to imprisonment and fine…",
    reason: "User reported: answer felt incomplete",
    confidence: 68,
    category: "Family",
    status: "pending",
    statusLabel: "In review",
  },
  {
    id: "4790",
    question: "What is the punishment for online defamation?",
    answerExcerpt: "Transmitting false or offensive information online to harm reputation is an offence under cyber law…",
    reason: "Auto-flag: citation mismatch detected",
    confidence: 55,
    category: "Cyber",
    status: "flag",
    statusLabel: "Flagged",
  },
];

export interface AdminNavItem {
  href: string;
  label: Bilingual;
  icon: "dashboard" | "users" | "shield" | "book" | "review" | "reports" | "settings";
}

export const adminNav: AdminNavItem[] = [
  { href: "/admin", label: { en: "Dashboard", bn: "ড্যাশবোর্ড" }, icon: "dashboard" },
  { href: "/admin/users", label: { en: "Users", bn: "ইউজার" }, icon: "users" },
  { href: "/admin/lawyers", label: { en: "Lawyer queue", bn: "আইনজীবী সারি" }, icon: "shield" },
  { href: "/admin/cms", label: { en: "Law CMS", bn: "ল CMS" }, icon: "book" },
  { href: "/admin/ai-review", label: { en: "AI review", bn: "এআই পর্যালোচনা" }, icon: "review" },
  { href: "/admin/reports", label: { en: "Reports", bn: "রিপোর্ট" }, icon: "reports" },
  { href: "/admin/settings", label: { en: "Settings", bn: "সেটিংস" }, icon: "settings" },
];
