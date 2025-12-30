export const MainPage = () => {
  return (
    <section className="bg-gradient-to-r from-brandBlue to-blue-800 text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Premium Spare Parts for <span className="text-blue-300">All Brands</span>.
          </h1>
          <p className="text-lg opacity-90">
            Registered GSTIN: 33ALMPR6908D1ZZ <br/>
            Expertly sourcing genuine aftermarket parts for Benz, BMW, Audi, Volvo, Tata, and Honda.<br/>
            Quality parts for every road, every journey.
          </p>
          <button className="bg-white text-brandBlue px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition shadow-lg">
            <a href="#contact"> Inquire Now</a>
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="h-64 w-full bg-blue-400 rounded-2xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};