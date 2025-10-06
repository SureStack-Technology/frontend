import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex menu-font">
                    <NavLink className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-300 text-4xl font-bold tracking-widest"
                            to={"/"} exact >Home</NavLink>
                    <NavLink className={({ isActive }) => isActive 
                                        ? 'inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 bg-blue-700 hover:text-blue-200' 
                                        : 'inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-200'}
                            to={"/about"}>About Us</NavLink>
                    <NavLink className={({ isActive }) => isActive 
                                        ? 'inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 bg-blue-700 hover:text-blue-200' 
                                        : 'inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-200'}
                            to={"/contact"}>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}