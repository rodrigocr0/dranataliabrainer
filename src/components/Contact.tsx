import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-bagel">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? Let's talk!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={5} />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center">
                      <span className="text-sm">📧</span>
                    </div>
                    <span>hello@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-emerald rounded-lg flex items-center justify-center">
                      <span className="text-sm">📱</span>
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-purple rounded-lg flex items-center justify-center">
                      <span className="text-sm">📍</span>
                    </div>
                    <span>123 Business St, City, State 12345</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <div key={social} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center gentle-animation hover:bg-accent">
                      <span className="text-sm">🔗</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}