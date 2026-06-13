import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from "../../services/authAPI"; // Pastikan path ini sesuai
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Register() {
  const navigate = useNavigate();
  
  // State untuk logika Auth
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [dataForm, setDataForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Kirim data pendaftaran ke API Supabase Manual
      await authAPI.register({
        full_name: dataForm.full_name,
        email: dataForm.email,
        password: dataForm.password,
      });

      setSuccess("Account successfully created! Redirecting to login...");
      setDataForm({ full_name: "", email: "", password: "" });

      // Arahkan ke halaman login setelah 2 detik
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      // Menangkap detail error asli dari Supabase
      if (err.response && err.response.data) {
        console.error("Detail Error Supabase:", err.response.data);
        setError(`Gagal: ${err.response.data.message || err.response.data.details || JSON.stringify(err.response.data)}`);
      } else {
        setError(err.message || "An error occurred during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-6xl font-smooch font-bold text-gray-900 mb-2 tracking-tight">Create Account</h1>
      <p className="text-gray-500 mb-6 text-sm text-center">Join us and manage your clinic easily</p>

      {/* Notifikasi Error */}
      {error && (
        <div className="w-full bg-red-50 mb-5 p-4 text-sm font-medium text-red-600 rounded-xl flex items-center border border-red-200">
          <BsFillExclamationDiamondFill className="mr-3 text-lg" />
          {error}
        </div>
      )}

      {/* Notifikasi Success */}
      {success && (
        <div className="w-full bg-green-50 mb-5 p-4 text-sm font-medium text-green-600 rounded-xl flex items-center border border-green-200">
          {success}
        </div>
      )}

      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        {/* Input Full Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaUser className="text-gray-400" />
          </div>
          <input
            type="text"
            name="full_name"
            value={dataForm.full_name}
            onChange={handleChange}
            disabled={loading}
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none disabled:opacity-50"
            placeholder="Full Name"
            required
          />
        </div>

        {/* Input Email */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaEnvelope className="text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            disabled={loading}
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none disabled:opacity-50"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Input Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaLock className="text-gray-400" />
          </div>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            disabled={loading}
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none disabled:opacity-50"
            placeholder="Password"
            required
          />
        </div>

        {/* Tombol CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-gray-900/20 tracking-wide text-sm mt-6 flex justify-center items-center disabled:opacity-70"
        >
          {loading ? (
            <><ImSpinner2 className="animate-spin mr-2 text-lg" /> PROCESSING...</>
          ) : (
            "SIGN UP"
          )}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-500">
        Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
      </p>

      {/* Divider */}
      <div className="flex items-center w-full my-6">
        <div className="flex-1 border-t border-gray-100"></div>
        <span className="px-4 text-xs text-gray-400 font-medium uppercase tracking-wider">Or sign up with</span>
        <div className="flex-1 border-t border-gray-100"></div>
      </div>

      {/* Social Login */}
      <div className="flex w-full space-x-3">
        <button type="button" className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-2xl hover:bg-gray-50 transition-all">
          <FaGoogle className="text-red-500" /> <span className="text-sm font-semibold text-gray-700">Google</span>
        </button>
        <button type="button" className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-2xl hover:bg-gray-50 transition-all">
          <FaFacebook className="text-blue-600" /> <span className="text-sm font-semibold text-gray-700">Facebook</span>
        </button>
      </div>
    </div>
  );
}