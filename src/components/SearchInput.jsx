import { FaSearch } from "react-icons/fa";

export default function SearchInput({ placeholder = "Search anything..." }) {
  return (
    <div className="relative w-full max-w-md flex items-center">
      <FaSearch className="absolute left-4 text-gray-400 text-sm" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-100 py-2.5 pl-10 pr-16 rounded-full text-sm outline-none focus:bg-white focus:ring-2 focus:ring-gray-100 transition-all text-gray-600"
      />
      <div className="absolute right-2 flex items-center justify-center bg-white border border-gray-200 rounded-full px-2.5 py-1 text-[10px] text-gray-400 font-semibold shadow-sm">
        ⌘ K
      </div>
    </div>
  );
}