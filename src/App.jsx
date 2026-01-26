import React, { useCallback, useMemo, useEffect, useState } from "react";

import Particles from "@tsparticles/react"; 
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Team from "./components/sections/Team";
import Blog from "./components/sections/Blog";
import EarlyBird from "./components/sections/EarlyBird";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Dashboard from './components/sections/Dashboard';
import Documents from './components/sections/Documents';

import useAuthStore from './stores/useAuthStore';

import './App.css';
import './styles/theme.css';

// --- A Simple Private Route Component ---
const PrivateRoute = ({ element: Element }) => {

  const { isLoggedIn } = useAuthStore();
  const location = useLocation();

  return isLoggedIn ? (
    <Element />
  ) : (
    // Redirect to home if not logged in, preserving current path in state for potential later redirect
    <Navigate to="/" state={{ from: location }} replace />
  );
};
// ----------------------------------------

// Main Landing Page Component (combines all public sections)
const LandingPage = () => (
    <main>
      <Hero />
      <Features />
      <Team />
      <Blog />
      <EarlyBird />
      <Contact />
    </main>
);

const AppContent = () => {
    return (
        <div className="relative z-10 min-h-screen">

            <Navigation /> 
            
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route 
                    path="/dashboard" 
                    element={<PrivateRoute element={Dashboard} />} 
                />
                <Route 
                    path="/documents" 
                    element={<PrivateRoute element={Documents} />} 
                />
            </Routes>

            <Footer />
        </div>
    );
}

const App = () => {
    const [init, setInit] = useState(false);

    // 1. Initialize the tsParticles engine with the slim preset
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // 2. Define the particle configuration options
    // This creates a subtle, dark background effect suitable for a tech/risk theme.
    const particlesOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#0f172a", // Tailwind's slate-900 color
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#06b6d4", // Tailwind's cyan-500
                },
                links: {
                    color: "#374151", // Dark gray links
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
        }),
        [],
    );
    
    // Show a loading state or just wait for initialization
    if (!init) return <div className="bg-slate-900 min-h-screen text-white flex items-center justify-center">Loading Particles...</div>;

    return (
        <Router>
            {/* The Particles component is absolutely positioned behind all content */}
            <Particles
                id="tsparticles"
                options={particlesOptions}
                className="fixed inset-0 w-full h-full z-0" // <-- Key styles: fixed, inset-0, z-0
            />
            <AppContent />
        </Router>
    );
};

export default App;
