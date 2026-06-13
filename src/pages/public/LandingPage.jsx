import { Link } from "react-router-dom";
import { 
  FaSpa, FaArrowRight, FaUserMd, FaLeaf, FaStar, 
  FaCalendarCheck, FaSmile, FaShieldAlt, FaClock, 
  FaChartLine, FaCheck, FaPhoneAlt, FaMapMarkerAlt,
  FaEnvelope, FaFacebookF, FaInstagram, FaTwitter,
  FaQuoteLeft, FaPlay, FaCrown, FaGem, FaRocket, FaGift
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-jakarta antialiased text-slate-800 overflow-x-hidden">
      
      {/* ===== CUSTOM STYLES ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }

        .text-gradient {
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-nav {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.4);
        }
        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          box-shadow: 0 4px 20px rgba(37,99,235,0.3), inset 0 0 0 1px rgba(255,255,255,0.1);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(37,99,235,0.4), inset 0 0 0 1px rgba(255,255,255,0.2);
        }
        .card-luxury {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(219,234,254,0.5);
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .card-luxury:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(37,99,235,0.15), 0 0 0 1px rgba(59,130,246,0.1);
          border-color: rgba(147,197,253,0.8);
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          pointer-events: none;
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          transform: rotate(30deg);
          transition: all 0.6s; opacity: 0;
        }
        .shine-effect:hover::after { opacity: 1; left: 100%; }
        .hover-bar {
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .group:hover .hover-bar { transform: scaleX(1); }
      `}</style>

      {/* ===== AMBIENT BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="glow-orb w-[600px] h-[600px] bg-blue-300 top-[-10%] left-[-10%]" />
        <div className="glow-orb w-[500px] h-[500px] bg-cyan-200 top-[20%] right-[-5%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-blue-200 bottom-[10%] left-[20%]" />
      </div>

      {/* ===== NAVBAR PREMIUM ===== */}
      <nav className="glass-nav fixed top-0 w-full z-50 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:rotate-6">
              <FaSpa className="text-white text-lg" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-300 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900">Glow<span className="text-blue-600">Care</span></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold -mt-1">Aesthetic Clinic</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/40 shadow-sm">
            {[
              { href: "/", label: "Beranda" },
              { href: "#services", label: "Layanan" },
              { href: "#testimonials", label: "Testimoni" },
              { href: "#contact", label: "Kontak" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-300">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-blue-600 px-4 py-2 transition-colors">
              Masuk
            </Link>
            <Link to="/register" className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 shine-effect">
              Buat Janji <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Kiri: Teks */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-sm cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              Klinik Estetika Medis Terpercaya
              <FaCrown className="text-amber-500 text-xs" />
            </div>

            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Pancarkan 
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="text-gradient">Kecantikan Alami</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8 C75 2, 225 2, 298 8" stroke="url(#grad1)" strokeWidth="4" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="300" y2="0">
                                        <stop offset="0%" stopColor="#2563eb" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </span>
              Anda
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              Dapatkan kulit sehat, cerah, dan bersinar bersama GlowCare. Perawatan estetika profesional oleh dokter spesialis berpengalaman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/register" className="group bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                Buat Janji Sekarang <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="group bg-white border-2 border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <FaPlay className="text-[10px] text-blue-600" />
                </div>
                Lihat Layanan
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: FaShieldAlt, text: "Dokter Tersertifikasi", bg: "bg-blue-50", color: "text-blue-500" },
                { icon: FaClock, text: "Buka Setiap Hari", bg: "bg-cyan-50", color: "text-cyan-500" },
                { icon: FaChartLine, text: "Teknologi Modern", bg: "bg-blue-50", color: "text-blue-500" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan: Ilustrasi / Gambar */}
          <div className="relative">
            <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl floating" />
            <div className="absolute bottom-20 -right-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl floating" style={{ animationDelay: "2s" }} />

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-blue-500/20 rounded-[2.5rem] blur-2xl scale-110" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/60">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop" 
                  alt="GlowCare Clinic"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card 1: Pasien */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-blue-900/5 p-4 flex items-center gap-3 border border-blue-50/80 floating" style={{ animationDelay: "1s" }}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <FaSmile className="text-white text-lg" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">1000+ Pasien</div>
                  <div className="text-xs text-slate-400">Puas & Percaya</div>
                </div>
              </div>

              {/* Floating Card 2: Rating */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-blue-900/5 p-4 border border-blue-50/80 floating" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4 text-amber-400" />)}
                </div>
                <div className="font-bold text-slate-900 text-sm">4.9/5 Rating</div>
                <div className="text-xs text-slate-400">Dari ulasan pasien</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== STATISTIK ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {[
            { value: "10+", label: "Dokter Spesialis", icon: FaUserMd, gradient: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/20", bar: "from-blue-500 to-blue-600" },
            { value: "20+", label: "Perawatan Modern", icon: FaLeaf, gradient: "from-emerald-500 to-teal-500", shadow: "shadow-emerald-500/20", bar: "from-emerald-500 to-teal-500" },
            { value: "98%", label: "Kepuasan Pasien", icon: FaStar, gradient: "from-amber-400 to-orange-500", shadow: "shadow-amber-500/20", bar: "from-amber-400 to-orange-500" },
            { value: "24/7", label: "Layanan Konsultasi", icon: FaClock, gradient: "from-cyan-500 to-blue-500", shadow: "shadow-cyan-500/20", bar: "from-cyan-500 to-blue-500" },
          ].map((stat, idx) => (
            <div key={idx} className="card-luxury rounded-3xl p-8 text-center group relative overflow-hidden" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className={`hover-bar absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.bar}`} />
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg ${stat.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <stat.icon className="text-white text-2xl" />
              </div>
              <div className="font-playfair text-4xl lg:text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ===== LAYANAN UNGGULAN ===== */}
        <section id="services" className="mt-32 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl -z-10" />
          
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <FaGem className="text-xs" />
              Layanan Terbaik
            </div>
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Layanan Unggulan <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">Perawatan terbaik dengan teknologi terkini untuk kecantikan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaUserMd, title: "Konsultasi Kulit", desc: "Analisis kulit mendalam oleh dokter ahli untuk menentukan perawatan yang tepat.", bg: "bg-blue-50", hoverBg: "group-hover:bg-blue-100", color: "text-blue-600", bar: "from-blue-500 to-blue-600", linkColor: "text-blue-600" },
              { icon: FaLeaf, title: "Facial Treatment", desc: "Perawatan wajah dengan bahan alami dan teknologi modern untuk kulit cerah.", bg: "bg-emerald-50", hoverBg: "group-hover:bg-emerald-100", color: "text-emerald-600", bar: "from-emerald-500 to-teal-500", linkColor: "text-emerald-600" },
              { icon: FaStar, title: "Anti Aging", desc: "Perawatan khusus untuk mengurangi tanda penuaan dan menjaga elastisitas kulit.", bg: "bg-amber-50", hoverBg: "group-hover:bg-amber-100", color: "text-amber-600", bar: "from-amber-400 to-orange-500", linkColor: "text-amber-600" },
              { icon: FaCalendarCheck, title: "Laser Therapy", desc: "Terapi laser untuk berbagai masalah kulit seperti bekas jerawat dan flek hitam.", bg: "bg-violet-50", hoverBg: "group-hover:bg-violet-100", color: "text-violet-600", bar: "from-violet-500 to-purple-600", linkColor: "text-violet-600" },
              { icon: FaShieldAlt, title: "Body Treatment", desc: "Perawatan tubuh seperti body contouring, slimming, dan detox untuk silhouette ideal.", bg: "bg-cyan-50", hoverBg: "group-hover:bg-cyan-100", color: "text-cyan-600", bar: "from-cyan-500 to-blue-500", linkColor: "text-cyan-600" },
              { icon: FaSmile, title: "Perawatan Pria", desc: "Layanan khusus untuk kesehatan dan estetika kulit pria oleh dokter profesional.", bg: "bg-slate-50", hoverBg: "group-hover:bg-slate-100", color: "text-slate-600", bar: "from-slate-500 to-slate-700", linkColor: "text-slate-600" },
            ].map((service, idx) => (
              <div key={idx} className="card-luxury rounded-3xl p-8 group relative overflow-hidden" style={{ transitionDelay: `${(idx % 3) * 100}ms` }}>
                <div className={`hover-bar absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.bar}`} />
                <div className={`w-16 h-16 ${service.bg} ${service.hoverBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="font-playfair font-bold text-xl text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                <div className={`flex items-center gap-1 text-sm font-medium ${service.linkColor} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  Selengkapnya <FaArrowRight className="text-xs" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TESTIMONIAL ===== */}
        <section id="testimonials" className="mt-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/20 rounded-full blur-3xl -z-10" />
          
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <FaStar className="text-xs" />
              Testimoni
            </div>
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Apa Kata <span className="text-gradient">Pasien Kami?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Siti Nurhaliza", text: "Kulit saya jadi lebih cerah dan kenyal setelah facial di GlowCare. Dokternya ramah dan menjelaskan dengan detail.", avatar: "SN", grad: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/20" },
              { name: "Dewi Andriani", text: "Terapi laser untuk bekas jerawat memberikan hasil yang luar biasa. Sangat puas!", avatar: "DA", grad: "from-pink-500 to-rose-500", shadow: "shadow-pink-500/20" },
              { name: "Rina Fitriani", text: "Pelayanan profesional, tempat bersih, dan hasil memuaskan. Highly recommended!", avatar: "RF", grad: "from-violet-500 to-purple-600", shadow: "shadow-violet-500/20" },
            ].map((testi, idx) => (
              <div key={idx} className="card-luxury rounded-3xl p-8 relative overflow-hidden group" style={{ transitionDelay: `${idx * 100}ms` }}>
                <FaQuoteLeft className="absolute top-6 right-6 text-blue-50 text-4xl group-hover:text-blue-100 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 text-[15px] relative z-10 italic">"{testi.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testi.grad} rounded-full flex items-center justify-center text-white font-bold shadow-md ${testi.shadow}`}>
                    {testi.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testi.name}</div>
                    <div className="text-sm text-slate-400">Pasien GlowCare</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section id="contact" className="mt-32">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-12 lg:p-20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-pulse" />
            <div className="absolute bottom-16 left-16 w-2 h-2 bg-cyan-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/10 backdrop-blur-sm">
                <FaRocket className="text-xs" />
                Konsultasi Gratis
              </div>

              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Siap Tampil Lebih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Percaya Diri?</span>
              </h2>
              <p className="text-blue-200/70 text-lg mb-10 leading-relaxed">
                Konsultasikan masalah kulit Anda secara gratis dengan tim dokter kami dan dapatkan rencana perawatan yang tepat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link to="/register" className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 text-base gap-2 shine-effect">
                  Daftar Sekarang <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 text-base backdrop-blur-sm gap-2">
                  Chat via WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-sm text-blue-300/60">
                {["Konsultasi gratis", "Tanpa komitmen", "Dokter ahli siap melayani"].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-cyan-400 text-xs" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 text-white mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <FaSpa className="text-white text-sm" />
                </div>
                <div>
                  <span className="font-bold text-lg text-white">Glow</span>
                  <span className="font-bold text-lg text-blue-400">Care</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Klinik kecantikan dan estetika medis terpercaya di Indonesia.</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-4">Layanan</h4>
              <div className="space-y-3">
                {["Konsultasi Kulit", "Facial Treatment", "Anti Aging", "Laser Therapy"].map((item) => (
                  <a key={item} href="#services" className="block text-slate-500 hover:text-blue-400 text-sm transition-colors">{item}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-4">Kontak</h4>
              <div className="space-y-3 text-slate-500 text-sm">
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-400" /> Jl. Umban Sari No. 1, Pekanbaru</div>
                <div className="flex items-center gap-2"><FaPhoneAlt className="text-blue-400" /> (021) 1234-5678</div>
                <div className="flex items-center gap-2"><FaEnvelope className="text-blue-400" /> hello@glowcare.id</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"><FaTwitter /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} GlowCare Beauty Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}