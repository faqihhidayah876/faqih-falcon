import { FaHome, FaUserInjured, FaSpa, FaCalendarAlt, FaPlus, FaBan, FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"

export default function Sidebar() {
      const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ?
            "text-pink-600 bg-pink-100 font-extrabold" :
            "text-gray-600 hover:text-pink-600 hover:bg-pink-100 hover:font-extrabold"
        }`
  return (
    <div id="sidebar" className="flex flex-col min-h-screen w-80 bg-white p-8 shadow-lg">
      <div id="sidebar-logo" className="flex flex-col mb-10">
        <span id="logo-title" className="font-poppins text-[48px] text-gray-900 font-bold leading-none">
          GlowCare<b id="logo-dot" className="text-pink-500">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400 text-sm">
          Beauty Clinic Admin Dashboard
        </span>
      </div>

      <div id="sidebar-menu" className="mt-10 flex-1">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <FaHome className="mr-4 text-xl" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/patients" className={menuClass}>
              <FaUserInjured className="mr-4 text-xl" /> Patient List
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/appointments" className={menuClass}>
              <FaCalendarAlt className="mr-4 text-xl" /> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/services" className={menuClass}>
              <FaSpa className="mr-4 text-xl" /> Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/error-400" className={menuClass}>
              <FaBan className="mr-4 text-xl" /> Error 400
            </NavLink>
          </li>
          <li>
            <NavLink to="/error-401" className={menuClass}>
              <FaBan className="mr-4 text-xl" /> Error 401
            </NavLink>
          </li>
          <li>
            <NavLink to="/error-403" className={menuClass}>
              <FaBan className="mr-4 text-xl" /> Error 403
            </NavLink>
          </li>
        </ul>
      </div>

      <div id="sidebar-footer" className="mt-auto">
        <div id="footer-card" className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-4 rounded-xl shadow-lg mb-6 flex flex-col items-center">
          <div id="footer-text" className="text-white text-sm text-center mb-3">
            <span>Manage your clinic services through button below!</span>
          </div>
          <div id="add-menu-button" className="flex justify-center items-center p-2 bg-white rounded-md space-x-2 text-gray-600 w-full cursor-pointer hover:bg-gray-100">
            <FaPlus /> <span>Add Service</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
            <span id="footer-brand" className="font-bold text-gray-400 text-sm">GlowCare Beauty Clinic Dashboard</span>
        </div>
        <p id="footer-copyright" className="font-light text-gray-400 text-xs mt-1">&copy; 2025 All Right Reserved</p>
      </div>
    </div>
  );
}