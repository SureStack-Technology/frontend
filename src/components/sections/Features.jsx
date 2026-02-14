import React, { useState, useEffect } from "react";
import SVG from 'react-inlinesvg';
import Advantages from './Advantages';
import useLanguageStore from '../../stores/useLanguageStore';

const PortableText = ({ blocks }) => {
  return blocks.map((block, i) => (
    <p key={i} className="font-subheading text-lg leading-relaxed">
      {block.children.map((child, j) => (
        <span key={j}>{child.text}</span>
      ))}
    </p>
  ));
};

const IconHolder = ({ iconData }) => {

    if (!iconData?.svg) return null;

    return (
        <div className="bg-slate-800 rounded-lg w-20 h-20 flex items-center justify-center p-3 flex-shrink-0">
            <SVG src={iconData.svg}
                className=" text-cyan-400"
                style={{ height: '42px', width: '42px' }} 
                uniquifyIDs={true} />
        </div>
    );
}

// Modularized feature card
const FeatureCard = ({ feature }) => (
  <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
    <div className="flex flex-row justify-between items-center rounded-lg text-cyan-200 p-2 sm:p-3 transition-colors">
        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
        <div className="shrink-0">
            <IconHolder iconData={feature.icon} />
        </div>
    </div>
    
    <div className="text-slate-300">
        {feature.description && (
            <PortableText blocks={feature.description} />
        )}
    </div>
  </div>
);


const Features = () => {

    const { t, language } = useLanguageStore();
    const { data = {}, loading, initialized } = useLanguageStore();
    const { metadata, items: featureData = [], advantages: advantageData = [] } = data.features || {};
    
    if (loading && !initialized) {
        return <div className="py-20 text-center text-white">Loading Security Protocols...</div>;
    }

    if (loading && !metadata) {
        return <div className="text-white text-center py-20">Syncing localized protocols...</div>;
    }

    return (
        <section id="features" className="py-20">
            <div className="glass-card max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 border border-[var(--glow-cyan)]">
                <div className="text-center mb-16 ">
                    <h2 className="text-4xl font-heading text-white mb-4">
                        {t('features.heading')}
                    </h2>
                    <p className="text-2xl text-slate-300 font-subheading max-w-2xl mx-auto">
                        {t('features.sub')}
                    </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {featureData.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
        
                <Advantages advantageData={advantageData} />
            </div>
        </section>
    )
}

export default Features;