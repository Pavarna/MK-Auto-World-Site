// src/components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & GST */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter italic">
            MK AUTO WORLD
          </h3>
          <p className="text-blue-200 text-sm">
            MK Auto World: Premium Multi-Brand Spare Parts. Quality you
            can trust.
          </p>
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-widest text-blue-300 block">
              Registered GSTIN
            </span>
            <span className="font-mono text-sm">33ALMPR6908D1ZZ</span>
          </div>
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-widest text-blue-300 block">
              GST Registration Date
            </span>
            <span className="font-mono text-sm">10-09-2024</span>
          </div>
        </div>

        {/* Quick Address */}
        <div>
          <h4 className="font-bold mb-4 border-b border-blue-800 pb-2">
            Address
          </h4>
          <p className="text-blue-100 text-sm leading-relaxed">
            Flat No.D-2, K T V R Sai Shelter Apartment,
            <br />
            Dr.Ambethkar Road, Velandipalayam, Near Sindhi School,
            <br />
            Coimbatore-641025, Tamil Nadu, India
          </p>
        </div>

        {/* Contact Quick Links */}
        <div>
          <h4 className="font-bold mb-4 border-b border-blue-800 pb-2">
            Connect
          </h4>
          <ul className="text-sm space-y-2 text-blue-100">
            <li>📞 +91 89254 05656</li>
            <li>✉️ sales@mkautoworld.com</li>
            <li>📸 @mk.autoworld</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-blue-900 text-center text-[11px] text-blue-400">
        © 2026 MK Auto World. All Rights Reserved. Designed by Pavarna.
      </div>
    </footer>
  );
};
