import * as LucideIcons from "lucide-react"

interface FeatureCardProps {
  icon: keyof typeof LucideIcons
  title: string
  description: string
  variant?: "horizontal" | "vertical"
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = "vertical",
}: FeatureCardProps) {
  const Icon = LucideIcons[icon] as React.ComponentType<{ className?: string }>

  if (variant === "horizontal") {
    return (
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
