export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse text-sm">
        <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 uppercase text-xs tracking-wider">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {children}
        </tbody>
      </table>
    </div>
  );
}