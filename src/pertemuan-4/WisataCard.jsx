import React from 'react';

export default function WisataCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={item.gambar} alt={item.nama} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-blue-700">{item.nama}</h3>
        <p className="text-gray-500 text-sm mb-2">{item.provinsi} - {item.kategori}</p>
        <p className="text-yellow-500 font-bold mb-3">⭐ {item.rating}</p>
        
        {/* Mengakses Nested Structured Data */}
        <div className="bg-blue-50 p-3 rounded-lg text-sm text-gray-700">
          <p><strong>HTM:</strong> {item.details.htm}</p>
          <p><strong>Jam Buka:</strong> {item.details.jamBuka}</p>
          <p><strong>Akses:</strong> {item.details.akses}</p>
        </div>
      </div>
    </div>
  );
}