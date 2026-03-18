import { useEffect, useRef } from "react";
import { X, Phone, Clock, Mic } from "lucide-react";
import gsap from "gsap";

interface RileyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RileyModal = ({ isOpen, onClose }: RileyModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (isOpen) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";

            // GSAP fade-in
            if (modalRef.current) {
                gsap.fromTo(modalRef.current,
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
                );
            }
        }
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative bg-charcoal rounded-[2rem] p-8 max-w-md w-full"
                style={{ border: "1px solid rgba(204,88,51,0.2)", boxShadow: "0 20px 80px rgba(204,88,51,0.15)" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg border border-cream/10 hover:bg-cream/5 transition-colors"
                >
                    <X className="w-4 h-4 text-cream/70" />
                </button>

                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full animate-ping"
                            style={{ background: "rgba(204,88,51,0.2)", animationDuration: "2s" }} />
                        <div
                            className="relative w-16 h-16 rounded-full flex items-center justify-center bg-clay shadow-md"
                        >
                            <Mic className="w-7 h-7 text-cream" />
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold font-sans text-cream">
                        Talk to <span className="text-clay">Riley</span>
                        <span className="block text-lg font-[Cormorant_Garamond] italic text-cream/70 mt-1">AI Voice Assistant Demo</span>
                    </h2>
                    <p className="text-sm text-cream/80 leading-relaxed font-sans">
                        Riley is our AI voice assistant designed to handle real business inquiries. He gathers your business needs and helps schedule a consultation call with an AitonLab consultant.
                    </p>

                    <div className="bg-charcoal/50 rounded-xl p-4 text-left border border-clay/10 space-y-2 mt-4 mb-6">
                        <div className="flex items-center gap-2 text-xs text-cream/70 font-sans">
                            <Clock className="w-3.5 h-3.5 text-clay shrink-0" />
                            Average call duration: <span className="text-cream font-semibold">2–4 minutes</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-cream/70 font-sans mt-2">
                            <Phone className="w-3.5 h-3.5 text-clay shrink-0 mt-0.5" />
                            <span>This line is reserved for genuine business interest only. Calls without real intent may not be processed.</span>
                        </div>
                    </div>

                    {/* Call CTA */}
                    <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        id="riley-start-call"
                        className="w-full flex items-center justify-center gap-2.5 text-cream font-semibold py-4 rounded-[2rem] text-base bg-clay hover:bg-[#A94727] transition-all duration-300 hover:scale-[1.03] shadow-md"
                        style={{ textDecoration: "none", transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", cursor: "not-allowed" }}
                    >
                        <Phone className="w-4 h-4" />
                        Start Call — +250 XXX XXX XXX
                    </a>

                    <p className="text-[11px] text-cream/50 font-mono mt-4 leading-relaxed">
                        *(Number Pending) Riley uses a dedicated RW line, separate from our WhatsApp line (+250 793 581 847). Handled by AI.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RileyModal;
