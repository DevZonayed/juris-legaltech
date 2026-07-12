import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SectionReader } from "@/components/section-reader";
import { getCategory } from "@/lib/mock/categories";
import { acts, getSection } from "@/lib/mock/acts";

export function generateStaticParams() {
  return acts.flatMap((a) => a.sections.map((s) => ({ act: a.slug, section: s.slug })));
}

export function generateMetadata({ params }: { params: { act: string; section: string } }): Metadata {
  const found = getSection(params.act, params.section);
  if (!found) return { title: "Section" };
  return {
    title: `${found.section.title.en} · §${found.section.number}`,
    description: found.section.plain.en,
  };
}

export default function SectionPage({ params }: { params: { act: string; section: string } }) {
  const found = getSection(params.act, params.section);
  if (!found) notFound();
  const category = getCategory(found.act.categoryId);
  return <SectionReader act={found.act} section={found.section} category={category} />;
}
