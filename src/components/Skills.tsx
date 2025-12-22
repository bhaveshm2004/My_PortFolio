import { Code2, Cloud, Server, Database, FileText, Gauge } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["C/C++", "Python", "SQL", "Bash", "Git"],
    color: "from-primary to-primary/60",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "S3", "VPC", "Docker", "SSL/TLS"],
    color: "from-accent to-accent/60",
  },
  {
    icon: Server,
    title: "Virtualization",
    skills: ["VMware ESXi", "VMware Workstation", "Virtual Machines"],
    color: "from-primary to-accent",
  },
  {
    icon: Database,
    title: "Security",
    skills: ["Firewall Rules", "MFA", "Data Encryption", "IAM"],
    color: "from-accent to-primary",
  },
  {
    icon: FileText,
    title: "Documentation",
    skills: ["MS Word", "MS Excel", "PowerPoint", "Technical SOPs"],
    color: "from-primary/80 to-primary",
  },
  {
    icon: Gauge,
    title: "Web & SEO",
    skills: ["Google Analytics", "SEO Optimization", "Digital Marketing"],
    color: "from-accent/80 to-accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-display text-primary uppercase tracking-widest mb-4">
            What I Do
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-display">
            Skills & <span className="text-gradient">Technologies</span>
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group border-gradient card-hover p-6 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold font-display mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 rounded-lg text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typing speed highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary/30 border border-border/50">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold font-display text-gradient">70+</span>
              <span className="text-muted-foreground text-sm">WPM</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <p className="text-muted-foreground text-sm">
              High precision typing for efficient communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
