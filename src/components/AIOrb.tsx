import React, { useEffect, useRef } from "react";

const AIOrb: React.FC = () => {
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const orb = orbRef.current;
        if (!orb) return;

        let mouseX = 0, mouseY = 0;
        let cx = 0, cy = 0;
        let raf: number;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = orb.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
        };

        const animate = () => {
            cx += (mouseX - cx) * 0.06;
            cy += (mouseY - cy) * 0.06;
            orb.style.transform = `translate(-50%, -50%) rotateY(${cx * 18}deg) rotateX(${-cy * 18}deg)`;
            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        raf = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
            {/* Glow backdrop */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 520,
                    height: 520,
                    background: "radial-gradient(ellipse at center, rgba(46,64,54,0.3) 0%, rgba(204,88,51,0.15) 50%, transparent 75%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    filter: "blur(40px)",
                    animation: "orb-pulse 5s ease-in-out infinite",
                }}
            />

            {/* Outer slow-spin ring */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 440,
                    height: 440,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid rgba(46,64,54,0.2)",
                    animation: "spin-slow 30s linear infinite",
                }}
            />

            {/* Middle ring */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 360,
                    height: 360,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    border: "1px solid rgba(204,88,51,0.2)",
                    animation: "spin-slow 20s linear infinite reverse",
                }}
            />

            {/* Inner orbit ring */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 280,
                    height: 280,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(30deg)",
                    border: "1.5px solid rgba(46,64,54,0.4)",
                    animation: "spin-slow 14s linear infinite",
                }}
            />

            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                        width: 280,
                        height: 280,
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                        animation: `spin-slow ${10 + i * 2}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
                    }}
                >
                    <div
                        className="absolute top-0 left-1/2 rounded-full"
                        style={{
                            width: i % 2 === 0 ? 6 : 4,
                            height: i % 2 === 0 ? 6 : 4,
                            marginLeft: i % 2 === 0 ? -3 : -2,
                            marginTop: i % 2 === 0 ? -3 : -2,
                            background: i % 2 === 0
                                ? "#8FA89A"
                                : "#D67B5A",
                            boxShadow: i % 2 === 0
                                ? "0 0 10px #8FA89A, 0 0 20px rgba(46,64,54,0.6)"
                                : "0 0 8px #D67B5A, 0 0 16px rgba(204,88,51,0.6)",
                        }}
                    />
                </div>
            ))}

            {/* 3D Core Orb — perspective wrapper */}
            <div
                className="absolute"
                style={{
                    width: 220,
                    height: 220,
                    top: "50%",
                    left: "50%",
                    perspective: "800px",
                    perspectiveOrigin: "50% 50%",
                    animation: "float-y 7s ease-in-out infinite",
                }}
            >
                <div
                    ref={orbRef}
                    style={{
                        position: "absolute",
                        width: 220,
                        height: 220,
                        top: "50%",
                        left: "50%",
                        transformStyle: "preserve-3d",
                        transform: "translate(-50%, -50%)",
                        willChange: "transform",
                    }}
                >
                    {/* Core sphere */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            background: "radial-gradient(circle at 35% 35%, #8FA89A, #2E4036 45%, #1A241F 80%, #0F1613)",
                            boxShadow: `
                0 0 60px rgba(46,64,54,0.6),
                0 0 120px rgba(46,64,54,0.3),
                inset -20px -20px 40px rgba(15,22,19,0.8),
                inset 10px 10px 30px rgba(143,168,154,0.3)
              `,
                        }}
                    />

                    {/* Specular highlight */}
                    <div
                        style={{
                            position: "absolute",
                            top: "14%",
                            left: "18%",
                            width: "38%",
                            height: "28%",
                            borderRadius: "50%",
                            background: "radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.45), transparent 70%)",
                            filter: "blur(4px)",
                        }}
                    />

                    {/* Inner glow ring on sphere */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "12px",
                            borderRadius: "50%",
                            border: "1px solid rgba(143,168,154,0.3)",
                            boxShadow: "inset 0 0 30px rgba(46,64,54,0.4)",
                        }}
                    />

                    {/* Green accent band */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50%",
                            background: "conic-gradient(from 200deg, transparent 0deg, rgba(204,88,51,0.3) 60deg, transparent 120deg)",
                            mixBlendMode: "screen",
                        }}
                    />

                    {/* Face ring (equatorial circle, tilted) */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "100%",
                            height: "100%",
                            marginTop: "-50%",
                            marginLeft: "-50%",
                            borderRadius: "50%",
                            border: "2px solid rgba(143,168,154,0.4)",
                            transform: "rotateX(75deg)",
                            animation: "spin-slow 8s linear infinite",
                        }}
                    />
                </div>
            </div>

            {/* Floating data label cards */}
            {[
                { top: "8%", left: "5%", label: "AI Calls", value: "24/7", color: "moss" },
                { top: "12%", right: "2%", label: "WhatsApp", value: "↑ 98%", color: "clay" },
                { bottom: "14%", left: "2%", label: "Leads", value: "Auto", color: "clay" },
                { bottom: "8%", right: "5%", label: "Uptime", value: "99.9%", color: "moss" },
            ].map((card, i) => (
                <div
                    key={i}
                    className="absolute bg-white/5 backdrop-blur-md rounded-xl px-3 py-2 pointer-events-none"
                    style={{
                        top: card.top,
                        left: card.left,
                        right: (card as any).right,
                        bottom: card.bottom,
                        animation: `float-y ${5 + i * 0.8}s ease-in-out infinite`,
                        animationDelay: `${i * 0.6}s`,
                        border: `1px solid ${card.color === "moss" ? "rgba(46,64,54,0.4)" : "rgba(204,88,51,0.4)"}`,
                        boxShadow: `0 4px 20px ${card.color === "moss" ? "rgba(46,64,54,0.2)" : "rgba(204,88,51,0.2)"}`,
                    }}
                >
                    <p className="text-xs text-cream/70 mb-0.5">{card.label}</p>
                    <p
                        className="text-sm font-bold font-mono"
                        style={{ color: card.color === "moss" ? "#8FA89A" : "#D67B5A" }}
                    >
                        {card.value}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AIOrb;
