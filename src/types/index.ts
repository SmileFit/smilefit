// Export all types from a single entry point
export type { Class } from "./class"
export type { Instructor } from "./instructor"

// Common types
export interface NavLink {
  href: string
  label: string
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "twitter"
  url: string
  label: string
}
