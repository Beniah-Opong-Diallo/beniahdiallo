import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Beniah <span className="text-gradient">Opong</span> Diallo
          </h1>

          {/* Title */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Full-Stack Developer & Graphic Designer
          </p>

          {/* Description */}
          <p 
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Building digital systems with React, Tailwind, and Supabase. 
            Passionate about creating secure, responsive, real-world applications.
          </p>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/Beniah-Opong-Diallo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/beniah-opong-diallo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:diallobeniah@gmail.com"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+233244513608"
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary border border-border font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
