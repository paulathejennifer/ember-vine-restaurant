import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { ReservationModalProvider } from "@/app/context/ReservationModalContext";
import ReservationModal from "@/app/components/modals/ReservationModal";

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const logoFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-logo",
});

export const metadata: Metadata = {
  title: "Ember & Vine",
  description:
    "Thoughtfully crafted dishes, exceptional ingredients, and unforgettable moments around the table.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${logoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-ivory">
        <ReservationModalProvider>
          <Navbar />
          {children}
          <Footer />
          <ReservationModal />
        </ReservationModalProvider>
      </body>
    </html>
  );
}