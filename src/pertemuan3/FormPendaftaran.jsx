import React, { useState } from "react";
import ReusableInput from "./ReusableInput";
import ReusableSelect from "./ReusableSelect";

export default function FormPendaftaran() {
  // 1. State untuk menyimpan inputan user
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    program: "",
    pengalaman: "",
  });

  // 2. State untuk menyimpan pesan error
  const [errors, setErrors] = useState({
    nama: "Nama wajib diisi",
    email: "Email wajib diisi",
    noHp: "Nomor HP wajib diisi",
    program: "Program wajib dipilih",
    pengalaman: "Pengalaman wajib dipilih",
  });

  // 3. State untuk menampilkan hasil jika sukses
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi Validasi (Menerapkan min 3 validasi per input)
  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "nama") {
      // Validasi 1: Required, Validasi 2: Min length, Validasi 3: Regex Tanpa Angka
      if (!value) errorMsg = "Nama tidak boleh kosong.";
      else if (value.length < 3) errorMsg = "Nama minimal 3 karakter.";
      else if (/[^a-zA-Z\s]/.test(value)) errorMsg = "Nama tidak boleh mengandung angka/simbol.";
    } 
    else if (name === "email") {
      // Validasi 1: Required, Validasi 2: Format @, Validasi 3: Tanpa spasi
      if (!value) errorMsg = "Email tidak boleh kosong.";
      else if (!value.includes("@") || !value.includes(".")) errorMsg = "Format email tidak valid (harus ada @ dan .).";
      else if (/\s/.test(value)) errorMsg = "Email tidak boleh mengandung spasi.";
    } 
    else if (name === "noHp") {
      // Validasi 1: Required, Validasi 2: Hanya Angka, Validasi 3: Awalan 08
      if (!value) errorMsg = "Nomor HP tidak boleh kosong.";
      else if (!/^\d+$/.test(value)) errorMsg = "Nomor HP hanya boleh berisi angka.";
      else if (!value.startsWith("08")) errorMsg = "Nomor HP harus diawali dengan '08'.";
      else if (value.length < 10) errorMsg = "Nomor HP minimal 10 digit.";
    }
    else if (name === "program" || name === "pengalaman") {
      if (!value) errorMsg = "Pilihan ini wajib dipilih.";
    }

    // Update state error khusus untuk field yang sedang diubah
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Event Handler saat input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value); // Panggil validasi setiap kali ngetik
    setIsSubmitted(false); // Reset status submit jika user mengubah data lagi
  };

  // Cek apakah semua error kosong (Form Valid)
  const isFormValid = Object.values(errors).every((err) => err === "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg border-t-8 border-blue-600">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Form Beasiswa IT</h2>
        <p className="text-center text-gray-500 mb-6">Lengkapi data diri Anda dengan benar.</p>

        <form onSubmit={handleSubmit}>
          {/* 3 Inputan Text/Number */}
          <ReusableInput label="Nama Lengkap" type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Faqih" error={errors.nama} />
          <ReusableInput label="Alamat Email" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="faqih@example.com" error={errors.email} />
          <ReusableInput label="Nomor Handphone" type="text" name="noHp" value={formData.noHp} onChange={handleChange} placeholder="08123456789" error={errors.noHp} />

          {/* 2 Select Dropdown */}
          <ReusableSelect
            label="Pilihan Program Bootcamp"
            name="program"
            value={formData.program}
            onChange={handleChange}
            error={errors.program}
            options={[
              { value: "react", label: "Frontend React.js" },
              { value: "laravel", label: "Backend Laravel" },
              { value: "data", label: "Data Science" },
            ]}
          />
          <ReusableSelect
            label="Tingkat Pengalaman"
            name="pengalaman"
            value={formData.pengalaman}
            onChange={handleChange}
            error={errors.pengalaman}
            options={[
              { value: "pemula", label: "Pemula (Belum ada pengalaman)" },
              { value: "menengah", label: "Menengah (Sudah paham dasar)" },
            ]}
          />

          {/* CONDITIONAL RENDERING: Tombol muncul HANYA jika form valid */}
          {isFormValid ? (
            <button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg">
              Kirim Pendaftaran
            </button>
          ) : (
            <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 text-sm font-semibold text-center">
              Harap isi semua semua form untuk menampilkan tombol submit.
            </div>
          )}
        </form>

        {/* CONDITIONAL RENDERING: Hasil Akhir setelah Submit */}
        {isSubmitted && (
          <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-green-700 border-b pb-2 mb-3">Pendaftaran Berhasil!</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Nama:</strong> {formData.nama}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>No HP:</strong> {formData.noHp}</li>
              <li><strong>Program:</strong> <span className="uppercase text-blue-600 font-bold">{formData.program}</span></li>
              <li><strong>Pengalaman:</strong> {formData.pengalaman}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}