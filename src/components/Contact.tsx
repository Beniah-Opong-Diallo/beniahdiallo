import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "diallobeniah@gmail.com",
      href: "mailto:diallobeniah@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 24 451 3608",
      href: "tel:+233244513608",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taifa Norway, Accra, Ghana",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-card opacity-50" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Ready to collaborate on your next project or discuss opportunities? 
              Feel free to reach out!
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Find me online</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Beniah-Opong-Diallo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/beniah-opong-diallo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Message CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-card rounded-xl border border-border p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto mb-6 flex items-center justify-center">
                    <Send className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Ready to start a project?</h4>
                  <p className="text-muted-foreground mb-6">
                    Drop me an email and let's discuss how we can work together.
                  </p>
                  <a
                    href="mailto:diallobeniah@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
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
