import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from "../../services/authAPI"; // Menggunakan API Supabase Manual
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(""); // Reset error state

      // Login menembak API Supabase manual
      const userData = await authAPI.login({
        email: dataForm.email,
        password: dataForm.password,
      });

      // Simpan data session ke local storage
      localStorage.setItem("user_session", JSON.stringify(userData));

      // LOGIKA ROLE-BASED ROUTING (Ide Kamu!)
      if (userData.role === 'admin') {
        navigate("/"); // Masuk ke Dashboard CRM Utama
      } else {
        navigate("/"); // Masuk ke tampilan User biasa
      }

    } catch (err) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  // Notifikasi Error
  const errorInfo = error ? (
    <div className="w-full bg-red-50 mb-5 p-4 text-sm font-medium text-red-600 rounded-xl flex items-center border border-red-200 shadow-sm">
      <BsFillExclamationDiamondFill className="text-red-600 mr-3 text-lg" />
      {error}
    </div>
  ) : null;

  return (
    <div className="flex flex-col items-center w-full font-poppins">
      <h1 className="text-6xl font-smooch font-bold text-gray-900 mb-2 tracking-tight">
        Welcome
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        We are glad to see you back with us
      </p>

      {/* Menampilkan notifikasi error di atas form */}
      {errorInfo}

      <form className="w-full space-y-5" onSubmit={handleSubmit}>
        
        <InputField
          name="email"
          placeholder="Email Address"
          icon={<FaUser />}
          value={dataForm.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          icon={<FaLock />}
          value={dataForm.password}
          onChange={handleChange}
          required
          disabled={loading}
        />

        {/* Menggunakan Komponen Button Kustom */}
        <Button 
          type="dark" 
          disabled={loading}
          className="w-full py-4 tracking-wide text-sm mt-4 flex justify-center items-center"
        >
          {loading ? (
            <><ImSpinner2 className="animate-spin mr-2 text-lg" /> PROCESSING...</>
          ) : (
            "NEXT"
          )}
        </Button>
      </form>

      {/* Menggunakan Komponen Divider */}
      <Divider text="Login with Others" />

      {/* Opsi Login Lainnya */}
      <div className="w-full space-y-3">
        <Button 
          type="outline" 
          className="w-full py-3" 
          icon={<FaGoogle className="text-red-500" />}
        >
          Login with Google
        </Button>
        <Button 
          type="outline" 
          className="w-full py-3" 
          icon={<FaFacebook className="text-blue-600" />}
        >
          Login with Facebook
        </Button>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
      </p>
    </div>
  );
}