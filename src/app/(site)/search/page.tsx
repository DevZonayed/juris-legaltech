import type { Metadata } from "next";
import { SearchScreen } from "@/components/search-screen";
import { searchLaws } from "@/lib/mock/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the verified Bangladesh law database across acts and sections, in Bangla and English.",
};

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q ?? "";
  const results = searchLaws(query);
  return <SearchScreen query={query} results={results} />;
}
