import Card from "./Card";

export default function KpiCard({ title, value, trend, isPositive, icon, subtext }) {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-semibold text-gray-500">{title}</span>
          <span className="text-blue-600 bg-blue-50 p-2 rounded-lg">{icon}</span>
      </div>
      <div className="flex items-baseline space-x-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className={`text-xs font-bold px-2 py-1 rounded-md ${isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
              {isPositive ? '▲' : '▼'} {trend}
          </span>
      </div>
      <span className="text-xs text-gray-400">{subtext}</span>
    </Card>
  );
}