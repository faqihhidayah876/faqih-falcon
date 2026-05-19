import { useState } from "react";
import { FaPlus, FaEllipsisH } from "react-icons/fa";
import patientsData from "../data/PatientsData.json";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Card from "../components/Card";
import Table from "../components/Table";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

export default function Patients() {
  const [patients, setPatients] = useState(patientsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ patientId: "", patientName: "", email: "", phone: "", treatment: "Facial" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([formData, ...patients]);
    setIsModalOpen(false);
    setFormData({ patientId: "", patientName: "", email: "", phone: "", treatment: "Facial" });
  };

  // Fungsi helper untuk menentukan warna Badge
  const getTreatmentBadgeType = (treatment) => {
    if (treatment === 'Facial') return 'info';    // Biru
    if (treatment === 'Laser') return 'purple';   // Ungu
    return 'success';                             // Hijau/Teal (Massage)
  };

  // Definisi Header Tabel
  const tableHeaders = [
    "Patient Name", 
    "Patient ID", 
    "Email", 
    "Phone", 
    "Treatment", 
    "Action"
  ];

  return (
    <div className="flex flex-col font-inter">
      {/* 1. Header Halaman */}
      <PageHeader 
        title="Patients Directory" 
        breadcrumb={["Dashboard", "Patient List"]}
      >
        {/* Menggunakan komponen Button kustom */}
        <Button onClick={() => setIsModalOpen(true)} icon={<FaPlus />}>
          Add Patient
        </Button>
      </PageHeader>

      {/* 2. Area Tabel (Dibungkus Card) */}
      <Card className="mt-4">
        {/* Menggunakan komponen Table kustom */}
        <Table headers={tableHeaders}>
          {patients.map((patient, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-800 flex items-center gap-3">
                {/* Menggunakan komponen Avatar */}
                <Avatar name={patient.patientName} />
                {patient.patientName}
              </td>
              <td className="px-6 py-4 font-medium text-gray-500">{patient.patientId}</td>
              <td className="px-6 py-4 text-gray-500">{patient.email}</td>
              <td className="px-6 py-4 text-gray-500">{patient.phone}</td>
              <td className="px-6 py-4">
                {/* Menggunakan komponen Badge */}
                <Badge type={getTreatmentBadgeType(patient.treatment)}>
                  {patient.treatment}
                </Badge>
              </td>
              <td className="px-6 py-4 text-center">
                <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                  <FaEllipsisH />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </Card>

      {/* 3. Modal Form Tambah Pasien */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Add New Patient"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField 
            label="Patient ID" 
            name="patientId" 
            value={formData.patientId} 
            onChange={handleInputChange} 
            placeholder="PAT-9999" 
            required 
          />
          <InputField 
            label="Patient Name" 
            name="patientName" 
            value={formData.patientName} 
            onChange={handleInputChange} 
            placeholder="Jane Doe" 
            required 
          />
          <InputField 
            type="email" 
            label="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            placeholder="jane@example.com" 
            required 
          />
          <InputField 
            label="Phone Number" 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange} 
            placeholder="+62..." 
            required 
          />
          <SelectField 
            label="Treatment Type" 
            name="treatment" 
            value={formData.treatment} 
            onChange={handleInputChange}
            options={[
              { label: "Facial", value: "Facial" },
              { label: "Laser", value: "Laser" },
              { label: "Massage", value: "Massage" }
            ]}
          />
          
          <div className="pt-4 flex justify-end gap-2">
            <Button type="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="primary" onClick={handleSubmit}>
              Save Patient
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}