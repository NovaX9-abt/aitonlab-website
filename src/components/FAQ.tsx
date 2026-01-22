import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who are AitonLab's solutions designed for?",
    answer: `Our solutions are built for service-based businesses in Kigali that handle regular customer inquiries — such as hotels, clinics, real estate agencies, schools, and professional service firms.

We do not target micro-businesses without consistent customer request volumes.`
  },
  {
    question: "How much does an AitonLab AI Agent cost?",
    answer: `Each solution includes:
• a one-time setup fee (from $199 to $399 depending on complexity)
• a monthly service plan (from $49 to $129 per month depending on usage)

Final pricing depends on conversation volume, integrations, and languages.
There are no hidden fees.`
  },
  {
    question: "What does the monthly service include?",
    answer: `The monthly service covers:
• hosting infrastructure
• AI usage costs
• Rwanda local phone number (for Voice AI Agents)
• monitoring and maintenance
• continuous improvements`
  },
  {
    question: "How long does setup take?",
    answer: `Most projects go live within 7 to 14 days after project confirmation.
We configure, test, and deliver a fully operational AI agent.`
  },
  {
    question: "In which languages do your agents operate?",
    answer: `Voice AI Agents currently operate in English and French.
WhatsApp and Smart Lead Agents can be configured in English, French, and Kinyarwanda based on business needs.`
  },
  {
    question: "Will I lose control of my customer conversations?",
    answer: `No.
You maintain full visibility over conversations and activity.
The AI agent works for your business — not instead of it.`
  },
  {
    question: "Can the agent connect to my existing tools?",
    answer: `Yes.
We connect agents to WhatsApp Business, website forms, Google Sheets, and booking calendars.
More advanced integrations can be added upon request.`
  },
  {
    question: "What happens if my conversation volume grows?",
    answer: `Our solutions are fully scalable.
You can upgrade your plan at any time without service interruption.`
  },
  {
    question: "Are my business data and conversations secure?",
    answer: `Yes.
All systems operate under SSL encryption with restricted access controls.
We do not sell, share, or reuse client data under any circumstance.`
  },
  {
    question: "How do I get started with AitonLab?",
    answer: `You can:
• contact our WhatsApp bot at +250 793 581 847
• fill out the contact form at the bottom of the homepage
• or email us directly at contact@aitonlab.rw

You will be contacted shortly to discuss your business needs.`
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
