import type { SVGProps } from "react";

/** Juris logomark — book/scales in a rounded green tile with a gold accent. */
export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <rect width="40" height="40" rx="11" fill="var(--primary)" />
      <path d="M20 8v22M12 14h16M20 8l-8 6c0 4.4 3.6 7 8 7M20 8l8 6c0 4.4-3.6 7-8 7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M13 31h14" stroke="var(--gold-soft)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="8" r="2.3" fill="var(--gold-soft)" />
    </svg>
  );
}
