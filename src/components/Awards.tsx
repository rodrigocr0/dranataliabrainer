export function Awards() {
  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 font-bagel">
          Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((award) => (
            <div key={award} className="text-center p-6 glass-effect rounded-lg gentle-animation">
              <div className="w-16 h-16 bg-accent-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Award {award}</h3>
              <p className="text-sm text-muted-foreground">Award description</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}