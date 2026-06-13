export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fafcff] font-jakarta antialiased flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* ===== CUSTOM STYLES ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }

        .text-gradient-blue {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Animasi Mesh Background */
        .mesh-blob {
          position: absolute;
          filter: blur(100px);
          z-index: 0;
          opacity: 0.6;
          mix-blend-mode: screen;
          animation: move 20s infinite alternate ease-in-out;
        }
        @keyframes move {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -100px) scale(1.2); }
          66% { transform: translate(-50px, 50px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        /* Animasi Spinner SVG */
        .spinner-rotate {
          animation: rotate 2s linear infinite;
        }
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
        .spinner-dash {
          stroke-dasharray: 200;
          stroke-dashoffset: 100;
          animation: dash 1.5s ease-in-out infinite;
        }
        @keyframes dash {
          0% { stroke-dashoffset: 200; }
          50% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 200; }
        }
      `}</style>

      {/* ===== DYNAMIC MESH BACKGROUND ===== */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="mesh-blob w-[600px] h-[600px] bg-blue-200/50 rounded-full top-[-20%] left-[-10%]" />
        <div className="mesh-blob w-[500px] h-[500px] bg-cyan-200/40 rounded-full top-[40%] right-[-15%]" style={{animationDelay: '-5s'}} />
        <div className="mesh-blob w-[700px] h-[700px] bg-indigo-100/30 rounded-full bottom-[-30%] left-[20%]" style={{animationDelay: '-10s'}} />
      </div>

      {/* ===== LOADING CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo & SVG Spinner Container */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-8">
          {/* SVG Gradient Spinner */}
          <svg className="absolute inset-0 w-full h-full spinner-rotate" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="4" 
            />
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="url(#spinnerGradient)" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="spinner-dash"
            />
          </svg>

          {/* Logo di Tengah Spinner */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20 p-1 bg-white/70 backdrop-blur-md border border-white/80 animate-pulse">
            <img 
              src="https://i.ibb.co.com/814mnML/logo-klinik-CRM.png" 
              alt="GlowCare Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Teks Loading */}
        <h2 className="font-playfair text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Glow<span className="text-gradient-blue">Care</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm tracking-wider uppercase">
          Menyiapkan pengalaman Anda...
        </p>
      </div>
    </div>
  );
}