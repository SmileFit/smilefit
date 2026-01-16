import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://smilefit.com"
  ),
  title: {
    default: "SmileFit - Outdoor Fitness Classes in Italy",
    template: "%s | SmileFit",
  },
  description:
    "Join outdoor fitness classes with expert trainers in beautiful Italian cities. From yoga to HIIT, find the perfect class for your active lifestyle in Milan, Rome, Florence, Turin, and Bologna.",
  keywords: [
    "outdoor fitness",
    "fitness classes Italy",
    "yoga Milan",
    "HIIT Rome",
    "pilates Florence",
    "personal training",
    "outdoor workout",
    "fitness instructors",
  ],
  authors: [{ name: "SmileFit" }],
  creator: "SmileFit",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SmileFit",
    title: "SmileFit - Outdoor Fitness Classes in Italy",
    description:
      "Join outdoor fitness classes with expert trainers in beautiful Italian cities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileFit - Outdoor Fitness Classes in Italy",
    description:
      "Join outdoor fitness classes with expert trainers in beautiful Italian cities.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
