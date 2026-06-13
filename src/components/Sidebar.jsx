import {
  FaHome,
  FaUserInjured,
  FaSpa,
  FaCalendarAlt,
  FaCog,
  FaQuestionCircle,
  FaBan, FaBox, FaUsers, FaPlus, FaTags, FaFlask, FaShoppingCart,
  FaUserCog,
  FaSignOutAlt // Ditambahkan untuk ikon logout
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"; // Ditambahkan useNavigate

export default function Sidebar() {
  const navigate = useNavigate(); // Inisialisasi navigate

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.removeItem("user_session"); // Hapus sesi login
    navigate("/"); // Kembali ke Landing Page
  };

  // Menggunakan styling biru modern ala Shopeers referensi
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-3 my-1 font-medium text-sm transition-all
    ${
      isActive
        ? "text-blue-600 bg-blue-50"
        : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"
    }`;

  return (
    <div className="flex flex-col min-h-screen w-64 bg-white border-r border-gray-100 p-6">
      {/* --- LOGO AREA --- */}
      <div className="flex items-center space-x-3 mb-10">
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center p-1">
          <img 
            src="https://i.ibb.co.com/814mnML/logo-klinik-CRM.png" 
            alt="GlowCare Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-bold text-xl text-gray-800 tracking-tight">
          GlowCare
        </span>
      </div>

      {/* --- MENU NAVIGASI UTAMA --- */}
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <NavLink to="/dashboard" className={menuClass}>
              <FaHome className="mr-3 text-lg" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/patients" className={menuClass}>
              <FaUserInjured className="mr-3 text-lg" /> Patient List
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaUsers className="mr-3 text-lg" /> Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={menuClass}>
              <FaUserCog className="mr-3 text-lg" />User
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointments" className={menuClass}>
              <FaCalendarAlt className="mr-3 text-lg" /> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={menuClass}>
              <FaSpa className="mr-3 text-lg" /> Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={menuClass}>
              <FaFlask className="mr-4 text-xl" /> Beauty Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaShoppingCart className="mr-3 text-lg" /> Orders
            </NavLink>
          </li>
        </ul>
      </div>

      {/* --- FOOTER & SETTING --- */}
      <div className="mt-auto pt-6 border-t border-gray-100 space-y-1">
        <NavLink to="/settings" className={menuClass}>
          <FaCog className="mr-3 text-lg" /> Settings
        </NavLink>
        <NavLink to="/help" className={menuClass}>
          <FaQuestionCircle className="mr-3 text-lg" /> Help & Support
        </NavLink>
        
        {/* --- TOMBOL LOGOUT YANG DITAMBAHKAN --- */}
        <button 
          onClick={handleLogout}
          className="flex cursor-pointer items-center rounded-xl p-3 my-1 font-medium text-sm transition-all w-full text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <FaSignOutAlt className="mr-3 text-lg" /> Logout
        </button>

        {/* Upgrade Card ala Shopeers, disesuaikan teksnya untuk Klinik */}
        <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 text-white shadow-lg shadow-blue-600/30">
          <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-3">
            <FaSpa />
          </div>
          <h4 className="font-bold mb-1">Upgrade to Premium!</h4>
          <p className="text-xs text-blue-100 mb-4 opacity-80">
            Unlock full clinic management features and reports.
          </p>
          <button className="w-full bg-blue-500 hover:bg-blue-400 py-2 rounded-xl text-sm font-semibold transition-colors">
            Upgrade premium
          </button>
        </div>
      </div>
    </div>
  );
}