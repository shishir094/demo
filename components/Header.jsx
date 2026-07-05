import {NavLink} from "react-router-dom"
import { useState } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'; // Added menu icons

function Header() {
  // State to track if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 px-6 py-4 md:px-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LEFT SIDE: Brand Logo / Name */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <img src="/public/logo.png" alt="company logo" className="h-20 w-20 object-contain" />
          </span> 
          <span className="text-xl font-bold tracking-tight text-teal-700 font-sans">
            
            <NavLink to="/">
            सफाGunj
            </NavLink>
          </span>
        </div>

        {/* RIGHT SIDE: Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {/* <a href="#services" >सेवाहरू</a>
          <a href="#pricing" className="hover:text-teal-600 transition-colors">मूल्य विवरण</a>
          <a href="#about" className="hover:text-teal-600 transition-colors">हाम्रो बारेमा</a> */}

          <NavLink to="/service" className="hover:text-teal-600 transition-colors" >
          सेवाहरू
          </NavLink>
          <NavLink to="/pricing" className="hover:text-teal-600 transition-colors">
          मूल्य विवरण
          </NavLink>
          <NavLink to="/about" className="hover:text-teal-600 transition-colors">
          हाम्रो बारेमा
          </NavLink>
        </nav>

        {/* MOBILE MENU BUTTON: Visible only on small screens */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-600 hover:text-teal-600 focus:outline-none text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 font-medium text-slate-600">
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition-colors py-1">सेवाहरू</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition-colors py-1">मूल्य विवरण</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-teal-600 transition-colors py-1">हाम्रो बारेमा</a>
        </nav>
      )}
    </header>
  );
}

export default Header;