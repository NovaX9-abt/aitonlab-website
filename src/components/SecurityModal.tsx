import { useEffect } from "react";
import { X, Shield, Lock, Database, Server, Eye, AlertCircle } from "lucide-react";

interface SecurityModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const principles = [
    {
        icon: Lock,
        title: "Secure Communications",
        body: "All system access and data exchanges are protected using encrypted connections (SSL / HTTPS).",
    },
    {
        icon: Eye,
        title: "Restricted Access",
        body: "Only authorized AitonLab engineers involved in your project can access your systems, and only for operational support and maintenance purposes.",
    },
    {
        icon: Database,
        title: "Client Data Isolation",
        body: "Each client environment and workflow is logically separated. Data is never shared or mixed between customers.",
    },
    {
        icon: Shield,
        title: "Data Ownership",
        body: "All customer data remains the property of the client. AitonLab does not reuse, resell or exploit customer data for any other purpose.",
    },
    {
        icon: Server,
        title: "Infrastructure Security",
        body: "Our infrastructure is hosted on secured environments with access control, monitoring and regular system updates.",
    },
    {
        icon: AlertCircle,
        title: "Operational Responsibility",
        body: "We continuously monitor our systems and workflows to prevent unauthorized access, data leaks and service disruption.",
    },
];

const SecurityModal = ({ isOpen, onClose }: SecurityModalProps) => {
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-md" />
            <div
                className="relative bg-cream rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-moss/10 shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-cream/95 backdrop-blur-sm border-b border-moss/10 px-8 py-5 flex items-center justify-between rounded-t-2xl z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-moss shadow-sm">
                            <Shield className="w-4 h-4 text-cream" />
                        </div>
                        <h2 className="text-lg font-bold font-sans text-moss">
                            Security & Data Protection
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
                        At AitonLab, data security and privacy are treated as a core operational priority.
                        We apply security best practices aligned with national cybersecurity guidelines in Rwanda
                        and international industry standards.
                    </p>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-clay mb-5 font-mono">
                            Our Security Approach
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {principles.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <div key={i} className="bg-white rounded-xl p-5 border border-moss/10 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-charcoal/5 border border-moss/5"
                                            >
                                                <Icon className="w-4 h-4 text-clay" />
                                            </div>
                                            <h4 className="text-sm font-bold text-moss font-sans leading-tight">{p.title}</h4>
                                        </div>
                                        <p className="text-xs text-moss/70 leading-relaxed font-sans">{p.body}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-charcoal/5 rounded-xl p-5 border border-moss/5 text-center mt-8">
                        <p className="text-sm text-moss/70 leading-relaxed font-sans">
                            For any security-related questions, clients can contact us at{" "}
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

export default SecurityModal;
