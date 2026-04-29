import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="flex flex-col">
      <PageHeader title="Dashboard"/>
      <div id="dashboard-grid" className="p-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-200">
          <div className="bg-green-100 text-hijau rounded-full p-4 text-3xl"><FaShoppingCart /></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">75</span>
            <span className="text-gray-400 text-sm font-medium">Total Orders</span>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-200">
          <div className="bg-blue-100 text-blue-500 rounded-full p-4 text-3xl"><FaTruck /></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">357</span>
            <span className="text-gray-400 text-sm font-medium">Total Delivered</span>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-200">
          <div className="bg-red-100 text-red-500 rounded-full p-4 text-3xl"><FaBan /></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">65</span>
            <span className="text-gray-400 text-sm font-medium">Total Canceled</span>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-200">
          <div className="bg-yellow-100 text-yellow-500 rounded-full p-4 text-3xl"><FaDollarSign /></div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">$128</span>
            <span className="text-gray-400 text-sm font-medium">Total Revenue</span>
          </div>
        </div>
      </div>
      <div className="p-4 mt-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 text-sm">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Menu</th>
                  <th className="pb-3 font-medium">Total</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-bold text-gray-700">#ORD-001</td>
                  <td className="py-4">Budi Santoso</td>
                  <td className="py-4">Ayam Bakar Madu</td>
                  <td className="py-4 font-medium">Rp 45.000</td>
                  <td className="py-4"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Completed</span></td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-bold text-gray-700">#ORD-002</td>
                  <td className="py-4">Siti Aminah</td>
                  <td className="py-4">Es Bubur Delima</td>
                  <td className="py-4 font-medium">Rp 15.000</td>
                  <td className="py-4"><span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-bold">Pending</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-bold text-gray-700">#ORD-003</td>
                  <td className="py-4">Andi Wijaya</td>
                  <td className="py-4">Nasi Goreng Spesial</td>
                  <td className="py-4 font-medium">Rp 30.000</td>
                  <td className="py-4"><span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Preparing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}