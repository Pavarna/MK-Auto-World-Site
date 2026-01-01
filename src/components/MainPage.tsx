import { useState } from "react";
import { CardModal } from "./CardModal";

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-brandBlue to-blue-800 text-white pt-28 pb-24 px-6"
    >
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Genuine Car Spare Parts for{" "}
            <span className="text-blue-300">All Brands</span>.
          </h1>
          <div className="space-y-4">
            <p className="text-xs font-mono text-blue-300">
              GSTIN: 33BVSPS1377N1ZP
            </p>
            <p className="text-lg italic opacity-90 leading-relaxed">
              We provide top-quality car parts to help workshops and retailers
              succeed. With our nationwide delivery, you get the right parts
              exactly when you need them.
              <br />
              <p className="text-white mt-4 text-lg italic">
                OEM & Aftermarket Car Parts Supplier - Reliable Sourcing for all
                your requirements.
              </p>
              <br />
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block bg-white text-brandBlue px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition shadow-lg"
          >
            Enquire Now
          </a>
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
                Click to view Business Card
              </div>
            </div>
            <p className="text-white-500 mt-4 text-sm italic">
              Quality parts for every road, every journey.
            </p>
          </div>
        </div>
        <CardModal isCardModalOpen={isOpen} setIsCardModalOpen={setIsOpen} />
      </div>
    </section>
  );
};
