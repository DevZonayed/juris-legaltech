"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";

/** The full-screen assistant view has no marketing footer. */
const HIDE_ON = ["/assistant"];

export function ConditionalFooter() {
  const pathname = usePathname();
  if (HIDE_ON.some((p) => pathname === p || pathname.startsWith(p + "/"))) return null;
  return <SiteFooter />;
}
