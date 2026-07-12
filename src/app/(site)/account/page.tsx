import type { Metadata } from "next";
import { AccountScreen } from "@/components/account-screen";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your Juris profile, appearance, language, notifications and saved sections.",
};

export default function AccountPage() {
  return <AccountScreen />;
}
