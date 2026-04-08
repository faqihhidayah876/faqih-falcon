export default function CardGuest({ dataWisata }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg border border-gray-200 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      {/* Menampilkan Gambar Asli */}
      <img src={dataWisata.gambar} alt="wisata" className="w-full h-40 object-cover rounded" />
      
      {/* Konten Teks */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold mt-3 text-blue-600">{dataWisata.nama}</h3>
        <p className="text-gray-500 font-medium">{dataWisata.kategori} - {dataWisata.provinsi}</p>
        
        {/* Ini Nested Data */}
        <div className="mt-3 bg-blue-50 p-3 rounded text-sm text-gray-700">
          <p><strong>Harga Tiket:</strong> {dataWisata.details.htm}</p>
          <p><strong>Jam Buka:</strong> {dataWisata.details.jamBuka}</p>
        </div>
      </div>

      {/* Tombol Klik Link */}
      <a 
        href={dataWisata.details.linkMaps} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
      >
        Lihat Info & Peta
      </a>
    </div>
  );
}