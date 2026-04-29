import { FaSpa, FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import servicesData from "../data/ServicesData.json";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Services() {
  const [services, setServices] = useState(servicesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ serviceId: "", serviceName: "", price: "", duration: "60", category: "Facial" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServices([formData, ...services]);
    setIsModalOpen(false);
    setFormData({ serviceId: "", serviceName: "", price: "", duration: "60", category: "Facial" });
  };
  return (
    <div className="flex flex-col">
      <PageHeader title="Services" breadcrumb={["Dashboard", "Services List"]}>
        <button onClick={() => setIsModalOpen(true)} className="bg-hijau hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium shadow-sm transition-colors">
          <FaPlus /> <span>Add Service</span>
        </button>
      </PageHeader>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mt-4">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-4 font-semibold">Service ID</th>
              <th className="px-6 py-4 font-semibold">Service Name</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Duration (min)</th>
              <th className="px-6 py-4 font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map((svc, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-3 font-medium text-gray-900">{svc.serviceId}</td>
                <td className="px-6 py-3 text-gray-600">{svc.serviceName}</td>
                <td className="px-6 py-3">
                  <span className={`px-2 py-1 rounded-md text-xs font-bold ${svc.category === 'Facial' ? 'bg-pink-200 text-pink-800' : svc.category === 'Laser' ? 'bg-blue-200 text-blue-700' : 'bg-purple-100 text-purple-800'}`}>
                    {svc.category}
                  </span>
                </td>
                <td className="px-6 py-3 text-gray-600">{svc.duration}</td>
                <td className="px-6 py-3 text-gray-600">{svc.price}</td>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Service ID</label><input type="text" name="serviceId" value={formData.serviceId} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="SRV-9999" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label><input type="text" name="serviceName" value={formData.serviceName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="Facial Treatment" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Category</label><select name="category" value={formData.category} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau"><option value="Facial">Facial</option><option value="Laser">Laser</option><option value="Massage">Massage</option></select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label><input type="number" name="duration" value={formData.duration} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="60" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Price</label><input type="text" name="price" value={formData.price} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-hijau focus:ring-1 focus:ring-hijau" placeholder="Rp 500000" /></div>
              <div className="pt-4 flex justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="mr-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-hijau text-white rounded-lg hover:bg-green-600 font-medium shadow-sm">Save Service</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}