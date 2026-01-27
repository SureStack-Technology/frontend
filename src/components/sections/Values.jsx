import React, { useState, useEffect } from "react";
import { client } from "../../sanity.js";
import { DynamicIcon } from 'lucide-react/dynamic';

const PortableText = ({ blocks }) => {
  return blocks.map((block, i) => (
    <p key={i} className="font-subheading text-lg leading-relaxed">
      {block.children.map((child, j) => (
        <span key={j}>{child.text}</span>
      ))}
    </p>
  ));
};

// Modularized feature card
const ValueCard = ({ value }) => (
  <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
    <div className="flex flex-row justify-between items-center rounded-lg text-cyan-200 p-2 sm:p-3 transition-colors">
        <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
        <DynamicIcon name={value.icon} className="bg-slate-800 p-2 rounded-lg h-16 w-16"/>
    </div>
    
    <div className="text-slate-300">
        {value.description && (
            <PortableText blocks={value.description} />
        )}
    </div>
  </div>
);

const VALUE_QUERY = `*[_type == "value"]`;
const options = { next: { revalidate: 30 } };

const Values = () => {

    const [valueData, setValues] = useState([]);
      
    useEffect(() => {
        client.fetch(VALUE_QUERY, {}, options)
              .then((data) => setValues(data))
              .catch(console.error);
    }, []);



    return (
        <section id="our_values" className="py-20">
            <div className="glass-card max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 border border-[var(--glow-cyan)]">
                <div className="text-center mb-16 ">
                    <h2 className="text-4xl font-heading text-white mb-4">Our Values</h2>
                    <p className="text-2xl text-slate-300 font-subheading max-w-4xl mx-auto">
                    If there is a reason for cryptocurrency to exist, it must derive from other confidence in the market.
                    To this end we have instilled the following beleifs in out organisation.
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