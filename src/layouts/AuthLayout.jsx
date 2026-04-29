import { Outlet } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-pink-100">
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-3 mb-3 shadow-lg">
                        <FaHeart className="text-white text-3xl" />
                    </div>
                    <h1 className="text-4xl font-poppins font-extrabold text-gray-800">
                        <span className="text-black">GlowCare</span>
                        <span className="text-pink-500">.</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">Beauty Clinic Admin Dashboard</p>
                </div>

                <Outlet/>

                <p className="text-center text-xs text-gray-400 mt-6">
                    © 2025 GlowCare Beauty Clinic. All rights reserved.
                </p>
            </div>
        </div>
    )
}