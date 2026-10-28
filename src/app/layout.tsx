import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DemoBar, MobileActions } from "@/components/DemoBar";
import { ScrollState } from "@/components/ScrollState";
import { IS_DEMO, SITE_URL, asset } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chirurgia Maxillo-Facciale a Napoli | Prof. Antonio Cortese",
    template: "%s | Prof. Antonio Cortese",
  },
  description:
    "Prof. Dott. Antonio Cortese, specialista in Chirurgia Maxillo-Facciale e odontoiatra a Napoli: chirurgia ortognatica, chirurgia orale rigenerativa, implantologia e ortodonzia integrata.",
  applicationName: "Prof. Antonio Cortese",
  authors: [{ name: "Prof. Dott. Antonio Cortese" }],
  formatDetection: { telephone: false, email: false, address: false },
  robots: IS_DEMO ? { index: false, follow: false, nocache: true } : { index: true, follow: true },
  icons: { icon: asset("/icon.svg") },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className="min-h-dvh">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.split .w>span{transform:none!important}`}</style>
        </noscript>
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-midnight focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Vai al contenuto
        </a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileActions />
        <DemoBar />
        <ScrollState />
      </body>
    </html>
  );
}
