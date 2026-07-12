import type { ChatAnswer, SuggestedPrompt } from "@/lib/types";

export interface ChatHistoryItem {
  id: string;
  title: string;
  when: "today" | "earlier";
}

export const chatHistory: ChatHistoryItem[] = [
  { id: "1", title: "Tenant eviction notice", when: "today" },
  { id: "2", title: "Cheque dishonour case", when: "today" },
  { id: "3", title: "Registering a marriage", when: "earlier" },
  { id: "4", title: "Consumer refund rights", when: "earlier" },
  { id: "5", title: "Termination without notice", when: "earlier" },
];

export const suggestedPrompts: SuggestedPrompt[] = [
  { emoji: "🏠", label: { en: "Tenant rights", bn: "ভাড়াটিয়ার অধিকার" }, query: "My landlord wants me to vacate in 7 days without any written notice. Is that legal?" },
  { emoji: "💳", label: { en: "Cheque dishonour", bn: "চেক ডিজঅনার" }, query: "What can I do if a cheque given to me bounced?" },
  { emoji: "👨‍👩‍👧", label: { en: "Family & marriage", bn: "পারিবারিক আইন" }, query: "How do I register a marriage in Bangladesh?" },
  { emoji: "⚖️", label: { en: "Consumer refund", bn: "ভোক্তা অধিকার" }, query: "A seller sold me a fake product online. What are my rights?" },
  { emoji: "💼", label: { en: "Job termination", bn: "চাকরি অবসান" }, query: "Can my employer fire me without notice?" },
  { emoji: "🔒", label: { en: "Online fraud", bn: "অনলাইন প্রতারণা" }, query: "Someone impersonated me online to take money. Is that a crime?" },
];

interface CannedAnswer {
  keywords: string[];
  answer: ChatAnswer;
}

const answers: CannedAnswer[] = [
  {
    keywords: ["vacate", "evict", "landlord", "tenant", "notice", "7 days", "vacate in"],
    answer: {
      kind: "grounded",
      label: { en: "Grounded in verified law", bn: "যাচাইকৃত আইন ভিত্তিক" },
      body: {
        en: "Generally, no. Under the tenancy law that applies to most rented premises, a landlord must give written notice before requiring a tenant to vacate, and a tenant cannot be evicted merely by an oral demand. The standard notice period is one month, not seven days.",
        bn: "সাধারণত না। বেশিরভাগ ভাড়া বাসার ক্ষেত্রে প্রযোজ্য আইন অনুযায়ী, মালিককে ভাড়াটিয়াকে বাসা ছাড়িতে বলার আগে লিখিত নোটিশ দিতে হবে, এবং শুধু মৌখিক দাবিতে ভাড়াটিয়াকে উচ্ছেদ করা যায় না। সাধারণ নোটিশ মেয়াদ এক মাস, সাত দিন নয়।",
      },
      bullets: [
        { en: "A valid notice must be in writing and served properly.", bn: "বৈধ নোটিশ লিখিত হতে হবে এবং যথাযথভাবে প্রদান করতে হবে।" },
        { en: "Eviction without due process can be challenged in the relevant court.", bn: "যথাযথ প্রক্রিয়া ছাড়া উচ্ছেদ সংশ্লিষ্ট আদালতে চ্যালেঞ্জ করা যায়।" },
      ],
      citations: [
        { label: "Premises Rent Control Act · §18", href: "/laws/premises-rent-control-act-1991/s-18" },
        { label: "Transfer of Property Act · §106", href: "/laws/transfer-of-property-act-1882/s-106" },
      ],
    },
  },
  {
    keywords: ["fire", "fired", "employer", "job", "termination", "terminate", "without notice", "dismiss"],
    answer: {
      kind: "grounded",
      label: { en: "Grounded in verified law", bn: "যাচাইকৃত আইন ভিত্তিক" },
      body: {
        en: "Usually not. A permanent worker is generally entitled to written notice or wages in lieu before termination, under the labour law. For monthly-rated permanent workers the notice period is 120 days.",
        bn: "সাধারণত না। শ্রম আইন অনুযায়ী স্থায়ী শ্রমিক অবসানের আগে লিখিত নোটিশ বা তার বদলে মজুরি পাওয়ার অধিকারী। মাসিক ভিত্তিক স্থায়ী শ্রমিকের নোটিশ মেয়াদ ১২০ দিন।",
      },
      bullets: [
        { en: "Immediate dismissal without notice or pay may be unlawful.", bn: "নোটিশ বা বেতন ছাড়া তাৎক্ষণিক বরখাস্ত বেআইনি হতে পারে।" },
      ],
      citations: [{ label: "Labour Act 2006 · §26", href: "/laws/labour-act-2006/s-26" }],
    },
  },
  {
    keywords: ["fraud", "impersonat", "online", "fake product", "scam", "cheat", "advance payment"],
    answer: {
      kind: "grounded",
      label: { en: "Grounded in verified law", bn: "যাচাইকৃত আইন ভিত্তিক" },
      body: {
        en: "Yes, that can be a criminal offence. Deceiving someone to hand over money or property is cheating, and doing so through a digital device can also be identity fraud under cyber law.",
        bn: "হ্যাঁ, এটি ফৌজদারি অপরাধ হতে পারে। প্রতারণা করে টাকা বা সম্পত্তি নেওয়া প্রতারণা, এবং ডিজিটাল ডিভাইসের মাধ্যমে করলে সাইবার আইনে পরিচয় প্রতারণাও হতে পারে।",
      },
      bullets: [
        { en: "You can file a complaint with the police or the cyber tribunal.", bn: "আপনি পুলিশ বা সাইবার ট্রাইব্যুনালে অভিযোগ দায়ের করতে পারেন।" },
      ],
      citations: [
        { label: "Penal Code · §420", href: "/laws/penal-code-1860/s-420" },
        { label: "Cyber Security Act 2023 · §24", href: "/laws/cyber-security-act-2023/s-24" },
      ],
    },
  },
  {
    keywords: ["consumer", "refund", "fake", "deceptive", "advertisement", "adulterated"],
    answer: {
      kind: "grounded",
      label: { en: "Grounded in verified law", bn: "যাচাইকৃত আইন ভিত্তিক" },
      body: {
        en: "You have rights as a consumer. Selling goods through false or deceptive advertisement, or selling adulterated goods, is an offence and you may complain to the Directorate of National Consumer Rights Protection.",
        bn: "ভোক্তা হিসেবে আপনার অধিকার আছে। মিথ্যা বা প্রতারণামূলক বিজ্ঞাপনে পণ্য বিক্রি, বা ভেজাল পণ্য বিক্রি অপরাধ, এবং আপনি জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ করতে পারেন।",
      },
      citations: [{ label: "Consumer Rights Protection Act 2009 · §43", href: "/laws/consumer-rights-protection-act-2009/s-43" }],
    },
  },
  {
    keywords: ["theft", "stole", "stolen", "bicycle", "phone stolen"],
    answer: {
      kind: "grounded",
      label: { en: "Grounded in verified law", bn: "যাচাইকৃত আইন ভিত্তিক" },
      body: {
        en: "Taking someone's movable property without consent and with dishonest intent is theft, punishable with up to three years imprisonment, a fine, or both.",
        bn: "কারও অস্থাবর সম্পত্তি সম্মতি ছাড়া অসাধু উদ্দেশ্যে নেওয়া চুরি, যার শাস্তি তিন বছর পর্যন্ত কারাদণ্ড, জরিমানা, বা উভয়ই।",
      },
      citations: [
        { label: "Penal Code · §378", href: "/laws/penal-code-1860/s-378" },
        { label: "Penal Code · §379", href: "/laws/penal-code-1860/s-379" },
      ],
    },
  },
];

const noVerified: ChatAnswer = {
  kind: "no-verified",
  label: {
    en: "Couldn't find this in the verified law database",
    bn: "যাচাইকৃত ডেটাবেসে পাওয়া যায়নি",
  },
  body: {
    en: "I won't guess on legal matters. This question isn't covered by the verified sources I'm allowed to cite. A qualified lawyer can help with your specific situation.",
    bn: "আইনি বিষয়ে আমি অনুমান করি না। এই প্রশ্নটি আমার উদ্ধৃত করার অনুমতিপ্রাপ্ত যাচাইকৃত উৎসে নেই। একজন যোগ্য আইনজীবী আপনাকে সাহায্য করতে পারেন।",
  },
};

/** Very small keyword matcher that stands in for the RAG pipeline in the demo. */
export function answerFor(query: string): ChatAnswer {
  const q = query.toLowerCase();
  for (const a of answers) {
    if (a.keywords.some((k) => q.includes(k.toLowerCase()))) return a.answer;
  }
  return noVerified;
}
