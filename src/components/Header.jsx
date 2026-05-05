import { FaBell, FaSearch, FaRegBell, FaRegSun } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div id="header-container" className="flex justify-between items-center p-4 mb-4 bg-transparent font-inter">
      
      {/* --- KIRI: Search Bar ala Shopeers --- */}
      <div id="search-bar" className="relative w-full max-w-md flex items-center">
        <FaSearch className="absolute left-4 text-gray-400 text-sm" />
        <input
          id="search-input"
          type="text"
          placeholder="Search anything..."
          className="w-full bg-gray-50 border border-gray-100 py-2.5 pl-10 pr-16 rounded-full text-sm outline-none focus:bg-white focus:ring-2 focus:ring-gray-100 transition-all text-gray-600 placeholder-gray-400"
        />
        {/* Aksen Shortcut Keyboard "⌘ K" */}
        <div className="absolute right-2 flex items-center justify-center bg-white border border-gray-200 rounded-full px-2.5 py-1 text-[10px] text-gray-400 font-semibold shadow-sm">
          ⌘ K
        </div>
      </div>

      {/* --- KANAN: Icons & Profile --- */}
      <div id="icons-container" className="flex items-center space-x-3 md:space-x-5">
        
        {/* Ikon Light/Dark Mode (Sun) */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors border border-transparent hover:border-gray-200">
          <FaRegSun className="text-lg" />
        </button>

        {/* Ikon Notifikasi (Bell) */}
        <button className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors border border-transparent hover:border-gray-200">
          <FaRegBell className="text-lg" />
          {/* Titik Notifikasi Kecil di sudut kanan atas bel */}
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-gray-800 rounded-full border border-white"></span>
        </button>

        {/* Profile Avatar (Hanya gambar, tanpa teks) */}
        <div className="pl-2">
          <img
            id="profile-avatar"
            src="https://i.ibb.co.com/JW8fVNyW/1777967923-muka.png"
            className="w-10 h-10 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:ring-2 hover:ring-gray-100 transition-all"
            alt="Profile"
          />
        </div>

      </div>
    </div>
  );
}