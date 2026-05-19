export default function IconButton({ icon, onClick, hasNotification }) {
  return (
    <button onClick={onClick} className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors border border-transparent hover:border-gray-200">
      <span className="text-lg">{icon}</span>
      {hasNotification && (
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-gray-800 rounded-full border border-white"></span>
      )}
    </button>
  );
}