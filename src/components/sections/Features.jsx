import React, { useState, useEffect } from "react";
import { client } from "../../sanity.js";
import { Shield, Zap, Users, TrendingUp, Check, } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';

const PortableText = ({ blocks }) => {
  return blocks.map((block, i) => (
    <p key={i} className="text-slate-300 leading-relaxed">
      {block.children.map((child, j) => (
        <span key={j}>{child.text}</span>
      ))}
    </p>
  ));
};

// Modularized feature card
const FeatureCard = ({ feature }) => (
  <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
    <div className="flex flex-row justify-between items-center rounded-lg text-cyan-200 p-2 sm:p-3 transition-colors">
        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
        <DynamicIcon name={feature.icon} className="bg-slate-800 p-2 rounded-lg h-16 w-16"/>
    </div>
    
    <div className="text-slate-300">
        {feature.description && (
            <PortableText blocks={feature.description} />
        )}
    </div>
  </div>
);

const FEATURE_QUERY = `*[_type == "feature"]`;
const ADVANTAGE_QUERY = `*[_type == "advantage"]`;
const options = { next: { revalidate: 30 } };

const Features = () => {

    const [featureData, setFeatures] = useState([]);
    const [advantageData, setAdvantages] = useState([]);
      
    useEffect(() => {
        client
            .fetch(FEATURE_QUERY, {}, options)
            .then((data) => setFeatures(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        client
            .fetch(ADVANTAGE_QUERY, {}, options)
            .then((data) => setAdvantages(data))
            .catch(console.error);
    }, []);


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
                        <FeatureCard key={index} feature={feature} />
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