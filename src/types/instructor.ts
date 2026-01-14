export interface Instructor {
  id: string
  name: string
  photo: string
  experience: string // e.g., "10 years of experience"
  bio: string // 2-3 sentences
  specialties: string[] // e.g., ["Yoga", "Pilates", "Meditation"]
  social?: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
}
