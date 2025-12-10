import { Code, Palette, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend to backend with modern technologies.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces and seamless user experiences with attention to detail.",
    },
    {
      icon: Users,
      title: "Ministry Tech",
      description: "Supporting church operations with custom digital solutions and weekly tech assistance.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-gradient">Building</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Full-Stack Developer with experience building digital systems for 
              The Maker's House Teens and Children's Ministries in Accra, Ghana.
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-gradient-card rounded-2xl border border-border p-8 md:p-12 mb-16 shadow-card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  2020 - Present
                </div>
                <h3 className="text-2xl font-bold mb-2">Full-Stack Developer</h3>
                <p className="text-muted-foreground mb-4">The Maker's House Chapel — Accra, Ghana</p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    Built internal apps including SafePick, DatSer, and Check-in Form
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    Designed ministry UI workflows and systems
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    Supported ministry operations with weekly tech assistance
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground text-sm mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  2023 - Present
                </div>
                <h3 className="text-2xl font-bold mb-2">Software Engineering</h3>
                <p className="text-muted-foreground mb-4">Codetrain — Accra, Ghana</p>
                <p className="text-foreground/80">
                  Currently enrolled at Codetrain, building strong foundational and advanced skills 
                  toward becoming a highly competent Full Stack Web Developer. Also completed an 
                  intensive Full Stack Web Development Bootcamp on Udemy with 370+ interactive modules.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-gradient-card rounded-xl border border-border p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
