import type { ReactNode } from "react";
import { CheckIcon, InfoIcon, StarIcon } from "@/components/icons";
import { Lang } from "@/components/lang";

/* ------------------------------------------------------------------ Button */
type ButtonVariant = "primary" | "ghost" | "gold";
interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "md" | "sm";
  block?: boolean;
  className?: string;
  children: ReactNode;
}

function buttonClass({ variant = "primary", size = "md", block, className = "" }: ButtonBaseProps) {
  return [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : "",
    block ? "btn-block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

interface ButtonProps
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {}

export function Button({ variant, size, block, className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClass({ variant, size, block, className, children })} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
}
export function LinkButton({ variant, size, block, className, children, href }: LinkButtonProps) {
  return (
    <a href={href} className={buttonClass({ variant, size, block, className, children })}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------- CitationChip */
export function CitationChip({ children }: { children: ReactNode }) {
  return (
    <span className="chip-cite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M4 4h16v12H8l-4 4z" />
      </svg>
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- Disclaimer */
export function Disclaimer({ en, bn, style }: { en?: ReactNode; bn?: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="disclaimer" style={style}>
      <InfoIcon />
      <span>
        <Lang
          en={en ?? "This is general information, not legal advice."}
          bn={bn ?? "এই তথ্য শুধুমাত্র সাধারণ তথ্যের জন্য। এটি আইনি পরামর্শ নয়।"}
        />
      </span>
    </div>
  );
}

/* ----------------------------------------------------------- VerifiedBadge */
export function VerifiedBadge({ en = "Verified", bn = "যাচাইকৃত", style }: { en?: string; bn?: string; style?: React.CSSProperties }) {
  return (
    <span className="badge-verified" style={style}>
      <CheckIcon width={14} height={14} />
      <Lang en={en} bn={bn} />
    </span>
  );
}

/* -------------------------------------------------------------------- Stars */
export function Stars({ rating = 5, count }: { rating?: number; count?: number }) {
  const full = Math.floor(rating);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} opacity={i < full ? 1 : i < rating ? 0.6 : 0.35} />
        ))}
      </span>
      {count != null && (
        <span style={{ fontSize: 12.5, fontWeight: 700 }}>
          {rating.toFixed(1)} · {count}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ Avatar */
export function Avatar({
  initials,
  color = "var(--primary)",
  size = 38,
  className = "",
}: {
  initials: string;
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`avatar ${className}`}
      style={{ background: color, width: size, height: size, fontSize: size * 0.37 }}
    >
      {initials}
    </span>
  );
}

/* ------------------------------------------------------------------ Eyebrow */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/* -------------------------------------------------------------- SectionHead */
export function SectionHead({
  eyebrow,
  titleEn,
  titleBn,
  descEn,
  descBn,
  maxWidth,
}: {
  eyebrow: ReactNode;
  titleEn: string;
  titleBn: string;
  descEn?: string;
  descBn?: string;
  maxWidth?: number;
}) {
  return (
    <div className="sec-head" style={maxWidth ? { maxWidth } : undefined}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="lang-en">{titleEn}</h2>
      <h2 className="lang-bn">{titleBn}</h2>
      {(descEn || descBn) && (
        <>
          <p className="lang-en">{descEn}</p>
          <p className="lang-bn" style={{ fontFamily: "var(--f-bn)" }}>
            {descBn}
          </p>
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------ ScreenLabel */
export function ScreenLabel({
  id,
  en,
  bn,
  tag,
  p2,
}: {
  id: string;
  en: string;
  bn: string;
  tag?: string;
  p2?: boolean;
}) {
  return (
    <div className="screen-label">
      <span className="id">{id}</span>
      <h3 className="lang-en">{en}</h3>
      <h3 className="lang-bn">{bn}</h3>
      {tag && <span className={`tag ${p2 ? "p2" : ""}`}>{tag}</span>}
    </div>
  );
}
