import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  subtitle?: string
  cta?: Array<{
    text: string
    href: string
    variant?: "default" | "outline"
  }>
}

export function PageHeader({ title, subtitle, cta }: PageHeaderProps) {
  return (
    <section className="py-12 sm:py-16 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {cta && cta.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {cta.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={button.variant || "default"}
                >
                  <Link href={button.href}>{button.text}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
