import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClassCard } from "@/components/cards/class-card"
import { FeatureCard } from "@/components/cards/feature-card"
import { StepCard } from "@/components/cards/step-card"
import { CTABanner } from "@/components/sections/cta-banner"
import { classes, siteContent } from "@/lib/data"

export default function Home() {
  // Get featured class (first class with badge)
  const featuredClass =
    classes.find((c) => c.badge === "Most Popular") || classes[0]

  // Get first 3 classes for preview
  const previewClasses = classes.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="space-y-6">
              <div>
                <p className="text-sm sm:text-base text-primary font-medium mb-4">
                  {siteContent.hero.eyebrow}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {siteContent.hero.title}
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground">
                {siteContent.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href={siteContent.hero.primaryCTA.href}>
                    {siteContent.hero.primaryCTA.text}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={siteContent.hero.secondaryCTA.href}>
                    {siteContent.hero.secondaryCTA.text}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Featured Class Card */}
            <div className="lg:pl-8">
              <ClassCard classItem={featuredClass} variant="featured" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {siteContent.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon as keyof typeof import("lucide-react")}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Class Preview Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Popular Classes
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover what others are enjoying
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {previewClasses.map((classItem) => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/classes">View All Classes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-lg text-muted-foreground">
              Join outdoor fitness classes in just a few simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {siteContent.steps.slice(0, 3).map((step) => (
              <StepCard
                key={step.number}
                stepNumber={step.number}
                icon={step.icon as keyof typeof import("lucide-react")}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={siteContent.ctaBanners.home.title}
        subtitle={siteContent.ctaBanners.home.subtitle}
        primaryCTA={siteContent.ctaBanners.home.primaryCTA}
        variant="blue"
      />
    </>
  )
}
