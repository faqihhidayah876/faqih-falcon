import { 
  FaUserInjured, 
  FaCalendarCheck, 
  FaSpa, 
  FaDollarSign, 
  FaDownload, 
  FaClock, 
  FaCheckCircle 
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex flex-col font-inter">
      {/* --- HEADER --- */}
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, here is your clinic summary.</p>
        </div>
        <div className="flex space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm shadow-blue-600/20 flex items-center gap-2 transition-all">
                <FaDownload /> Export
            </button>
        </div>
      </div>

      {/* --- ROW 1: KPI CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KpiCard title="Total Patients" value="16,431" trend="+15.5%" isPositive={true} icon={<FaUserInjured/>} subtext="vs. 14,653 last period" />
        <KpiCard title="Appointments" value="6,225" trend="+8.4%" isPositive={true} icon={<FaCalendarCheck/>} subtext="vs. 5,732 last period" />
        <KpiCard title="Active Services" value="2,832" trend="-10.5%" isPositive={false} icon={<FaSpa/>} subtext="vs. 3,294 last period" />
        <KpiCard title="Revenue" value="$446.7K" trend="+24.4%" isPositive={true} icon={<FaDollarSign/>} subtext="vs. $358K last period" />
      </div>

      {/* --- ROW 2: CHARTS AREA --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
         {/* Line Chart (Span 2) */}
         <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
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
         </div>

         {/* Bar Chart (Span 1) */}
         <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Most Day Active</h3>
                <span className="text-gray-400 cursor-pointer">•••</span>
             </div>
             {/* Bar Chart SVG/HTML (Blue Theme) */}
             <div className="flex-1 flex items-end justify-between gap-3 pt-4">
                <Bar day="Sun" height="h-16" isToday={false} />
                <Bar day="Mon" height="h-20" isToday={false} />
                <Bar day="Tue" height="h-32" isToday={true} value="8,162" />
                <Bar day="Wed" height="h-14" isToday={false} />
                <Bar day="Thu" height="h-24" isToday={false} />
                <Bar day="Fri" height="h-28" isToday={false} />
                <Bar day="Sat" height="h-10" isToday={false} />
             </div>
         </div>
      </div>

      {/* --- ROW 3: WIDGETS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Popular Services Table (Like Best Selling Products) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Popular Services</h3>
                <span className="text-gray-400 cursor-pointer">•••</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 text-gray-400 uppercase text-xs tracking-wider">
                            <th className="pb-3 font-semibold">ID</th>
                            <th className="pb-3 font-semibold">Service Name</th>
                            <th className="pb-3 font-semibold">Patients</th>
                            <th className="pb-3 font-semibold">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 text-gray-500">#83009</td>
                            <td className="py-4 font-medium text-gray-800 flex items-center gap-3">
                                <FaSpa className="text-blue-500" /> Acne Laser Treatment
                            </td>
                            <td className="py-4 text-gray-600">2,310 treated</td>
                            <td className="py-4 font-semibold text-green-500">$124.839</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 text-gray-500">#83001</td>
                            <td className="py-4 font-medium text-gray-800 flex items-center gap-3">
                                <FaUserInjured className="text-blue-500" /> Full Body Peeling
                            </td>
                            <td className="py-4 text-gray-600">1,230 treated</td>
                            <td className="py-4 font-semibold text-green-500">$92.662</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 text-gray-500">#83004</td>
                            <td className="py-4 font-medium text-gray-800 flex items-center gap-3">
                                <FaCalendarCheck className="text-blue-500" /> Routine Facial
                            </td>
                            <td className="py-4 text-gray-600">812 treated</td>
                            <td className="py-4 font-semibold text-green-500">$74.048</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Action / Assistant Widget */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">
                <FaCheckCircle />
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Ready for Today!</h3>
            <p className="text-sm text-gray-500 mb-6">You have 45 appointments scheduled for today. Make sure to check the calendar.</p>
            <button className="w-full bg-blue-50 text-blue-600 font-semibold py-3 rounded-xl hover:bg-blue-100 transition-colors">
                View Schedule
            </button>
        </div>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function KpiCard({ title, value, trend, isPositive, icon, subtext }) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-semibold text-gray-600">{title}</span>
                <span className="text-blue-600 bg-blue-50 p-2 rounded-lg">{icon}</span>
            </div>
            <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-3xl font-bold text-gray-900 tracking-tight">{value}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                    {isPositive ? '▲' : '▼'} {trend}
                </span>
            </div>
            <span className="text-xs text-gray-400">{subtext}</span>
        </div>
    )
}

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