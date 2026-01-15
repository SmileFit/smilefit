"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/sections/page-header"
import { InstructorCard } from "@/components/cards/instructor-card"
import { CTABanner } from "@/components/sections/cta-banner"
import { instructors, siteContent, siteConfig } from "@/lib/data"

export default function InstructorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])

  const filteredInstructors = useMemo(() => {
    let result = [...instructors]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (instructor) =>
          instructor.name.toLowerCase().includes(query) ||
          instructor.bio.toLowerCase().includes(query) ||
          instructor.specialties.some((s) => s.toLowerCase().includes(query))
      )
    }

    // Filter by selected specialties
    if (selectedSpecialties.length > 0) {
      result = result.filter((instructor) =>
        selectedSpecialties.some((specialty) =>
          instructor.specialties.includes(specialty)
        )
      )
    }

    return result
  }, [searchQuery, selectedSpecialties])

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedSpecialties([])
  }

  const hasActiveFilters = searchQuery || selectedSpecialties.length > 0

  return (
    <>
      <PageHeader
        title="Meet Our Instructors"
        subtitle="Our certified fitness professionals are passionate about helping you achieve your goals. Find the perfect instructor for your fitness journey."
      />

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Specialty Tags */}
            <div className="space-y-3">
              <p className="text-sm font-medium">Filter by specialty:</p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.categories.map((specialty) => (
                  <Badge
                    key={specialty}
                    variant={
                      selectedSpecialties.includes(specialty)
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer hover:bg-primary/80 transition-colors"
                    onClick={() => toggleSpecialty(specialty)}
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Results Count and Clear Filters */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredInstructors.length} of {instructors.length}{" "}
                instructors
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInstructors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInstructors.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No instructors found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                Clear filters and show all instructors
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={siteContent.ctaBanners.instructors.title}
        subtitle={siteContent.ctaBanners.instructors.subtitle}
        primaryCTA={siteContent.ctaBanners.instructors.primaryCTA}
        variant="blue"
      />
    </>
  )
}
