export interface Class {
  id: string
  title: string
  category:
    | "Yoga"
    | "HIIT"
    | "Pilates"
    | "Running"
    | "Boxing"
    | "Dance"
    | "Zumba"
    | "Meditation"
    | "Functional Training"
    | "Strength"
  image: string
  schedule: string // e.g., "Tue & Thu · 7:30 AM"
  location: string // e.g., "Parco Sempione, Milano"
  city: "Milan" | "Rome" | "Florence" | "Turin" | "Bologna"
  instructor: string // Instructor name
  instructorId: string // For linking to instructor
  price: number // Price in euros
  description: string // Full description
  badge?: "Most Popular" | "New"
}
// comment for vercel deploy