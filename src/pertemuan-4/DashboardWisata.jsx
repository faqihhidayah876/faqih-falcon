import { useState } from 'react';
import dataJson from './wisata.json';
import CardGuest from './components/CardGuest';
import TabelAdmin from './components/TabelAdmin';

export default function DashboardWisata() {
  // State sangat dasar seperti yang dipelajari di pertemuan 3
  const [tampilan, setTampilan] = useState("guest");
  const [pencarian, setPencarian] = useState("");
  const [filterKategori, setFilterKategori] = useState("");
  const [filterProvinsi, setFilterProvinsi] = useState("");

  // Proses Filter Data (Simpel)
  const hasilFilter = dataJson.filter((item) => {
    const cekNama = item.nama.toLowerCase().includes(pencarian.toLowerCase());
    const cekKategori = filterKategori === "" ? true : item.kategori === filterKategori;
    const cekProvinsi = filterProvinsi === "" ? true : item.provinsi === filterProvinsi;
    
    // Gabungkan ketiganya
    return cekNama && cekKategori && cekProvinsi;
  });

  return (
    <div className="p-5 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">Sistem Informasi Wisata</h1>

      {/* Tombol Guest / Admin */}
      <div className="flex justify-center gap-4 mb-5">
        <button 
          onClick={() => setTampilan("guest")}
          className={`px-4 py-2 rounded font-bold ${tampilan === "guest" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Lihat Sebagai Guest (Card)
        </button>
        <button 
          onClick={() => setTampilan("admin")}
          className={`px-4 py-2 rounded font-bold ${tampilan === "admin" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Lihat Sebagai Admin (Tabel)
        </button>
      </div>

      {/* Area Input Pencarian & Filter */}
      <div className="bg-white p-4 shadow rounded flex flex-col md:flex-row gap-4 mb-5">
        <input 
          type="text" 
          placeholder="Cari nama wisata..." 
          value={pencarian} 
          onChange={(e) => setPencarian(e.target.value)} 
          className="p-2 border rounded w-full border-gray-300"
        />
        
        <select value={filterKategori} onChange={(e) => setFilterKategori(e.target.value)} className="p-2 border rounded w-full">
          <option value="">-- Semua Kategori --</option>
          <option value="Alam">Alam</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Hiburan">Hiburan</option>
          <option value="Budaya">Budaya</option>
        </select>

        <select value={filterProvinsi} onChange={(e) => setFilterProvinsi(e.target.value)} className="p-2 border rounded w-full">
          <option value="">-- Semua Provinsi --</option>
          <option value="Bali">Bali</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Jawa Barat">Jawa Barat</option>
          <option value="Jawa Timur">Jawa Timur</option>
          <option value="Yogyakarta">Yogyakarta</option>
        </select>
      </div>

      {/* Conditional Rendering Tampilan */}
      {tampilan === "guest" ? (
        // Grid Design Tailwind untuk Guest (Responsive)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hasilFilter.map((item) => (
            <CardGuest key={item.id} dataWisata={item} />
          ))}
        </div>
      ) : (
        // Tampilan Tabel untuk Admin
        <TabelAdmin semuaData={hasilFilter} />
      )}
    </div>
  );
}