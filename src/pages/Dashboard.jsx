import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUserInjured, 
  FaCalendarCheck, 
  FaSpa, 
  FaDollarSign, 
  FaDownload, 
  FaCheckCircle 
} from "react-icons/fa";

// Import komponen-komponen
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import KpiCard from "../components/KpiCard";
import Card from "../components/Card";
import Table from "../components/Table";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // ===== TAMBAHAN: PROTEKSI HALAMAN ADMIN =====
  useEffect(() => {
    const sessionData = localStorage.getItem("user_session");
    
    if (!sessionData) {
      // Jika tidak ada sesi sama sekali, lempar ke halaman login
      navigate("/login");
    } else {
      const parsedUser = JSON.parse(sessionData);
      
      // Pengecekan Role: Pastikan hanya Admin yang bisa mengakses halaman ini
      // Ganti 'admin' sesuai dengan nilai role di database Anda (misal: 'Admin', 'superadmin', dll)
      if (parsedUser.role !== 'admin') {
        // Jika pasien mencoba akses /dashboard, lempar dia ke dashboard pasien
        navigate("/user-dashboard"); 
      } else {
        setUser(parsedUser);
      }
    }
  }, [navigate]);

  // Mencegah kedipan layar (flash) sebelum pengecekan selesai
  if (!user) return null; 
  // ================================================

  // Array untuk Header Tabel Popular Services
  const popularServicesHeaders = ["ID", "Service Name", "Patients", "Revenue"];

  return (
    <div className="flex flex-col font-inter">
      <PageHeader 
        title="Dashboard Overview" 
        breadcrumb={["Dashboard", "Welcome back, here is your clinic summary."]}
      >
        <Button type="primary" icon={<FaDownload />}>
            Export
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KpiCard title="Total Patients" value="16,431" trend="+15.5%" isPositive={true} icon={<FaUserInjured/>} subtext="vs. 14,653 last period" />
        <KpiCard title="Appointments" value="6,225" trend="+8.4%" isPositive={true} icon={<FaCalendarCheck/>} subtext="vs. 5,732 last period" />
        <KpiCard title="Active Services" value="2,832" trend="-10.5%" isPositive={false} icon={<FaSpa/>} subtext="vs. 3,294 last period" />
        <KpiCard title="Revenue" value="$446.7K" trend="+24.4%" isPositive={true} icon={<FaDollarSign/>} subtext="vs. $358K last period" />
      </div>

      {/* --- ROW 2: CHARTS AREA --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
         <Card className="lg:col-span-2 p-6 flex flex-col">
             <div className="flex justify-between items-start mb-2">
                 <h3 className="font-bold text-gray-800">Total Profit</h3>
                 <select className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-1.5 outline-none text-gray-600">
                    <option>Jan 1, 2026 - Feb 1, 2026</option>
                 </select>
             </div>
             <div className="flex items-baseline space-x-3 mb-6">
                 <div className="text-3xl font-bold text-gray-900">$446.7K</div>
                 <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-md font-bold">▲ 24.4% vs. last period</div>
             </div>
             
             {/* Line Chart SVG (Blue Theme) */}
             <div className="h-48 w-full relative mt-auto">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b border-gray-100 w-full h-0"></div>
                  ))}
                </div>
                <svg viewBox="0 0 100 40" className="w-full h-full absolute inset-0 z-10 preserve-3d" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradientBlue" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,35 L10,36 L20,34 L30,20 L40,28 L50,15 L60,30 L70,10 L80,18 L90,5 L100,20 L100,40 L0,40 Z" fill="url(#gradientBlue)" />
                  <polyline fill="none" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="0,35 10,36 20,34 30,20 40,28 50,15 60,30 70,10 80,18 90,5 100,20" />
                  <circle cx="50" cy="15" r="1.5" fill="white" stroke="#2563eb" strokeWidth="1" />
                </svg>
             </div>
         </Card>

         <Card className="p-6 flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Most Day Active</h3>
                <span className="text-gray-400 cursor-pointer">•••</span>
             </div>
             <div className="flex-1 flex items-end justify-between gap-3 pt-4">
                <Bar day="Sun" height="h-16" isToday={false} />
                <Bar day="Mon" height="h-20" isToday={false} />
                <Bar day="Tue" height="h-32" isToday={true} value="8,162" />
                <Bar day="Wed" height="h-14" isToday={false} />
                <Bar day="Thu" height="h-24" isToday={false} />
                <Bar day="Fri" height="h-28" isToday={false} />
                <Bar day="Sat" height="h-10" isToday={false} />
             </div>
         </Card>
      </div>

      {/* --- ROW 3: WIDGETS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Popular Services Table */}
        <Card className="lg:col-span-2 p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Popular Services</h3>
                <span className="text-gray-400 cursor-pointer">•••</span>
            </div>
            <Table headers={popularServicesHeaders}>
                <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-gray-500 px-6">#83009</td>
                    <td className="py-4 font-medium text-gray-800 flex items-center gap-3 px-6">
                        <FaSpa className="text-blue-500" /> Acne Laser Treatment
                    </td>
                    <td className="py-4 text-gray-600 px-6">2,310 treated</td>
                    <td className="py-4 font-semibold text-green-500 px-6">$124.839</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-gray-500 px-6">#83001</td>
                    <td className="py-4 font-medium text-gray-800 flex items-center gap-3 px-6">
                        <FaUserInjured className="text-blue-500" /> Full Body Peeling
                    </td>
                    <td className="py-4 text-gray-600 px-6">1,230 treated</td>
                    <td className="py-4 font-semibold text-green-500 px-6">$92.662</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-gray-500 px-6">#83004</td>
                    <td className="py-4 font-medium text-gray-800 flex items-center gap-3 px-6">
                        <FaCalendarCheck className="text-blue-500" /> Routine Facial
                    </td>
                    <td className="py-4 text-gray-600 px-6">812 treated</td>
                    <td className="py-4 font-semibold text-green-500 px-6">$74.048</td>
                </tr>
            </Table>
        </Card>

        {/* Action / Assistant Widget */}
        <Card className="p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">
                <FaCheckCircle />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Ready for Today!</h3>
            <p className="text-sm text-gray-500 mb-6">You have 45 appointments scheduled for today. Make sure to check the calendar.</p>
            
            <Button type="outline" className="w-full">
                View Schedule
            </Button>
        </Card>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS LOKAL ---
function Bar({ day, height, isToday, value }) {
    return (
        <div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
            {isToday ? (
                <span className="text-xs font-bold text-gray-800 mb-1">{value}</span>
            ) : (
                <span className="text-xs font-bold text-transparent mb-1 group-hover:text-gray-400">{height.replace('h-', '')}</span>
            )}
            
            <div className={`w-full ${height} rounded-md transition-all duration-300 ${isToday ? 'bg-blue-500 shadow-lg shadow-blue-500/40' : 'bg-gray-100 group-hover:bg-blue-200'}`}></div>
            <span className={`text-xs font-medium ${isToday ? 'text-blue-600' : 'text-gray-400'}`}>{day}</span>
        </div>
    )
}