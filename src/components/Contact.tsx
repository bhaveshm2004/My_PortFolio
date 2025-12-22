import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-display text-primary uppercase tracking-widest mb-4">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-display mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
        </div>

        {/* Contact card */}
        <div className="border-gradient card-hover p-8 md:p-12 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display mb-6">Contact Information</h3>
              
              <a 
                href="mailto:bhaveshmaske2004@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">bhaveshmaske2004@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+917972820443"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">+91 7972820443</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Nagpur, India</p>
                </div>
              </div>
            </div>

            {/* CTA & Social */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-4">Ready to start a project?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm available for freelance projects, full-time positions, and consulting work. 
                  Let's discuss how I can help optimize your cloud infrastructure.
                </p>
                
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="mailto:bhaveshmaske2004@gmail.com">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </a>
                </Button>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/bhaveshm2004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/bhavesh-maske" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
