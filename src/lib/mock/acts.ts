import type { LawAct, LawSection } from "@/lib/types";

/* -------------------------------------------------------- The Penal Code, 1860 */
const penalCodeSections: LawSection[] = [
  {
    slug: "s-378",
    number: "378",
    title: { en: "Theft", bn: "চুরি" },
    chapter: "Ch. XVII — Offences against property",
    verified: true,
    body: {
      en: "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
      bn: "যে ব্যক্তি কোনো ব্যক্তির দখল হইতে তাহার সম্মতি ব্যতিরেকে অসাধুভাবে কোনো অস্থাবর সম্পত্তি গ্রহণের উদ্দেশ্যে উক্ত সম্পত্তি স্থানান্তর করে, সে চুরি করিয়াছে বলিয়া গণ্য হইবে।",
    },
    plain: {
      en: "Taking something movable that belongs to another person, without their permission and with a dishonest intent, is theft.",
      bn: "অন্যের অস্থাবর জিনিস তাদের অনুমতি ছাড়া, অসাধু উদ্দেশ্যে নিয়ে নেওয়া চুরি।",
    },
    example: {
      en: "Taking a neighbour's bicycle from their yard without asking, intending to keep it, is theft.",
      bn: "প্রতিবেশীর উঠান থেকে না বলে সাইকেল নিয়ে যাওয়া, রেখে দেওয়ার উদ্দেশ্যে — এটি চুরি।",
    },
    related: [
      { title: { en: "Punishment for theft", bn: "চুরির শাস্তি" }, ref: "Penal Code · §379", href: "/laws/penal-code-1860/s-379" },
      { title: { en: "Dishonest misappropriation", bn: "অসাধু আত্মসাৎ" }, ref: "Penal Code · §403", href: "/laws/penal-code-1860/s-403" },
    ],
  },
  {
    slug: "s-379",
    number: "379",
    title: { en: "Punishment for theft", bn: "চুরির শাস্তি" },
    chapter: "Ch. XVII — Offences against property",
    verified: true,
    body: {
      en: "Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
      bn: "যে ব্যক্তি চুরি করে, সে যে কোনো বর্ণনার কারাদণ্ডে দণ্ডিত হইবে যাহার মেয়াদ তিন বৎসর পর্যন্ত হইতে পারে, অথবা জরিমানা, অথবা উভয় দণ্ডে দণ্ডিত হইবে।",
    },
    plain: {
      en: "If someone is convicted of theft, the punishment can be up to three years in prison, a fine, or both.",
      bn: "চুরির জন্য দোষী সাব্যস্ত হলে শাস্তি হতে পারে তিন বছর পর্যন্ত কারাদণ্ড, জরিমানা, বা উভয়ই।",
    },
    related: [
      { title: { en: "Theft — definition", bn: "চুরি — সংজ্ঞা" }, ref: "Penal Code · §378", href: "/laws/penal-code-1860/s-378" },
    ],
  },
  {
    slug: "s-415",
    number: "415",
    title: { en: "Cheating — definition", bn: "প্রতারণা — সংজ্ঞা" },
    chapter: "Ch. XVII — Offences against property",
    verified: true,
    body: {
      en: "Whoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property to any person, or to consent that any person shall retain any property, or intentionally induces the person so deceived to do or omit to do anything which he would not do or omit if he were not so deceived, and which act or omission causes or is likely to cause damage or harm to that person, is said to “cheat”.",
      bn: "যে ব্যক্তি কোনো ব্যক্তিকে প্রতারিত করিয়া, প্রতারণামূলকভাবে বা অসাধুভাবে প্রতারিত ব্যক্তিকে কোনো সম্পত্তি অর্পণ করিতে প্ররোচিত করে... সে “প্রতারণা” করিয়াছে বলিয়া গণ্য হইবে।",
    },
    plain: {
      en: "Deceiving a person so they hand over property, or act against their own interest in a way that harms them, is cheating.",
      bn: "কাউকে প্রতারিত করে সম্পত্তি হস্তান্তরে বা নিজের ক্ষতি হয় এমন কাজে প্ররোচিত করা প্রতারণা।",
    },
    related: [
      { title: { en: "Punishment for cheating", bn: "প্রতারণার শাস্তি" }, ref: "Penal Code · §417", href: "/laws/penal-code-1860/s-417" },
      { title: { en: "Cheating & delivery of property", bn: "প্রতারণা ও সম্পত্তি অর্পণ" }, ref: "Penal Code · §420", href: "/laws/penal-code-1860/s-420" },
    ],
  },
  {
    slug: "s-417",
    number: "417",
    title: { en: "Punishment for cheating", bn: "প্রতারণার শাস্তি" },
    chapter: "Ch. XVII — Offences against property",
    verified: true,
    body: {
      en: "Whoever cheats shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both.",
      bn: "যে ব্যক্তি প্রতারণা করে, সে যে কোনো বর্ণনার কারাদণ্ডে দণ্ডিত হইবে যাহার মেয়াদ এক বৎসর পর্যন্ত হইতে পারে, অথবা জরিমানা, অথবা উভয় দণ্ডে দণ্ডিত হইবে।",
    },
    plain: {
      en: "Basic cheating can be punished with up to one year in prison, a fine, or both.",
      bn: "সাধারণ প্রতারণার শাস্তি এক বছর পর্যন্ত কারাদণ্ড, জরিমানা, বা উভয়ই।",
    },
    related: [
      { title: { en: "Cheating — definition", bn: "প্রতারণা — সংজ্ঞা" }, ref: "Penal Code · §415", href: "/laws/penal-code-1860/s-415" },
    ],
  },
  {
    slug: "s-420",
    number: "420",
    title: {
      en: "Cheating and dishonestly inducing delivery of property",
      bn: "প্রতারণা এবং অসাধুভাবে সম্পত্তি অর্পণে প্ররোচিত করা",
    },
    chapter: "Ch. XVII — Offences against property",
    verified: true,
    body: {
      en: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
      bn: "যে ব্যক্তি প্রতারণা করিয়া তদ্দ্বারা অসাধুভাবে প্রতারিত ব্যক্তিকে কোনো সম্পত্তি কোনো ব্যক্তিকে অর্পণ করিতে, অথবা কোনো মূল্যবান জামানত সম্পূর্ণ বা আংশিকভাবে প্রস্তুত, পরিবর্তন বা ধ্বংস করিতে প্ররোচিত করে... সে যে কোনো বর্ণনার কারাদণ্ডে দণ্ডিত হইবে যাহার মেয়াদ সাত বৎসর পর্যন্ত হইতে পারে এবং জরিমানাতেও দণ্ডনীয় হইবে।",
    },
    plain: {
      en: "If someone tricks you into handing over money, goods, or signing something valuable — that's an offence. The punishment can be up to seven years in prison plus a fine.",
      bn: "কেউ যদি প্রতারণা করে আপনাকে টাকা, জিনিস বা মূল্যবান কিছুতে সই করতে বাধ্য করে — তা অপরাধ। শাস্তি সাত বছর পর্যন্ত কারাদণ্ড ও জরিমানা।",
    },
    example: {
      en: "A seller takes advance payment online for a phone, promising delivery, but never intended to send it and disappears. That can amount to cheating under §420.",
      bn: "একজন বিক্রেতা অনলাইনে ফোনের অগ্রিম টাকা নিয়ে ডেলিভারির প্রতিশ্রুতি দেয়, কিন্তু পাঠানোর ইচ্ছাই ছিল না — এটি §৪২০ অনুযায়ী প্রতারণা হতে পারে।",
    },
    related: [
      { title: { en: "Cheating — definition", bn: "প্রতারণা — সংজ্ঞা" }, ref: "Penal Code · §415", href: "/laws/penal-code-1860/s-415" },
      { title: { en: "Punishment for cheating", bn: "প্রতারণার শাস্তি" }, ref: "Penal Code · §417", href: "/laws/penal-code-1860/s-417" },
      { title: { en: "Forgery of valuable security", bn: "মূল্যবান জামানত জাল" }, ref: "Penal Code · §467", href: "/laws/penal-code-1860/s-467" },
    ],
    courtRefs: [{ title: { en: "State vs. Md. Rafiqul", bn: "রাষ্ট্র বনাম মো. রফিকুল" }, ref: "62 DLR (AD) 214" }],
  },
  {
    slug: "s-467",
    number: "467",
    title: { en: "Forgery of valuable security, will, etc.", bn: "মূল্যবান জামানত, উইল ইত্যাদি জাল" },
    chapter: "Ch. XVIII — Offences relating to documents",
    verified: true,
    body: {
      en: "Whoever forges a document which purports to be a valuable security or a will... shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
      bn: "যে ব্যক্তি মূল্যবান জামানত বা উইল বলিয়া দাবিকৃত কোনো দলিল জাল করে... সে যাবজ্জীবন কারাদণ্ডে অথবা দশ বৎসর পর্যন্ত কারাদণ্ডে দণ্ডিত হইবে এবং জরিমানাতেও দণ্ডনীয় হইবে।",
    },
    plain: {
      en: "Forging valuable documents like a cheque, bond or will is a serious offence with punishment up to life imprisonment.",
      bn: "চেক, বন্ড বা উইলের মতো মূল্যবান দলিল জাল করা গুরুতর অপরাধ, শাস্তি যাবজ্জীবন পর্যন্ত।",
    },
  },
  {
    slug: "s-506",
    number: "506",
    title: { en: "Punishment for criminal intimidation", bn: "অপরাধমূলক ভীতি প্রদর্শনের শাস্তি" },
    chapter: "Ch. XXII — Criminal intimidation",
    verified: true,
    body: {
      en: "Whoever commits the offence of criminal intimidation shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
      bn: "যে ব্যক্তি অপরাধমূলক ভীতি প্রদর্শনের অপরাধ করে, সে দুই বৎসর পর্যন্ত কারাদণ্ডে অথবা জরিমানায় অথবা উভয় দণ্ডে দণ্ডিত হইবে।",
    },
    plain: {
      en: "Threatening a person with injury to their body, reputation or property to cause alarm is punishable by up to two years imprisonment.",
      bn: "কাউকে শারীরিক, সম্মান বা সম্পত্তির ক্ষতির হুমকি দিয়ে ভীত করা দুই বছর পর্যন্ত কারাদণ্ডে দণ্ডনীয়।",
    },
  },
];

/* ---------------------------------------------------- Cyber Security Act, 2023 */
const cyberSections: LawSection[] = [
  {
    slug: "s-24",
    number: "24",
    title: { en: "Identity fraud & impersonation", bn: "পরিচয় প্রতারণা ও ছদ্মবেশ" },
    verified: true,
    body: {
      en: "Whoever, by using a computer, computer system or any digital device, commits identity fraud or impersonates another person with intent to deceive or defraud, commits an offence and shall be liable to punishment as provided under this Act.",
      bn: "যে ব্যক্তি কম্পিউটার, কম্পিউটার সিস্টেম বা কোনো ডিজিটাল ডিভাইস ব্যবহার করিয়া প্রতারণা বা প্রবঞ্চনার উদ্দেশ্যে পরিচয় প্রতারণা করে বা অন্যের ছদ্মবেশ ধারণ করে, সে অপরাধ করিয়াছে বলিয়া গণ্য হইবে।",
    },
    plain: {
      en: "Pretending to be someone else online, or faking an identity to deceive people, is a punishable cyber offence.",
      bn: "অনলাইনে অন্যের ছদ্মবেশ ধারণ বা মিথ্যা পরিচয় দিয়ে প্রতারণা করা শাস্তিযোগ্য সাইবার অপরাধ।",
    },
    example: {
      en: "Creating a fake profile using someone else's photos to solicit money is identity fraud under this section.",
      bn: "অন্যের ছবি দিয়ে ভুয়া প্রোফাইল বানিয়ে টাকা চাওয়া এই ধারায় পরিচয় প্রতারণা।",
    },
    related: [
      { title: { en: "Cheating & delivery of property", bn: "প্রতারণা ও সম্পত্তি অর্পণ" }, ref: "Penal Code · §420", href: "/laws/penal-code-1860/s-420" },
    ],
  },
  {
    slug: "s-25",
    number: "25",
    title: { en: "Transmission of offensive or false information", bn: "আক্রমণাত্মক বা মিথ্যা তথ্য প্রেরণ" },
    verified: true,
    body: {
      en: "If any person, through any website or digital medium, intentionally transmits information which is offensive, false, or intended to annoy, insult, or harm the reputation of a person, such act shall be an offence under this Act.",
      bn: "কোনো ব্যক্তি যদি ওয়েবসাইট বা ডিজিটাল মাধ্যমে ইচ্ছাকৃতভাবে আক্রমণাত্মক, মিথ্যা, বা কাহারও সম্মানহানিকর তথ্য প্রেরণ করে, তবে তাহা এই আইনের অধীন অপরাধ হইবে।",
    },
    plain: {
      en: "Deliberately spreading false or defamatory information online to harm someone's reputation is an offence.",
      bn: "কারও সম্মানহানির উদ্দেশ্যে অনলাইনে মিথ্যা বা মানহানিকর তথ্য ছড়ানো অপরাধ।",
    },
  },
];

/* ------------------------------------------- Consumer Rights Protection Act, 2009 */
const consumerSections: LawSection[] = [
  {
    slug: "s-43",
    number: "43",
    title: { en: "Deceptive advertisement", bn: "প্রতারণামূলক বিজ্ঞাপন" },
    verified: true,
    body: {
      en: "If any person, by false or deceptive advertisement, misleads consumers about the quality, quantity, price, or standard of goods or services, such person commits an offence punishable with imprisonment or fine, or both.",
      bn: "কোনো ব্যক্তি যদি মিথ্যা বা প্রতারণামূলক বিজ্ঞাপন দ্বারা পণ্য বা সেবার মান, পরিমাণ, মূল্য বা মানদণ্ড সম্পর্কে ভোক্তাকে বিভ্রান্ত করে, তবে তিনি কারাদণ্ড বা জরিমানা, অথবা উভয় দণ্ডে দণ্ডনীয় অপরাধ করেন।",
    },
    plain: {
      en: "Advertising goods or services with false claims to mislead buyers is punishable under consumer law.",
      bn: "মিথ্যা দাবি দিয়ে পণ্য বা সেবার বিজ্ঞাপন দিয়ে ক্রেতাকে বিভ্রান্ত করা ভোক্তা আইনে দণ্ডনীয়।",
    },
    example: {
      en: "Advertising a product as “100% pure” when it is adulterated is a deceptive advertisement.",
      bn: "ভেজাল পণ্যকে “১০০% খাঁটি” বলে বিজ্ঞাপন দেওয়া প্রতারণামূলক বিজ্ঞাপন।",
    },
  },
  {
    slug: "s-45",
    number: "45",
    title: { en: "Selling adulterated goods", bn: "ভেজাল পণ্য বিক্রয়" },
    verified: true,
    body: {
      en: "Whoever manufactures, stores, or sells any goods mixed with any ingredient injurious to health commits an offence and shall be liable to imprisonment or fine as prescribed.",
      bn: "যে ব্যক্তি স্বাস্থ্যের জন্য ক্ষতিকর উপাদান মিশ্রিত কোনো পণ্য প্রস্তুত, মজুত বা বিক্রয় করে, সে অপরাধ করে এবং নির্ধারিত কারাদণ্ড বা জরিমানায় দণ্ডনীয় হইবে।",
    },
    plain: {
      en: "Making or selling food or products mixed with harmful substances is a punishable offence.",
      bn: "স্বাস্থ্যের জন্য ক্ষতিকর উপাদান মিশিয়ে খাদ্য বা পণ্য তৈরি বা বিক্রি করা দণ্ডনীয় অপরাধ।",
    },
  },
];

/* ----------------------------------------------- Bangladesh Labour Act, 2006 */
const labourSections: LawSection[] = [
  {
    slug: "s-26",
    number: "26",
    title: { en: "Termination of employment by notice", bn: "নোটিশ দ্বারা কর্মসংস্থান অবসান" },
    verified: true,
    body: {
      en: "The employment of a permanent worker may be terminated by the employer by giving the worker one hundred and twenty days' notice in writing, if the worker is a monthly-rated worker, or sixty days' notice in other cases; or by paying wages in lieu of such notice.",
      bn: "কোনো স্থায়ী শ্রমিকের কর্মসংস্থান মালিক কর্তৃক অবসান করা যাইতে পারে, মাসিক ভিত্তিক শ্রমিকের ক্ষেত্রে একশত বিশ দিনের লিখিত নোটিশ প্রদান করিয়া, অন্যান্য ক্ষেত্রে ষাট দিনের নোটিশ প্রদান করিয়া; অথবা নোটিশের পরিবর্তে মজুরি প্রদান করিয়া।",
    },
    plain: {
      en: "A permanent worker cannot be dismissed without notice. The employer must give written notice (120 days for monthly-rated workers) or pay wages instead.",
      bn: "স্থায়ী শ্রমিককে নোটিশ ছাড়া বরখাস্ত করা যায় না। মালিককে লিখিত নোটিশ (মাসিক শ্রমিকের জন্য ১২০ দিন) দিতে হবে বা তার বদলে মজুরি দিতে হবে।",
    },
    example: {
      en: "If a monthly-paid permanent employee is asked to leave immediately, they are generally entitled to 120 days' notice or pay in lieu.",
      bn: "মাসিক বেতনের স্থায়ী কর্মীকে তাৎক্ষণিক ছাড়তে বলা হলে, সাধারণত তিনি ১২০ দিনের নোটিশ বা তার বদলে বেতন পাওয়ার অধিকারী।",
    },
  },
];

/* ------------------------------------------ Transfer of Property Act, 1882 */
const topSections: LawSection[] = [
  {
    slug: "s-106",
    number: "106",
    title: { en: "Duration & notice to quit — leases", bn: "ইজারার মেয়াদ ও ছাড়ার নোটিশ" },
    verified: true,
    body: {
      en: "In the absence of a contract, a lease of immovable property for residential purposes is deemed to be a lease from month to month, terminable by fifteen days' notice; and a lease for agricultural or manufacturing purposes, a lease from year to year, terminable by six months' notice.",
      bn: "কোনো চুক্তির অনুপস্থিতিতে, বসবাসের উদ্দেশ্যে স্থাবর সম্পত্তির ইজারা মাস-হইতে-মাস ইজারা বলিয়া গণ্য হইবে, পনেরো দিনের নোটিশে অবসানযোগ্য; এবং কৃষি বা উৎপাদন উদ্দেশ্যে ইজারা বৎসর-হইতে-বৎসর ইজারা, ছয় মাসের নোটিশে অবসানযোগ্য।",
    },
    plain: {
      en: "Unless the agreement says otherwise, a residential tenancy runs month to month and needs proper written notice before it can be ended.",
      bn: "চুক্তিতে ভিন্ন কিছু না থাকলে, বসবাসের ভাড়া মাস-হিসেবে চলে এবং শেষ করার আগে যথাযথ লিখিত নোটিশ প্রয়োজন।",
    },
    related: [
      { title: { en: "Eviction notice — rented premises", bn: "ভাড়া বাসা থেকে উচ্ছেদ নোটিশ" }, ref: "Premises Rent Control · §18", href: "/laws/premises-rent-control-act-1991/s-18" },
    ],
  },
];

/* ------------------------------------------ Premises Rent Control Act, 1991 */
const rentSections: LawSection[] = [
  {
    slug: "s-18",
    number: "18",
    title: { en: "Protection against eviction", bn: "উচ্ছেদের বিরুদ্ধে সুরক্ষা" },
    verified: true,
    body: {
      en: "A tenant shall not be evicted from any premises except in execution of a decree passed by the Court on grounds specified in this Act. A landlord must serve proper written notice, and an oral demand to vacate is not sufficient.",
      bn: "এই আইনে উল্লিখিত কারণে আদালত কর্তৃক প্রদত্ত ডিক্রি কার্যকর করা ব্যতীত কোনো ভাড়াটিয়াকে কোনো বাসা হইতে উচ্ছেদ করা যাইবে না। মালিককে যথাযথ লিখিত নোটিশ প্রদান করিতে হইবে, এবং মৌখিক ভাবে বাসা ছাড়িতে বলা যথেষ্ট নয়।",
    },
    plain: {
      en: "A landlord cannot force a tenant out on a simple oral demand. Written notice and, if disputed, a court order are required.",
      bn: "মালিক শুধু মুখে বলে ভাড়াটিয়াকে বের করে দিতে পারেন না। লিখিত নোটিশ এবং বিরোধ হলে আদালতের আদেশ প্রয়োজন।",
    },
    example: {
      en: "A landlord telling a tenant to vacate in 7 days with no written notice cannot lawfully evict them on that basis alone.",
      bn: "মালিক কোনো লিখিত নোটিশ ছাড়া ভাড়াটিয়াকে ৭ দিনে বাসা ছাড়িতে বলিলে শুধু সেই ভিত্তিতে আইনসম্মতভাবে উচ্ছেদ করিতে পারেন না।",
    },
    related: [
      { title: { en: "Notice to quit — leases", bn: "ছাড়ার নোটিশ — ইজারা" }, ref: "Transfer of Property · §106", href: "/laws/transfer-of-property-act-1882/s-106" },
    ],
    courtRefs: [{ title: { en: "Rahima Begum vs. Abdul Karim", bn: "রহিমা বেগম বনাম আব্দুল করিম" }, ref: "58 DLR 402" }],
  },
];

export const acts: LawAct[] = [
  {
    slug: "penal-code-1860",
    title: { en: "The Penal Code, 1860", bn: "দণ্ডবিধি, ১৮৬০" },
    actNo: "XLV of 1860",
    year: 1860,
    categoryId: "criminal",
    summary: {
      en: "The principal criminal code of Bangladesh, defining offences and their punishments.",
      bn: "বাংলাদেশের প্রধান ফৌজদারি আইন, অপরাধ ও তাহার শাস্তি নির্ধারণ করে।",
    },
    sections: penalCodeSections,
  },
  {
    slug: "cyber-security-act-2023",
    title: { en: "The Cyber Security Act, 2023", bn: "সাইবার নিরাপত্তা আইন, ২০২৩" },
    actNo: "Act No. 39 of 2023",
    year: 2023,
    categoryId: "cyber",
    summary: {
      en: "Governs cyber offences, digital fraud, and online safety in Bangladesh.",
      bn: "বাংলাদেশে সাইবার অপরাধ, ডিজিটাল প্রতারণা ও অনলাইন নিরাপত্তা নিয়ন্ত্রণ করে।",
    },
    sections: cyberSections,
  },
  {
    slug: "consumer-rights-protection-act-2009",
    title: { en: "Consumer Rights Protection Act, 2009", bn: "ভোক্তা-অধিকার সংরক্ষণ আইন, ২০০৯" },
    actNo: "Act No. 26 of 2009",
    year: 2009,
    categoryId: "consumer",
    summary: {
      en: "Protects consumers against deceptive practices, adulteration and unfair trade.",
      bn: "প্রতারণামূলক অনুশীলন, ভেজাল ও অন্যায় বাণিজ্যের বিরুদ্ধে ভোক্তাদের রক্ষা করে।",
    },
    sections: consumerSections,
  },
  {
    slug: "labour-act-2006",
    title: { en: "Bangladesh Labour Act, 2006", bn: "বাংলাদেশ শ্রম আইন, ২০০৬" },
    actNo: "Act No. 42 of 2006",
    year: 2006,
    categoryId: "labour",
    summary: {
      en: "Comprehensive law on employment, wages, working conditions and termination.",
      bn: "কর্মসংস্থান, মজুরি, কর্ম পরিবেশ ও চাকরি অবসান বিষয়ক সমন্বিত আইন।",
    },
    sections: labourSections,
  },
  {
    slug: "transfer-of-property-act-1882",
    title: { en: "Transfer of Property Act, 1882", bn: "সম্পত্তি হস্তান্তর আইন, ১৮৮২" },
    actNo: "IV of 1882",
    year: 1882,
    categoryId: "property",
    summary: {
      en: "Regulates transfer of immovable property, including sales, leases and mortgages.",
      bn: "বিক্রয়, ইজারা ও বন্ধকসহ স্থাবর সম্পত্তি হস্তান্তর নিয়ন্ত্রণ করে।",
    },
    sections: topSections,
  },
  {
    slug: "premises-rent-control-act-1991",
    title: { en: "Premises Rent Control Act, 1991", bn: "বাসাভাড়া নিয়ন্ত্রণ আইন, ১৯৯১" },
    actNo: "Act No. 3 of 1991",
    year: 1991,
    categoryId: "property",
    summary: {
      en: "Governs rent, tenancy rights and protection against unlawful eviction.",
      bn: "ভাড়া, ভাড়াটিয়ার অধিকার ও বেআইনি উচ্ছেদের বিরুদ্ধে সুরক্ষা নিয়ন্ত্রণ করে।",
    },
    sections: rentSections,
  },
];

export function getAct(slug: string): LawAct | undefined {
  return acts.find((a) => a.slug === slug);
}

export function getSection(actSlug: string, sectionSlug: string): { act: LawAct; section: LawSection } | undefined {
  const act = getAct(actSlug);
  if (!act) return undefined;
  const section = act.sections.find((s) => s.slug === sectionSlug);
  if (!section) return undefined;
  return { act, section };
}

export function actsByCategory(categoryId: string): LawAct[] {
  return acts.filter((a) => a.categoryId === categoryId);
}

export function allSectionsFlat(): { act: LawAct; section: LawSection }[] {
  return acts.flatMap((act) => act.sections.map((section) => ({ act, section })));
}
