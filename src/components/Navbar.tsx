import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isCardModalOpen, setIsCardModalOpen] = useState(false); // For business card modal

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="../logos/MKAutoWorldLogo.jpg"
              alt="MK Auto World Logo"
              className="h-10 w-auto rounded-md object-contain"
            />
            <div className="font-bold text-brandBlue text-xl tracking-tighter">
              MK <span className="text-blue-500">AUTO</span> WORLD
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-brandBlue uppercase text-sm">
            <a href="#brands" className="hover:text-blue-500 transition">
              Brands
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
            {/* Trigger for Modal */}
            <button
              onClick={() => setIsCardModalOpen(true)}
              className="hover:text-blue-500 transition uppercase"
            >
              Business Card
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-brandBlue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 space-y-4 font-bold text-brandBlue">
              <a
                href="#brands"
                onClick={() => setIsOpen(false)}
                className="text-lg py-2 border-b border-gray-50"
              >
                View Brands
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-lg py-2 border-b border-gray-50"
              >
                Contact Us
              </a>
              {/* Trigger for Modal on Mobile */}
              <button
                onClick={() => {
                  setIsCardModalOpen(true);
                  setIsOpen(false);
                }}
                className="text-center text-lg py-2"
              >
                View Business Card
              </button>
              <div className="pt-4 text-xs text-gray-400 font-mono">
                GSTIN: 33ALMPR6908D1ZZ
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* --- BUSINESS CARD MODAL --- */}
      {isCardModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setIsCardModalOpen(false)}
        >
          <div className="relative max-w-2xl w-full">
            <button
              className="absolute -top-12 right-0 text-brandBlue hover:text-blue-400 text-lg font-bold"
              onClick={() => setIsCardModalOpen(false)}
            >
              ✕ Close
            </button>
            <img
              src="/logos/MKAutoWorldCard.jpeg"
              alt="MK Auto World Card"
              className="w-full h-auto rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </>
  );
};
