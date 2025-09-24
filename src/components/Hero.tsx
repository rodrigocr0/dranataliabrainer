export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-emerald/20">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="font-bagel text-6xl md:text-8xl text-shadow-strong">
          Hero Section
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to our amazing project
        </p>
      </div>
    </section>
  )
}