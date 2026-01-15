import { CheckCircle } from "lucide-react"
import { PageHeader } from "@/components/sections/page-header"
import { StepCard } from "@/components/cards/step-card"
import { CTABanner } from "@/components/sections/cta-banner"
import { siteContent } from "@/lib/data"

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="Getting started with SmileFit is simple. Follow these easy steps to find your perfect outdoor fitness class."
        cta={[
          { text: "Browse Classes", href: "/classes" },
          { text: "Contact Us", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Process Steps Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Three Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              Join outdoor fitness classes in just a few easy steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {siteContent.steps.map((step) => (
              <StepCard
                key={step.number}
                stepNumber={step.number}
                icon={step.icon as keyof typeof import("lucide-react")}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose SmileFit?
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the benefits of outdoor fitness with expert instructors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteContent.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 p-6 bg-background rounded-lg border"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We&apos;ve got answers
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {siteContent.faq.map((item) => (
              <div
                key={item.question}
                className="p-6 bg-muted/50 rounded-lg border"
              >
                <h3 className="font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={siteContent.ctaBanners.howItWorks.title}
        subtitle={siteContent.ctaBanners.howItWorks.subtitle}
        primaryCTA={siteContent.ctaBanners.howItWorks.primaryCTA}
        variant="gradient"
      />
    </>
  )
}
