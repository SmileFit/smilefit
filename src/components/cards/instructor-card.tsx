import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instructor } from "@/types"

interface InstructorCardProps {
  instructor: Instructor
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6 space-y-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={instructor.photo}
              alt={instructor.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{instructor.name}</h3>
            <p className="text-sm text-muted-foreground">
              {instructor.experience}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center line-clamp-3">
          {instructor.bio}
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {instructor.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild className="flex-1" variant="outline">
          <Link href="/contact">Learn More</Link>
        </Button>
        <Button asChild size="icon" variant="default">
          <Link href="/contact" aria-label={`Contact ${instructor.name}`}>
            <MessageCircle className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
