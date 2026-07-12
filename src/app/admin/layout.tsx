import type { Metadata } from "next";
import { AdminShell } from "@/components/admin-shell";

export const metadata: Metadata = {
  title: "Admin Console",
  description: "Juris admin — dashboard, users, lawyer verification, law CMS and AI answer review.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
