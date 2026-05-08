import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating animation-delay-300" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/3 rounded-full blur-2xl floating animation-delay-600" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile photo */}
        <div className="animate-fade-up opacity-0 flex justify-center mb-8">
          <div className="relative group">
            {/* Outer rotating gradient ring */}
            <div
              className="absolute -inset-1 rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "var(--gradient-text)" }}
            />
            {/* Pulsing glow */}
            <div className="absolute inset-0 rounded-full pulse-glow" />
            {/* Photo frame */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[3px]" style={{ background: "var(--gradient-text)" }}>
              <div className="w-full h-full rounded-full overflow-hidden bg-card border-2 border-background">
                <img
                  src={profilePhoto}
                  alt="Bhavesh Maske - Software Engineer & Cloud Specialist"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status dot */}
            <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-4 border-background animate-pulse" />
          </div>
        </div>

        {/* Status badge */}
        <div className="animate-fade-up opacity-0 animation-delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground font-display">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up opacity-0 animation-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="text-gradient">Bhavesh Maske</span>
        </h1>

        {/* Role */}
        <div className="animate-fade-up opacity-0 animation-delay-200 mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-display">
            <span className="typing-cursor">Software Engineer & Cloud Specialist</span>
          </p>
        </div>

        {/* Description */}
        <p className="animate-fade-up opacity-0 animation-delay-300 text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable cloud infrastructure and optimizing systems for peak performance. 
          Specialized in AWS, Docker, and modern DevOps practices.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up opacity-0 animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="animate-fade-up opacity-0 animation-delay-500 flex items-center justify-center gap-4">
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
          <a 
            href="mailto:bhaveshmaske2004@gmail.com"
            className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="tel:+917972820443"
            className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group"
          >
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
