import { Mail, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/sections/page-header"
import { ContactForm } from "@/components/forms/contact-form"
import { siteConfig } from "@/lib/data"

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Have questions about our classes or want to learn more? We'd love to hear from you."
      />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels or fill
                  out the contact form. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Locations</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.cities?.length > 0
                        ? `Classes available in ${siteConfig.cities.join(", ")}`
                        : "Contact us for available locations"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram (opens in new tab)"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Facebook (opens in new tab)"
                  >
                    Facebook
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter (opens in new tab)"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/50 rounded-lg border p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
