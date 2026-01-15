import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | SmileFit",
  description:
    "Get in touch with SmileFit. Contact us about outdoor fitness classes, instructor inquiries, or partnership opportunities in Milan, Rome, Florence, Turin, and Bologna.",
  openGraph: {
    title: "Contact Us | SmileFit",
    description:
      "Get in touch with SmileFit. Contact us about outdoor fitness classes and instructor inquiries.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
