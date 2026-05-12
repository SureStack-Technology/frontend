import React, { useState, useMemo } from "react";
import { Menu, X, Shield, LogIn, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from '../auth/LoginModal';
import useAuthStore from "../../stores/useAuthStore";
import useLanguageStore from '../../stores/useLanguageStore';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Navigation = () => {

    const pathname = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the Login Modal
    const { t, language } = useLanguageStore();

    // Get state and action from Zustand
    const { isLoggedIn, user, logout } = useAuthStore();
    
    // Define navigation items. Use 'to' for internal Link routes, 'href' for external or section anchors.
    const navItems = [
        { type: 'anchor', href: "#features", label: t('nav.features'), protected: false  },
        { type: 'anchor', href: "#pricing", label: t('nav.pricing'), protected: false  },
        { type: 'anchor', href: "#team", label: t('nav.team'), protected: false },
        { type: 'anchor', href: "#our_values", label: t('nav.values'), protected: false },
        { type: 'anchor', href: "#blog", label: t('nav.blog'), protected: false },
        { type: 'anchor', href: "#earlybird", label: t('nav.early_bird'), protected: false },
        { type: 'anchor', href: "#contact", label: t('nav.contact'), protected: false },
        { type: 'route', to: "/dashboard", label: t('nav.dashboard'), protected: true },
        { type: 'route', to: "/documents", label: t('nav.documents'), protected: true },
        { type: 'route', to: "https://poc.surestack.tech", label: t('nav.concept'), protected: true },
    ];

    const handleLogout = () => {
        logout();
    };


    const NavLinkItem = ({ item, isMobile = false }) => {

        const commonClasses = isMobile 
            ? "block px-3 py-2 text-slate-300 hover:text-cyan-400"
            : "sidebar-link rounded-md transition-all duration-200 font-subheading";

        const clickHandler = () => {
            setIsMenuOpen(false);
            // If it's a login button, open the modal
            if (item.type === 'login') {
                setIsModalOpen(true);
            }
        };

        if (isLoggedIn){
            if (!item.protected) {
                return null; // Don't show non protected routes if logged in
            }
        } else {
            if (item.protected) {
                return null; // Don't show protected routes if logged out
            }
        }
        
        // For internal router links (e.g., Dashboard)
        if (item.type === 'route') {
            return (
                <Link to={item.to} onClick={clickHandler} 
                                className={`navigation-link flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 font-subheading font-semibold ${pathname === item.to ? 'active bg-safe/20 text-safe border border-safe/50 shadow-neon-safe' : 'text-slate-300 hover:bg-safe/10 hover:text-safe border border-transparent'}`}>
                    {item.label}
                </Link>
            );
        }
        
        // For section anchor links (e.g., #features)
        if (item.type === 'anchor') {

            return (
                <a href={item.href} onClick={clickHandler} 
                                className={`navigation-link flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 font-subheading font-semibold ${pathname.hash === item.href ? 'active bg-safe/20 text-safe border border-safe/50 shadow-neon-safe' : 'text-slate-300 hover:bg-safe/10 hover:text-safe border border-transparent'}`}>
                    {item.label}
                </a>
            );
        }
        
        return null;
    };

    return (
        <>
        <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Shield className="h-8 w-8 text-neon-cyan" />
                        {/* Logo always links to the home route "/" */}
                        <Link to="/" className="ml-2 text-lg font-heading">SURESTACK RISK PROTOCOL</Link>
                    </div>
                    
                    {/* Desktop Navigation Links and Auth Buttons */}
                    <div className="hidden md:flex space-x-8 items-center">

                        {/* Standard Links */}
                        {navItems.map((item, index) => <NavLinkItem key={index} item={item} />)}

                        <LanguageSwitcher />

                        {/* Conditional Login/Logout Button */}
                        {isLoggedIn ? (
                            <button onClick={handleLogout} 
                                    className="flex items-center text-red-400 hover:text-red-300 font-semibold font-subheading transition">
                                <LogOut className="w-5 h-5 mr-1" /> Logout
                            </button>
                        ) : (
                            <button onClick={() => setIsModalOpen(true)} 
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg font-subheading font-semibold transition flex items-center">
                                <LogIn className="w-5 h-5 mr-2" /> Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
                <div className="px-2 pt-2 pb-3 space-y-1">

                {navItems.map((item, index) => <NavLinkItem key={index} item={item} isMobile={true} />)}

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