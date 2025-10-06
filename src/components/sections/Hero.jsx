import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          The Future of <span className="text-cyan-400">Crypto Risk Assessment</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          First and only platform integrating real-time market volatility into risk scoring and insurance pricing.
          Updates every 30 seconds while competitors update daily.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center justify-center">
            Learn More <ChevronRight className="ml-2" />
          </a>
          <a href="#contact" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get Started
          </a>
        </div>
      </div>
      
      {/* Hero Stats (can be modularized further into a <StatCard />) */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
          <div className="text-cyan-400 text-3xl font-bold mb-2">2,880x</div>
          <div className="text-slate-300">Faster risk updates than competitors</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
          <div className="text-cyan-400 text-3xl font-bold mb-2">&gt;95%</div>
          <div className="text-slate-300">Claims accuracy rate</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
          <div className="text-cyan-400 text-3xl font-bold mb-2">24/7</div>
          <div className="text-slate-300">Real-time monitoring</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;