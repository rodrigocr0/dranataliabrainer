export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bagel text-2xl mb-4">Our Company</h3>
            <p className="text-muted-foreground mb-4">
              Creating amazing experiences with cutting-edge technology and creative solutions.
            </p>
            <div className="flex gap-4">
              {['🌐', '📧', '📱'].map((icon, index) => (
                <div key={index} className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center gentle-animation hover:bg-accent">
                  <span className="text-sm">{icon}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground gentle-animation">Service 1</a></li>
              <li><a href="#" className="hover:text-foreground gentle-animation">Service 2</a></li>
              <li><a href="#" className="hover:text-foreground gentle-animation">Service 3</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground gentle-animation">About</a></li>
              <li><a href="#team" className="hover:text-foreground gentle-animation">Team</a></li>
              <li><a href="#contact" className="hover:text-foreground gentle-animation">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}