export default function TabelAdmin({ semuaData }) {
  return (
    <table className="w-full bg-white shadow rounded-lg border-collapse">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="border p-2">Nama Wisata</th>
          <th className="border p-2">Kategori</th>
          <th className="border p-2">Provinsi</th>
          <th className="border p-2">Detail Tiket & Jam</th>
        </tr>
      </thead>
      <tbody>
        {semuaData.map((item) => (
          <tr key={item.id} className="text-center hover:bg-gray-100">
            <td className="border p-2 font-bold">{item.nama}</td>
            <td className="border p-2">{item.kategori}</td>
            <td className="border p-2">{item.provinsi}</td>
            <td className="border p-2 text-sm text-left">
              HTM: {item.details.htm} <br />
              Jam: {item.details.jamBuka}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}