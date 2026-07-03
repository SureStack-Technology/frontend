import React, { useMemo, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({theme}) => {

    // Define dynamic colors based on the theme prop
    const particleColor = theme === 'dark' ? '#06b6d4' : '#000000';
    const lineColor = theme === 'dark' ? '#374151' : '#000000';
    const opacity = theme === 'dark' ? 0.3 : 0.15;

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(() => ({

        background: { color: { value: "transparent" } },
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
            color: { value: particleColor },
            links: {
                color: lineColor,
                distance: 150,
                enable: true,
                opacity: opacity,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                outModes: { default: "bounce" },
            },
            number: { 
                density: { enable: true, area: 800 }, 
                value: theme === 'dark' ? 80 : 50 
            },
            opacity: { value: opacity },
            size: { value: { min: 1, max: 5 } },
        },
    }), [theme, particleColor, lineColor, opacity]);

    if (!init) return <div className="min-h-screen text-slate-800 dark:text-white flex items-center justify-center">Loading Particles...</div>;

    return (
        <Particles id="tsparticles"
            options={particlesOptions}
            className="fixed inset-0 w-full h-full z-0"/>
    );
};

export default ParticleBackground;