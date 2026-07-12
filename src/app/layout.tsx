import type { Metadata, Viewport } from "next";
import "./globals.css";
import { UIProvider, noFlashScript } from "@/components/ui-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://juris.com.bd"),
  title: {
    default: "Juris · বাংলাদেশ আইন — Verified Bangladesh law, answered.",
    template: "%s · Juris",
  },
  description:
    "An AI legal assistant grounded strictly in verified Bangladesh law. Search the full law database and consult Bar-verified lawyers. Bilingual by design.",
  applicationName: "Juris",
  keywords: ["Bangladesh law", "legal AI", "আইন", "legal assistant", "lawyers", "NexaLance"],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='10' fill='%230E7C5A'/%3E%3Cpath d='M20 9v21M12 15h16M20 9l-8 6c0 4 3.4 6.5 8 6.5M20 9l8 6c0 4-3.4 6.5-8 6.5' fill='none' stroke='%23ffffff' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13 31h14' stroke='%23E7BC63' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='20' cy='9' r='2.2' fill='%23E7BC63'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E7C5A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+Bengali:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body data-lang="en">
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
