import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaGift, FaCrown, FaTicketAlt } from "react-icons/fa";

export default function PatientRewards() {
  const navigate = useNavigate();
  const [points, setPoints] = useState(1250); // Dummy points

  // Dummy Katalog Voucher
  const vouchers = [
    { id: 1, title: "Diskon 50% Royal Facial", cost: 500, type: "gold", desc: "Nikmati perawatan eksklusif dengan potongan harga 50%." },
    { id: 2, title: "Free Konsultasi Dokter", cost: 300, type: "silver", desc: "Gratis sesi konsultasi mendalam dengan dokter spesialis kami." },
    { id: 3, title: "Voucher Treatment Rp 1.000.000", cost: 1200, type: "platinum", desc: "Potongan harga langsung untuk layanan Pico Laser atau Ultherapy." },
    { id: 4, title: "Free Skincare GlowCare Set", cost: 1500, type: "diamond", desc: "Satu set lengkap produk perawatan kulit unggulan kami." },
  ];

  const handleRedeem = (cost) => {
    if (points >= cost) {
      alert("Tukar poin berhasil! Voucher telah ditambahkan ke akun Anda.");
      setPoints(points - cost);
    } else {
      alert("Poin Anda tidak mencukupi untuk menukar reward ini.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] font-jakarta antialiased text-slate-800 overflow-x-hidden relative flex flex-col pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .text-gradient-gold { background: linear-gradient(135deg, #b8860b, #ffd700); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .dark-glass { background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(30px); border: 1px solid rgba(255, 255, 255, 0.1); }
      `}</style>

      {/* Navigasi Minimalis */}
      <nav className="relative z-10 p-6 lg:px-12 flex items-center gap-4">
        <button 
          onClick={() => navigate("/user-dashboard")}
          className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-amber-500 hover:shadow-md transition-all"
        >
          <FaArrowLeft />
        </button>
        <span className="font-playfair font-bold text-xl text-slate-800">GlowRewards</span>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Banner Poin */}
        <div className="dark-glass rounded-[2.5rem] p-10 relative overflow-hidden mb-12 shadow-2xl">
          <FaCrown className="absolute -bottom-10 -right-10 text-9xl text-white/5 rotate-12" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg shadow-amber-500/30">
              <FaGift />
            </div>
            <h2 className="text-slate-300 font-semibold tracking-widest uppercase text-sm mb-2">Total Poin Tersedia</h2>
            <div className="font-playfair text-6xl md:text-8xl font-black text-gradient-gold mb-4">
              {points.toLocaleString()}
            </div>
            <p className="text-slate-400 font-medium">Tukarkan poin Anda dengan pengalaman perawatan tak terlupakan.</p>
          </div>
        </div>

        {/* Katalog Rewards */}
        <h3 className="font-playfair text-3xl font-bold text-slate-900 mb-8 px-2">Katalog Eksklusif</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {vouchers.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <FaTicketAlt className="text-xl" />
                  </div>
                  <span className="bg-slate-900 text-white font-bold text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                    <FaCrown className="text-amber-400"/> {item.cost} Poin
                  </span>
                </div>
                <h4 className="font-bold text-xl text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
              <button 
                onClick={() => handleRedeem(item.cost)}
                disabled={points < item.cost}
                className={`mt-6 w-full py-4 rounded-xl font-bold transition-all ${
                  points >= item.cost 
                    ? "bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-100" 
                    : "bg-slate-50 text-slate-400 cursor-not-allowed"
                }`}
              >
                {points >= item.cost ? "Tukar Sekarang" : "Poin Tidak Cukup"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}