export default function InputField({ label, type = "text", placeholder, icon, value, name, onChange, required = false }) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 text-sm outline-none focus:bg-white focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all ${icon ? 'pl-11 pr-4' : 'px-4'}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}