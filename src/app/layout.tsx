import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MobileStoreActions } from "@/components/StoreActions";
import Analytics from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url + "/"),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  publisher: SITE.name,
  category: "Computer Store",
  alternates: { canonical: SITE.url + "/" },
  openGraph: { type: "website", locale: "en_IN", url: SITE.url + "/", siteName: SITE.name, title: SITE.title, description: SITE.description },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: { index: !SITE.isPreview, follow: true, googleBot: { index: !SITE.isPreview, follow: true, "max-image-preview": "large" } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#2563eb" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><a href="#main-content" className="skip-link">Skip to content</a><Navbar/>{children}<Footer/><MobileStoreActions/><Analytics/></body></html>;
}
