import React from "react";
import { Shield, Twitter, Github, Linkedin } from 'lucide-react';

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

    return (
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

                    {/* Connect Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-cyan-400"><Twitter /></a>
                            <a href="https://github.com/surestack" className="text-slate-400 hover:text-cyan-400"><Github /></a>
                            <a href="#" className="text-slate-400 hover:text-cyan-400"><Linkedin /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-400 text-sm">
                    © 2025 SureStack. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;