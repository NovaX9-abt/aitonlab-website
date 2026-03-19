import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Zap, ShieldCheck, TrendingUp } from "lucide-react";

const ProtocolCards = [
    {
        step: "01",
        title: "Fast Deployment.",
        desc: "3–5 days setup, training, and integrations seamlessly baked into your existing pipeline.",
        Icon: Zap,
    },
    {
        step: "02",
        title: "Compliance & Security.",
        desc: "NCSA compliant, full client data ownership, and 24/7 monitoring.",
        Icon: ShieldCheck,
    },
    {
        step: "03",
        title: "Scalable Growth.",
        desc: "Grow seamlessly from Starter to Pro plans with manageable usage overages. Integrates out of the box with Sheets, Airtable, and CRM endpoints.",
        Icon: TrendingUp,
    },
];

const Protocol = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });
    }, []);

    return (
        <section className="bg-cream relative py-24 md:py-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-full pointer-events-none bg-gradient-to-l from-moss/5 to-transparent blur-3xl" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
                <div data-aos="fade-up">
                    <span className="text-sm font-bold tracking-widest uppercase text-clay mb-4 block">
                        The Protocol
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {ProtocolCards.map((card, i) => {
                        const CardIcon = card.Icon;
                        return (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                                className="bg-white border border-moss/10 shadow-lg rounded-3xl p-8 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-clay/10 flex items-center justify-center shrink-0">
                                        <CardIcon className="w-6 h-6 text-clay" />
                                    </div>
                                    <span className="font-mono text-clay text-3xl font-black opacity-40">
                                        {card.step}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-sans font-bold text-moss leading-tight">
                                    {card.title}
                                </h3>
                                <p className="text-moss/70 font-sans text-base leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Protocol;
