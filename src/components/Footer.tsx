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
            MK Auto World: Premium Multi-Brand Spare Parts. Quality you can
            trust.
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
          <ul className="space-y-4">
            {/* Phone Link - Opens Dialer */}
            <li className="flex items-center gap-3">
              <span>📞</span>
              <a
                href="tel:+918925405656"
                className="hover:text-blue-600 transition-colors font-semibold"
              >
                +91 89254 05656
              </a>
            </li>

            {/* Gmail Link - Opens Email App */}
            <li className="flex items-center gap-3">
              <span>📧</span>
              <a
                href="mailto:mkautoworldx@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                mkautoworldx@gmail.com
              </a>
            </li>

            {/* Instagram Link - Opens Instagram App/Web */}
            <li className="flex items-center gap-3">
              <span>📸</span>
              <a
                href="https://www.instagram.com/mk.autoworld/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                @mk.autoworld
              </a>
            </li>

            {/* WhatsApp Link - Opens WhatsApp Chat directly */}
            <li className="flex items-center gap-3">
              <span className="text-green-500">💬</span>
              <a
                href="https://wa.me/918925405656?text=Hi%20MK%20Auto%20World,%20I%20am%20inquiring%20about%20spare%20parts."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors font-bold"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-blue-900 text-center text-[11px] text-blue-400">
        © 2026 MK Auto World. All Rights Reserved. Designed by Pavarna.
      </div>
    </footer>
  );
};
