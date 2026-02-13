import React, { useState } from "react";
import PrivacyPolicyModal from "../common/PrivacyPolicyModal";
import TermsOfUseModal from "../common/TermsOfUseModal";
import { Shield, Twitter, Github, Linkedin, Youtube } from 'lucide-react';
import useLanguageStore from '../../stores/useLanguageStore';

// Modularized Footer Link Column
const FooterLinkColumn = ({ title, links }) => (
  <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
          {links.map((link, index) => (
              <li key={index}>
                  <a href={link.href} className="font-subheading hover:text-cyan-400 text-sm">{link.label}</a>
              </li>
          ))}
      </ul>
  </div>
);

const Footer = () => {

    const { t, language } = useLanguageStore();

    const productLinks = [
        { href: "#features", label: t('nav.features') },
        //   { href: "#", label: "Documentation" },
        //   { href: "#", label: "Whitepaper" },
    ];

    const companyLinks = [
        { href: "#team", label: t('nav.team') },
        { href: "#blog", label: t('nav.blog') },
        { href: "#contact", label: t('nav.contact') },
    ];

    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="flex items-center mb-4">
                        <Shield className="h-8 w-8 text-cyan-400" />
                        <span className="ml-2 text-xl font-heading">Sure Stack RISK Protocol</span>
                    </div>
                    <p className="font-subheading text-sm">
                        {t('footer.sub')}
                    </p>
                </div>

                <FooterLinkColumn title={t('footer.product')} links={productLinks} />
                <FooterLinkColumn title={t('footer.company')} links={companyLinks} />

                {/* Connection Column */}
                <div>
                    <h3 className="text-white font-semibold mb-4">{t('footer.connect')}</h3>
                    <div className="flex space-x-4">
                        <a href="https://x.com/sure_stack?s=11" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Twitter size={32} color="#ffffff"/>
                        </a>
                        <a href="https://github.com/surestack" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Github size={32} color="#ffffff"/>
                        </a>
                        <a href="https://www.linkedin.com/company/surestacksecurity" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Linkedin size={32} color="#ffffff"/>
                        </a>
                        <a href="https://www.youtube.com/@SureStack" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Youtube size={32} color="#ffffff"/>
                        </a>
                        <a href="https://medium.com/@SureStack" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <img alt="Medium" width="84" height="84" src="https://wakadigital.systems/surestack/assets/icons/medium_icon_white.png"/>    
                        </a>
                        <a href="https://telegram.org/@SureStackOfficial" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <img alt="Telegram" width="84" height="84" src="https://wakadigital.systems/surestack/assets/icons/telegram_icon_white.png" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center">
                <p className="font-heading text-sm">{t('footer.copyright')}</p>
                <div className="flex space-x-6">
                    <button onClick={() => setShowTerms(true)} 
                            className="font-subheading hover:text-cyan-400 text-sm">
                        {t('footer.terms')}
                    </button>
                    <button onClick={() => setShowPrivacy(true)}
                            className="font-subheading hover:text-cyan-400 text-sm">
                        {t('footer.privacy')}
                    </button>
                </div>
            </div>
        </div>
    </footer>

    {/* Terms of Use Modal */}
    <TermsOfUseModal isOpen={showTerms} onClose={() => setShowTerms(null)} />

    {/* Privacy Policy Modal */}
    <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(null)} />

    </>
  )
}

export default Footer;