import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Team from "./components/sections/Team";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Navigation from "./components/sections/Navigation";
import Footer from "./components/sections/Footer";
import Dashboard from './components/sections/Dashboard';
import Documents from './components/sections/Documents';

import useAuthStore from './stores/useAuthStore';

import './App.css';

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

// const App = () => {
//   return (
//     <div className="bg-slate-900 min-h-screen">
//       {/* Navigation is fixed, placed outside scrollable content */}
//       <Navigation /> 
//       {/* Main content sections */}
//       <main>
//         <Hero />
//         <Features />
//         <Team />
//         <Blog />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// Main Landing Page Component (combines all public sections)
const LandingPage = () => (
    <main>
      <Hero />
      <Features />
      <Team />
      <Blog />
      <Contact />
    </main>
);

const AppContent = () => {
    return (
        <div className="bg-slate-900 min-h-screen">
            <Navigation /> 
            
            <Routes>
                {/* Public Route: The main SPA landing page */}
                <Route path="/" element={<LandingPage />} />
                
                {/* Protected Routes: Requires login */}
                <Route 
                    path="/dashboard" 
                    element={<PrivateRoute element={Dashboard} />} 
                />
                <Route 
                    path="/documents" // <-- New Protected Route
                    element={<PrivateRoute element={Documents} />} 
                />
            </Routes>

            {/* Footer remains outside the main content area */}
            <Footer />
        </div>
    );
}

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
