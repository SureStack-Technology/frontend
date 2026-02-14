import React from 'react';
import { Check, X } from 'lucide-react';
import useLanguageStore from '../../stores/useLanguageStore';

const CompetitiveAdvantage = ({ advantageData = [] }) => {
    
    const { t, language } = useLanguageStore();
    const traditional = advantageData.filter(item => item.isRisk);
    const riskProtocol = advantageData.filter(item => !item.isRisk);

    return (
        <div className="mt-16 bg-linear-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-xl border border-cyan-800">
            <h3 className="text-2xl font-bold text-white mb-6">{t('advantages.heading')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traditional Column */}
                <div>
                    <h4 className="text-cyan-400 font-semibold mb-3">{t('advantages.sub1')}</h4>
                    <ul className="space-y-2 font-subheading text-lg text-slate-300">
                        {traditional.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-red-500 mr-2">❌</span> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RISK Protocol Column */}
                <div>
                    <h4 className="text-cyan-400 font-semibold mb-3">{t('advantages.sub2')}</h4>
                    <ul className="space-y-2 font-subheading text-lg text-slate-300">
                        {riskProtocol.map((item, i) => (
                            <li key={i} className="flex items-start">
                                <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5 shrink-0" /> 
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompetitiveAdvantage;