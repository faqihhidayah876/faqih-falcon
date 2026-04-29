import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import appointmentsData from "../data/AppointmentsData.json";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Appointments() {
  const [appointments, setAppointments] = useState(appointmentsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ appointmentId: "", patientName: "", service: "Facial", date: "", status: "Scheduled" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([formData, ...appointments]);
    setIsModalOpen(false);
    setFormData({ appointmentId: "", patientName: "", service: "Facial", date: "", status: "Scheduled" });
  };
  return (
    <div className="flex flex-col">
      <PageHeader title="Appointments" breadcrumb={["Dashboard", "Appointments List"]}>
        <button onClick={() => setIsModalOpen(true)} className="bg-hijau hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium shadow-sm transition-colors">
          <FaPlus /> <span>Add Appointment</span>
        </button>
      </PageHeader>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mt-4">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-4 font-semibold">Appointment ID</th>
              <th className="px-6 py-4 font-semibold">Patient Name</th>
              <th className="px-6 py-4 font-semibold">Service</th>
              <th className="px-6 py-4 font-semibold">Date & Time</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {appointments.map((apt, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-900">{apt.appointmentId}</td>
                <td className="px-6 py-3 text-gray-600">{apt.patientName}</td>
                <td className="px-6 py-3 text-gray-600">{apt.service}</td>
                <td className="px-6 py-3 text-gray-600">{apt.date}</td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${apt.status === 'Completed' ? 'bg-green-100 text-green-700' : apt.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {apt.status}
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Appointment ID</label><input type="text" name="appointmentId" value={formData.appointmentId} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="APT-9999" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label><input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="Jane Doe" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Service</label><select name="service" value={formData.service} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau"><option value="Facial">Facial</option><option value="Laser">Laser</option><option value="Massage">Massage</option></select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label><input type="datetime-local" name="date" value={formData.date} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Status</label><select name="status" value={formData.status} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau"><option value="Scheduled">Scheduled</option><option value="Completed">Completed</option><option value="Cancelled">Cancelled</option></select></div>
              <div className="pt-4 flex justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="mr-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-hijau text-white rounded-lg hover:bg-green-600 font-medium shadow-sm">Save Appointment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}