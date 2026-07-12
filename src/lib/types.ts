export interface Bilingual {
  en: string;
  bn: string;
}

export interface RelatedRef {
  title: Bilingual;
  ref: string;
  href?: string;
}

export interface LawSection {
  slug: string; // e.g. "s-420"
  number: string; // "420"
  title: Bilingual;
  chapter?: string;
  verified: boolean;
  body: Bilingual; // authoritative text
  plain: Bilingual; // plain-language explanation
  example?: Bilingual;
  related?: RelatedRef[];
  courtRefs?: RelatedRef[];
}

export interface LawAct {
  slug: string; // "penal-code-1860"
  title: Bilingual;
  actNo: string; // "XLV of 1860"
  year: number;
  categoryId: string;
  summary: Bilingual;
  sections: LawSection[];
}

export interface LawCategory {
  id: string;
  name: Bilingual;
  desc: Bilingual;
  count: number;
  color: string; // fg
  bg: string; // soft bg
  icon: "criminal" | "property" | "family" | "labour" | "cyber" | "consumer" | "constitution" | "commercial" | "tax";
}

export interface Lawyer {
  slug: string;
  name: string;
  initials: string;
  avatarColor: string;
  specialties: Bilingual[];
  rating: number;
  reviews: number;
  experienceYears: number;
  feePerSession: number;
  online: boolean;
  verified: boolean;
  location: Bilingual;
  bio: Bilingual;
  languages: string[];
}

export interface Citation {
  label: string; // "Penal Code · §420"
  href?: string;
}

export interface ChatAnswer {
  kind: "grounded" | "no-verified";
  label: Bilingual; // "Grounded in verified law" / warning header
  body: Bilingual;
  bullets?: Bilingual[];
  citations?: Citation[];
}

export interface SuggestedPrompt {
  emoji: string;
  label: Bilingual;
  query: string;
}
