import Link from "next/link"
import { Button } from "@/components/ui/button"

export interface CTALink {
  text: string
  href: string
}

interface CTABannerProps {
  title: string
  subtitle?: string
  primaryCTA: CTALink
  secondaryCTA?: CTALink
  variant?: "blue" | "gray" | "gradient"
}

const variantStyles = {
  blue: "bg-primary text-primary-foreground",
  gray: "bg-muted text-foreground",
  gradient: "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground",
} as const

export function CTABanner({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "blue",
}: CTABannerProps) {
  return (
    <section className={`py-16 sm:py-20 ${variantStyles[variant]}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-lg sm:text-xl opacity-90">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              variant={variant === "gray" ? "default" : "secondary"}
              className={
                variant === "gray"
                  ? ""
                  : "bg-white text-primary hover:bg-white/90"
              }
            >
              <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
            </Button>
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className={
                  variant === "gray"
                    ? ""
                    : "border-white text-white hover:bg-white/10"
                }
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
