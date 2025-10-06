import React, { useState } from "react";
import { Menu, X, Shield } from 'lucide-react';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    // Link data is an array to avoid repetition in JSX
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#team", label: "Team" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Shield className="h-8 w-8 text-cyan-400" />
                        <span className="ml-2 text-xl font-bold text-white">SureStack RISK Protocol</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-slate-300 hover:text-cyan-400 transition">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                       {navLinks.map(link => (
                            <a key={link.href} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className="block px-3 py-2 text-slate-300 hover:text-cyan-400">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navigation;