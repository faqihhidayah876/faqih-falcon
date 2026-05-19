import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    setLoading(true);
    setError(""); // Reset error state

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        // Jika login sukses, arahkan ke dashboard
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Notifikasi Error (Bisa juga dipindah ke Alert.jsx nanti)
  const errorInfo = error ? (
    <div className="w-full bg-red-50 mb-5 p-4 text-sm font-medium text-red-600 rounded-xl flex items-center border border-red-200 shadow-sm">
      <BsFillExclamationDiamondFill className="text-red-600 mr-3 text-lg" />
      {error}
    </div>
  ) : null;

  // Notifikasi Loading
  const loadingInfo = loading ? (
    <div className="w-full bg-blue-50 mb-5 p-4 text-sm font-medium text-blue-600 rounded-xl flex items-center border border-blue-200 shadow-sm">
      <ImSpinner2 className="mr-3 animate-spin text-blue-600 text-lg" />
      Mohon Tunggu...
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

      {/* Menampilkan notifikasi error / loading di atas form */}
      {errorInfo}
      {loadingInfo}

      <form className="w-full space-y-5" onSubmit={handleSubmit}>
        
        <InputField
          name="email"
          placeholder="Username"
          icon={<FaUser />}
          value={dataForm.email}
          onChange={handleChange}
          required
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          icon={<FaLock />}
          value={dataForm.password}
          onChange={handleChange}
          required
        />

        {/* Menggunakan Komponen Button Kustom */}
        <Button 
          type="dark" 
          className="w-full py-4 tracking-wide text-sm mt-4"
        >
          {loading ? "LOADING..." : "NEXT"}
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
    </div>
  );
}