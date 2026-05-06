import React, { useState } from "react";
import PrivacyPolicyModal from "../common/PrivacyPolicyModal";
import TermsOfUseModal from "../common/TermsOfUseModal";
import { Shield } from 'lucide-react';
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

    const socialLinks = [
        { 
            href: "https://x.com/sure_stack?s=11", 
            icon: (
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
            ), 
            label: "Twitter" 
        },{ 
            href: "https://github.com/surestack", 
            icon: (
                <svg className="w-10 h-10 fill-none stroke-current stroke-1" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
            ), 
            label: "Github" 
        },{ 
            href: "https://www.linkedin.com/company/surestacksecurity", 
            icon: (
                <svg className="w-10 h-10 fill-none stroke-current stroke-1" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            ),
            label: "Linkedin" 
        },{ 
            href: "https://www.youtube.com/@SureStack", 
            icon: (
                <svg className="w-12 h-12 fill-none stroke-current stroke-1" viewBox="0 0 24 24">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z"/>
                </svg>
            ), 
            label: "Youtube" 
        },{ 
            href: "https://medium.com/@SureStack", 
            icon: (
                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                </svg>
            ),
            label: "Medium"
        },{ 
            href: "https://telegram.org/@SureStackOfficial", 
            icon: (
                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                    <path d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"/>
                </svg>
            ),
            label: "Telegram"
        },{ 
            href: "https://open.spotify.com/episode/0Us1NdPbSCm9ckQkNH3LGn?si=kA6zgmz_TvWM-MwXdHyWCQ", 
            icon: (
                <svg className="w-9 h-9 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M105 0h302c57.928.154 104.845 47.072 105 104.995V407c-.155 57.925-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.925.002 407.003L0 105C.156 47.072 47.074.154 104.997 0H105zm150.998 71.497C154.101 71.497 71.492 154.102 71.492 256c0 101.902 82.609 184.504 184.506 184.504 101.909 0 184.509-82.6 184.509-184.504 0-101.892-82.6-184.495-184.512-184.495l.003-.011v.003zm84.615 266.109c-3.304 5.419-10.399 7.14-15.821 3.811-43.318-26.461-97.854-32.452-162.079-17.78-6.189 1.41-12.357-2.467-13.77-8.659-1.415-6.191 2.448-12.359 8.652-13.769 70.284-16.057 130.572-9.143 179.207 20.578 5.421 3.326 7.14 10.397 3.811 15.819zm22.584-50.238c-4.166 6.767-13.022 8.904-19.786 4.742-49.597-30.485-125.194-39.315-183.857-21.504-7.607 2.296-15.642-1.991-17.949-9.584-2.293-7.61 1.996-15.627 9.592-17.94 67.006-20.331 150.308-10.484 207.264 24.514 6.764 4.166 8.901 13.023 4.737 19.779l.002-.004-.003-.003zm1.94-52.313c-59.468-35.32-157.578-38.567-214.353-21.336-9.116 2.766-18.759-2.379-21.521-11.499-2.762-9.123 2.381-18.756 11.502-21.526 65.175-19.786 173.52-15.963 241.984 24.68 8.218 4.87 10.908 15.459 6.037 23.648-4.849 8.2-15.468 10.904-23.641 6.033h-.008z"/>
                </svg>
            ),
            label: "Spotify"
        }
    ];

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
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <a key={index}
                                href={social.href}
                                title={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-cyan-400 transition-colors"
                                aria-label={social.label}>
                                {social.icon}
                            </a>
                        ))}
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