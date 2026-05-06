import React from 'react';
import { Check } from 'lucide-react';
import useLanguageStore from '../../stores/useLanguageStore';

const Pricing = () => {
    const { t, language } = useLanguageStore();

    const tiers = [
        {
            id: 'free',
            price: t('pricing.tiers.free.price'),
            name: t('pricing.tiers.free.name'),
            features: [
                t('pricing.tiers.free.features.0'),
                t('pricing.tiers.free.features.1'),
                t('pricing.tiers.free.features.2'),
            ],
            recommended: false,
        },
        {
            id: 'basic',
            price: t('pricing.tiers.basic.price'),
            name: t('pricing.tiers.basic.name'),
            features: [
                t('pricing.tiers.basic.features.0'),
                t('pricing.tiers.basic.features.1'),
                t('pricing.tiers.basic.features.2'),
            ],
            recommended: false,
        },
        {
            id: 'pro',
            price: t('pricing.tiers.pro.price'),
            name: t('pricing.tiers.pro.name'),
            features: [
                t('pricing.tiers.pro.features.0'),
                t('pricing.tiers.pro.features.1'),
                t('pricing.tiers.pro.features.2'),
                t('pricing.tiers.pro.features.3'),
            ],
            recommended: false,
        },
        {
            id: 'enterprise',
            price: t('pricing.tiers.enterprise.price'),
            name: t('pricing.tiers.enterprise.name'),
            features: [
                t('pricing.tiers.enterprise.features.0'),
                t('pricing.tiers.enterprise.features.1'),
                t('pricing.tiers.enterprise.features.2'),
                t('pricing.tiers.enterprise.features.3'),
            ],
            recommended: false,
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading text-white mb-4">{t('pricing.heading')}</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('pricing.sub')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div 
                            key={tier.id}
                            className={`glass-card p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 ${
                                tier.recommended 
                                ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]' 
                                : 'border-slate-800'
                            }`}
                        >
                            {tier.recommended && (
                                <span className="bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                    Recommended
                                </span>
                            )}
                            <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-white">{tier.price}</span>
                                {tier.id === 'pro' && <span className="text-slate-400 ml-2">/mo</span>}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-slate-300">
                                        <Check className="w-5 h-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold transition ${
                                tier.recommended 
                                ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
                                : 'bg-slate-800 text-white hover:bg-slate-700'
                            }`}>
                                {t('pricing.cta')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;