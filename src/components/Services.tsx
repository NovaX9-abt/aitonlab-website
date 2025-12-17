import { MessageSquare, Mail, Calendar, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp Automations",
      description: "Automated replies, lead capture, menus, funnels, and follow-up systems directly on WhatsApp. Works 24/7. No missed leads again.",
      buttonText: "Learn More",
      action: () => navigate("/services/whatsapp"),
    },
    {
      icon: Calendar,
      title: "Booking Systems",
      description: "Let your clients book appointments through WhatsApp or forms. Automatically sync to Google Calendar and send confirmations.",
      buttonText: "Learn More",
      action: () => navigate("/services/booking"),
    },
    {
      icon: Phone,
      title: "Voice AI Agents (Riley)",
      description: "A professional voice agent that answers calls 24/7 in English or French. Books appointments, captures leads, and offers flexible usage packs — pay only for the call traffic you need.",
      buttonText: "Try Riley Demo",
      action: () => navigate("/riley-demo"),
    },
    {
      icon: Mail,
      title: "Email & CRM Automation",
      description: "Automatically sort emails, send instant alerts, follow up leads, and organize your customer data with smart Google Sheets or CRM integrations.",
      buttonText: "Learn More",
      action: () => navigate("/services/email-crm"),
    },
  ];

  const serviceComparison = [
    { need: "Instant replies on WhatsApp", service: "WhatsApp Automation" },
    { need: "Customers booking appointments", service: "Booking System" },
    { need: "High call volume / missed calls", service: "Voice AI Agent Setup" },
    { need: "Organizing leads & emails", service: "Email & CRM Automation" },
  ];

  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Automation Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the automation that fits your business needs. Professional solutions for companies worldwide.
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceComparison.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.need}</TableCell>
                    <TableCell className="text-primary">{item.service}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={service.action}
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;