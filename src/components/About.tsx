import { User, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const milestones = [
    {
      icon: Target,
      title: "Started with Dropshipping",
      description: "Learned the fundamentals of marketing, customer acquisition, and building an online business from scratch.",
    },
    {
      icon: User,
      title: "Freelancing Journey",
      description: "Developed strong client communication skills and learned how to deliver value while managing multiple projects.",
    },
    {
      icon: Lightbulb,
      title: "Data Analytics with Superset",
      description: "Gained expertise in data visualization and helping businesses make data-driven decisions.",
    },
    {
      icon: TrendingUp,
      title: "Building AI Solutions",
      description: "Now creating practical AI automation tools that help businesses serve their customers better and scale efficiently.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey driven by curiosity, technology, and the desire to solve real business problems.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Placeholder */}
            <div className="relative group animate-slide-up">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden shadow-elegant">
                <User className="w-32 h-32 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            </div>

            {/* Story */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
                  17 Years Old • Rwanda
                </div>
                <h3 className="text-3xl font-bold">Passionate About AI & Business</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a young entrepreneur and AI enthusiast from Rwanda. My journey began with dropshipping, where I discovered my passion for business and technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through freelancing and data analytics work, I learned how to serve clients and solve real problems. Today, I'm focused on building AI solutions that help businesses automate their operations and deliver better customer experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My mission is to make advanced AI technology accessible to businesses in Rwanda, helping them compete globally while staying local.
                </p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center mb-8">My Journey</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
