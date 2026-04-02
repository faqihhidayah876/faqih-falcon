import React from "react";

export default function ReusableSelect({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded focus:ring-2 outline-none bg-white ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="mt-1 text-sm text-red-600 bg-red-100 p-2 rounded border-l-4 border-red-500">
           {error}
        </div>
      )}
    </div>
  );
}