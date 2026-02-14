import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import useLanguageStore from '../../stores/useLanguageStore';

const LanguageSwitcher = () => {
    
    const { language, setLanguage } = useLanguageStore();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'ar', label: 'اللغة العربية' },
        { code: 'de', label: 'Deutsch' },
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'tr', label: 'Türkçe' },
        { code: 'zh', label: '普通话' },
    ];

    const handleSelect = (code) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-3 py-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                <Globe size={18} className="text-cyan-400" />
                <span className="uppercase font-medium">{language}</span>
                <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-slate-900 border border-slate-700 shadow-xl z-50">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-800 transition-colors 
                                    ${language === lang.code ? 'text-cyan-400' : 'text-white'}`}>
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;