import { MessageSquare, Mail, Phone, ArrowRight, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Phone,
      title: "Voice AI Agent",
      price: "$249 – $349 setup",
      description: "An AI-powered voice agent that answers phone calls, understands customer requests, qualifies leads, and takes actions such as booking appointments or sending follow-ups. Designed for businesses that want to automate inbound calls while keeping a professional, human-like experience.",
      status: "available",
      buttonText: "Learn More",
      action: () => navigate("/services/voice-ai"),
      secondaryButton: {
        text: "Try Riley Demo",
        action: () => navigate("/riley-demo"),
      },
    },
    {
      icon: Mail,
      title: "Email & CRM Automation",
      price: "$199 – $349",
      description: "Automated email workflows and CRM pipelines that capture leads, store them securely, notify business owners, and follow up with customers automatically. Ideal for businesses that want better lead management without manual work.",
      status: "available",
      buttonText: "Learn More",
      action: () => navigate("/services/email-crm"),
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      price: "$99 – $249",
      description: "Advanced WhatsApp automation powered by AI, including conversational booking, customer support, reminders, and CRM integration. This service handles everything directly inside WhatsApp — from lead capture to appointment scheduling.",
      status: "coming-soon",
      buttonText: "Notify Me",
      action: () => navigate("/services/whatsapp"),
      note: "This service is currently being finalized and will be available very soon.",
    },
  ];

  const serviceComparison = [
    { need: "24/7 professional call handling", service: "Voice AI Agent", available: true },
    { need: "Lead capture & automated follow-ups", service: "Email & CRM Automation", available: true },
    { need: "WhatsApp messaging & booking", service: "WhatsApp Automation", available: false },
  ];

  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Automation Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional automation solutions that replace manual work and scale with your business.
          </p>
        </div>

        {/* Service Comparison Table */}
        <Card className="max-w-3xl mx-auto mb-16 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">Which Service Is Right For You?</CardTitle>
            <CardDescription>Find the perfect automation for your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Your Need</TableHead>
                  <TableHead>Recommended Service</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceComparison.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.need}</TableCell>
                    <TableCell className="text-primary">{item.service}</TableCell>
                    <TableCell className="text-right">
                      {item.available ? (
                        <Badge variant="default" className="bg-green-600 hover:bg-green-700">Available</Badge>
                      ) : (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-elegant transition-all duration-300 animate-slide-up ${service.status === "coming-soon" ? "opacity-90" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {service.status === "available" ? (
                    <Badge variant="default" className="bg-green-600 hover:bg-green-700">Available</Badge>
                  ) : (
                    <Badge variant="secondary">Coming Soon</Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-lg font-semibold text-primary">{service.price}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                {service.note && (
                  <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                    {service.note}
                  </p>
                )}
                <div className="space-y-2">
                  <Button 
                    variant={service.status === "coming-soon" ? "secondary" : "outline"}
                    className="w-full"
                    onClick={service.action}
                  >
                    {service.status === "coming-soon" && <Bell className="w-4 h-4 mr-2" />}
                    {service.buttonText}
                    {service.status === "available" && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                  {service.secondaryButton && (
                    <Button 
                      variant="hero" 
                      className="w-full"
                      onClick={service.secondaryButton.action}
                    >
                      {service.secondaryButton.text}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;