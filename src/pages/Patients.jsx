import { useState } from "react";
import { FaPlus, FaEllipsisH, FaEdit, FaTrash } from "react-icons/fa"; // Tambahan ikon Edit & Trash
import patientsData from "../data/PatientsData.json";

// 1. IMPORT KOMPONEN KUSTOM KITA (Yang dipertahankan)
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

// 2. IMPORT KOMPONEN SHADCN UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    setIsModalOpen(false); // Otomatis menutup Dialog shadcn
    setFormData({ patientId: "", patientName: "", email: "", phone: "", treatment: "Facial" });
  };

  // Fungsi helper untuk menentukan warna Badge (tetap kustom)
  const getTreatmentBadgeType = (treatment) => {
    if (treatment === 'Facial') return 'info';
    if (treatment === 'Laser') return 'purple';
    return 'success';
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
        {/* Tombol Add Patient (Tetap pakai Button kustom kita) */}
        <Button onClick={() => setIsModalOpen(true)} icon={<FaPlus />}>
          Add Patient
        </Button>
      </PageHeader>

      {/* 2. Area Tabel dengan SHADCN UI TABLE */}
      <Card className="mt-4 p-2">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className="font-semibold text-gray-500">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient, idx) => (
              <TableRow key={idx} className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                <TableCell className="font-semibold text-gray-800 flex items-center gap-3 py-4">
                  <Avatar name={patient.patientName} />
                  {patient.patientName}
                </TableCell>
                <TableCell className="font-medium text-gray-500">{patient.patientId}</TableCell>
                <TableCell className="text-gray-500">{patient.email}</TableCell>
                <TableCell className="text-gray-500">{patient.phone}</TableCell>
                <TableCell>
                  <Badge type={getTreatmentBadgeType(patient.treatment)}>
                    {patient.treatment}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  
                  {/* 3. Action dengan SHADCN UI DROPDOWN MENU */}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors outline-none">
                      <FaEllipsisH />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white rounded-xl shadow-lg border-gray-100 p-1 min-w-[150px]">
                      <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 text-gray-700 flex items-center gap-2 p-2 rounded-lg outline-none">
                        <FaEdit className="text-blue-500" /> Edit Patient
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer hover:bg-red-50 text-red-600 flex items-center gap-2 p-2 rounded-lg outline-none focus:text-red-600 focus:bg-red-50">
                        <FaTrash /> Delete Record
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* 4. Modal Form dengan SHADCN UI DIALOG */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {/* Konten Dialog */}
        <DialogContent className="sm:max-w-md bg-white rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
              Add New Patient
            </DialogTitle>
          </DialogHeader>
          
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
              <Button type="outline" onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}>
                Cancel
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                Save Patient
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}