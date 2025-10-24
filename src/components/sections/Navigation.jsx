import React, { useState } from "react";
import { Menu, X, Shield, LogIn, LogOut } from 'lucide-react';
import LoginModal from '../auth/LoginModal';
import useAuthStore from "../../stores/useAuthStore";

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the Login Modal

    // Get state and action from Zustand
    const { isLoggedIn, user, logout } = useAuthStore();
    
    // Link data is an array to avoid repetition in JSX
    const navLinks = [
        { href: "#home",     label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#team",     label: "Team" },
        { href: "#blog",     label: "Blog" },
        { href: "#contact",  label: "Contact" },
    ];

    const handleLogout = () => {
        // 1. Clear state in Zustand
        logout();
        // 2. You might clear localStorage/sessionStorage here if needed
    };


    return (
        <>
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

                        {/* Conditional Login/Logout Button */}
                        {isLoggedIn ? (
                            <>
                            <span className="text-slate-400 text-sm">Hello, {user?.name || user?.email}</span>
                            <button onClick={handleLogout} 
                                    className="flex items-center text-red-400 hover:text-red-300 font-semibold transition">
                                <LogOut className="w-5 h-5 mr-1" /> Logout
                            </button>
                            </>
                        ) : (
                            <button onClick={() => setIsModalOpen(true)} 
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center">
                                <LogIn className="w-5 h-5 mr-2" /> Login
                            </button>
                        )}
                    </div>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
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

                        {/* Mobile Login/Logout Button */}
                        {isLoggedIn ? (
                            <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-red-400 hover:text-red-300">
                            <LogOut className="inline w-5 h-5 mr-2" /> Logout
                            </button>
                        ) : (
                            <button onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-cyan-400 hover:text-cyan-300">
                            <LogIn className="inline w-5 h-5 mr-2" /> Login
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>

        {/* Login Modal */}
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
export default Navigation;