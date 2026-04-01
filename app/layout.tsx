import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Rachel Zagarino, LMFT | Marriage and Family Therapist",
  description:
    "Rachel Zagarino is a Licensed Marriage and Family Therapist specializing in families, couples, and individuals, including children and adolescents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="h-dvh flex flex-col overflow-hidden bg-cream text-warm-dark">
        <Nav />
        <main className="flex-1 min-h-0">{children}</main>
      </body>
    </html>
  );
}
