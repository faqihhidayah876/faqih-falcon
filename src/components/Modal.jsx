import { FaTimes } from "react-icons/fa";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-fade-in-up">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
          <FaTimes size={20} />
        </button>
        {title && <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>}
        {children}
      </div>
    </div>
  );
}