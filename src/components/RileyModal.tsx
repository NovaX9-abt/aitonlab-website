import { useEffect, useRef } from "react";
import { X, Mic, MicOff, PhoneOff, Loader2 } from "lucide-react";
import gsap from "gsap";
import { useRileyVoice, type RileyState } from "@/hooks/useRileyVoice";

interface RileyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TOOL_LABELS: Record<string, string> = {
    check_calendar_availability: "Checking calendar...",
    book_meeting: "Booking meeting...",
    save_lead: "Saving your info...",
};

const RileyModal = ({ isOpen, onClose }: RileyModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const transcriptEndRef = useRef<HTMLDivElement>(null);
    const {
        state,
        transcripts,
        error,
        formattedTime,
        isMuted,
        toolActivity,
        startSession,
        endSession,
        toggleMute,
    } = useRileyVoice();

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
            if (modalRef.current) {
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
                );
            }
        }
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Auto-scroll transcripts
    useEffect(() => {
        transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [transcripts]);

    const handleClose = () => {
        if (state !== "idle" && state !== "ended" && state !== "error") {
            endSession();
        }
        onClose();
    };

    if (!isOpen) return null;

    const isActive = state !== "idle" && state !== "ended" && state !== "error";

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            onClick={handleClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <div
                ref={modalRef}
                className="relative bg-charcoal rounded-[2rem] p-6 sm:p-8 max-w-md w-full max-h-[90vh] flex flex-col"
                style={{
                    border: "1px solid rgba(204,88,51,0.2)",
                    boxShadow: "0 20px 80px rgba(204,88,51,0.15)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg border border-cream/10 hover:bg-cream/5 transition-colors z-10"
                >
                    <X className="w-4 h-4 text-cream/70" />
                </button>

                {/* Idle / Start screen */}
                {state === "idle" && (
                    <div className="flex flex-col items-center text-center py-4">
                        <VoiceOrb state="idle" />
                        <h2 className="text-2xl font-bold font-sans text-cream mt-6">
                            Talk to <span className="text-clay">Riley</span>
                            <span className="block text-lg font-[Cormorant_Garamond] italic text-cream/70 mt-1">
                                AI Voice Assistant
                            </span>
                        </h2>
                        <p className="text-sm text-cream/80 leading-relaxed font-sans mt-4 px-2">
                            Riley can tell you about our services, answer your questions,
                            and book a consultation with the AitonLab team.
                        </p>
                        <button
                            onClick={startSession}
                            className="mt-6 bg-clay hover:bg-[#A94727] text-cream font-semibold px-8 py-4 rounded-[2rem] text-base transition-transform duration-300 hover:scale-[1.03] flex items-center gap-2.5"
                            style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
                        >
                            <Mic className="w-5 h-5" />
                            Start Conversation
                        </button>
                        <p className="text-[11px] text-cream/50 font-mono mt-4">
                            Avg. conversation: 2–4 min &middot; Handled by AI
                        </p>
                    </div>
                )}

                {/* Connecting */}
                {state === "connecting" && (
                    <div className="flex flex-col items-center text-center py-8">
                        <VoiceOrb state="connecting" />
                        <p className="text-cream/80 mt-6 font-sans">Connecting to Riley...</p>
                    </div>
                )}

                {/* Active conversation */}
                {isActive && (
                    <div className="flex flex-col flex-1 min-h-0">
                        {/* Visualizer + status */}
                        <div className="flex flex-col items-center pt-2 pb-4">
                            <VoiceOrb state={state} />
                            <StatusLabel state={state} toolActivity={toolActivity} />
                        </div>

                        {/* Transcript area */}
                        <div className="flex-1 min-h-0 overflow-y-auto mb-4 space-y-3 px-1 max-h-[35vh] scrollbar-thin">
                            {transcripts.map((t, i) => (
                                <div
                                    key={i}
                                    className={`flex ${t.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                                            t.role === "user"
                                                ? "bg-moss/30 text-cream/90 rounded-br-md"
                                                : "bg-clay/15 text-cream/90 rounded-bl-md"
                                        }`}
                                    >
                                        {t.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={transcriptEndRef} />
                        </div>

                        {/* Bottom controls */}
                        <div className="flex items-center justify-between pt-3 border-t border-cream/10">
                            <button
                                onClick={toggleMute}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                                    isMuted
                                        ? "bg-red-500/20 border border-red-500/40"
                                        : "bg-cream/5 border border-cream/10 hover:bg-cream/10"
                                }`}
                            >
                                {isMuted ? (
                                    <MicOff className="w-5 h-5 text-red-400" />
                                ) : (
                                    <Mic className="w-5 h-5 text-cream/70" />
                                )}
                            </button>

                            <span className="text-sm font-mono text-cream/50">{formattedTime}</span>

                            <button
                                onClick={() => {
                                    endSession();
                                }}
                                className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center hover:bg-red-500/30 transition-colors"
                            >
                                <PhoneOff className="w-5 h-5 text-red-400" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Ended */}
                {state === "ended" && (
                    <div className="flex flex-col items-center text-center py-6">
                        <div className="w-16 h-16 rounded-full bg-moss/20 flex items-center justify-center mb-4">
                            <Mic className="w-7 h-7 text-moss" />
                        </div>
                        <h3 className="text-xl font-bold text-cream font-sans">
                            Thanks for talking with Riley!
                        </h3>
                        <p className="text-sm text-cream/70 mt-2 font-sans">
                            The AitonLab team will follow up with you soon.
                        </p>
                        {transcripts.length > 0 && (
                            <div className="mt-4 w-full max-h-[30vh] overflow-y-auto space-y-2 px-1">
                                {transcripts.map((t, i) => (
                                    <div
                                        key={i}
                                        className={`flex ${t.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                                                t.role === "user"
                                                    ? "bg-moss/20 text-cream/70 rounded-br-md"
                                                    : "bg-clay/10 text-cream/70 rounded-bl-md"
                                            }`}
                                        >
                                            {t.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={handleClose}
                            className="mt-6 px-6 py-3 rounded-[2rem] border border-cream/20 text-cream/80 hover:bg-cream/5 transition-colors text-sm font-sans"
                        >
                            Close
                        </button>
                    </div>
                )}

                {/* Error */}
                {state === "error" && (
                    <div className="flex flex-col items-center text-center py-6">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                            <X className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold text-cream font-sans">Something went wrong</h3>
                        <p className="text-sm text-red-400/80 mt-2 font-sans">{error}</p>
                        <button
                            onClick={startSession}
                            className="mt-6 bg-clay hover:bg-[#A94727] text-cream font-semibold px-6 py-3 rounded-[2rem] text-sm transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Animated Voice Orb ---

function VoiceOrb({ state }: { state: RileyState }) {
    return (
        <div className="relative">
            {/* Outer pulse ring */}
            {(state === "listening" || state === "speaking") && (
                <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                        background:
                            state === "speaking"
                                ? "rgba(204,88,51,0.25)"
                                : "rgba(46,64,54,0.25)",
                        animationDuration: state === "speaking" ? "1.2s" : "2.5s",
                    }}
                />
            )}
            {state === "connecting" && (
                <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: "rgba(204,88,51,0.15)", animationDuration: "1.5s" }}
                />
            )}

            {/* Main orb */}
            <div
                className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    state === "speaking"
                        ? "bg-clay shadow-lg shadow-clay/30"
                        : state === "listening"
                        ? "bg-moss shadow-lg shadow-moss/20"
                        : state === "connecting"
                        ? "bg-clay/60"
                        : state === "processing_tool"
                        ? "bg-moss/80"
                        : "bg-clay shadow-md"
                }`}
            >
                {state === "connecting" || state === "processing_tool" ? (
                    <Loader2 className="w-8 h-8 text-cream animate-spin" />
                ) : (
                    <Mic className="w-8 h-8 text-cream" />
                )}
            </div>
        </div>
    );
}

// --- Status Label ---

function StatusLabel({
    state,
    toolActivity,
}: {
    state: RileyState;
    toolActivity: { name: string; status: string } | null;
}) {
    let text = "";

    if (state === "processing_tool" && toolActivity) {
        text = TOOL_LABELS[toolActivity.name] || "Processing...";
    } else if (state === "speaking") {
        text = "Riley is speaking...";
    } else if (state === "listening") {
        text = "Listening...";
    }

    if (!text) return null;

    return (
        <p className="text-sm text-cream/60 mt-3 font-sans animate-pulse">{text}</p>
    );
}

export default RileyModal;
