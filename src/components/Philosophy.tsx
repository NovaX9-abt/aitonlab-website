import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Philosophy = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const smallTextRef = useRef<HTMLParagraphElement>(null);
    const largeTextRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Small text split
            const smallSplit = new SplitText(smallTextRef.current, { type: "words,chars" });
            gsap.from(smallSplit.words, {
                opacity: 0,
                y: 10,
                duration: 0.8,
                stagger: 0.04,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            });

            // Large text split
            const largeSplit = new SplitText(largeTextRef.current, { type: "words" });
            gsap.from(largeSplit.words, {
                opacity: 0,
                y: 20,
                duration: 1.2,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: largeTextRef.current,
                    start: "top 80%",
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] flex flex-col justify-center py-32 bg-charcoal overflow-hidden"
        >
            {/* Background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/80" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <p
                    ref={smallTextRef}
                    className="text-cream/50 font-sans text-lg md:text-xl md:w-2/3 mb-10 tracking-widest uppercase font-semibold leading-relaxed"
                >
                    Most AI tools focus on: generic chatbots and basic automation.
                </p>

                <h2
                    ref={largeTextRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-[Cormorant_Garamond] italic text-cream leading-[1.1] max-w-[90%]"
                >
                    We focus on: <span className="text-clay not-italic font-sans font-bold tracking-tight">autonomous agents</span> tailored for Rwandan SMEs with local RW compliance, full data ownership, and continuous monitoring.
                </h2>
            </div>
        </section>
    );
};

export default Philosophy;
