import { SiteHeader } from "@/components/site-header";
import { ConditionalFooter } from "@/components/conditional-footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <ConditionalFooter />
    </>
  );
}
