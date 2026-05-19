export default function Avatar({ name, size = "md" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg"
  };

  const initial = name ? name.charAt(0).toUpperCase() : 'U';

  return (
    <div className={`${sizes[size]} rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold`}>
      {initial}
    </div>
  );
}