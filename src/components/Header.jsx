import { FaRegBell, FaRegSun } from "react-icons/fa";

// Import Komponen Kustom
import SearchInput from "./SearchInput";
import IconButton from "./IconButton";

export default function Header() {
  return (
    <div id="header-container" className="flex justify-between items-center p-4 mb-4 bg-transparent font-inter">
      
      {/* 1. Menerapkan Komponen SearchInput Kustom */}
      <SearchInput placeholder="Search anything..." />

      {/* --- KANAN: Icons & Profile --- */}
      <div id="icons-container" className="flex items-center space-x-3 md:space-x-5">
        
        {/* 2. Menerapkan Komponen IconButton Kustom */}
        <IconButton icon={<FaRegSun />} onClick={() => console.log("Theme clicked")} />
        <IconButton icon={<FaRegBell />} hasNotification={true} onClick={() => console.log("Notification clicked")} />

        {/* Profile Avatar (Menggunakan link foto profil aslimu) */}
        <div className="pl-2">
          <img
            id="profile-avatar"
            src="https://i.ibb.co.com/JW8fVNyW/1777967923-muka.png"
            className="w-10 h-10 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:ring-2 hover:ring-gray-100 transition-all object-cover"
            alt="Profile Faqih"
          />
        </div>

      </div>
    </div>
  );
}