interface Props {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  parts: string[];
}

export const PartsModal = ({ isOpen, onClose, brandName, parts }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-brandBlue p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">{brandName} Spare Parts</h3>
          <button
            onClick={onClose}
            className="text-3xl leading-none text-black hover:text-blue-200 transition-all duration-300 p-2 cursor-pointer"
            aria-label="Close modaal"
          >
            &times;
          </button>
        </div>

        <ul className="p-6 space-y-3">
          {parts.map((part, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {part}
            </li>
          ))}
        </ul>

        <div className="p-4 bg-gray-50 text-center">
          <button
            onClick={onClose}
            className="text-sm font-semibold text-brandBlue hover:underline"
          >
            Close List
          </button>
        </div>
      </div>
    </div>
  );
};
