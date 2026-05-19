export default function Button({ children, type = "primary", onClick, className = "", icon }) {
  const types = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20",
    dark: "bg-gray-900 hover:bg-black text-white shadow-lg shadow-gray-900/20",
    danger: "bg-red-50 hover:bg-red-100 text-red-600",
    outline: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${types[type]} px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}