export default function Alert({ type = "error", message }) {
  const styles = {
    error: "bg-red-50 text-red-600 border border-red-200",
    success: "bg-green-50 text-green-600 border border-green-200"
  };

  return (
    <div className={`p-4 rounded-xl text-sm font-medium mb-4 ${styles[type]}`}>
      {message}
    </div>
  );
}