import React from "react";

import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Team from "./components/sections/Team";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Navigation from "./components/sections/Navigation";
import Footer from "./components/sections/Footer";

import './App.css';

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Navigation is fixed, placed outside scrollable content */}
      <Navigation /> 
      {/* Main content sections */}
      <main>
        <Hero />
        <Features />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
