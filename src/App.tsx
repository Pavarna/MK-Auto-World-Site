import { useState } from "react";
import "./App.css";
import type { BRANDS_DATA } from "./data/brands";
import { BrandGrid } from "./components/BrandGrid";
import { MainPage } from "./components/MainPage";
import { Contact } from "./components/Contact";
import { PartsModal } from "./components/PartsModal";
import { Footer } from "./components/Footer";

function App() {
  const [selectedBrand, setSelectedBrand] = useState<
    (typeof BRANDS_DATA)[0] | null
  >(null);

  return (
    <div className="scroll-smooth">
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-brand-blue text-xl md:text-2xl tracking-tighter"
          >
            MK <span className="text-blue-500">AUTO</span> WORLD
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-brand-blue font-semibold uppercase text-sm tracking-widest">
            <a
              href="#brands"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Brands
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <MainPage />

      <main id="brands">
        <BrandGrid onBrandClick={(brand) => setSelectedBrand(brand)} />
      </main>

      <Contact />

      <PartsModal
        isOpen={!!selectedBrand}
        onClose={() => setSelectedBrand(null)}
        brandName={selectedBrand?.name || ""}
        parts={selectedBrand?.parts || []}
      />

      <Footer />
    </div>
  );
}

export default App;
