import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outdoor Fitness Classes | SmileFit",
  description:
    "Browse outdoor fitness classes in Italian cities. Find yoga, HIIT, pilates, running, boxing and more with certified instructors in Milan, Rome, Florence, Turin, and Bologna.",
  openGraph: {
    title: "Outdoor Fitness Classes | SmileFit",
    description:
      "Browse outdoor fitness classes in Italian cities. Find yoga, HIIT, pilates, running, boxing and more with certified instructors.",
  },
}

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
