import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex bg-white font-poppins">
            {/* Bagian Kiri: Form Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24">
                <div className="w-full max-w-md">
                    <Outlet/>
                </div>
            </div>

            {/* Bagian Kanan: Visual/Ilustrasi (Disembunyikan di layar kecil) */}
            <div className="hidden lg:flex w-1/2 p-6">
                {/* HAPUS gradient orange dari sini, ganti jadi bg-gray-100 */}
                <div className="w-full h-full relative rounded-[40px] overflow-hidden bg-gray-100 shadow-2xl">
                    <img 
                        src="https://i.ibb.co.com/QjmG4rLH/1777967923.png" 
                        alt="Welcome Illustration" 
                        /* HAPUS mix-blend-overlay dan opacity-90 agar gambar tampil normal */
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </div>
    )
}