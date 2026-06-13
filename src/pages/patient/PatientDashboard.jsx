import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaCalendarAlt, FaGift, FaClock, FaSignOutAlt, 
  FaSpa, FaUserCircle, FaCrown, FaArrowRight,
  FaMagic
} from "react-icons/fa";

export default function PatientDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Mengambil data user yang sedang login dari localStorage
  useEffect(() => {
    const sessionData = localStorage.getItem("user_session");
    if (!sessionData) {
      navigate("/login"); // Lempar ke login jika tidak ada sesi
    } else {
      setUser(JSON.parse(sessionData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    navigate("/");
  };

  if (!user) return null; // Mencegah kedipan layar sebelum data dimuat

  return (
    <div className="min-h-screen bg-[#fafcff] font-jakarta antialiased text-slate-800 overflow-x-hidden relative">
      
      {/* ===== KUMPULAN CUSTOM STYLES & KEYFRAMES ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }

        .text-gradient-gold {
          background: linear-gradient(135deg, #b8860b 0%, #ffd700 50%, #b8860b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient-blue {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Navigasi Glass */
        .glass-nav {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
        }

        /* Glass Card Global */
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.08);
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 1);
        }

        /* Dark Glass Card */
        .dark-glass {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(30px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dark-glass:hover {
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.25);
          transform: translateY(-4px);
        }

        /* Fluid Mesh Background */
        .mesh-blob {
          position: absolute;
          filter: blur(100px);
          z-index: 0;
          opacity: 0.6;
          mix-blend-mode: screen;
          animation: move 25s infinite alternate ease-in-out;
        }
        @keyframes move {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -100px) scale(1.2); }
          66% { transform: translate(-50px, 50px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        /* Shimmer Effect */
        .shimmer-badge {
          position: relative;
          overflow: hidden;
        }
        .shimmer-badge::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerAnim 3s infinite;
        }
        @keyframes shimmerAnim {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>

      {/* ===== DYNAMIC MESH BACKGROUND ===== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="mesh-blob w-[700px] h-[700px] bg-blue-200/50 rounded-full top-[-20%] left-[-10%]" />
        <div className="mesh-blob w-[600px] h-[600px] bg-cyan-200/40 rounded-full top-[40%] right-[-15%]" style={{animationDelay: '-7s'}} />
        <div className="mesh-blob w-[800px] h-[800px] bg-indigo-100/30 rounded-full bottom-[-30%] left-[20%]" style={{animationDelay: '-14s'}} />
      </div>

      {/* ===== TOP NAVIGATION ===== */}
      <nav className="glass-nav fixed top-0 w-full z-50 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            {/* Custom Logo Image */}
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:rotate-6 transition-all duration-500 bg-white/80 backdrop-blur-md border border-white/50 p-1">
              <img 
                src="https://i.ibb.co.com/814mnML/logo-klinik-CRM.png" 
                alt="GlowCare Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-playfair">Glow<span className="text-blue-600">Care</span></span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-bold -mt-1">Dashboard Patient</span>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-bold text-slate-800">{user.full_name || "Pasien"}</span>
              <span className="text-xs text-slate-500 capitalize font-semibold">{user.role || "VIP Member"}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md border-2 border-white">
              {user.full_name?.charAt(0) || "P"}
            </div>
            <button 
              onClick={handleLogout}
              className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/80 text-red-500 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 shadow-sm"
              title="Logout"
            >
              <FaSignOutAlt className="text-sm" />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative z-10 pt-28 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Welcome Banner (Dark Luxury Glass) */}
        <div className="dark-glass rounded-[2.5rem] p-10 sm:p-14 mb-10 relative overflow-hidden">
          {/* Mesh lights inside CTA */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen animate-[move_15s_infinite_alternate]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen animate-[move_20s_infinite_alternate_reverse]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="shimmer-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm w-fit">
                Selamat Datang Kembali!!
              </div>
              
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Halo, {user.full_name?.split(" ")[0] || "Cantik"}!
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
                Pantau jadwal perawatan Anda dan nikmati berbagai penawaran eksklusif khusus untuk Anda hari ini.
              </p>
            </div>
            {/* TOMBOL RESERVASI BARU - Ditambahkan onClick Navigate */}
            <button 
              onClick={() => navigate("/user-reservation")} 
              className="group whitespace-nowrap bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 text-base"
            >
              <FaCalendarAlt className="text-blue-500" /> Reservasi Baru 
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform text-blue-500" />
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri: Appointment & Riwayat */}
          <div className="lg:col-span-2 space-y-8">
            {/* Kartu Next Appointment */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-playfair text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <FaClock />
                  </div> 
                  Jadwal Saya
                </h2>
                <button className="text-sm text-blue-600 font-bold hover:underline underline-offset-2">Lihat Semua</button>
              </div>
              
              {/* Dummy Data Appointment */}
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/20 flex flex-col items-center justify-center text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Okt</span>
                    <span className="text-2xl font-black leading-none">24</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Pico Laser Pro</h3>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                      <FaUserCircle className="text-blue-400" /> Dr. Sarah Monica, Sp.KK
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <span className="bg-amber-50 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-100 w-fit">Menunggu Konfirmasi</span>
                  <span className="text-sm font-bold text-slate-700">14:00 WIB</span>
                </div>
              </div>

            </div>
          </div>

          {/* Kolom Kanan: Loyalty & Info */}
          <div className="space-y-8">
            {/* Kartu GlowRewards */}
            <div className="dark-glass rounded-3xl p-8 relative overflow-hidden">
              <FaCrown className="absolute -bottom-6 -right-6 text-8xl text-white/5 rotate-12" />
              
              <h2 className="font-playfair text-2xl font-bold mb-2 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                  <FaGift />
                </div> 
                GlowRewards
              </h2>
              <p className="text-slate-400 text-sm mb-8 font-medium">Kumpulkan poin untuk treatment gratis!</p>
              
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-black text-gradient-gold font-playfair">
                  1,250
                </span>
                <span className="text-slate-300 font-semibold mb-2">Poin</span>
              </div>

              {/* TOMBOL TUKAR POIN - Ditambahkan onClick Navigate */}
              <button 
                onClick={() => navigate("/user-rewards")} 
                className="group w-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 text-white shadow-lg shadow-black/10 hover:-translate-y-0.5"
              >
                Tukar Poin <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Kartu Quick Menu */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="font-playfair text-xl font-bold text-slate-900 mb-6">Akses Cepat</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="group bg-white/50 hover:bg-white backdrop-blur-sm cursor-pointer transition-all duration-300 rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-white/80 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FaSpa />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Katalog Layanan</span>
                </div>
                <div className="group bg-white/50 hover:bg-white backdrop-blur-sm cursor-pointer transition-all duration-300 rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-white/80 hover:shadow-md hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FaUserCircle />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Profil Saya</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}