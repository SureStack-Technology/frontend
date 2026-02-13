import React, { useState, useEffect } from "react";
import SVG from 'react-inlinesvg';
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
    <div className="bg-slate-800 rounded-lg w-20 h-20 flex items-center justify-center p-2">
      <SVG src={iconData.svg}
        className="w-full h-full text-cyan-400"
        viewport="0 0 25 25"/>
    </div>
  );
};

// Modularized feature card
const ValueCard = ({ value }) => (
  <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
    <div className="flex flex-row justify-between items-center rounded-lg text-cyan-200 p-2 sm:p-3 transition-colors">
        <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
        {/* <DynamicIcon name={value.icon} className="bg-slate-800 p-2 rounded-lg h-16 w-16"/> */}
        <div className="flex-shrink-0">
            <IconHolder iconData={value.icon} />
        </div>
    </div>
    
    <div className="text-slate-300">
        {value.description && (
            <PortableText blocks={value.description} />
        )}
    </div>
  </div>
);


const Values = () => {

    const { t, language } = useLanguageStore();
    const { data = {}, loading, initialized } = useLanguageStore();
    const { metadata, items: valueData = [] } = data.values || {};

    return (
        <section id="our_values" className="py-20">
            <div className="glass-card max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 border border-[--glow-cyan]">
                <div className="text-center mb-16 ">
                    <h2 className="text-4xl font-heading text-white mb-4">{t('values.heading')}</h2>
                    <p className="text-2xl text-slate-300 font-subheading max-w-4xl mx-auto">
                    {t('values.sub')}
                    </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {valueData.map((value, index) => (
                        <ValueCard key={index} value={value} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values;