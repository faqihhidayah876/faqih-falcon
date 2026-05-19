export default function SelectField({ label, options, value, name, onChange }) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:bg-white focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all"
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}