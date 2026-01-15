"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/sections/page-header"
import { ClassCard } from "@/components/cards/class-card"
import { CTABanner } from "@/components/sections/cta-banner"
import { classes, siteContent, siteConfig } from "@/lib/data"

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedCity, setSelectedCity] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("default")

  const filteredClasses = useMemo(() => {
    let result = [...classes]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.instructor.toLowerCase().includes(query) ||
          c.location.toLowerCase().includes(query) ||
          c.category.toLowerCase().includes(query)
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((c) => c.category === selectedCategory)
    }

    // Filter by city
    if (selectedCity !== "all") {
      result = result.filter((c) => c.city === selectedCity)
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  }, [searchQuery, selectedCategory, selectedCity, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedCity("all")
    setSortBy("default")
  }

  const hasActiveFilters =
    searchQuery || selectedCategory !== "all" || selectedCity !== "all"

  return (
    <>
      <PageHeader
        title="Outdoor Fitness Classes"
        subtitle="Find the perfect class for your fitness journey. Filter by category, location, or search for specific classes."
      />

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search and Filters Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative sm:col-span-2 lg:col-span-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search classes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {siteConfig.categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* City Filter */}
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {siteConfig.cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count and Clear Filters */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredClasses.length} of {classes.length} classes
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

      {/* Classes Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No classes found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                Clear filters and show all classes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title={siteContent.ctaBanners.classes.title}
        subtitle={siteContent.ctaBanners.classes.subtitle}
        primaryCTA={siteContent.ctaBanners.classes.primaryCTA}
        variant="gradient"
      />
    </>
  )
}
