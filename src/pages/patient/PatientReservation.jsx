import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, FaCalendarAlt, FaClock, FaUserMd, 
  FaCheckCircle, FaSpa
} from "react-icons/fa";

export default function PatientReservation() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // State Dummy untuk Form
  const [formData, setFormData] = useState({
    service: "",
    doctor: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi loading 2 detik sebelum sukses
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Simulasi kembali ke dashboard setelah sukses
      setTimeout(() => navigate("/user-dashboard"), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafcff] font-jakarta antialiased text-slate-800 overflow-x-hidden relative flex flex-col">
      {/* Menggunakan style bawaan dari desain sebelumnya */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
        }
        .mesh-blob {
          position: absolute; filter: blur(100px); z-index: 0; opacity: 0.6; mix-blend-mode: screen;
          animation: move 25s infinite alternate ease-in-out;
        }
        @keyframes move {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>

      {/* Background Mesh */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="mesh-blob w-[600px] h-[600px] bg-blue-200/50 rounded-full top-[-10%] left-[-10%]" />
        <div className="mesh-blob w-[500px] h-[500px] bg-cyan-200/40 rounded-full bottom-[-10%] right-[-10%]" />
      </div>

      {/* Navigasi Minimalis */}
      <nav className="relative z-10 p-6 lg:px-12 flex items-center gap-4">
        <button 
          onClick={() => navigate("/user-dashboard")}
          className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-md transition-all"
        >
          <FaArrowLeft />
        </button>
        <span className="font-playfair font-bold text-xl text-slate-800">Kembali</span>
      </nav>

      {/* Konten Utama */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
          
          {isSuccess ? (
            <div className="text-center py-10 animate-[bounce_1s_ease-out]">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-green-500/30">
                <FaCheckCircle className="text-5xl" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">Reservasi Berhasil!</h2>
              <p className="text-slate-500 font-medium">Pengajuan jadwal Anda telah dikirim. Mengalihkan ke dashboard...</p>
            </div>
          ) : (
            <>
              <div className="mb-10 text-center">
                <h1 className="font-playfair text-4xl font-bold text-slate-900 mb-3">Buat Reservasi</h1>
                <p className="text-slate-500 font-medium">Jadwalkan perawatan eksklusif Anda bersama para ahli kami.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-bold text-sm text-slate-700 flex items-center gap-2"><FaSpa className="text-blue-500"/> Pilih Layanan</label>
                  <select required className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none font-medium">
                    <option value="">-- Kategori Perawatan --</option>
                    <option value="pico">Pico Laser Pro</option>
                    <option value="ultherapy">Anti-Aging Ultherapy</option>
                    <option value="facial">Royal Gold Facial</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm text-slate-700 flex items-center gap-2"><FaUserMd className="text-cyan-500"/> Pilih Dokter</label>
                  <select required className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 text-slate-700 outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none font-medium">
                    <option value="">-- Dokter Spesialis --</option>
                    <option value="dr_sarah">Dr. Sarah Monica, Sp.KK</option>
                    <option value="dr_budi">Dr. Budi Santoso, Dipl. AAAM</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-sm text-slate-700 flex items-center gap-2"><FaCalendarAlt className="text-indigo-500"/> Tanggal</label>
                    <input type="date" required className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/50 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-sm text-slate-700 flex items-center gap-2"><FaClock className="text-violet-500"/> Waktu</label>
                    <input type="time" required className="w-full bg-white/80 border border-slate-200 rounded-2xl px-5 py-4 text-slate-700 outline-none focus:ring-2 focus:ring-violet-500/50 font-medium" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-lg py-5 rounded-2xl mt-8 transition-all duration-300 shadow-xl shadow-slate-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Memproses..." : "Konfirmasi Jadwal"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}