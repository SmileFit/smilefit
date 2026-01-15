import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, User, Euro } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Class } from "@/types"

interface ClassCardProps {
  class: Class
  variant?: "default" | "featured"
}

export function ClassCard({
  class: classData,
  variant = "default",
}: ClassCardProps) {
  const isFeatured = variant === "featured"

  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={classData.image}
          alt={classData.title}
          fill
          className="object-cover"
          sizes={
            isFeatured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {classData.category}
          </Badge>
        </div>
        {classData.badge && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary/90 backdrop-blur-sm">
              {classData.badge}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-lg line-clamp-2">
          {classData.title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{classData.schedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-1">{classData.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 flex-shrink-0" />
            <span>{classData.instructor}</span>
          </div>
        </div>

        {isFeatured && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {classData.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-1 font-semibold text-lg">
          <Euro className="h-5 w-5" />
          <span>{classData.price}</span>
        </div>
        <Button asChild size={isFeatured ? "default" : "sm"}>
          <Link href="/contact">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
