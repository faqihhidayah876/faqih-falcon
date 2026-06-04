import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaSearch, FaArrowLeft } from "react-icons/fa";

export default function NotFound({
  errorCode = "404",
  errorDescription = "Oops! Halaman yang Anda cari tidak ditemukan.",
  errorImage,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      {/* Background image overlay (opsional) */}
      {errorImage && (
        <div
          className="fixed inset-0 z-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${errorImage})` }}
        />
      )}

      <div className="relative z-10 text-center max-w-md w-full">
        {/* Ilustrasi angka error dengan efek */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          {errorCode}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
          {errorDescription}
        </p>

        {/* Form pencarian */}
        <form onSubmit={handleSearch} className="relative w-full mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari halaman atau artikel..."
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-5 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <FaSearch size={20} />
          </button>
        </form>

        {/* Tombol aksi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FaHome /> Beranda
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
          >
            <FaArrowLeft /> Kembali
          </button>
        </div>

        {/* Saran link tambahan */}
        <div className="mt-8 text-sm text-gray-400">
          Atau langsung ke halaman:{" "}
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-all"
          >
            Dashboard
          </Link>
          {" • "}
          <Link
            to="/products"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-all"
          >
            Produk
          </Link>
          {" • "}
          <Link
            to="/contact"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-all"
          >
            Kontak
          </Link>
        </div>
      </div>
    </div>
  );
}