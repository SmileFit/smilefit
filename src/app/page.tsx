export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Discover Outdoor Fitness Classes Near You
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Connect with professional trainers and join outdoor fitness classes in
          beautiful Italian cities. From yoga to HIIT, find the perfect class
          for your active lifestyle.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Phase 1 In Progress - Coming Soon
        </div>
      </div>
    </div>
  )
}
