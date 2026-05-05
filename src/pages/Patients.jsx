import { FaUserInjured, FaPlus, FaTimes, FaEllipsisH } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import patientsData from "../data/PatientsData.json";
import { useState } from "react";

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
    <div className="flex flex-col font-inter">
      {/* Menggunakan PageHeader bawaanmu, tapi tombolnya di-style biru modern */}
      <PageHeader title="Patients Directory" breadcrumb={["Dashboard", "Patient List"]}>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-medium shadow-sm shadow-blue-600/20 transition-all">
          <FaPlus /> <span>Add Patient</span>
        </button>
      </PageHeader>

      {/* Table Card bergaya Shopeers */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Patient Name</th>
                <th className="px-6 py-4 font-semibold">Patient ID</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Phone</th>
                <th className="px-6 py-4 font-semibold">Treatment</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {patients.map((patient, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  {/* Kolom Nama dengan Avatar Inisial */}
                  <td className="px-6 py-4 font-semibold text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                      {/* Mengambil huruf pertama dari patientName */}
                      {patient.patientName ? patient.patientName.charAt(0).toUpperCase() : 'U'}
                    </div>
                    {patient.patientName}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-500">{patient.patientId}</td>
                  <td className="px-6 py-4 text-gray-500">{patient.email}</td>
                  <td className="px-6 py-4 text-gray-500">{patient.phone}</td>
                  <td className="px-6 py-4">
                      {/* Badge warna-warni kalem */}
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                          patient.treatment === 'Facial' ? 'bg-blue-50 text-blue-600 border-blue-200' : 
                          patient.treatment === 'Laser' ? 'bg-purple-50 text-purple-600 border-purple-200' : 
                          'bg-teal-50 text-teal-600 border-teal-200'
                      }`}>
                      {patient.treatment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Patient */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Patient</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
                <input type="text" name="patientId" value={formData.patientId} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="PAT-9999" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                <input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="+62..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Type</label>
                <select name="treatment" value={formData.treatment} onChange={handleInputChange} className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all">
                  <option value="Facial">Facial</option>
                  <option value="Laser">Laser</option>
                  <option value="Massage">Massage</option>
                </select>
              </div>
              
              <div className="pt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm font-medium shadow-sm shadow-blue-600/20 transition-all">Save Patient</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}