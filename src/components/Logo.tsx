import React from "react";
import { Zap } from "lucide-react";

const Logo = () => {
    return (
        <div className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: "#2E4036" }}>
                <Zap className="w-4 h-4 text-cream" style={{ color: "#F2F0E9" }} />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2E4036" }}>
                AitonLab
            </span>
        </div>
    );
};

export default Logo;
