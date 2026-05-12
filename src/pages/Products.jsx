import { FaPlus, FaTimes, FaEye, FaFlask } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import productData from "../data/ProductData.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(productData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: "", title: "", category: "Skincare", brand: "Falcon Beauty", price: "", stock: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...formData, price: Number(formData.price), stock: Number(formData.stock) };
    setProducts([newProduct, ...products]);
    setIsModalOpen(false);
    setFormData({ id: "", title: "", category: "Skincare", brand: "Falcon Beauty", price: "", stock: "" });
  };

  const formatRupiah = (angka) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);

  return (
    <div className="flex flex-col font-inter">
      {/* PageHeader dengan tombol modern bernuansa hijau/teal */}
      <PageHeader title="Beauty Products" breadcrumb={["Klinik", "Product Inventory"]}>
        <button onClick={() => setIsModalOpen(true)} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-medium shadow-sm shadow-teal-600/20 transition-all">
          <FaPlus /> <span>Add Product</span>
        </button>
      </PageHeader>

      {/* Table Card bergaya modern */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Product Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Price</th>
                <th className="px-6 py-4 font-semibold">Stock</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((prod, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  {/* Kolom Nama dengan Icon Placeholder */}
                  <td className="px-6 py-4 font-semibold text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs border border-teal-100">
                      <FaFlask size={12} />
                    </div>
                    {prod.title}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-500">{prod.category}</td>
                  <td className="px-6 py-4 text-gray-500">{formatRupiah(prod.price)}</td>
                  <td className="px-6 py-4">
                    {/* Badge warna pastel */}
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                      prod.stock > 10 ? 'bg-teal-50 text-teal-600 border-teal-200' : 'bg-red-50 text-red-600 border-red-200'
                    }`}>
                      {prod.stock} Pcs
                    </span>
                  </td>
                  {/* Tombol Action Terpisah */}
                  <td className="px-6 py-4 text-center">
                    <Link to={`/products/${prod.id}`} className="inline-flex text-teal-600 hover:text-white hover:bg-teal-600 p-2 rounded-lg transition-all border border-transparent">
                      <FaEye size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Product dengan styling modern */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl border-t-4 border-teal-500">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Product</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product ID</label>
                <input type="text" name="id" value={formData.id} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500 transition-all" placeholder="e.g. 101" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500 transition-all" placeholder="Glow Serum..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (Rp)</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 outline-none focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500 transition-all" />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 text-sm font-medium shadow-sm shadow-teal-600/20 transition-all">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}