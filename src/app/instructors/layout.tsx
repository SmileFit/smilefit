import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meet Our Instructors | SmileFit",
  description:
    "Meet our certified fitness instructors. Expert trainers specializing in yoga, HIIT, pilates, running, boxing, and more across Italian cities.",
  openGraph: {
    title: "Meet Our Instructors | SmileFit",
    description:
      "Meet our certified fitness instructors. Expert trainers specializing in yoga, HIIT, pilates, running, boxing, and more.",
  },
}

export default function InstructorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
