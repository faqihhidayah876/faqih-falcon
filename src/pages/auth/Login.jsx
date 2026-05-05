import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaHeart, FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

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
    <div className="flex flex-col items-center w-full">
      {" "}
      <h1 className="text-6xl font-smooch font-bold text-gray-900 mb-2 tracking-tight">
        Welcome
      </h1>{" "}
      <p className="text-gray-500 mb-10 text-sm">
        We are glad to see you back with us
      </p>
      <form
        className="w-full space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard");
        }}
      >
        {" "}
        {/* Input Username/Email */}{" "}
        <div className="relative">
          {" "}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {" "}
            <FaUser className="text-gray-400" />{" "}
          </div>{" "}
          <input
            type="text"
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none"
            placeholder="Username"
            required
          />{" "}
        </div>
        {/* Input Password */}{" "}
        <div className="relative">
          {" "}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {" "}
            <FaLock className="text-gray-400" />{" "}
          </div>{" "}
          <input
            type="password"
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none"
            placeholder="Password"
            required
          />{" "}
        </div>
        {/* Tombol NEXT */}{" "}
        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-gray-900/20 tracking-wide text-sm mt-4"
        >
          {" "}
          NEXT{" "}
        </button>{" "}
      </form>
      {/* Divider */}{" "}
      <div className="flex items-center w-full my-8">
        {" "}
        <div className="flex-1 border-t border-gray-100"></div>{" "}
        <span className="px-4 text-sm text-gray-500 font-medium">
          Login with Others
        </span>{" "}
        <div className="flex-1 border-t border-gray-100"></div>{" "}
      </div>
      {/* Social Login */}{" "}
      <div className="w-full space-y-3">
        {" "}
        <button className="w-full flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-2xl hover:bg-gray-50 transition-all">
          {" "}
          <FaGoogle className="text-red-500" />{" "}
          <span className="text-sm font-semibold text-gray-700">
            Login with Google
          </span>{" "}
        </button>{" "}
        <button className="w-full flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-2xl hover:bg-gray-50 transition-all">
          {" "}
          <FaFacebook className="text-blue-600" />{" "}
          <span className="text-sm font-semibold text-gray-700">
            Login with Facebook
          </span>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
