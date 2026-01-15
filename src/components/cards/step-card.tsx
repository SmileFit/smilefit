import * as LucideIcons from "lucide-react"

interface StepCardProps {
  stepNumber?: number
  icon: keyof typeof LucideIcons
  title: string
  description: string
  variant?: "numbered" | "icon-only"
}

export function StepCard({
  stepNumber,
  icon,
  title,
  description,
  variant = "numbered",
}: StepCardProps) {
  const IconComponent = LucideIcons[icon]

  if (!IconComponent || typeof IconComponent !== "function") {
    console.warn(`StepCard: Invalid icon "${icon}"`)
    return null
  }

  const Icon = IconComponent as React.ComponentType<{ className?: string }>

  return (
    <div className="relative text-center space-y-4">
      <div className="flex justify-center">
        {variant === "numbered" && stepNumber !== undefined ? (
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
              {stepNumber}
            </div>
            <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
          </div>
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
