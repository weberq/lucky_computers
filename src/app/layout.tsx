import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucky Computers | Laptop & PC Repair in Kukatpally, Hyderabad",
  description:
    "Expert laptop and desktop repair, data recovery, upgrades and refurbished laptops in Kukatpally, Hyderabad. Fast, reliable, honest service.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
