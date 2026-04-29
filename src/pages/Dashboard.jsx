import { FaUserInjured, FaCalendarCheck, FaSpa, FaDollarSign, FaHeart, FaClock, FaStar } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div id="dashboard-container" className="flex flex-col">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-emerald-600 rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div> 
            <h1 className="text-3xl font-bold text-white mb-2">Welcome to GlowCare Clinic 👋</h1>
            <p className="text-green-100 text-sm">Manage your beauty clinic appointments and patients with ease</p>
          </div>
        </div>
      </div>

      <PageHeader title="Dashboard Overview"/>

      {/* Stats Cards with Modern Design */}
      <div id="dashboard-grid" className="p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6 border border-pink-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white rounded-full p-3 text-pink-500 shadow-md">
              <FaUserInjured className="text-2xl" />
            </div>
            <span className="text-xs font-semibold bg-pink-200 text-pink-700 px-2 py-1 rounded-full">+12%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800 mb-1">128</span>
            <span className="text-gray-500 text-sm font-medium">Total Patients</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 border border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white rounded-full p-3 text-blue-500 shadow-md">
              <FaCalendarCheck className="text-2xl" />
            </div>
            <span className="text-xs font-semibold bg-blue-200 text-blue-700 px-2 py-1 rounded-full">Today</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800 mb-1">45</span>
            <span className="text-gray-500 text-sm font-medium">Appointments Today</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-6 border border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white rounded-full p-3 text-purple-500 shadow-md">
              <FaSpa className="text-2xl" />
            </div>
            <span className="text-xs font-semibold bg-purple-200 text-purple-700 px-2 py-1 rounded-full">Popular</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800 mb-1">24</span>
            <span className="text-gray-500 text-sm font-medium">Services Available</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white rounded-full p-3 text-amber-500 shadow-md">
              <FaDollarSign className="text-2xl" />
            </div>
            <span className="text-xs font-semibold bg-amber-200 text-amber-700 px-2 py-1 rounded-full">+8.5%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-gray-800 mb-1">$2.5K</span>
            <span className="text-gray-500 text-sm font-medium">Monthly Revenue</span>
          </div>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="p-4 mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 font-poppins">Recent Appointments</h2>
            <button className="text-sm text-green-600 font-semibold hover:text-green-700 transition-colors">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Appointment ID</th>
                  <th className="px-6 py-4 font-semibold">Patient Name</th>
                  <th className="px-6 py-4 font-semibold">Service</th>
                  <th className="px-6 py-4 font-semibold">Date & Time</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-700">#APT-001</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold mr-3">SN</div>
                      <span className="font-medium">Siti Nurhaliza</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center">
                      <FaSpa className="text-pink-400 mr-2" /> Facial Treatment
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-500">
                      <FaClock className="mr-2 text-xs" /> 2025-04-01 10:00
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold border border-green-200">✓ Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-700">#APT-002</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 font-bold mr-3">DP</div>
                      <span className="font-medium">Dewi Persik</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center">
                      <FaStar className="text-purple-400 mr-2" /> Laser Hair Removal
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-500">
                      <FaClock className="mr-2 text-xs" /> 2025-04-01 14:00
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full text-xs font-bold border border-yellow-200">⏳ Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-700">#APT-003</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold mr-3">RN</div>
                      <span className="font-medium">Rina Nose</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center">
                      <FaHeart className="text-blue-400 mr-2" /> Body Massage
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-500">
                      <FaClock className="mr-2 text-xs" /> 2025-04-02 09:00
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-200">📅 Scheduled</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 font-poppins">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-white hover:bg-pink-100 text-gray-700 hover:text-pink-600 p-4 rounded-xl shadow-sm border border-pink-100 transition-all duration-300 flex flex-col items-center">
              <FaUserInjured className="text-2xl mb-2 text-pink-500" />
              <span className="text-sm font-medium">Add Patient</span>
            </button>
            <button className="bg-white hover:bg-blue-100 text-gray-700 hover:text-blue-600 p-4 rounded-xl shadow-sm border border-blue-100 transition-all duration-300 flex flex-col items-center">
              <FaCalendarCheck className="text-2xl mb-2 text-blue-500" />
              <span className="text-sm font-medium">New Appointment</span>
            </button>
            <button className="bg-white hover:bg-purple-100 text-gray-700 hover:text-purple-600 p-4 rounded-xl shadow-sm border border-purple-100 transition-all duration-300 flex flex-col items-center">
              <FaSpa className="text-2xl mb-2 text-purple-500" />
              <span className="text-sm font-medium">Add Service</span>
            </button>
            <button className="bg-white hover:bg-amber-100 text-gray-700 hover:text-amber-600 p-4 rounded-xl shadow-sm border border-amber-100 transition-all duration-300 flex flex-col items-center">
              <FaDollarSign className="text-2xl mb-2 text-amber-500" />
              <span className="text-sm font-medium">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}