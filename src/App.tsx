import "./App.css";
import { BrandGrid } from "./components/BrandGrid";
import { MainPage } from "./components/MainPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <MainPage />

      <main id="brands">
        <BrandGrid />
      </main>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
