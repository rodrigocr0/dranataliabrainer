export function Team() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 font-bagel">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div key={member} className="text-center glass-effect p-8 rounded-lg gentle-animation">
              <div className="w-24 h-24 bg-accent-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
              <p className="text-accent-blue font-medium mb-4">Position</p>
              <p className="text-muted-foreground text-sm">
                Brief description of the team member's role and expertise.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}