// src/components/Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-brandBlue text-xl">
          MK <span className="text-blue-500">AUTO</span> WORLD
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 font-semibold text-brandBlue uppercase text-sm">
          <a href="#brands" className="hover:text-blue-500 transition">Brands</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Mobile Toggle Button (Visible only on Mobile) */}
        <button className="md:hidden text-brandBlue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 font-bold text-brandBlue">
            <a href="#brands" onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-gray-50">View Brands</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg py-2">Contact Us</a>
            <div className="pt-4 text-xs text-gray-400">GSTIN: 33ALMPR6908D1ZZ</div>
          </div>
        </div>
      )}
    </nav>
  );
};