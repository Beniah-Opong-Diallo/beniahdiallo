import { ExternalLink, Github, QrCode, Search, CheckCircle, ListTodo, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SafePick",
      description: "Children's Ministry Check-In & Pickup System with QR codes, pickup codes, dashboards, CSV export, SMS helpers, and PWA support.",
      tech: ["TypeScript", "React", "Vite", "Tailwind", "Supabase"],
      icon: QrCode,
      date: "Nov-Dec 2025",
      featured: true,
      githubUrl: "https://github.com/Beniah-Opong-Diallo/SafePick",
    },
    {
      title: "DatSer",
      description: "Real-time member search platform with secure data storage, retrieval, deletion, and update functionality.",
      tech: ["React", "Supabase", "Tailwind"],
      icon: Search,
      date: "Nov 2025",
      featured: true,
      githubUrl: "https://github.com/Beniah-Opong-Diallo/DatSer",
    },
    {
      title: "Check-In Form",
      description: "Responsive attendance solution for Teens Ministry with smooth animations and comprehensive date handling.",
      tech: ["React", "Tailwind", "CSS Animations"],
      icon: CheckCircle,
      date: "Oct-Nov 2025",
      featured: false,
    },
    {
      title: "TODO-APP DemoDay",
      description: "Task manager application with Firebase integration for persistent data storage.",
      tech: ["React", "Firebase"],
      icon: ListTodo,
      date: "Sep 2024",
      featured: false,
      githubUrl: "https://github.com/Beniah-Opong-Diallo/TODO-APP-DemoDay",
    },
    {
      title: "React Contacts App",
      description: "Full CRUD contacts manager with search and filter functionality.",
      tech: ["React", "JavaScript"],
      icon: Users,
      date: "Apr 2024",
      featured: false,
      githubUrl: "https://github.com/Beniah-Opong-Diallo/react-contacts-app",
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real-world applications built for The Maker's House Chapel ministries
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gradient-card rounded-2xl border border-border overflow-hidden hover-lift cursor-pointer"
                onClick={() => {
                  if (project.githubUrl) {
                    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (project.githubUrl) {
                    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-secondary/50 rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Beniah-Opong-Diallo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
