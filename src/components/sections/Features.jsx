import React, { useState, useEffect } from "react";
import { SanityClient } from "@sanity/client";
import { Shield, Zap, Users, TrendingUp, Check, } from 'lucide-react';

// Modularized feature card
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);


const Features = () => {

    const featureData = [
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Real-Time Volatility Integration",
          description: "Risk scores adjust every 30 seconds based on actual market conditions, not yesterday's estimates."
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Dynamic Risk Pricing",
          description: "Insurance premiums automatically adjust to maintain pool solvency during high volatility periods."
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: "Decentralized Consensus",
          description: "Multiple validators independently assess risk using advanced ML models, eliminating single points of failure."
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Full Transparency",
          description: "Complete team disclosure with verifiable credentials - no anonymous founders or hidden identities."
        }
    ];

    const advantageData = [
        { text: "Static risk models updated daily/weekly", isRisk: true },
        { text: "No real-time volatility integration", isRisk: true },
        { text: "Fixed insurance premiums", isRisk: true },
        { text: "Anonymous or limited team disclosure", isRisk: true },
        { text: "Real-time updates every 30 seconds", isRisk: false },
        { text: "Live market volatility integration", isRisk: false },
        { text: "Dynamic, responsive pricing", isRisk: false },
        { text: "Full team transparency", isRisk: false },
    ];

    // const []


    return (
        <section id="features" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Why RISK Protocol?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    The only platform that combines real-time volatility analysis with decentralized risk assessment
                    </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {featureData.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
        
                {/* Competitive Advantage Block - Could be its own component: <CompetitiveAdvantage /> */}
                <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-xl border border-cyan-800">
                    <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-3">Traditional Competitors</h4>
                            <ul className="space-y-2 text-slate-300">
                                {advantageData.filter(d => d.isRisk).map((item, i) => (
                                    <li key={i}>❌ {item.text}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-3">RISK Protocol</h4>
                            <ul className="space-y-2 text-slate-300">
                                {advantageData.filter(d => !d.isRisk).map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;