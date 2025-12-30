export const MainPage = () => {
  return (
    <section className="bg-gradient-to-r from-brandBlue to-blue-800 text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Premium Spare Parts for{" "}
            <span className="text-blue-300">All Brands</span>.
          </h1>
          <div className="space-y-2">
            <p className="text-xs font-mono text-blue-300">
              GSTIN: 33ALMPR6908D1ZZ
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              Expertly sourcing genuine aftermarket parts for Benz, BMW, Audi,
              Volvo, Tata, and Honda. Quality parts for every road, every
              journey.
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

        {/* The Business Card centered beside the text */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative group max-w-sm w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            {/* The Card Image */}
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
              <img
                src="/logos/MKAutoWorldCard.jpeg"
                alt="MK Auto World Business Card"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
