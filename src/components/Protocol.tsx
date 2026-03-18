import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProtocolCards = [
    {
        step: "01",
        title: "Fast Deployment.",
        desc: "3-5 days setup, training, and integrations seamlessly baked into your existing pipeline.",
        Animation: () => (
            <div className="w-full h-40 relative flex items-center justify-center -mt-6">
                <div className="absolute w-[60%] h-[60%] border border-moss rounded-full animate-spin-slow opacity-20" />
                <div className="absolute w-[80%] h-[80%] border-t border-clay rounded-full animate-orbit opacity-50" />
                <div className="absolute w-[40%] h-[40%] bg-clay/5 blur-xl rounded-full" />
            </div>
        )
    },
    {
        step: "02",
        title: "Compliance & Security.",
        desc: "NCSA compliant, full client data ownership, and 24/7 monitoring.",
        Animation: () => (
            <div className="w-full h-40 relative flex items-center justify-center -mt-6">
                <div className="w-[80%] h-[80%] bg-grid opacity-10 absolute inset-0 m-auto" />
                <div className="absolute h-px w-[90%] bg-clay glow-line-green animate-orbit-reverse" />
                <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-moss to-transparent animate-float-y" />
            </div>
        )
    },
    {
        step: "03",
        title: "Scalable Growth.",
        desc: "Grow seamlessly from Starter to Pro plans with manageable usage overages. Integrates out of the box with Sheets, Airtable, and CRM endpoints.",
        Animation: () => (
            <div className="w-full h-40 relative flex items-center justify-center -mt-6">
                <svg className="w-full h-full text-clay max-w-[80%]" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
                    <path className="animate-[dash_3s_linear_infinite]"
                        strokeDasharray="200"
                        d="M 0 15 L 20 15 L 25 5 L 35 25 L 45 10 L 55 20 L 60 15 L 100 15" />
                </svg>
            </div>
        )
    }
];

const Protocol = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Pinning container
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                anticipatePin: 1
            });

            // Individual cards transition stack logic
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `top+=${i * 50}% top`,
                        end: `top+=${(i + 1) * 50}% top`,
                        scrub: 1,
                    }
                });

                if (i > 0) { // Entry for card 2 and 3
                    gsap.set(card, { y: 150, opacity: 0 });
                    tl.to(card, { y: 0, opacity: 1, duration: 1 });
                }
                if (i < cardsRef.current.length - 1) { // Exit for card 1 and 2
                    tl.to(card, { scale: 0.95, y: -40, filter: "blur(5px)", opacity: 0.5, duration: 1 }, "+=0.2");
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen bg-cream relative flex flex-col justify-center overflow-hidden">

            {/* Background Decor */}
            <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />
            <div className="absolute top-0 right-0 w-[400px] h-full pointer-events-none bg-gradient-to-l from-moss/5 to-transparent blur-3xl" />

            <style>{`
        @keyframes dash {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-4xl pt-24 md:pt-0">
                <div>
                    <span className="text-sm font-bold tracking-widest uppercase text-clay mb-4 block">The Protocol</span>
                </div>

                <div className="relative h-[60vh] md:h-[50vh] mt-8">
                    {ProtocolCards.map((card, i) => {
                        const Ani = card.Animation;
                        return (
                            <div
                                key={i}
                                ref={el => cardsRef.current[i] = el}
                                className="absolute inset-0 bg-white border border-moss/10 shadow-2xl rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-12 items-center lg:items-start"
                            >
                                {/* Left Col - Info */}
                                <div className="flex-1 flex flex-col justify-center h-full">
                                    <span className="font-mono text-clay text-5xl md:text-6xl font-black mb-6 block opacity-50">
                                        {card.step}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-sans font-bold text-moss mb-4 leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-moss/70 font-sans text-base md:text-lg leading-relaxed max-w-md">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* Right Col - Visual Motif */}
                                <div className="w-full md:w-1/3 h-full flex items-center justify-center">
                                    <Ani />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default Protocol;
