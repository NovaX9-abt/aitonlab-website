import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

// ─── Placeholder card data ───────────────────────────────────────────────────
const CARD_DATA = [
    { emoji: "💅", industry: "Beauty & Salons", location: "Kigali, Rwanda", colors: ["#2d1b4e", "#1a0d3a"] },
    { emoji: "🏥", industry: "Clinics & Health", location: "Rwanda", colors: ["#0d2218", "#061810"] },
    { emoji: "🏨", industry: "Hotels & Hospitality", location: "Rwanda", colors: ["#2d1b4e", "#1e0f3a"] },
    { emoji: "🏢", industry: "Real Estate", location: "Kigali, Rwanda", colors: ["#0a1f15", "#061410"] },
    { emoji: "📚", industry: "Schools & Education", location: "Rwanda", colors: ["#221540", "#160d30"] },
];

// ─── Code-text generator (for ASCII overlay) ─────────────────────────────────
function generateCode(width: number, height: number): string {
    const library: string[] = [
        "// AitonLab · AI Agent Core",
        "const SCAN_WIDTH = 8;",
        "const FADE_ZONE = 35;",
        "const MAX_PARTICLES = 2500;",
        "function clamp(n,a,b){return Math.max(a,Math.min(b,n));}",
        "function lerp(a,b,t){return a+(b-a)*t;}",
        "const now=()=>performance.now();",
        "class VoiceAgent{",
        "  qualify(lead){return lead.intent>0.7;}",
        "  book(slot){calendar.reserve(slot);}",
        "}",
        "class WhatsAppBot{",
        "  reply(msg){return ai.generate(msg);}",
        "}",
        "const scanner={x:window.innerWidth/2,width:SCAN_WIDTH,glow:3.5};",
        "function drawParticle(ctx,p){ctx.globalAlpha=clamp(p.a,0,1);}",
        "const state={intensity:1.2,particles:MAX_PARTICLES};",
        "ctx.globalCompositeOperation='lighter';",
        "// autonomous · 24/7 · kigali",
        "if(state.intensity>1){scanner.glow+=0.01;}",
        "requestAnimationFrame(tick);",
    ];
    let flow = library.join(" ");
    const totalChars = width * height;
    while (flow.length < totalChars + width) flow += " " + library[Math.floor(Math.random() * library.length)];
    let out = "";
    let offset = 0;
    for (let row = 0; row < height; row++) {
        let line = flow.slice(offset, offset + width);
        if (line.length < width) line += " ".repeat(width - line.length);
        out += line + (row < height - 1 ? "\n" : "");
        offset += width;
    }
    return out;
}

// ─── Card HTML builder ────────────────────────────────────────────────────────
function buildCardWrapper(index: number): HTMLDivElement {
    const card = CARD_DATA[index % CARD_DATA.length];

    const wrapper = document.createElement("div");
    wrapper.className = "sc-card-wrapper";
    wrapper.style.cssText = "position:relative;width:400px;height:250px;flex-shrink:0;";

    // Normal card (styled div instead of image)
    const normalCard = document.createElement("div");
    normalCard.className = "sc-card-normal";
    normalCard.style.cssText = `
    position:absolute;top:0;left:0;width:400px;height:250px;border-radius:2rem;overflow:hidden;
    background:linear-gradient(135deg,${card.colors[0]},${card.colors[1]});
    border:1px solid rgba(204,88,51,0.25);
    display:flex;flex-direction:column;justify-content:space-between;
    padding:24px;box-sizing:border-box;
    clip-path:inset(0 0 0 var(--clip-right,0%));
    z-index:2;
  `;
    normalCard.innerHTML = `
    <div style="font-size:36px">${card.emoji}</div>
    <div>
      <div style="font-size:9px;text-transform:uppercase;letter-spacing:2.5px;color:rgba(196,181,253,0.6);margin-bottom:6px;font-weight:700">
        Case Study · In Progress
      </div>
      <div style="font-size:17px;font-weight:800;color:#fff;font-family:'Space Grotesk',sans-serif;line-height:1.2">
        Client Success Coming Soon
      </div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:5px">
        ${card.industry} · ${card.location}
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <div style="width:6px;height:6px;border-radius:50%;background:#10b981;animation: blink-dot 2s infinite"></div>
      <span style="font-size:10px;color:rgba(52,211,153,0.7);font-weight:600;letter-spacing:1.5px;text-transform:uppercase">Building with partners</span>
    </div>
  `;

    // ASCII overlay card
    const asciiCard = document.createElement("div");
    asciiCard.className = "sc-card-ascii";
    asciiCard.style.cssText =
        "position:absolute;top:0;left:0;width:400px;height:250px;border-radius:15px;overflow:hidden;z-index:1;clip-path:inset(0 calc(100% - var(--clip-left,0%)) 0 0);";

    const asciiContent = document.createElement("div");
    asciiContent.className = "sc-ascii-content";
    const charWidth = 6, lineHeight = 13;
    const cols = Math.floor(400 / charWidth);
    const rows = Math.floor(250 / lineHeight);
    asciiContent.style.cssText = `
    position:absolute;top:0;left:0;width:100%;height:100%;
    color:rgba(196,181,253,0.65);font-family:'Courier New',monospace;
    font-size:11px;line-height:${lineHeight}px;overflow:hidden;white-space:pre;
    margin:0;padding:6px;box-sizing:border-box;
    background:linear-gradient(135deg,rgba(30,15,60,0.95),rgba(10,20,15,0.95));
    -webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1) 0%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.2) 100%);
    mask-image:linear-gradient(to right,rgba(0,0,0,1) 0%,rgba(0,0,0,0.7) 50%,rgba(0,0,0,0.2) 100%);
    animation:ascii-glitch 0.12s infinite linear alternate-reverse;
  `;
    asciiContent.textContent = generateCode(cols, rows);
    asciiCard.appendChild(asciiContent);

    wrapper.appendChild(normalCard);
    wrapper.appendChild(asciiCard);
    return wrapper;
}

// ─── Main Component ───────────────────────────────────────────────────────────
interface ScannerCarouselProps {
    className?: string;
}

const ScannerCarousel = ({ className = "" }: ScannerCarouselProps) => {
    const cardLineRef = useRef<HTMLDivElement>(null);
    const particleCanvasRef = useRef<HTMLCanvasElement>(null);
    const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
    const speedRef = useRef<HTMLSpanElement>(null);

    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(120);

    // Mutable animation state — no re-renders
    const st = useRef({
        position: 0,
        velocity: 120,
        dir: -1,
        isAnimating: true,
        isDragging: false,
        lastTime: 0,
        lastMouseX: 0,
        mouseVelocity: 0,
        friction: 0.95,
        minVelocity: 30,
        containerWidth: 0,
        cardLineWidth: 0,
    });

    const cleanupRef = useRef<(() => void)[]>([]);

    // ── Controls ───────────────────────────────────────────────────────────────
    const handlePause = useCallback(() => {
        st.current.isAnimating = !st.current.isAnimating;
        setIsPaused((p) => !p);
    }, []);

    const handleReset = useCallback(() => {
        const s = st.current;
        s.position = s.containerWidth;
        s.velocity = 120;
        s.dir = -1;
        s.isAnimating = true;
        s.isDragging = false;
        setIsPaused(false);
        setSpeed(120);
    }, []);

    const handleDirection = useCallback(() => {
        st.current.dir *= -1;
    }, []);

    // ── Init ───────────────────────────────────────────────────────────────────
    useEffect(() => {
        const cardLine = cardLineRef.current;
        const particleCanvas = particleCanvasRef.current;
        const scannerCanvas = scannerCanvasRef.current;
        if (!cardLine || !particleCanvas || !scannerCanvas) return;

        const CARD_COUNT = 30;
        const CARD_W = 400, CARD_GAP = 60;

        // ── Build cards ──────────────────────────────────────────────────────────
        cardLine.innerHTML = "";
        for (let i = 0; i < CARD_COUNT; i++) {
            cardLine.appendChild(buildCardWrapper(i));
        }

        const s = st.current;
        s.containerWidth = window.innerWidth;
        s.cardLineWidth = (CARD_W + CARD_GAP) * CARD_COUNT;
        s.position = s.containerWidth;

        // ── Drag ─────────────────────────────────────────────────────────────────
        const startDrag = (clientX: number) => {
            s.isDragging = true;
            s.isAnimating = false;
            s.lastMouseX = clientX;
            s.mouseVelocity = 0;
            const t = window.getComputedStyle(cardLine).transform;
            if (t !== "none") s.position = new DOMMatrix(t).m41;
            document.body.style.cursor = "grabbing";
        };
        const onDrag = (clientX: number, e: Event) => {
            if (!s.isDragging) return;
            e.preventDefault();
            const dx = clientX - s.lastMouseX;
            s.position += dx;
            s.mouseVelocity = dx * 60;
            s.lastMouseX = clientX;
            cardLine.style.transform = `translateX(${s.position}px)`;
            updateClipping();
        };
        const endDrag = () => {
            if (!s.isDragging) return;
            s.isDragging = false;
            if (Math.abs(s.mouseVelocity) > s.minVelocity) {
                s.velocity = Math.abs(s.mouseVelocity);
                s.dir = s.mouseVelocity > 0 ? 1 : -1;
            } else { s.velocity = 120; }
            s.isAnimating = true;
            document.body.style.cursor = "";
        };
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            s.position += e.deltaY > 0 ? 20 : -20;
            updateCardPos();
        };

        const mdH = (e: MouseEvent) => startDrag(e.clientX);
        const mmH = (e: MouseEvent) => onDrag(e.clientX, e);
        const muH = () => endDrag();
        const tsH = (e: TouchEvent) => { e.preventDefault(); startDrag(e.touches[0].clientX); };
        const tmH = (e: TouchEvent) => { onDrag(e.touches[0].clientX, e); };
        const tuH = () => endDrag();
        const wH = (e: WheelEvent) => onWheel(e);

        cardLine.addEventListener("mousedown", mdH);
        document.addEventListener("mousemove", mmH);
        document.addEventListener("mouseup", muH);
        cardLine.addEventListener("touchstart", tsH, { passive: false });
        document.addEventListener("touchmove", tmH, { passive: false });
        document.addEventListener("touchend", tuH);
        cardLine.addEventListener("wheel", wH, { passive: false });

        // ── Clipping update ──────────────────────────────────────────────────────
        const SX = () => window.innerWidth / 2;
        const SW = 8;

        const updateClipping = () => {
            const sl = SX() - SW / 2, sr = SX() + SW / 2;
            let anyScanning = false;
            document.querySelectorAll<HTMLDivElement>(".sc-card-wrapper").forEach((w) => {
                const r = w.getBoundingClientRect();
                const nc = w.querySelector<HTMLDivElement>(".sc-card-normal");
                const ac = w.querySelector<HTMLDivElement>(".sc-card-ascii");
                if (!nc || !ac) return;
                if (r.left < sr && r.right > sl) {
                    anyScanning = true;
                    const il = Math.max(sl - r.left, 0);
                    const ir = Math.min(sr - r.left, r.width);
                    nc.style.setProperty("--clip-right", `${(il / r.width) * 100}%`);
                    ac.style.setProperty("--clip-left", `${(ir / r.width) * 100}%`);
                    if (!w.hasAttribute("data-scanned") && il > 0) {
                        w.setAttribute("data-scanned", "true");
                        const flash = document.createElement("div");
                        flash.style.cssText = "position:absolute;inset:0;border-radius:15px;background:linear-gradient(90deg,transparent,rgba(0,255,255,0.25),transparent);animation:sc-scan-flash 0.6s ease-out forwards;pointer-events:none;z-index:10;";
                        w.appendChild(flash);
                        setTimeout(() => flash.remove(), 650);
                    }
                } else {
                    if (r.right < sl) {
                        nc.style.setProperty("--clip-right", "100%");
                        ac.style.setProperty("--clip-left", "100%");
                    } else {
                        nc.style.setProperty("--clip-right", "0%");
                        ac.style.setProperty("--clip-left", "0%");
                    }
                    w.removeAttribute("data-scanned");
                }
            });
            (window as any).__scannerScanning = anyScanning;
        };

        // ── Card stream animate ──────────────────────────────────────────────────
        let rafStream: number;
        const updateCardPos = () => {
            const cw = window.innerWidth;
            const lw = s.cardLineWidth;
            if (s.position < -lw) s.position = cw;
            if (s.position > cw) s.position = -lw;
            cardLine.style.transform = `translateX(${s.position}px)`;
            updateClipping();
        };
        const animStream = (now: number) => {
            const dt = Math.min((now - s.lastTime) / 1000, 0.05);
            s.lastTime = now;
            if (s.isAnimating && !s.isDragging) {
                s.velocity = Math.max(s.velocity * s.friction, s.minVelocity);
                s.position += s.velocity * s.dir * dt;
                updateCardPos();
                setSpeed(Math.round(s.velocity));
            }
            rafStream = requestAnimationFrame(animStream);
        };
        s.lastTime = performance.now();
        rafStream = requestAnimationFrame(animStream);

        // ── ASCII refresh ────────────────────────────────────────────────────────
        const asciiInterval = setInterval(() => {
            document.querySelectorAll<HTMLDivElement>(".sc-ascii-content").forEach((el) => {
                if (Math.random() < 0.2) {
                    const charWidth = 6, lineH = 13;
                    const cols = Math.floor(400 / charWidth);
                    const rows = Math.floor(250 / lineH);
                    el.textContent = generateCode(cols, rows);
                }
            });
        }, 250);

        // ── Resize ───────────────────────────────────────────────────────────────
        const onResize = () => { s.containerWidth = window.innerWidth; };
        window.addEventListener("resize", onResize);

        // ── Three.js particle system ─────────────────────────────────────────────
        let threeRenderer: THREE.WebGLRenderer | null = null;
        let threeRAF: number;
        try {
            const scene = new THREE.Scene();
            const cam = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, 125, -125, 1, 1000);
            cam.position.z = 100;
            threeRenderer = new THREE.WebGLRenderer({ canvas: particleCanvas, alpha: true, antialias: true });
            threeRenderer.setSize(window.innerWidth, 250);
            threeRenderer.setClearColor(0x000000, 0);

            const ptCount = 350;
            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(ptCount * 3);
            const col = new Float32Array(ptCount * 3);
            const sz = new Float32Array(ptCount);
            const vel = new Float32Array(ptCount);
            const alp = new Float32Array(ptCount);

            // gradient texture
            const pc = document.createElement("canvas"); pc.width = pc.height = 100;
            const pctx = pc.getContext("2d")!;
            const half = 50;
            const grd = pctx.createRadialGradient(half, half, 0, half, half, half);
            grd.addColorStop(0.025, "#fff");
            grd.addColorStop(0.1, "hsl(268,72%,40%)");
            grd.addColorStop(0.25, "hsl(268,72%,10%)");
            grd.addColorStop(1, "transparent");
            pctx.fillStyle = grd; pctx.beginPath(); pctx.arc(half, half, half, 0, Math.PI * 2); pctx.fill();
            const tex = new THREE.CanvasTexture(pc);

            for (let i = 0; i < ptCount; i++) {
                pos[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
                pos[i * 3 + 1] = (Math.random() - 0.5) * 250;
                pos[i * 3 + 2] = 0;
                col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = 1;
                sz[i] = (Math.random() * 140 + 60) / 8;
                vel[i] = Math.random() * 60 + 30;
                alp[i] = Math.random() * 0.8 + 0.2;
            }
            geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
            geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
            geo.setAttribute("size", new THREE.BufferAttribute(sz, 1));
            geo.setAttribute("alpha", new THREE.BufferAttribute(alp, 1));

            const mat = new THREE.ShaderMaterial({
                uniforms: { pointTexture: { value: tex }, size: { value: 15 } },
                vertexShader: `attribute float alpha;varying float vAlpha;void main(){vAlpha=alpha;vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=15.0;gl_Position=projectionMatrix*mv;}`,
                fragmentShader: `uniform sampler2D pointTexture;varying float vAlpha;void main(){gl_FragColor=vec4(1.0,1.0,1.0,vAlpha)*texture2D(pointTexture,gl_PointCoord);}`,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                vertexColors: false,
            });

            const pts = new THREE.Points(geo, mat);
            scene.add(pts);

            const animThree = () => {
                const posArr = pts.geometry.attributes.position.array as Float32Array;
                const alpArr = pts.geometry.attributes.alpha.array as Float32Array;
                const t = Date.now() * 0.001;
                for (let i = 0; i < ptCount; i++) {
                    posArr[i * 3] += vel[i] * 0.016;
                    if (posArr[i * 3] > window.innerWidth / 2 + 100) {
                        posArr[i * 3] = -window.innerWidth / 2 - 100;
                        posArr[i * 3 + 1] = (Math.random() - 0.5) * 250;
                    }
                    posArr[i * 3 + 1] += Math.sin(t + i * 0.1) * 0.5;
                    const rnd = Math.floor(Math.random() * 10);
                    if (rnd === 1) alpArr[i] = Math.max(0, alpArr[i] - 0.05);
                    if (rnd === 2) alpArr[i] = Math.min(1, alpArr[i] + 0.05);
                }
                pts.geometry.attributes.position.needsUpdate = true;
                pts.geometry.attributes.alpha.needsUpdate = true;
                threeRenderer!.render(scene, cam);
                threeRAF = requestAnimationFrame(animThree);
            };
            threeRAF = requestAnimationFrame(animThree);
        } catch (e) {
            console.warn("Three.js particle system failed:", e);
        }

        // ── Canvas 2D scanner (light bar + right-side particles) ─────────────────
        const sctx = scannerCanvas.getContext("2d")!;
        scannerCanvas.width = window.innerWidth;
        scannerCanvas.height = 300;

        // Gradient cache for particles
        const gradC = document.createElement("canvas"); gradC.width = gradC.height = 16;
        const gradCtx = gradC.getContext("2d")!;
        const hf = 8;
        const rg = gradCtx.createRadialGradient(hf, hf, 0, hf, hf, hf);
        rg.addColorStop(0, "rgba(255,255,255,1)");
        rg.addColorStop(0.3, "rgba(196,181,253,0.8)");
        rg.addColorStop(0.7, "rgba(139,92,246,0.4)");
        rg.addColorStop(1, "transparent");
        gradCtx.fillStyle = rg; gradCtx.beginPath(); gradCtx.arc(hf, hf, hf, 0, Math.PI * 2); gradCtx.fill();

        interface Pt { x: number; y: number; vx: number; vy: number; r: number; a: number; life: number; decay: number; origA: number; time: number; ts: number; ta: number; }
        const scanPts: Pt[] = [];
        const maxPts = 800;
        const lbX = () => window.innerWidth / 2;
        const H = 300; const FZ = 60;
        let intensity = 0.8, glowI = 1, scanActive = false;
        const BASE_INT = 0.8, SCAN_INT = 1.8;

        const mkPt = (): Pt => {
            const ir = intensity / BASE_INT, sm = 1 + (ir - 1) * 1.2;
            return {
                x: lbX() + (Math.random() - 0.5) * 3,
                y: Math.random() * H,
                vx: (Math.random() * 0.8 + 0.2) * sm,
                vy: (Math.random() - 0.5) * 0.3 * sm,
                r: (Math.random() * 0.6 + 0.4) * (1 + (ir - 1) * 0.7),
                a: Math.random() * 0.4 + 0.6,
                origA: 0, life: 1, decay: (Math.random() * 0.015 + 0.005) * (2 - ir * 0.5),
                time: 0,
                ts: Math.random() * 0.05 + 0.02 * sm,
                ta: Math.random() * 0.2 + 0.1,
            };
        };
        for (let i = 0; i < maxPts; i++) { const p = mkPt(); p.origA = p.a; scanPts.push(p); }

        let scanRAF: number;
        const renderScanner = () => {
            const w = window.innerWidth;
            scannerCanvas.width = w;
            sctx.clearRect(0, 0, w, H);

            // light bar
            const targetGI = scanActive ? 3.5 : 1;
            glowI += (targetGI - glowI) * 0.05;
            const trgI = scanActive ? SCAN_INT : BASE_INT;
            intensity += (trgI - intensity) * 0.05;
            // transition scanning from global ref
            scanActive = !!(window as any).__scannerScanning;

            const vg = sctx.createLinearGradient(0, 0, 0, H);
            vg.addColorStop(0, "rgba(255,255,255,0)");
            vg.addColorStop(FZ / H, "rgba(255,255,255,1)");
            vg.addColorStop(1 - FZ / H, "rgba(255,255,255,1)");
            vg.addColorStop(1, "rgba(255,255,255,0)");

            sctx.globalCompositeOperation = "lighter";
            const lbXv = lbX();
            const LW = 3;

            // core
            const cg = sctx.createLinearGradient(lbXv - LW / 2, 0, lbXv + LW / 2, 0);
            cg.addColorStop(0, "rgba(255,255,255,0)");
            cg.addColorStop(0.5, `rgba(255,255,255,${Math.min(1, glowI)})`);
            cg.addColorStop(1, "rgba(255,255,255,0)");
            sctx.globalAlpha = 1; sctx.fillStyle = cg;
            sctx.beginPath(); sctx.roundRect(lbXv - LW / 2, 0, LW, H, 15); sctx.fill();

            // glow 1 (purple)
            const g1 = sctx.createLinearGradient(lbXv - LW * 2, 0, lbXv + LW * 2, 0);
            g1.addColorStop(0, "rgba(139,92,246,0)");
            g1.addColorStop(0.5, `rgba(196,181,253,${0.8 * glowI})`);
            g1.addColorStop(1, "rgba(139,92,246,0)");
            sctx.globalAlpha = scanActive ? 1 : 0.8; sctx.fillStyle = g1;
            sctx.beginPath(); sctx.roundRect(lbXv - LW * 2, 0, LW * 4, H, 25); sctx.fill();

            // glow 2
            const g2 = sctx.createLinearGradient(lbXv - LW * 4, 0, lbXv + LW * 4, 0);
            g2.addColorStop(0, "rgba(139,92,246,0)");
            g2.addColorStop(0.5, `rgba(139,92,246,${0.4 * glowI})`);
            g2.addColorStop(1, "rgba(139,92,246,0)");
            sctx.globalAlpha = scanActive ? 0.8 : 0.5; sctx.fillStyle = g2;
            sctx.beginPath(); sctx.roundRect(lbXv - LW * 4, 0, LW * 8, H, 35); sctx.fill();

            // mask vertical
            sctx.globalCompositeOperation = "destination-in";
            sctx.globalAlpha = 1; sctx.fillStyle = vg;
            sctx.fillRect(0, 0, w, H);

            // particles
            sctx.globalCompositeOperation = "lighter";
            for (const p of scanPts) {
                p.x += p.vx; p.y += p.vy; p.time++;
                p.a = p.origA * p.life + Math.sin(p.time * p.ts) * p.ta;
                p.life -= p.decay;
                if (p.x > w + 10 || p.life <= 0) {
                    p.x = lbXv + (Math.random() - 0.5) * 3;
                    p.y = Math.random() * H;
                    p.vx = Math.random() * 0.8 + 0.2;
                    p.vy = (Math.random() - 0.5) * 0.3;
                    p.a = p.origA; p.life = 1; p.time = 0;
                }
                let fa = 1;
                if (p.y < FZ) fa = p.y / FZ;
                else if (p.y > H - FZ) fa = (H - p.y) / FZ;
                sctx.globalAlpha = Math.max(0, Math.min(1, p.a * fa));
                sctx.drawImage(gradC, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
            }
            // spawn new
            if (Math.random() < intensity && scanPts.length < maxPts) {
                const p = mkPt(); p.origA = p.a; scanPts.push(p);
            }

            scanRAF = requestAnimationFrame(renderScanner);
        };
        scanRAF = requestAnimationFrame(renderScanner);

        // ── Cleanup ──────────────────────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(rafStream);
            cancelAnimationFrame(scanRAF);
            if (typeof threeRAF !== "undefined") cancelAnimationFrame(threeRAF);
            if (threeRenderer) threeRenderer.dispose();
            clearInterval(asciiInterval);
            cardLine.removeEventListener("mousedown", mdH);
            document.removeEventListener("mousemove", mmH);
            document.removeEventListener("mouseup", muH);
            cardLine.removeEventListener("touchstart", tsH);
            document.removeEventListener("touchmove", tmH);
            document.removeEventListener("touchend", tuH);
            cardLine.removeEventListener("wheel", wH);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className={`relative w-full overflow-hidden ${className}`} style={{ height: 420 }}>
            {/* Styles injected for scanner-specific classes */}
            <style>{`
        @keyframes ascii-glitch {
          0%{opacity:1}15%{opacity:0.88}16%{opacity:1}49%{opacity:0.92}50%{opacity:1}
        }
        @keyframes sc-scan-flash {
          0%{transform:translateX(-100%);opacity:0}
          50%{opacity:1}
          100%{transform:translateX(100%);opacity:0}
        }
        .sc-card-normal { clip-path: inset(0 0 0 var(--clip-right, 0%)); }
        .sc-card-ascii  { clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0); }
      `}</style>

            {/* Three.js particle canvas (background) */}
            <canvas
                ref={particleCanvasRef}
                style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", width: "100%", height: 250, zIndex: 0, pointerEvents: "none" }}
            />

            {/* Card stream */}
            <div style={{ position: "absolute", width: "100%", height: 250, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", overflow: "visible" }}>
                <div
                    ref={cardLineRef}
                    style={{ display: "flex", alignItems: "center", gap: 60, whiteSpace: "nowrap", cursor: "grab", userSelect: "none", willChange: "transform" }}
                />
            </div>

            {/* Scanner canvas (light bar + emitted particles) */}
            <canvas
                ref={scannerCanvasRef}
                style={{ position: "absolute", top: "50%", left: -3, transform: "translateY(-50%)", width: "100%", height: 300, zIndex: 15, pointerEvents: "none" }}
            />

            {/* Controls */}
            <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 20 }}>
                {([
                    { label: isPaused ? "▶️ Play" : "⏸️ Pause", fn: handlePause },
                    { label: "🔄 Reset", fn: handleReset },
                    { label: "↔️ Direction", fn: handleDirection },
                ] as const).map((btn) => (
                    <button
                        key={btn.label}
                        onClick={btn.fn}
                        className="glass text-xs font-semibold text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full transition-all duration-200 hover:border-primary/30"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Speed indicator */}
            <div style={{ position: "absolute", bottom: 16, right: 20, zIndex: 20 }}
                className="glass text-xs text-muted-foreground px-3 py-1.5 rounded-full">
                Speed: <span ref={speedRef}>{speed}</span> px/s
            </div>

            {/* Left + right fade masks */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #2E4036 0%, transparent 15%, transparent 85%, #2E4036 100%)", zIndex: 16, pointerEvents: "none" }} />
        </div>
    );
};

export default ScannerCarousel;
