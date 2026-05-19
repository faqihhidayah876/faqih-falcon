export default function Divider({ text }) {
  return (
    <div className="flex items-center w-full my-6">
      <div className="flex-1 border-t border-gray-100"></div>
      {text && <span className="px-4 text-xs text-gray-400 font-medium uppercase tracking-wider">{text}</span>}
      <div className="flex-1 border-t border-gray-100"></div>
    </div>
  );
}