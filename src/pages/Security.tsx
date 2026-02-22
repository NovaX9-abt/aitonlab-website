import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Users, Database, Server, Eye } from "lucide-react";

const Security = () => {
  const principles = [
    { icon: Lock, title: "Secure communications", description: "All system access and data exchanges are protected using encrypted connections (SSL / HTTPS)." },
    { icon: Users, title: "Restricted access", description: "Only authorized AitonLab engineers involved in your project can access your systems, and only for operational support and maintenance purposes." },
    { icon: Database, title: "Client data isolation", description: "Each client environment and workflow is logically separated. Data is never shared or mixed between customers." },
    { icon: Shield, title: "Data ownership", description: "All customer data remains the property of the client. AitonLab does not reuse, resell or exploit customer data for any other purpose." },
    { icon: Server, title: "Infrastructure security", description: "Our infrastructure is hosted on secured environments with access control, monitoring and regular system updates." },
    { icon: Eye, title: "Operational responsibility", description: "We continuously monitor our systems and workflows to prevent unauthorized access, data leaks and service disruption." },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security & Data Protection</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At AitonLab, data security and privacy are treated as a core operational priority.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We apply security best practices aligned with national cybersecurity guidelines in Rwanda and international industry standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">Our security approach is based on the following principles:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center glass rounded-2xl py-12 px-8">
          <p className="text-muted-foreground mb-4">For any security-related questions, clients can contact:</p>
          <a href="mailto:contact@aitonlab.rw" className="text-primary font-medium hover:underline text-lg">contact@aitonlab.rw</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
