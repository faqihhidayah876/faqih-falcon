import React, { useEffect } from "react";
import { 
  FaSpa, FaArrowRight, FaUserMd, FaLeaf, FaStar, 
  FaCalendarCheck, FaSmile, FaShieldAlt, FaChartLine, 
  FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, 
  FaInstagram, FaTwitter, FaQuoteLeft, FaPlay, FaCrown, 
  FaGem, FaMagic
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

  // Efek Spotlight Mouse pada Kartu
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="min-h-screen bg-[#fafcff] font-jakarta antialiased text-slate-800 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900 relative">
      
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

        /* Scroll Reveal Base Classes */
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

        /* Spotlight Mouse Card */
        .spotlight-card {
          position: relative;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 2rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .spotlight-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 0;
        }
        .spotlight-card:hover::before { opacity: 1; }
        .spotlight-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px -10px rgba(37, 99, 235, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.2);
          border-color: rgba(255, 255, 255, 1);
        }
        .spotlight-card > * { position: relative; z-index: 1; }

        /* Icon box animasi dalam card */
        .icon-box { transition: all 0.4s ease; }
        .spotlight-card:hover .icon-box {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, #1e3a8a, #3b82f6) !important;
          color: white !important;
          border-color: transparent !important;
          box-shadow: 0 10px 20px rgba(30, 58, 138, 0.3);
        }
        .spotlight-card:hover .icon-box svg { color: white !important; }

        /* Animasi Fluid Mesh Background */
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

        /* Hero Image Glow & Rotation */
        .hero-image-wrapper {
          position: relative;
        }
        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 3rem;
          background: linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6);
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

        /* Shimmer Badge */
        .shimmer-badge {
          position: relative;
          overflow: hidden;
        }
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
      `}</style>

      {/* ===== DYNAMIC MESH BACKGROUND ===== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="mesh-blob w-[700px] h-[700px] bg-blue-200/50 rounded-full top-[-20%] left-[-10%]" />
        <div className="mesh-blob w-[600px] h-[600px] bg-cyan-200/40 rounded-full top-[40%] right-[-15%]" style={{animationDelay: '-7s'}} />
        <div className="mesh-blob w-[800px] h-[800px] bg-indigo-100/30 rounded-full bottom-[-30%] left-[20%]" style={{animationDelay: '-14s'}} />
        <div className="mesh-blob w-[400px] h-[400px] bg-rose-100/20 rounded-full top-[10%] left-[40%]" style={{animationDelay: '-20s'}} />
      </div>

      {/* ===== NAVBAR ULTRA-GLASS ===== */}
      <nav className="glass-nav fixed top-0 w-full z-50 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            {/* Logo Image Custom */}
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

      {/* ===== HERO SECTION ===== */}
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
            
            {/* Floating Elements */}
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

        {/* ===== STATISTIK ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-32 relative z-10">
          {[
            { value: "15+", label: "Pakar Estetika", icon: FaUserMd },
            { value: "50+", label: "Teknologi Laser", icon: FaChartLine },
            { value: "99%", label: "Pasien Puas", icon: FaSmile },
            { value: "24/7", label: "Layanan VVIP", icon: FaGem },
          ].map((stat, idx) => (
            <div key={idx} className={`reveal-on-scroll spotlight-card p-8 text-center delay-${(idx+1)*100}`} onMouseMove={handleMouseMove}>
              <div className="icon-box w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white border border-slate-100 shadow-sm text-blue-600">
                <stat.icon className="text-2xl" />
              </div>
              <div className="font-playfair text-4xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ===== LAYANAN VVIP ===== */}
        <section id="layanan" className="mt-40 relative z-10 pt-10">
          <div className="text-center mb-20 max-w-3xl mx-auto reveal-on-scroll">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Layanan Premium</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Eksklusif Untuk <span className="text-gradient-blue">Kebutuhan Anda</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Rasakan pengalaman perawatan bertaraf internasional dengan privasi maksimal dan hasil yang memukau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaLeaf, title: "Rejuvenasi Organik", desc: "Mengembalikan keremajaan kulit dengan ekstrak sel punca dan bahan premium.", color: "text-emerald-500" },
              { icon: FaStar, title: "Anti-Aging Ultherapy", desc: "Lifting tanpa operasi menggunakan gelombang ultrasound untuk wajah kencang.", color: "text-amber-500" },
              { icon: FaCalendarCheck, title: "Pico Laser Pro", desc: "Hapus flek, melasma, dan tato dalam hitungan pikodetik tanpa pemulihan lama.", color: "text-red-400" },
              { icon: FaShieldAlt, title: "Cryolipolysis", desc: "Membekukan sel lemak membandel untuk membentuk siluet tubuh yang sempurna.", color: "text-cyan-500" },
              { icon: FaSpa, title: "Royal Facial", desc: "Facial eksklusif dengan serpihan emas 24k murni untuk kilau kulit instan.", color: "text-violet-500" },
              { icon: FaUserMd, title: "VIP Consultation", desc: "Sesi privat bersama dokter untuk merancang Blueprint Kecantikan Anda.", color: "text-blue-500" },
            ].map((service, idx) => (
              <div key={idx} className="reveal-on-scroll spotlight-card group p-8" style={{transitionDelay: `${(idx % 3) * 100}ms`}} onMouseMove={handleMouseMove}>
                <div className="icon-box w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                  Selengkapnya <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform duration-300"/>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TESTIMONIAL ===== */}
        <section id="testimoni" className="mt-40 relative z-10 pt-10">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Testimoni</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Cerita dari <span className="text-gradient-blue">Klien Kami</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alinea Putri", job: "Aktris & Model", text: "GlowCare bukan sekadar klinik, tapi tempat pelarian saya. Hasil Pico Laser mereka luar biasa.", img: 20 },
              { name: "Dinda Kirana", job: "Entrepreneur", text: "Pelayanan mewah dan private. Ultherapy di sini adalah investasi terbaik untuk kulit saya!", img: 25 },
              { name: "Michelle Tan", job: "Beauty Vlogger", text: "Peralatan tercanggih yang pernah saya lihat. Sentuhan dokter-dokternya sangat profesional.", img: 32 },
            ].map((testi, idx) => (
              <div key={idx} className="reveal-on-scroll spotlight-card p-10" style={{transitionDelay: `${idx * 150}ms`}} onMouseMove={handleMouseMove}>
                <FaQuoteLeft className="text-blue-100 text-5xl mb-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 text-amber-400" />)}
                </div>
                <p className="text-slate-600 italic mb-10 font-medium leading-relaxed text-[15px]">"{testi.text}"</p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <img src={`https://i.pravatar.cc/150?img=${testi.img}`} alt={testi.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" />
                  <div>
                    <div className="font-bold text-slate-900">{testi.name}</div>
                    <div className="text-sm text-blue-600 font-semibold">{testi.job}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA DARK LUXURY ===== */}
        <section id="kontak" className="mt-40 relative z-10 pt-10">
          <div className="reveal-on-scroll relative bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center shadow-2xl overflow-hidden border border-slate-800">
            {/* Animated mesh background inside CTA */}
            <div className="absolute inset-0 opacity-30 z-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[100px] mix-blend-screen animate-[move_15s_infinite_alternate]"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-[100px] mix-blend-screen animate-[move_20s_infinite_alternate_reverse]"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <FaGem className="text-5xl text-cyan-400 mx-auto mb-8 animate-pulse" />
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Mulai Transformasi <br/><span className="text-gradient-gold italic">Eksklusif Anda</span>
              </h2>
              <p className="text-slate-300 text-lg mb-12 font-medium max-w-xl mx-auto">
                Jadwalkan konsultasi Anda bersama kami dan rasakan perawatan terbaik kami.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/register" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-10 py-5 rounded-full text-lg shadow-xl shadow-blue-900/50 hover:scale-105 transition-all flex items-center justify-center gap-3">
                  Reservasi<FaArrowRight />
                </a>
                <a href="/" className="bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold px-10 py-5 rounded-full text-lg backdrop-blur-md hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <FaPhoneAlt /> Hubungi Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 text-slate-400 mt-32 border-t border-white/5 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
                <a href="/" className="flex items-center gap-3 mb-6">
                    {/* Logo Image Custom Footer */}
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 p-0.5">
                       <img src="https://i.ibb.co.com/814mnML/logo-klinik-CRM.png" alt="GlowCare Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl font-bold tracking-tight font-playfair text-white">Glow<span className="text-blue-500">Care</span></span>
                </a>
                <p className="text-sm leading-relaxed">Mendefinisikan ulang standar kecantikan dan estetika medis melalui keahlian tanpa kompromi.</p>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigasi</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Layanan</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Testimoni</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Layanan</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Rejuvenasi Organik</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Anti-Aging Ultherapy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pico Laser Pro</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Royal Facial</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Kontak</h4>
                <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-500"/> Pekanbaru, ID</li>
                    <li className="flex items-center gap-2"><FaPhoneAlt className="text-blue-500"/> +62 800 1234 5678</li>
                    <li className="flex items-center gap-2"><FaEnvelope className="text-blue-500"/> faqih24si@mahasiswa.pcr.ac.id</li>
                </ul>
                <div className="flex gap-4 mt-6">
                    <a href="#" className="w-9 h-9 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"><FaInstagram size={14}/></a>
                    <a href="#" className="w-9 h-9 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all"><FaFacebookF size={14}/></a>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} GlowCare Clinic. All rights reserved.</p>
            <p>Crafted with Precision & Passion</p>
        </div>
      </footer>
    </div>
  );
}