import type { SVGProps } from "react";
import type { LawCategory } from "@/lib/types";

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 20,
  height: 20,
};

export function CategoryIcon({ name, ...rest }: { name: LawCategory["icon"] } & SVGProps<SVGSVGElement>) {
  const props = { ...common, ...rest };
  switch (name) {
    case "criminal":
      return (
        <svg {...props}>
          <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
        </svg>
      );
    case "property":
      return (
        <svg {...props}>
          <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        </svg>
      );
    case "family":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "labour":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      );
    case "cyber":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      );
    case "consumer":
      return (
        <svg {...props}>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "constitution":
      return (
        <svg {...props}>
          <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 6a4 4 0 0 0 6 0zM19 7l3 6a4 4 0 0 1-6 0z" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "tax":
      return (
        <svg {...props}>
          <path d="M9 7h6M9 12h6M9 17h3M5 3h14v18H5z" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
