export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 font-bagel">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((service) => (
            <div key={service} className="p-8 glass-effect rounded-lg gentle-animation hover:elevated-shadow">
              <div className="w-12 h-12 bg-accent-emerald rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Service {service}</h3>
              <p className="text-muted-foreground mb-6">
                Detailed description of the service we provide to our clients.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Feature one</li>
                <li>• Feature two</li>
                <li>• Feature three</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}