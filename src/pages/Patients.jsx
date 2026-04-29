import { FaUserInjured, FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import patientsData from "../data/PatientsData.json";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
  return (
    <div className="flex flex-col">
      <PageHeader title="Patients" breadcrumb={["Dashboard", "Patient List"]}>
        <button onClick={() => setIsModalOpen(true)} className="bg-hijau hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium shadow-sm transition-colors">
          <FaPlus /> <span>Add Patient</span>
        </button>
      </PageHeader>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mt-4">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-4 font-semibold">Patient ID</th>
              <th className="px-6 py-4 font-semibold">Patient Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Phone</th>
              <th className="px-6 py-4 font-semibold">Last Treatment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {patients.map((patient, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-900">{patient.patientId}</td>
                <td className="px-6 py-3 text-gray-600">{patient.patientName}</td>
                <td className="px-6 py-3 text-gray-600">{patient.email}</td>
                <td className="px-6 py-3 text-gray-600">{patient.phone}</td>
                <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold ${patient.treatment === 'Facial' ? 'bg-pink-200 text-pink-800' : patient.treatment === 'Laser' ? 'bg-blue-200 text-blue-700' : 'bg-purple-100 text-purple-800'}`}>
                    {patient.treatment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Patient</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label><input type="text" name="patientId" value={formData.patientId} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="PAT-9999" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label><input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="Jane Doe" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="jane@example.com" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="+62..." /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Treatment Type</label><select name="treatment" value={formData.treatment} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau"><option value="Facial">Facial</option><option value="Laser">Laser</option><option value="Massage">Massage</option></select></div>
              <div className="pt-4 flex justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="mr-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-hijau text-white rounded-lg hover:bg-green-600 font-medium shadow-sm">Save Patient</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}