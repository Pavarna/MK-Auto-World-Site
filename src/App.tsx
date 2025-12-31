import { useState } from "react";
import "./App.css";
import type { BRANDS_DATA } from "./data/brands";
import { BrandGrid } from "./components/BrandGrid";
import { MainPage } from "./components/MainPage";
import { Contact } from "./components/Contact";
import { PartsModal } from "./components/PartsModal";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  const [selectedBrand, setSelectedBrand] = useState<
    (typeof BRANDS_DATA)[0] | null
  >(null);

  return (
    <div className="scroll-smooth">
      <Navbar />

      <MainPage />

      <main id="brands">
        <BrandGrid onBrandClick={(brand) => setSelectedBrand(brand)} />
      </main>

      <Contact />

      <PartsModal
        isOpen={!!selectedBrand}
        onClose={() => setSelectedBrand(null)}
        brandName={selectedBrand?.name || ""}
      />

      <Footer />
    </div>
  );
}

export default App;
