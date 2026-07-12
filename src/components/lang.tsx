import type { ReactNode } from "react";

/**
 * Bilingual text. Renders BOTH languages; the ported CSS (`body[data-lang]`)
 * shows exactly one. This keeps it usable inside Server Components with no
 * client state and no hydration mismatch.
 */
export function Lang({ en, bn, block = false }: { en: ReactNode; bn: ReactNode; block?: boolean }) {
  const cls = block ? "block " : "";
  return (
    <>
      <span className={`${cls}lang-en`}>{en}</span>
      <span className={`${cls}lang-bn`} style={{ fontFamily: "var(--f-bn)" }}>
        {bn}
      </span>
    </>
  );
}

export interface Bilingual {
  en: string;
  bn: string;
}

/** Convenience for `{ en, bn }` records from mock data. */
export function T({ value, block }: { value: Bilingual; block?: boolean }) {
  return <Lang en={value.en} bn={value.bn} block={block} />;
}
