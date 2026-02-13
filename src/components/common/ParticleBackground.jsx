import React, { useMemo, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(() => ({
        background: { color: { value: "#0f172a" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#06b6d4" },
            links: {
                color: "#374151",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                outModes: { default: "bounce" },
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
        },
    }), []);

    if (!init) return <div className="bg-slate-900 min-h-screen text-white flex items-center justify-center">Loading Particles...</div>;

    return (
        <Particles
            id="tsparticles"
            options={particlesOptions}
            className="fixed inset-0 w-full h-full z-0"
        />
    );
};

export default ParticleBackground;