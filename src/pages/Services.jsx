import { FaSpa, FaPlus, FaTimes, FaEllipsisH } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import servicesData from "../data/ServicesData.json";
import { useState } from "react";

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
    <div className="flex flex-col font-inter">
      <PageHeader title="Services" breadcrumb={["Dashboard", "Services List"]}>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-medium shadow-sm shadow-blue-600/20 transition-all">
          <FaPlus /> <span>Add Service</span>
        </button>
      </PageHeader>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Service ID</th>
                <th className="px-6 py-4 font-semibold">Service Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Duration (min)</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {services.map((svc, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-500">{svc.serviceId}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800 flex items-center gap-3">
                     <div className="bg-blue-50 text-blue-600 p-2 rounded-lg"><FaSpa /></div>
                     {svc.serviceName}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                        svc.category === 'Facial' ? 'bg-blue-50 text-blue-600 border-blue-200' : 
                        svc.category === 'Laser' ? 'bg-purple-50 text-purple-600 border-purple-200' : 
                        'bg-teal-50 text-teal-600 border-teal-200'
                    }`}>
                      {svc.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{svc.duration} Mins</td>
                  <td className="px-6 py-4 font-bold text-gray-800">{svc.price}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"><FaEllipsisH /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Service</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service ID</label>
                <input type="text" name="serviceId" value={formData.serviceId} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="SRV-9999" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input type="text" name="serviceName" value={formData.serviceName} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Facial Treatment" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all">
                  <option value="Facial">Facial</option>
                  <option value="Laser">Laser</option>
                  <option value="Massage">Massage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                <input type="number" name="duration" value={formData.duration} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="60" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input type="text" name="price" value={formData.price} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Rp 500000" />
              </div>
              
              <div className="pt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm font-medium shadow-sm shadow-blue-600/20 transition-all">Save Service</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}