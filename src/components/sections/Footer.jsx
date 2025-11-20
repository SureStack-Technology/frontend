import React, { useState } from "react";
import PrivacyPolicyModal from "../common/PrivacyPolicyModal";
import TermsOfUseModal from "../common/TermsOfUseModal";
import { Shield, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

// Modularized Footer Link Column
const FooterLinkColumn = ({ title, links }) => (
  <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
          {links.map((link, index) => (
              <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm">{link.label}</a>
              </li>
          ))}
      </ul>
  </div>
);

const Footer = () => {

  const productLinks = [
      { href: "#features", label: "Features" },
      { href: "#", label: "Documentation" },
      { href: "#", label: "Whitepaper" },
  ];

  const companyLinks = [
      { href: "#team", label: "Team" },
      { href: "#blog", label: "Blog" },
      { href: "#contact", label: "Contact" },
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
                        <span className="ml-2 text-xl font-bold text-white">Sure Stack RISK Protocol</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                        The first crypto risk assessment platform with real-time volatility integration.
                    </p>
                </div>

                <FooterLinkColumn title="Product" links={productLinks} />
                <FooterLinkColumn title="Company" links={companyLinks} />

                {/* Connection Column */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Connect</h3>
                    <div className="flex space-x-4">
                        <a href="https://x.com/sure_stack?s=11" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Twitter />
                        </a>
                        <a href="https://github.com/surestack" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/company/surestacksecurity" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Linkedin />
                        </a>
                        <a href="https://www.youtube.com/@SureStack" target="_blank" className="text-slate-400 hover:text-cyan-400">
                            <Youtube />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center">
                <p className="text-slate-400 text-sm">© 2025 SureStack. All rights reserved.</p>
                <div className="flex space-x-6">
                    <button onClick={() => setShowTerms(true)} 
                            className="text-slate-400 hover:text-cyan-400 text-sm">
                        Terms of Use
                    </button>
                    <button onClick={() => setShowPrivacy(true)}
                            className="text-slate-400 hover:text-cyan-400 text-sm">
                        Privacy Policy
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