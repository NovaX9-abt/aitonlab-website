import { Card } from "@/components/ui/card";
import { ShoppingCart, Briefcase, BarChart3, Bot } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: ShoppingCart,
      year: "2022",
      title: "Dropshipping Business",
      description: "Started my entrepreneurial journey in e-commerce. Learned digital marketing, customer acquisition, and the fundamentals of running an online business.",
      skills: ["Marketing", "Customer Service", "E-commerce"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Briefcase,
      year: "2023",
      title: "Freelancing",
      description: "Worked with various clients on digital projects. Developed strong communication skills and learned how to deliver value consistently.",
      skills: ["Client Communication", "Project Management", "Delivery"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: BarChart3,
      year: "2024",
      title: "Data Analytics with Superset",
      description: "Helped businesses visualize their data and make informed decisions. Gained expertise in data analysis and business intelligence.",
      skills: ["Data Visualization", "Analytics", "Business Intelligence"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Bot,
      year: "2025",
      title: "AI Agent Solutions",
      description: "Building practical AI automation tools for businesses. Focusing on phone support automation to help companies scale their customer service.",
      skills: ["AI Development", "Automation", "Customer Support"],
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each step has taught me valuable lessons that I bring to my current work.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden group hover:shadow-elegant transition-smooth animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8 md:p-10">
                  <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8">
                    {/* Icon & Year */}
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <exp.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="md:text-center">
                        <div className="text-sm font-medium text-muted-foreground">{exp.year}</div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line for Desktop */}
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-[4rem] bottom-0 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent transform translate-y-full"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
