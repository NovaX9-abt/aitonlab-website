import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroAbstract from "@/assets/hero-abstract.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-glow opacity-60" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(270 70% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(270 70% 60% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">Available for Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">AI Agents That</span>
              <br />
              <span className="text-foreground">Work </span>
              <span className="text-gradient">While You</span>
              <br />
              <span className="text-gradient">Sleep</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              AitonLab builds custom AI voice and WhatsApp agents that handle customer calls, capture leads, and book appointments — 24/7.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate("/riley-demo")}
                className="group"
              >
                Book a Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/5"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right hero image */}
          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
              <img
                src={heroAbstract}
                alt="Abstract AI visualization"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            {/* Decorative line */}
            <div className="absolute top-1/2 -left-20 w-40 h-px bg-gradient-to-r from-transparent to-primary/30 -rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
