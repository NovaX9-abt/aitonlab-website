import { useEffect } from "react";
import { X, FileText } from "lucide-react";

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const terms = [
    {
        title: "1. Data Ownership",
        body: "Clients own all data; AitonLab processes per NCSA Law n°058/2021. No sharing without consent.",
    },
    {
        title: "2. Compliance",
        body: <>NCSA compliant, continuous monitoring. See <a href="https://ncsa.gov.rw/" target="_blank" rel="noopener noreferrer" className="text-clay hover:underline">https://ncsa.gov.rw/</a> for details.</>,
    },
    {
        title: "3. No Warranty",
        body: "Services as-is; no liability for downtime or data loss beyond refund policy.",
    },
    {
        title: "4. Refund",
        body: "As per pricing policy (service fee only if KPIs not met).",
    },
    {
        title: "5. Governing Law",
        body: "Rwanda jurisdiction.",
    },
];

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (isOpen) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
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
            <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-md" />
            <div
                className="relative bg-cream rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-scale-in border border-moss/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-cream/95 backdrop-blur-sm border-b border-moss/10 px-8 py-5 flex items-center justify-between rounded-t-2xl z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-moss">
                            <FileText className="w-4 h-4 text-cream" />
                        </div>
                        <h2 className="text-lg font-bold font-sans text-moss">
                            Terms of Service
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-moss/10 hover:bg-moss/5 transition-colors"
                    >
                        <X className="w-4 h-4 text-moss" />
                    </button>
                </div>

                <div className="px-8 py-7 space-y-8">
                    <p className="text-sm text-moss/70 leading-relaxed font-sans">
                        By doing business with AitonLab, you agree to the following foundational rules governing service delivery, compliance, and liabilities.
                    </p>

                    <div className="space-y-4">
                        {terms.map((t, i) => (
                            <div key={i} className="bg-white rounded-xl p-5 border border-moss/10 shadow-sm">
                                <h4 className="text-sm font-bold text-moss mb-2 font-sans">{t.title}</h4>
                                <p className="text-sm text-moss/70 leading-relaxed font-sans">{t.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-charcoal/5 rounded-xl p-5 border border-moss/5 text-center">
                        <p className="text-sm text-moss/70 leading-relaxed font-sans">
                            For any legal-related questions, clients can contact us at{" "}
                            <a
                                href="mailto:contact@aitonlab.rw"
                                className="text-clay hover:opacity-80 transition-opacity font-bold"
                            >
                                contact@aitonlab.rw
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
