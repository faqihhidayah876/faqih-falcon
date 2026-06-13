import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import { FaCheck, FaTimes, FaCalendarAlt, FaClock, FaUserCircle, FaSpa } from "react-icons/fa";

// Menggunakan komponen tabel Shadcn UI yang kamu miliki
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Appointments() {
  // Dummy Data Reservasi Masuk dari Pasien
  const [reservations, setReservations] = useState([
    { id: 1, patient: "Alinea Putri", service: "Pico Laser Pro", doctor: "Dr. Sarah Monica, Sp.KK", date: "2026-10-24", time: "14:00", status: "pending" },
    { id: 2, patient: "Budi Pelanggan", service: "Anti-Aging Ultherapy", doctor: "Dr. Budi Santoso, Dipl. AAAM", date: "2026-10-25", time: "10:00", status: "approved" },
    { id: 3, patient: "Dinda Kirana", service: "Royal Gold Facial", doctor: "Dr. Sarah Monica, Sp.KK", date: "2026-10-26", time: "11:30", status: "pending" },
  ]);

  // Fungsi interaktif untuk menerima reservasi
  const handleApprove = (id) => {
    setReservations(reservations.map(res => 
      res.id === id ? { ...res, status: "approved" } : res
    ));
  };

  // Fungsi interaktif untuk menolak reservasi
  const handleReject = (id) => {
    setReservations(reservations.map(res => 
      res.id === id ? { ...res, status: "rejected" } : res
    ));
  };

  return (
    <div className="flex flex-col font-jakarta">
      <PageHeader title="Appointment Management" breadcrumb={["Dashboard", "Reservasi Pasien"]} />

      <Card className="mt-6 p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 font-playfair">Daftar Permintaan Janji Temu</h3>
          <p className="text-sm text-slate-500 font-medium">Kelola, setujui, atau jadwalkan ulang permintaan perawatan dari pasien.</p>
        </div>

        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-bold text-slate-700">Pasien</TableHead>
              <TableHead className="font-bold text-slate-700">Layanan Perawatan</TableHead>
              <TableHead className="font-bold text-slate-700">Dokter</TableHead>
              <TableHead className="font-bold text-slate-700">Waktu Kunjungan</TableHead>
              <TableHead className="font-bold text-slate-700">Status</TableHead>
              <TableHead className="font-bold text-slate-700 text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((res) => (
              <TableRow key={res.id} className="hover:bg-slate-50/80 transition-colors">
                <TableCell className="font-bold text-slate-800 flex items-center gap-2 py-4">
                  <FaUserCircle className="text-slate-400 text-lg" />
                  {res.patient}
                </TableCell>
                <TableCell className="text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5"><FaSpa className="text-blue-500 text-xs"/> {res.service}</span>
                </TableCell>
                <TableCell className="text-slate-500 font-medium">{res.doctor}</TableCell>
                <TableCell className="text-slate-600 font-medium">
                  <div className="flex flex-col gap-0.5">
                    <span className="flex items-center gap-1 text-xs text-slate-700 font-bold"><FaCalendarAlt className="text-blue-500"/> {res.date}</span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold"><FaClock/> {res.time} WIB</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    res.status === "approved" ? "bg-green-50 text-green-700 border-green-200" :
                    res.status === "rejected" ? "bg-red-50 text-red-700 border-red-200" :
                    "bg-amber-50 text-amber-700 border-amber-200 animate-pulse"
                  }`}>
                    {res.status === "approved" ? "Disetujui" : res.status === "rejected" ? "Ditolak" : "Pending"}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {res.status === "pending" ? (
                    <div className="flex justify-center gap-2">
                      <button 
                        onClick={() => handleApprove(res.id)}
                        className="p-2.5 bg-green-50 text-green-600 border border-green-100 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm"
                        title="Setujui Janji Temu"
                      >
                        <FaCheck className="text-xs" />
                      </button>
                      <button 
                        onClick={() => handleReject(res.id)}
                        className="p-2.5 bg-red-50 text-red-600 border border-red-100 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                        title="Tolak Janji Temu"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 font-semibold italic">Selesai diarsip</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}