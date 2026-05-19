export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-7xl mx-auto p-4 md:p-6 font-inter ${className}`}>
      {children}
    </div>
  );
}