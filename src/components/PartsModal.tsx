interface Props {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
}

export const PartsModal = ({ isOpen, onClose, brandName }: Props) => {
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
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-brandBlue text-white rounded-full p-1 mt-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </span>
              <span className="text-gray-800">
                <strong>Custom Sourcing:</strong> If you need it, we find it. We
                deliver all automotive parts as per your specific order.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-brandBlue text-white rounded-full p-1 mt-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </span>
              <span className="text-gray-800">
                <strong>
                  All types of parts, as per your order, will be delivered.
                </strong>
              </span>
            </li>
          </ul>
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
