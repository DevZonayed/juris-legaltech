export interface Mockup {
  file: string;
  id: string;
  en: string;
  bn: string;
  kind: "web" | "admin" | "mobile";
  tag: "MVP" | "Phase 2";
}

export const mockups: Mockup[] = [
  { file: "ai-web", id: "C2", en: "AI Legal Assistant", bn: "এআই আইন সহকারী", kind: "web", tag: "MVP" },
  { file: "section-web", id: "D6", en: "Section detail", bn: "ধারা বিস্তারিত", kind: "web", tag: "MVP" },
  { file: "search-web", id: "D3", en: "Search results", bn: "অনুসন্ধান ফলাফল", kind: "web", tag: "MVP" },
  { file: "admin-web", id: "H2", en: "Admin dashboard", bn: "অ্যাডমিন ড্যাশবোর্ড", kind: "admin", tag: "MVP" },
  { file: "auth-web", id: "A4·A5", en: "Login & OTP verification", bn: "লগইন ও ওটিপি যাচাই", kind: "web", tag: "MVP" },
  { file: "landing-web", id: "B1", en: "Home / landing", bn: "হোম / ল্যান্ডিং", kind: "web", tag: "MVP" },
  { file: "categories-web", id: "D1", en: "Law categories", bn: "আইন বিভাগ", kind: "web", tag: "MVP" },
  { file: "act-detail-web", id: "D5", en: "Act detail / structure", bn: "আইন কাঠামো", kind: "web", tag: "MVP" },
  { file: "signup-web", id: "A3", en: "Sign up", bn: "সাইন আপ", kind: "web", tag: "MVP" },
  { file: "ai-empty-web", id: "C1", en: "AI chat — empty", bn: "এআই — শুরু", kind: "web", tag: "MVP" },
  { file: "lawyers-web", id: "E1", en: "Lawyer directory", bn: "আইনজীবী তালিকা", kind: "web", tag: "Phase 2" },
  { file: "lawyer-profile-web", id: "E2", en: "Lawyer profile", bn: "আইনজীবী প্রোফাইল", kind: "web", tag: "Phase 2" },
  { file: "lawyer-dash-web", id: "G3", en: "Lawyer portal", bn: "আইনজীবী পোর্টাল", kind: "web", tag: "Phase 2" },
  { file: "bar-verify-web", id: "G2", en: "Bar Council verification", bn: "বার কাউন্সিল যাচাই", kind: "web", tag: "Phase 2" },
  { file: "ai-review-web", id: "H7", en: "AI answer review", bn: "এআই উত্তর পর্যালোচনা", kind: "admin", tag: "MVP" },
  { file: "law-cms-web", id: "H5", en: "Law CMS — bilingual editor", bn: "ল CMS — সম্পাদক", kind: "admin", tag: "MVP" },
  { file: "users-admin-web", id: "H3", en: "User management", bn: "ইউজার ব্যবস্থাপনা", kind: "admin", tag: "MVP" },
  { file: "offline-web", id: "J5", en: "System state — offline", bn: "সিস্টেম অবস্থা", kind: "web", tag: "MVP" },
];

export const phoneMockups: Mockup[] = [
  { file: "home-mobile", id: "B2", en: "Home dashboard", bn: "হোম", kind: "mobile", tag: "MVP" },
  { file: "chat-mobile", id: "C2", en: "AI Assistant", bn: "সহকারী", kind: "mobile", tag: "MVP" },
  { file: "welcome-mobile", id: "A2", en: "Welcome carousel", bn: "ওয়েলকাম", kind: "mobile", tag: "MVP" },
  { file: "voice-mobile", id: "C4", en: "Voice input (Bangla)", bn: "ভয়েস ইনপুট", kind: "mobile", tag: "MVP" },
  { file: "account-mobile", id: "F1·F2", en: "Account & settings", bn: "অ্যাকাউন্ট", kind: "mobile", tag: "MVP" },
  { file: "no-verified-mobile", id: "C5", en: "No verified answer", bn: "উত্তর নেই", kind: "mobile", tag: "MVP" },
  { file: "notifications-mobile", id: "B5", en: "Notifications", bn: "নোটিফিকেশন", kind: "mobile", tag: "MVP" },
  { file: "consult-mobile", id: "E4", en: "Consultation chat", bn: "পরামর্শ চ্যাট", kind: "mobile", tag: "Phase 2" },
  { file: "pay-mobile", id: "I2", en: "Payment / checkout", bn: "পেমেন্ট", kind: "mobile", tag: "Phase 2" },
  { file: "pay-success-mobile", id: "I3", en: "Payment success", bn: "পেমেন্ট সফল", kind: "mobile", tag: "Phase 2" },
  { file: "history-mobile", id: "F3·C6", en: "Chat history", bn: "চ্যাট ইতিহাস", kind: "mobile", tag: "MVP" },
];
