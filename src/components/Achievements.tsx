import { Award, Cloud, Shield, Bot, Globe, Code, Trophy, Cpu } from "lucide-react";

const achievements = [
  { icon: Cloud, title: "Cloud Technology", org: "Google Cloud Community" },
  { icon: Shield, title: "Cybersecurity Networking", org: "Cisco Networking Academy" },
  { icon: Bot, title: "Industrial Robotics & Automation", org: "RTMNU" },
  { icon: Cpu, title: "Rowboatics", org: "IIT Bombay" },
  { icon: Globe, title: "Web Development", org: "IIT Bombay" },
  { icon: Code, title: "Web Developer", org: "NASSCOM" },
  { icon: Code, title: "Junior Software Developer", org: "NASSCOM" },
  { icon: Globe, title: "Digital Marketing Fundamentals", org: "Google" },
  { icon: Trophy, title: "Hackathon Participant", org: "St. Vincent Pallotti College" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-display text-primary uppercase tracking-widest mb-4">
            Recognition
          </h2>
          <p className="text-3xl sm:text-4xl font-bold font-display">
            Certifications & <span className="text-gradient">Achievements</span>
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={`${achievement.title}-${achievement.org}`}
              className="group p-5 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <achievement.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors truncate">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {achievement.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "9+", label: "Certifications" },
            { value: "30%", label: "Cost Reduction" },
            { value: "99.9%", label: "Uptime Achieved" },
            { value: "$50K+", label: "Annual Savings" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-secondary/20 border border-border/30 animate-fade-up opacity-0"
              style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <p className="text-3xl md:text-4xl font-bold font-display text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
