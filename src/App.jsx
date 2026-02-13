import React, { useEffect } from "react";


import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import useLanguageStore from "./stores/useLanguageStore";
import ParticleBackground from "./components/common/ParticleBackground";
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
import Values from './components/sections/Values'

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
      <Values />
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
    // const [init, setInit] = useState(false);
    const initLanguage = useLanguageStore((state) => state.init);


    useEffect(() => {
        initLanguage();
    }, [initLanguage]);

    return (
        <Router>
            <ParticleBackground />
            <AppContent />
        </Router>
    );
};

export default App;
