import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaHeart } from "react-icons/fa";

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
    setError(false);

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

  const errorInfo = error ? (
    <div className="bg-rose-100 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center border border-rose-200">
      <BsFillExclamationDiamondFill className="text-rose-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-pink-100 mb-5 p-5 text-sm rounded flex items-center border border-pink-200">
      <ImSpinner2 className="me-2 animate-spin text-pink-600" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome to GlowCare Clinic 👋
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Login to manage your beauty clinic appointments
      </p>
      {errorInfo}
      {loadingInfo}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="text" id="email" name="email" value={dataForm.email} onChange={handleChange}
            className="w-full px-4 py-2 bg-pink-50 border border-pink-200 rounded-lg shadow-sm placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
            placeholder="you@example.com" required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password" id="password" name="password" value={dataForm.password} onChange={handleChange}
            className="w-full px-4 py-2 bg-pink-50 border border-pink-200 rounded-lg shadow-sm placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
            placeholder="********" required
          />
        </div>
        <button
          type="submit" disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}