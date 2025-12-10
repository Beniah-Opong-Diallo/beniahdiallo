const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite"],
    },
    {
      title: "Backend & Database",
      skills: ["Supabase", "Firebase", "Node.js", "Express"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Bootstrap"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Teaching", "Creativity", "Communication"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-card opacity-50" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Technical Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern, responsive web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-card rounded-xl border border-border p-6"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-lg border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
