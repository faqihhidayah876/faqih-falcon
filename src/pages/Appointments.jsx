import { FaCalendarAlt, FaPlus, FaTimes, FaEllipsisH } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import appointmentsData from "../data/AppointmentsData.json";
import { useState, useEffect } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    appointmentId: "",
    patientName: "",
    service: "Facial",
    date: "",
    status: "Scheduled",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppointments(appointmentsData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([formData, ...appointments]);
    setIsModalOpen(false);
    setFormData({
      appointmentId: "",
      patientName: "",
      service: "Facial",
      date: "",
      status: "Scheduled",
    });
  };

  return (
    <div className="flex flex-col font-inter">
      <PageHeader
        title="Appointments"
        breadcrumb={["Dashboard", "Appointments List"]}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-medium shadow-sm shadow-blue-600/20 transition-all"
        >
          <FaPlus /> <span>Add Appointment</span>
        </button>
      </PageHeader>

      {isLoading ? (
        <div className="mt-8 flex justify-center items-center text-blue-600 font-semibold animate-pulse">
          ⏳ Sedang memuat data reservasi...
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mt-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Appointment ID</th>
                  <th className="px-6 py-4 font-semibold">Patient Name</th>
                  <th className="px-6 py-4 font-semibold">Service</th>
                  <th className="px-6 py-4 font-semibold">Date & Time</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {appointments.map((apt, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-500">
                      {apt.appointmentId}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {apt.patientName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{apt.service}</td>
                    <td className="px-6 py-4 text-gray-500 flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" /> {apt.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                          apt.status === "Completed"
                            ? "bg-green-50 text-green-600 border-green-200"
                            : apt.status === "Scheduled"
                            ? "bg-blue-50 text-blue-600 border-blue-200"
                            : "bg-amber-50 text-amber-600 border-amber-200"
                        }`}
                      >
                        {apt.status}
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
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Add New Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment ID
                </label>
                <input
                  type="text"
                  name="appointmentId"
                  value={formData.appointmentId}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="APT-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  <option value="Facial">Facial</option>
                  <option value="Laser">Laser</option>
                  <option value="Massage">Massage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm font-medium shadow-sm shadow-blue-600/20 transition-all"
                >
                  Save Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}