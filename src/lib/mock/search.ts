import { allSectionsFlat } from "@/lib/mock/acts";
import { getCategory } from "@/lib/mock/categories";
import type { LawAct, LawSection } from "@/lib/types";

export interface SearchResult {
  act: LawAct;
  section: LawSection;
  categoryName: { en: string; bn: string };
  snippet: { en: string; bn: string };
  href: string;
}

export const popularQueries = [
  "online fraud",
  "tenant eviction",
  "cheque bounce",
  "termination notice",
  "consumer refund",
  "theft punishment",
];

function makeSnippet(text: string, q: string): string {
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text.slice(0, 150) + (text.length > 150 ? "…" : "");
  const start = Math.max(0, idx - 60);
  const end = Math.min(text.length, idx + q.length + 90);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}

const SYNONYMS: Record<string, string[]> = {
  fraud: ["fraud", "cheat", "deceiv", "prataran", "identity"],
  eviction: ["evict", "vacate", "tenant", "landlord", "notice"],
  cheque: ["cheque", "check", "valuable security", "forgery"],
  termination: ["terminat", "notice", "dismiss", "worker", "employ"],
  refund: ["refund", "consumer", "deceptive", "adulterat"],
  theft: ["theft", "steal", "movable"],
};

function expand(q: string): string[] {
  const base = q.toLowerCase().trim();
  const terms = new Set<string>([base, ...base.split(/\s+/)]);
  for (const key of Object.keys(SYNONYMS)) {
    if (base.includes(key)) SYNONYMS[key].forEach((t) => terms.add(t));
  }
  return Array.from(terms).filter((t) => t.length > 1);
}

export function searchLaws(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const terms = expand(query);
  const results: { score: number; result: SearchResult }[] = [];

  for (const { act, section } of allSectionsFlat()) {
    const haystack = [
      section.title.en,
      section.title.bn,
      section.body.en,
      section.plain.en,
      act.title.en,
      act.title.bn,
    ]
      .join(" ")
      .toLowerCase();

    let score = 0;
    for (const term of terms) {
      if (haystack.includes(term)) score += term === query.toLowerCase().trim() ? 5 : 1;
    }
    if (score === 0) continue;

    const cat = getCategory(act.categoryId);
    results.push({
      score,
      result: {
        act,
        section,
        categoryName: cat ? cat.name : { en: act.categoryId, bn: act.categoryId },
        snippet: {
          en: makeSnippet(section.body.en, query),
          bn: makeSnippet(section.body.bn, query),
        },
        href: `/laws/${act.slug}/${section.slug}`,
      },
    });
  }

  return results.sort((a, b) => b.score - a.score).map((r) => r.result);
}
