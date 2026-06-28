import FloatingChat from "../../components/FloatingChat";
import React, { useEffect, useState } from "react";
import {
  FaSpa, FaArrowRight, FaUserMd, FaLeaf, FaStar,
  FaCalendarCheck, FaSmile, FaShieldAlt, FaChartLine,
  FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF,
  FaInstagram, FaTwitter, FaQuoteLeft, FaPlay, FaCrown,
  FaGem, FaMagic, FaBolt, FaHourglassHalf, FaFemale,
  FaMedal, FaHeart, FaClock, FaAward, FaCheck,
  FaSearch, FaRegLightbulb, FaHandSparkles
} from "react-icons/fa";

export default function LandingPage() {
  // Efek Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-inter antialiased text-[#2D2A26] overflow-x-hidden selection:bg-[#E8B4BC]/30 selection:text-[#2D2A26] relative">
      {/* ===== KUMPULAN CUSTOM STYLES & KEYFRAMES ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
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
        .text-gradient-blush-sage {
          background: linear-gradient(135deg, #C98686 0%, #E8B4BC 50%, #9CAF88 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient-rose {
          background: linear-gradient(135deg, #C98686 0%, #E8B4BC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .icon-gradient-blush-sage {
          background: linear-gradient(135deg, #E8B4BC 0%, #9CAF88 100%);
        }
        .glass-nav {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
        }
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        .stats-card {
          background: #FDFCFA;
          border: 1px solid rgba(201, 169, 97, 0.25);
          border-radius: 1.5rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .stats-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(232, 180, 188, 0.08), rgba(156, 175, 136, 0.08));
          opacity: 0;
          transition: opacity 0.5s;
        }
        .stats-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(201, 134, 134, 0.25);
          border-color: rgba(201, 134, 134, 0.4);
        }
        .stats-card:hover::before { opacity: 1; }
        .stats-card > * { position: relative; z-index: 1; }

        .why-card {
          background: #FDFCFA;
          border: 1px solid rgba(156, 175, 136, 0.25);
          border-radius: 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(156, 175, 136, 0.25);
          border-color: rgba(156, 175, 136, 0.5);
        }

        .service-card {
          background: #FDFCFA;
          border: 1px solid rgba(156, 175, 136, 0.25);
          border-radius: 1.5rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(232, 180, 188, 0.06), rgba(156, 175, 136, 0.06));
          opacity: 0;
          transition: opacity 0.5s;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(156, 175, 136, 0.3);
          border-color: rgba(156, 175, 136, 0.5);
        }
        .service-card:hover::before { opacity: 1; }
        .service-card > * { position: relative; z-index: 1; }
        .service-card:hover .icon-box {
          transform: scale(1.1) rotate(-5deg);
        }
        .icon-box { transition: all 0.4s ease; }

        .process-card {
          background: #FDFCFA;
          border: 1px solid rgba(232, 180, 188, 0.3);
          border-radius: 2rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .process-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(232, 180, 188, 0.05), rgba(201, 169, 97, 0.05));
          opacity: 0;
          transition: opacity 0.5s;
        }
        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(201, 134, 134, 0.25);
          border-color: rgba(201, 134, 134, 0.5);
        }
        .process-card:hover::before { opacity: 1; }
        .process-card > * { position: relative; z-index: 1; }
        .process-number {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 800;
          font-size: clamp(5rem, 10vw, 8rem);
          line-height: 0.85;
          background: linear-gradient(135deg, #C98686 0%, #E8B4BC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.9;
        }

        .testimonial-card {
          background: #FDFCFA;
          border: 1px solid rgba(232, 180, 188, 0.3);
          border-radius: 1.5rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px -12px rgba(201, 134, 134, 0.25);
          border-color: rgba(201, 134, 134, 0.5);
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 1.5rem;
          position: relative;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(45, 42, 38, 0);
          transition: background 0.5s;
        }
        .gallery-item:hover::after {
          background: rgba(45, 42, 38, 0.4);
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        .gallery-item .gallery-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 2;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .float-badge { animation: floatBadge 6s ease-in-out infinite; }
        .float-badge-delay { animation: floatBadge 6s ease-in-out infinite; animation-delay: -3s; }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .mesh-blob {
          position: absolute;
          filter: blur(100px);
          z-index: -10;
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
        .hero-image-wrapper { position: relative; }
        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 3rem;
          background: linear-gradient(45deg, #E8B4BC, #C9A961, #9CAF88, #E8B4BC);
          background-size: 300% 300%;
          animation: gradientSpin 6s ease infinite;
          z-index: -1;
          opacity: 0.6;
          filter: blur(15px);
        }
        @keyframes gradientSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer-badge { position: relative; overflow: hidden; }
        .shimmer-badge::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
          transform: skewX(-20deg);
          animation: shimmerAnim 3s infinite;
        }
        @keyframes shimmerAnim {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        .sparkles-pulse {
          animation: sparklesPulse 2s ease-in-out infinite;
        }
        @keyframes sparklesPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.15) rotate(10deg); opacity: 0.85; }
        }
      `}</style>

      {/* ===== DYNAMIC MESH BACKGROUND ===== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="mesh-blob w-[700px] h-[700px] bg-[#E8B4BC]/30 rounded-full top-[-20%] left-[-10%]" />
        <div className="mesh-blob w-[600px] h-[600px] bg-[#9CAF88]/30 rounded-full top-[40%] right-[-15%]" style={{animationDelay: '-7s'}} />
        <div className="mesh-blob w-[800px] h-[800px] bg-[#C9A961]/20 rounded-full bottom-[-30%] left-[20%]" style={{animationDelay: '-14s'}} />
        <div className="mesh-blob w-[400px] h-[400px] bg-[#C98686]/20 rounded-full top-[10%] left-[40%]" style={{animationDelay: '-20s'}} />
      </div>

      {/* ===== NAVBAR ULTRA-GLASS (FINAL) ===== */}
      <nav className="glass-nav fixed top-0 w-full z-50 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
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
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-bold -mt-1">Clinic</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-2 bg-white/30 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/60 shadow-sm">
            {["Beranda", "Layanan", "Testimoni", "Kontak"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-6 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-white hover:shadow-sm transition-all duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="hidden sm:block text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Masuk</a>
            <a href="/register" className="bg-slate-900 hover:bg-blue-700 text-white text-sm font-bold px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30 hover:-translate-y-0.5">
              Daftar <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION (FINAL) ===== */}
      <main className="pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="reveal-on-scroll shimmer-badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/60 text-blue-800 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              Klinik Kecantikan Terbaik di Indonesia
            </div>
            <h1 className="reveal-on-scroll delay-100 font-playfair text-6xl lg:text-[5.5rem] font-bold text-slate-900 leading-[1.05] mb-8">
              Sempurnakan
              <span className="block mt-3 relative">
                <span className="text-gradient-blue relative z-10">Kecantikan Alami</span>
              </span>
              Anda.
            </h1>
            <p className="reveal-on-scroll delay-200 text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg font-medium">
              Evolusi perawatan kulit modern. Ditangani langsung oleh pakar dermatologi kelas dunia menggunakan teknologi estetika mutakhir.
            </p>
            <div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row gap-5 mb-12">
              <a href="/login" className="group bg-slate-900 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-400 shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1">
                Mulai Reservasi <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="#layanan" className="group bg-white/50 border border-white hover:bg-white text-slate-800 font-bold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-sm">
                Layanan kami
              </a>
            </div>
            <div className="reveal-on-scroll delay-400 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />)}
              </div>
              <div>
                <div className="flex text-amber-400 text-sm mb-1"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <p className="text-slate-500 text-sm font-semibold">Dipercaya 5,000+ Pasien</p>
              </div>
            </div>
          </div>
          <div className="reveal-on-scroll delay-200 relative flex items-center justify-center">
            <div className="hero-image-wrapper w-full max-w-md mx-auto rounded-[2.5rem] p-4 bg-white/40 backdrop-blur-md shadow-2xl border border-white/60">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
                  alt="Premium Aesthetic Care"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute top-12 -left-6 bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 flex items-center gap-4 z-20 shadow-xl animate-[bounce_4s_infinite]">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg"><FaCrown className="text-xl" /></div>
              <div>
                <div className="font-bold text-sm text-slate-900">Top 1.000 Klinik</div>
                <div className="text-xs text-slate-500">Di Asia</div>
              </div>
            </div>
            <div className="absolute bottom-16 -right-6 bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 flex items-center gap-3 z-20 shadow-xl animate-[bounce_5s_infinite_reverse]">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><FaChartLine className="text-lg"/></div>
              <div>
                <div className="font-bold text-sm text-slate-900">99% Sukses</div>
                <div className="text-xs text-slate-500">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== STATISTIK (FINAL) ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-32 relative z-10">
          {[
            { value: "15+", label: "Dokter Spesialis", icon: FaUserMd },
            { value: "50+", label: "Treatment Premium", icon: FaGem },
            { value: "10K+", label: "Pasien Bahagia", icon: FaHeart },
            { value: "100%", label: "Bahan Organik", icon: FaLeaf },
          ].map((stat, idx) => (
            <div key={idx} className={`reveal-on-scroll stats-card p-8 text-center delay-${(idx+1)*100}`}>
              <div className="icon-gradient-blush-sage w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#E8B4BC]/30">
                <stat.icon className="text-2xl text-white" />
              </div>
              <div className="font-cormorant text-4xl lg:text-5xl font-black text-[#2D2A26] mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm text-[#6B645C] font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ===== WHY CHOOSE US (FINAL) ===== */}
        <section className="mt-40 relative z-10 pt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#C98686]/20 border border-[#C9A961]/20">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
                  alt="Luxury Spa Treatment"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C98686]/20 via-transparent to-[#9CAF88]/20" />
              </div>
              <div className="float-badge absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-[#C9A961]/20 border border-[#C9A961]/20 flex items-center gap-3">
                <div className="icon-gradient-blush-sage w-12 h-12 rounded-xl flex items-center justify-center">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-cormorant font-bold text-lg text-[#2D2A26] leading-tight">Best Clinic</div>
                  <div className="text-xs text-[#C98686] font-bold uppercase tracking-wider">2025 Award</div>
                </div>
              </div>
              <div className="float-badge-delay absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-[#9CAF88]/20 border border-[#9CAF88]/30 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#9CAF88] flex items-center justify-center">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-cormorant font-bold text-lg text-[#2D2A26] leading-tight">BPOM</div>
                  <div className="text-xs text-[#9CAF88] font-bold uppercase tracking-wider">Certified ✓</div>
                </div>
              </div>
            </div>

            <div className="reveal-on-scroll delay-200">
              <span className="text-[#C98686] font-bold text-sm uppercase tracking-widest mb-4 block">Mengapa Memilih Kami</span>
              <h2 className="font-cormorant italic text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
                <span className="text-gradient-blush-sage">Perawatan Mewah</span>
                <br />
                <span className="text-[#2D2A26] not-italic">dengan Sentuhan</span>
                <br />
                <span className="text-[#2D2A26] not-italic">Personal.</span>
              </h2>
              <p className="text-[#6B645C] text-lg font-medium mb-10 leading-relaxed">
                Kami memadukan ilmu dermatologi modern dengan bahan-bahan organik terbaik untuk memberikan hasil yang nyata dan berkelanjutan.
              </p>
              <div className="space-y-5">
                {[
                  { icon: FaUserMd, title: "Dokter Bersertifikat Internasional", desc: "Tim medis kami lulusan universitas top dunia dengan pengalaman 10+ tahun.", color: "#E8B4BC" },
                  { icon: FaLeaf, title: "100% Bahan Organik Premium", desc: "Hanya menggunakan produk alami yang aman dan ramah lingkungan.", color: "#9CAF88" },
                  { icon: FaShieldAlt, title: "Teknologi Terkini & Steril", desc: "Peralatan medis terbaru dengan standar kebersihan rumah sakit internasional.", color: "#C9A961" },
                  { icon: FaHeart, title: "Pendekatan Personal & Privat", desc: "Setiap treatment dirancang khusus sesuai kebutuhan kulit Anda.", color: "#C98686" },
                ].map((item, idx) => (
                  <div key={idx} className="why-card p-5 flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-cormorant font-bold text-xl text-[#2D2A26] mb-1">{item.title}</h4>
                      <p className="text-[#6B645C] text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== LAYANAN VVIP (FINAL) ===== */}
        <section id="layanan" className="mt-40 relative z-10 pt-10">
          <div className="text-center mb-20 max-w-3xl mx-auto reveal-on-scroll">
            <span className="text-[#C98686] font-bold text-sm uppercase tracking-widest mb-4 block">Layanan Premium</span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Eksklusif Untuk <span className="text-gradient-blush-sage italic">Kebutuhan Anda</span>
            </h2>
            <p className="text-[#6B645C] text-lg font-medium">
              Rasakan pengalaman perawatan bertaraf internasional dengan privasi maksimal dan hasil yang memukau.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaLeaf, title: "Organic Facial", desc: "Perawatan wajah mendalam dengan ekstrak botani organik untuk kulit bercahaya alami.", color: "#9CAF88" },
              { icon: FaBolt, title: "Pico Laser Premium", desc: "Teknologi laser pikodetik untuk hilangkan flek, melasma, dan noda dalam hitungan detik.", color: "#E8B4BC" },
              { icon: FaHourglassHalf, title: "Anti-Aging Therapy", desc: "Terapi regenerasi sel untuk mengembalikan elastisitas dan keremajaan kulit.", color: "#C9A961" },
              { icon: FaFemale, title: "Body Contouring", desc: "Pembentukan siluet tubuh ideal dengan teknologi non-invasif terkini.", color: "#C98686" },
              { icon: FaCrown, title: "VIP Facial Gold", desc: "Facial eksklusif dengan serpihan emas 24K untuk kilau kulit mewah instan.", color: "#C9A961" },
              { icon: FaUserMd, title: "Konsultasi Privat", desc: "Sesi privat bersama dokter spesialis untuk merancang blueprint kecantikan Anda.", color: "#9CAF88" },
            ].map((service, idx) => (
              <div key={idx} className="reveal-on-scroll service-card group p-8" style={{transitionDelay: `${(idx % 3) * 100}ms`}}>
                <div
                  className="icon-box w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-cormorant font-bold text-2xl text-[#2D2A26] mb-4">{service.title}</h3>
                <p className="text-[#6B645C] font-medium mb-8 leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#6B645C] group-hover:text-[#C98686] transition-colors">
                  Selengkapnya <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform duration-300"/>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== OUR PROCESS (PRD 3) ===== */}
        <section className="mt-40 relative z-10 pt-10">
          <div className="text-center mb-20 max-w-3xl mx-auto reveal-on-scroll">
            <span className="text-[#C98686] font-bold text-sm uppercase tracking-widest mb-4 block">Our Process</span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Empat Langkah Menuju
              <span className="text-gradient-rose italic"> Kulit Impian</span>
            </h2>
            <p className="text-[#6B645C] text-lg font-medium">
              Proses terstruktur yang dirancang untuk memberikan hasil maksimal dengan pengalaman yang menyenangkan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#E8B4BC] to-transparent opacity-40" />

            {[
              { num: "01", icon: FaUserMd, title: "Konsultasi Online", desc: "Sesi awal dengan dokter spesialis untuk memahami kebutuhan kulit Anda secara mendalam.", color: "#E8B4BC" },
              { num: "02", icon: FaSearch, title: "Diagnosa Kulit", desc: "Analisis komprehensif menggunakan teknologi AI dermatologi untuk diagnosa akurat.", color: "#C98686" },
              { num: "03", icon: FaHandSparkles, title: "Treatment Premium", desc: "Perawatan eksklusif dengan teknologi terkini dan bahan organik pilihan.", color: "#9CAF88" },
              { num: "04", icon: FaSmile, title: "Hasil Memukau", desc: "Transformasi kulit nyata dengan hasil yang terlihat dan bertahan lama.", color: "#C9A961" },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`reveal-on-scroll process-card p-8 text-center delay-${(idx+1)*100}`}
              >
                <div className="process-number mb-4">{step.num}</div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform hover:scale-110"
                  style={{ backgroundColor: step.color }}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-cormorant font-bold text-2xl text-[#2D2A26] mb-3">{step.title}</h3>
                <p className="text-[#6B645C] text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TESTIMONIAL (PRD 3) ===== */}
        <section id="testimoni" className="mt-40 relative z-10 pt-10">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="text-[#C98686] font-bold text-sm uppercase tracking-widest mb-4 block">Testimoni</span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Cerita dari <span className="text-gradient-rose italic">Klien Kami</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alinea Putri", job: "Aktris & Model", text: "GlowCare bukan sekadar klinik, tapi tempat pelarian saya. Hasil Pico Laser mereka luar biasa.", img: 20 },
              { name: "Dinda Kirana", job: "Entrepreneur", text: "Pelayanan mewah dan private. Ultherapy di sini adalah investasi terbaik untuk kulit saya!", img: 25 },
              { name: "Michelle Tan", job: "Beauty Vlogger", text: "Peralatan tercanggih yang pernah saya lihat. Sentuhan dokter-dokternya sangat profesional.", img: 32 },
            ].map((testi, idx) => (
              <div key={idx} className={`reveal-on-scroll testimonial-card p-10 delay-${(idx+1)*100}`}>
                <FaQuoteLeft className="text-5xl mb-6 text-[#E8B4BC] opacity-70" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 text-[#C9A961]" />)}
                </div>
                <p className="text-[#6B645C] italic mb-10 font-medium leading-relaxed text-[15px]">"{testi.text}"</p>
                <div className="flex items-center gap-4 border-t border-[#E8B4BC]/20 pt-6">
                  <img
                    src={`https://i.pravatar.cc/150?img=${testi.img}`}
                    alt={testi.name}
                    className="w-14 h-14 rounded-full border-2 border-[#E8B4BC] shadow-md object-cover"
                  />
                  <div>
                    <div className="font-cormorant font-bold text-lg text-[#2D2A26]">{testi.name}</div>
                    <div className="text-sm text-[#C98686] font-semibold">{testi.job}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== GALLERY PREVIEW (PRD 3) ===== */}
        <section className="mt-40 relative z-10 pt-10">
          <div className="text-center mb-16 max-w-3xl mx-auto reveal-on-scroll">
            <span className="text-[#C98686] font-bold text-sm uppercase tracking-widest mb-4 block">Gallery</span>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Momen <span className="text-gradient-blush-sage italic">Elegan</span> Kami
            </h2>
            <p className="text-[#6B645C] text-lg font-medium">
              Intip suasana eksklusif dan hasil perawatan di GlowCare Clinic.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800", alt: "Facial Treatment", span: "md:row-span-2 h-64 md:h-full" },
              { src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800", alt: "Spa Relaxation", span: "h-64" },
              { src: "https://images.unsplash.com/photo-1596178065887-11f5a5f9f666?auto=format&fit=crop&q=80&w=800", alt: "Skincare Products", span: "h-64" },
              { src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1905?auto=format&fit=crop&q=80&w=800", alt: "Beauty Care", span: "h-64" },
              { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", alt: "Luxury Spa", span: "h-64" },
              { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800", alt: "Premium Treatment", span: "md:col-span-2 h-64" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`reveal-on-scroll gallery-item ${item.span}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                <div className="gallery-overlay">
                  <div className="text-white text-center px-4">
                    {/* ✅ PERBAIKAN: FaSparkles → FaMagic */}
                    <FaMagic className="text-2xl mx-auto mb-2 text-[#C9A961]" />
                    <p className="font-cormorant font-bold text-lg">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA LUXE BLUSH & SAGE (PRD 3) ===== */}
        <section id="kontak" className="mt-40 relative z-10 pt-10">
          <div className="reveal-on-scroll relative rounded-[3rem] p-12 lg:p-24 text-center shadow-2xl overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #E8B4BC 0%, #C98686 50%, #9CAF88 100%)' }}>
            <div className="absolute inset-0 opacity-40 z-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full filter blur-[100px]"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961]/30 rounded-full filter blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-block mb-8">
                {/* ✅ PERBAIKAN: FaSparkles → FaMagic */}
                <FaMagic className="text-5xl text-white mx-auto sparkles-pulse drop-shadow-lg" />
              </div>
              <h2 className="font-cormorant italic text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md">
                Mulai Transformasi
                <br />
                <span className="not-italic" style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #C9A961 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Eksklusif Anda
                </span>
              </h2>
              <p className="text-white/90 text-lg mb-12 font-medium max-w-xl mx-auto drop-shadow-sm">
                Jadwalkan konsultasi Anda bersama kami dan rasakan perawatan terbaik dengan sentuhan personal yang mewah.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/register" className="group bg-[#E8B4BC] hover:bg-[#C98686] text-white font-bold px-10 py-5 rounded-full text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 border-2 border-white/30">
                  Reservasi Sekarang <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/" className="bg-white hover:bg-[#FAF7F2] text-[#C98686] font-bold px-10 py-5 rounded-full text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 border-2 border-white">
                  <FaPhoneAlt /> Hubungi Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER (FINAL) ===== */}
      <footer className="bg-[#F5EFE6] text-[#6B645C] mt-32 border-t border-[#C9A961]/10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md bg-white border border-[#C9A961]/30 p-0.5">
                <img src="https://i.ibb.co.com/814mnML/logo-klinik-CRM.png" alt="GlowCare Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex items-baseline gap-0.5"><span className="text-xl font-bold tracking-tight text-[#2D2A26] font-cormorant">Glow</span><span className="text-xl font-bold tracking-tight text-gradient-rose font-cormorant">Care</span></div>
            </a>
            <p className="text-sm leading-relaxed text-[#6B645C]">Defining natural beauty with modern science.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#2D2A26] mb-6 uppercase tracking-widest text-xs">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Layanan</a></li>
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Testimoni</a></li>
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2D2A26] mb-6 uppercase tracking-widest text-xs">Layanan</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Organic Facial</a></li>
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Pico Laser Premium</a></li>
              <li><a href="#" className="hover:text-[#C98686] transition-colors">Anti-Aging Therapy</a></li>
              <li><a href="#" className="hover:text-[#C98686] transition-colors">VIP Facial Gold</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2D2A26] mb-6 uppercase tracking-widest text-xs">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#C98686]"/> Pekanbaru, ID</li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-[#C98686]"/> +62 800 1234 5678</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-[#C98686]"/> faqih24si@mahasiswa.pcr.ac.id</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-[#E8B4BC] flex items-center justify-center hover:bg-[#C98686] transition-all text-white"><FaInstagram size={14}/></a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#E8B4BC] flex items-center justify-center hover:bg-[#C98686] transition-all text-white"><FaFacebookF size={14}/></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#2D2A26]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B645C]">
          <p>&copy; {new Date().getFullYear()} GlowCare Clinic. All rights reserved.</p>
          <p>Crafted with Precision & Passion</p>
        </div>
      </footer>

      <FloatingChat />
    </div>
  );
}