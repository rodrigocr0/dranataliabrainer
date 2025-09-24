export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 font-bagel">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="glass-effect p-6 rounded-lg gentle-animation">
              <h3 className="text-xl font-semibold mb-4">Project {item}</h3>
              <p className="text-muted-foreground">Project description goes here...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}