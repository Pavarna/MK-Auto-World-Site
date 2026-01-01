import { useState } from "react";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & GST */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter italic">
            MK AUTO WORLD
          </h3>
          <p className="text-blue-200 text-sm">
            Quality parts, Timely delivery.
          </p>
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-widest text-blue-300 block">
              Registered GSTIN
            </span>
            <span className="font-mono text-sm">33BVSPS1377N1ZP</span>
            <br />
            <span className="font-mono text-xs italic">Since 2024</span>
          </div>
        </div>

        {/* Quick Address & Business Card */}
        <div>
          <h4 className="font-bold mb-4 border-b border-blue-800 pb-2">
            Address
          </h4>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            210, KTVR Sai Shelter,
            <br />
            Dr. Ambedkar Road, Velandipalayam,
            <br />
            Coimbatore-641025,
            <br />
            Tamil Nadu, India
          </p>
        </div>

        {/* Contact Quick Links */}
        <div>
          <h4 className="font-bold mb-4 border-b border-blue-800 pb-2">
            Connect
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span>📞</span>
              <a
                href="tel:+918610735933"
                className="hover:text-blue-400 transition-colors font-semibold"
              >
                +91 86107 35933
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span>📧</span>
              <a
                href="mailto:mkautoworldx@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                mkautoworldx@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span>📸</span>
              <a
                href="https://www.instagram.com/mk.autoworld/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                @mk.autoworld
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">💬</span>
              <a
                href="https://wa.me/918610735933"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors font-bold"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-blue-900 text-center text-[11px] text-blue-400">
        © 2026 MK Auto World. All Rights Reserved. Designed by{" "}
        <a
          href="https://www.linkedin.com/in/pavarna-s-7b99911b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors underline decoration-blue-800 underline-offset-2"
        >
          Pavarna
        </a>
        .
      </div>

      {/* --- MODAL FOR BUSINESS CARD --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute -top-12 right-0 text-brandBlue hover:text-red-400 text-xl font-bold flex items-center gap-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕ Close
            </button>
            <img
              src="/logos/MKAutoWorldCard.jpeg"
              alt="MK Auto World Card Full"
              className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-white/20 animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </footer>
  );
};
