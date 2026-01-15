import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | SmileFit",
  description:
    "Learn how to join outdoor fitness classes with SmileFit. Browse classes, find your perfect fit, and get in touch with certified instructors in Italian cities.",
  openGraph: {
    title: "How It Works | SmileFit",
    description:
      "Learn how to join outdoor fitness classes with SmileFit. Simple steps to start your fitness journey.",
  },
}

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
