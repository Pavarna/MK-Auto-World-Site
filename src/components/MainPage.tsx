import { useState } from "react";

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-brandBlue to-blue-800 text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Genuine Spare Parts for{" "}
            <span className="text-blue-300">All Brands</span>.
          </h1>
          <div className="space-y-2">
            <p className="text-xs font-mono text-blue-300">
              GSTIN: 33ALMPR6908D1ZZ
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              OEM & Aftermarket Auto Parts Supplier - Reliable Sourcing for all your requirements.<br/>
              Quality parts for every road, every journey.
            </p>
          </div>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-white text-brandBlue px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition shadow-lg"
            >
              Inquire Now
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className="relative group max-w-sm w-full cursor-zoom-in"
            onClick={() => setIsOpen(true)} // Open modal on click
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative bg-white p-2 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
              <img
                src="/logos/MKAutoWorldLogo.jpg"
                alt="MK Auto World Business Card"
                className="w-full h-auto rounded-xl object-contain"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Click to Expand
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)} // Close when clicking backdrop
          >
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              <button
                className="absolute -top-12 right-0 text-black text-3xl font-bold hover:text-blue-300 transition"
                onClick={() => setIsOpen(false)}
              >
                &times; Close
              </button>

              <img
                src="/logos/MKAutoWorldCard.jpeg"
                alt="MK Auto World Business Card Full View"
                className="w-full h-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />

              <p className="mt-4 text-blue-200 font-semibold italic text-center">
                MK Auto World - Genuine OEM & Aftermarket Auto Parts Supplier - Reliable Sourcing for all your requirements.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
