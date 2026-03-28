import { useEffect, useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Mic, Loader2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from "@supabase/supabase-js";
import RileyModal from "./RileyModal";

gsap.registerPlugin(ScrollTrigger);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const Contact = () => {
  const [rileyOpen, setRileyOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (colsRef.current) {
        gsap.fromTo(
          colsRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: colsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      business_name: formData.get("business_name") as string,
      email: formData.get("email") as string,
      whatsapp: formData.get("whatsapp") as string,
      service: formData.get("service") as string,
      details: formData.get("details") as string,
      consent: formData.get("consent") === "on",
    };

    console.log('Submitting:', data);

    try {
      if (!supabase) throw new Error("Supabase not configured");
      const { error } = await supabase
        .from("contact_submissions")
        .insert([data]);

      console.log('Supabase result:', error || 'Success');

      if (error) {
        console.error("Supabase Error:", error);
        alert("Error: " + error.message);
        throw error;
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <RileyModal isOpen={rileyOpen} onClose={() => setRileyOpen(false)} />

      <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden bg-cream">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-30 bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase text-clay block mb-4">Get in Touch</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold font-sans text-moss mb-5"
            >
              Book Your{" "}
              <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">
                Free Demo
              </span>
            </h2>
            <p className="text-sm md:text-lg text-moss/70 font-sans">
              Tell us about your business and we'll show you how AI agents can automate your operations.
            </p>
          </div>

          <div ref={colsRef} className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">

            {/* ── Left column ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact info */}
              {[
                { icon: Mail, label: "Email", value: "contact@aitonlab.rw" },
                { icon: MapPin, label: "Location", value: "Kigali, Rwanda" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 rounded-[1rem] flex items-center justify-center shrink-0 bg-moss text-cream shadow-md"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-bold text-clay uppercase tracking-wider mb-1 font-mono">{item.label}</p>
                      <p className="text-base font-bold text-moss font-sans">{item.value}</p>
                    </div>
                  </div>
                );
              })}

              <div className="h-px w-full bg-gradient-to-r from-transparent via-moss/10 to-transparent my-8 opacity-50" />

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/250793581847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-moss/10 hover:border-[#25D366]/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-[1rem] flex items-center justify-center shrink-0 bg-[#25D366] shadow-md group-hover:scale-110 transition-transform duration-300 text-white mt-1"
                >
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-moss font-sans flex flex-col md:flex-row md:items-center gap-1 mb-1.5">
                    WhatsApp Automation:
                    <span className="text-sm font-bold text-moss/80 font-mono tracking-wide">+250 793 581 847</span>
                  </h4>
                  <p className="text-xs text-moss/70 font-sans leading-relaxed mt-1">Chat with our agent gathers your needs – Books your consultation</p>
                </div>
              </a>

              {/* Riley CTA */}
              <button
                id="contact-riley-cta"
                onClick={() => setRileyOpen(true)}
                className="w-full flex items-start gap-4 bg-white rounded-2xl p-5 border border-moss/10 hover:border-clay/30 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg text-left"
              >
                <div
                  className="w-12 h-12 rounded-[1rem] flex items-center justify-center shrink-0 bg-clay text-cream shadow-md group-hover:scale-110 transition-transform duration-300 mt-1"
                >
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-moss font-sans flex flex-col md:flex-row md:items-center gap-1 mb-1.5">
                    Voice AI (Riley):
                    <span className="text-[11px] font-mono font-bold text-clay uppercase tracking-wide bg-clay/10 px-2 py-0.5 rounded-md border border-clay/10 w-fit">Live AI Voice Demo</span>
                  </h4>
                  <p className="text-xs text-moss/70 font-sans leading-relaxed mt-1">Riley gathers your business needs – Schedules a consultation – 2-4 min</p>
                </div>
              </button>
            </div>

            {/* ── Right: Form ── */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 space-y-6 shadow-xl border border-moss/10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-clay uppercase tracking-wider mb-2 font-mono">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jean Mutoni"
                    className="w-full bg-[#FAF9F5] border border-moss/10 rounded-xl px-4 py-3.5 text-sm placeholder:text-moss/40 text-moss focus:outline-none focus:border-clay/50 focus:ring-1 focus:ring-clay/30 transition-all font-sans font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-clay uppercase tracking-wider mb-2 font-mono">Business Name</label>
                  <input
                    type="text"
                    name="business_name"
                    placeholder="Your Company"
                    className="w-full bg-[#FAF9F5] border border-moss/10 rounded-xl px-4 py-3.5 text-sm placeholder:text-moss/40 text-moss focus:outline-none focus:border-clay/50 focus:ring-1 focus:ring-clay/30 transition-all font-sans font-medium"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-clay uppercase tracking-wider mb-2 font-mono">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.rw"
                    className="w-full bg-[#FAF9F5] border border-moss/10 rounded-xl px-4 py-3.5 text-sm placeholder:text-moss/40 text-moss focus:outline-none focus:border-clay/50 focus:ring-1 focus:ring-clay/30 transition-all font-sans font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-clay uppercase tracking-wider mb-2 font-mono">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="+250 7XX XXX XXX"
                    className="w-full bg-[#FAF9F5] border border-moss/10 rounded-xl px-4 py-3.5 text-sm placeholder:text-moss/40 text-moss focus:outline-none focus:border-clay/50 focus:ring-1 focus:ring-clay/30 transition-all font-sans font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-clay uppercase tracking-wider mb-2 font-mono">Service Interested In</label>
                <select name="service" className="w-full bg-[#FAF9F5] border border-moss/10 rounded-xl px-4 py-3.5 text-sm text-moss/70 focus:outline-none focus:border-clay/50 focus:ring-1 focus:ring-clay/30 transition-all appearance-none font-sans font-medium bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyRTQwMzYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-[length:16px] bg-[position:right_1rem_center] bg-no-repeat pr-10">
                  <option value="">Select a service…</option>
                  <option value="Voice AI Agent">Voice AI Agent</option>
                  <option value="WhatsApp Automation">WhatsApp Automation</option>
                  <option value="Smart Lead Assistant">Smart Lead Assistant</option>
                  <option value="Full Package">Full Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-clay uppercase tracking-wider mb-2 font-mono">Tell Us About Your Business</label>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="How many calls do you receive per day? What's your biggest challenge with customer follow-up?"
                  className="w-full bg-[#FAF9F5] border border-moss/10 rounded-xl px-4 py-3.5 text-sm placeholder:text-moss/40 text-moss focus:outline-none focus:border-clay/50 focus:ring-1 focus:ring-clay/30 transition-all resize-none font-sans font-medium"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 flex-shrink-0 w-4 h-4 rounded border-moss/20 text-clay focus:ring-clay/50"
                />
                <label htmlFor="consent" className="text-xs text-moss/70 font-sans leading-relaxed cursor-pointer select-none">
                  I agree to data processing per NCSA Rwanda regulations. My information will only be used by AitonLab for consultation purposes.
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-700 text-sm rounded-xl font-medium border border-green-200">
                  Request submitted successfully! We will contact you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-700 text-sm rounded-xl font-medium border border-red-200">
                  An error occurred. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className="w-full flex items-center justify-center gap-2.5 text-cream font-semibold py-4 rounded-[2rem] text-base bg-clay hover:bg-[#A94727] transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl disabled:opacity-70 disabled:hover:translate-y-0"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send & Book Free Demo
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-moss/50 font-mono">
                We respond within 24 hours · contact@aitonlab.rw · No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
