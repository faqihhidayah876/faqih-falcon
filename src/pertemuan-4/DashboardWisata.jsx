import { useState } from 'react';
import dataJson from './wisata.json';
import CardGuest from './components/CardGuest';
import TabelAdmin from './components/TabelAdmin';

export default function DashboardWisata() {
  // 1. INISIALISASI DATA FORM (Menggabungkan semua state input)
  const [dataForm, setDataForm] = useState({
    pencarian: "",
    filterKategori: "",
    filterProvinsi: ""
  });

  // State tampilan biarkan terpisah karena bukan bagian dari input filter
  const [tampilan, setTampilan] = useState("guest");

  // 2. INISIALISASI HANDLE PERUBAHAN NILAI (Satu fungsi untuk semua input)
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // 3. PROSES FILTER MENGGUNAKAN dataForm
  const hasilFilter = dataJson.filter((item) => {
    // Memanggil state dengan dataForm.pencarian, dataForm.filterKategori, dst
    const matchPencarian = item.nama.toLowerCase().includes(dataForm.pencarian.toLowerCase());
    const matchKategori = !dataForm.filterKategori || item.kategori === dataForm.filterKategori;
    const matchProvinsi = !dataForm.filterProvinsi || item.provinsi === dataForm.filterProvinsi;
    
    return matchPencarian && matchKategori && matchProvinsi;
  });

  return (
    <div className="p-5 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">Sistem Informasi Wisata</h1>

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

      <div className="bg-white p-4 shadow rounded flex flex-col md:flex-row gap-4 mb-5">
        {/* PENTING: Tambahkan atribut name="" yang nilainya SAMA PERSIS 
          dengan nama properti di dalam state dataForm 
        */}
        <input 
          type="text" 
          name="pencarian" 
          placeholder="Cari nama wisata..." 
          value={dataForm.pencarian} 
          onChange={handleChange} 
          className="p-2 border rounded w-full border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <select 
          name="filterKategori" 
          value={dataForm.filterKategori} 
          onChange={handleChange} 
          className="p-2 border rounded w-full outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Semua Kategori --</option>
          <option value="Alam">Alam</option>
          <option value="Sejarah">Sejarah</option>
          <option value="Hiburan">Hiburan</option>
          <option value="Budaya">Budaya</option>
        </select>

        <select 
          name="filterProvinsi" 
          value={dataForm.filterProvinsi} 
          onChange={handleChange} 
          className="p-2 border rounded w-full outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Semua Provinsi --</option>
          <option value="Bali">Bali</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Jawa Barat">Jawa Barat</option>
          <option value="Jawa Timur">Jawa Timur</option>
          <option value="Yogyakarta">Yogyakarta</option>
        </select>
      </div>

      {tampilan === "guest" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hasilFilter.length > 0 ? (
            hasilFilter.map((item) => (
              <CardGuest key={item.id} dataWisata={item} />
            ))
          ) : (
            <p className="col-span-full text-center font-bold text-red-500">Wisata tidak ditemukan.</p>
          )}
        </div>
      ) : (
        <TabelAdmin semuaData={hasilFilter} />
      )}
    </div>
  );
}