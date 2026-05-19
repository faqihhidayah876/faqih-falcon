export default function Badge({ children, type = "success" }) {
  const types = {
    success: "bg-green-50 text-green-600 border-green-200",
    pending: "bg-amber-50 text-amber-600 border-amber-200",
    info: "bg-blue-50 text-blue-600 border-blue-200",
    danger: "bg-red-50 text-red-600 border-red-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200"
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${types[type]}`}>
      {children}
    </span>
  );
}