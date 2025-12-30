import { BRANDS_DATA } from "../data/brands";

interface BrandGridProps {
  onBrandClick: (brand: (typeof BRANDS_DATA)[0]) => void;
}

export const BrandGrid = ({ onBrandClick }: BrandGridProps) => {
  return (
    <section className="py-20 bg-brandLight">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brandBlue mb-12">
          Expertise in Leading Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {BRANDS_DATA.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onBrandClick(brand)} // This triggers the modal in App.tsx
              className="p-4 md:p-8 group cursor-pointer bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Real Brand Logo Container */}
              <div className="h-20 w-full flex items-center justify-center mb-6">
                <img
                  src={`/logos/${brand.logo}`} // Automatically looks in public/logos/
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <h3 className="font-bold text-xl mb-2 text-brandBlue">
                {brand.name}
              </h3>
              <p className="text-gray-500 text-sm">
                Click to view available spare parts
              </p>

              <div className="mt-4 text-blue-500 font-semibold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                View Parts →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
