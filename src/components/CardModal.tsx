interface CardModalProps {
  isCardModalOpen: boolean;
  setIsCardModalOpen: (open: boolean) => void;
}

export const CardModal = ({
  isCardModalOpen,
  setIsCardModalOpen,
}: CardModalProps) => {
  return (
    <>
      {isCardModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setIsCardModalOpen(false)}
        >
          <div className="relative max-w-2xl w-full">
            <button
              className="absolute -top-12 right-0 text-brandBlue hover:text-blue-400 text-lg font-bold"
              onClick={() => setIsCardModalOpen(false)}
            >
              ✕ Close
            </button>
            <img
              src="/logos/MKAutoWorldCard.jpeg"
              alt="MK Auto World Card"
              className="w-full h-auto rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <p className="mt-4 text-blue-200 font-semibold italic text-center">
              MK Auto World - Genuine OEM & Aftermarket Car Parts Supplier -
              Reliable Sourcing for all your requirements.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
