import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-display text-primary uppercase tracking-widest mb-4">
            My Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-display">
            Experience & <span className="text-gradient">Education</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {/* Work Experience */}
          <div className="relative mb-16 md:mb-24">
            <div className="flex items-start gap-6 md:gap-12">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />
              
              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
                <div className="border-gradient card-hover p-6 animate-slide-left opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-display text-primary uppercase tracking-wider">Work Experience</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display mb-2">Software Engineer</h3>
                  <p className="text-primary font-medium mb-3">Clustor Computing Ltd.</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      Jun 2024 - Present
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      Nagpur
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Designed AWS cloud infrastructure achieving <span className="text-foreground font-medium">30% cost reduction</span> and <span className="text-foreground font-medium">99.9% uptime</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Led cost-saving initiative reducing AWS expenditures by <span className="text-foreground font-medium">$50,000+ annually</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Boosted web traffic by <span className="text-foreground font-medium">35%</span> through SEO optimization in 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Improved system scalability by <span className="text-foreground font-medium">40%</span> via cloud-based REST API integration</span>
                    </li>
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border/50">
                    {["AWS", "EC2", "S3", "Docker", "MySQL", "MFA"].map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-display bg-primary/10 text-primary rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="flex items-start gap-6 md:gap-12 md:flex-row-reverse">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-accent z-10" />
              
              {/* Content */}
              <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12">
                <div className="border-gradient card-hover p-6 animate-slide-left opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <GraduationCap className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-xs font-display text-accent uppercase tracking-wider">Education</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display mb-2">Bachelor of Vocation (B.VOC)</h3>
                  <p className="text-accent font-medium mb-3">St. Vincent Pallotti College of Engineering and Technology</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      Sept 2022 - Apr 2025
                    </span>
                    <span className="font-display">CGPA: 7.4/10</span>
                  </div>

                  {/* Coursework */}
                  <div>
                    <p className="text-sm font-medium mb-3">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["OOP", "Databases", "DSA", "OS", "Networks", "Full Stack Dev", "Image Processing"].map((course) => (
                        <span key={course} className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded-md border border-border/50">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
