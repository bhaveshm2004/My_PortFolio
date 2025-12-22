import { ExternalLink, Server, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Server,
    title: "Digital Twin & Virtual Environment",
    year: "2024",
    description: "Designed and implemented a digital twin system using VMware ESXi to simulate real-world processes with real-time IoT data integration for predictive maintenance.",
    highlights: [
      "Type-1 hypervisor configuration",
      "Multiple VMs with VLANs",
      "IoT data integration",
      "Enterprise deployment framework",
    ],
    tech: ["VMware ESXi", "VLANs", "IoT", "Datastores"],
    gradient: "from-primary to-accent",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Infrastructure for Scalable Web Apps",
    year: "2025",
    description: "Built a production-grade scalable web application infrastructure using AWS services with CI/CD pipeline integration and comprehensive security measures.",
    highlights: [
      "GitHub CI/CD pipeline",
      "Load Balancer & Auto Scaling",
      "VPC security configuration",
      "25% cost reduction achieved",
    ],
    tech: ["AWS EC2", "S3", "RDS", "IAM", "HTTPS"],
    gradient: "from-accent to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-display text-primary uppercase tracking-widest mb-4">
            Featured Work
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-display">
            Project <span className="text-gradient">Highlights</span>
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border-gradient card-hover p-8 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <span className="font-display text-primary text-sm">{project.year}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-display bg-secondary/50 text-muted-foreground rounded-lg border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="https://github.com/bhaveshm2004" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
