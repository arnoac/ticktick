import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "TickTick — Tokenizing the Future of Ownership",
  description:
    "TickTick is redefining private market access by tokenizing private companies, sports teams, and high-growth ventures into tradeable digital assets.",
  keywords: [
    "TickTick",
    "tokenization",
    "private equity",
    "crypto trading",
    "fractional ownership",
    "web3 investing",
    "blockchain startups",
    "sports team tokens",
    "fintech innovation",
    "digital assets"
  ],
  openGraph: {
    title: "TickTick — Tokenizing the Future of Ownership",
    description:
      "Fractional access to private companies, sports teams, and exclusive ventures — all on-chain.",
    url: "https://ticktick.org",
    siteName: "TickTick",
    images: [
      {
        url: "/tickticklogo.png",
        width: 1200,
        height: 630,
        alt: "TickTick — Tokenizing the Future of Ownership"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TickTick — Tokenizing the Future of Ownership",
    description:
      "Fractional access to private companies, sports teams, and high-growth ventures — all on-chain.",
    images: ["/tickticklogo.png"],
    creator: "@TickTick"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
