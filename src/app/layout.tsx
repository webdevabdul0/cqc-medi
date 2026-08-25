import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CQC MediSolutions | We don't sell folders. We get providers registered.",
  description:
    "CQC MediSolutions gets healthcare providers registered with the CQC and keeps them compliant afterwards, with a consultant reviewing every document before it reaches CQC.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${quicksand.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white">{children}</body>
    </html>
  );
}
