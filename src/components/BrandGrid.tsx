import { BRANDS_DATA } from "../data/brands";

export const BrandGrid = () => {
  return (
    <section className="py-18 bg-brandLight">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brandBlue mb-8">
          Expertise in Leading Brands
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Find all your car spare parts in one place. From Engine and Brake
          parts to Lights and Filters,<br/>
          <strong className="text-brandBlue"> MK AUTO WORLD</strong> provides
          the quality components your workshop can depend on.
        </p>
        <p className="text-brandBlue-500 mt-4 text-sm italic font-bold">
          From Maruti to Mercedes, we provide spare parts for all major brands.
          MK Auto World is your complete partner for every repair.
        </p>
        <div className="grid grid-cols-2 py-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              className="p-4 md:p-8 group cursor-pointer bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Real Brand Logo Container */}
              <div className="h-20 w-full flex items-center justify-center mb-4">
                <img
                  src={`/logos/${brand.logo}`}
                  alt={`${brand.id} logo`}
                  className="max-h-full max-w-[80%] transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
        <span className="text-brandBlue-300 italic">
          * The logos and the images as shown above/in this website is for
          reference only.
        </span>
      </div>
    </section>
  );
};
