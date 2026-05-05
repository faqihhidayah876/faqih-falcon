import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-6xl font-smooch font-bold text-gray-900 mb-2 tracking-tight">Create Account</h1>
      <p className="text-gray-500 mb-10 text-sm text-center">Join us and manage your clinic easily</p>

      <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); navigate("/dashboard"); }}>
        {/* Input Full Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaUser className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none"
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
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none"
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
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none"
            placeholder="Password"
            required
          />
        </div>

        {/* Tombol CTA */}
        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-gray-900/20 tracking-wide text-sm mt-6"
        >
          SIGN UP
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-500">
        Already have an account? <Link to="/" className="text-blue-600 font-semibold hover:underline">Log in</Link>
      </p>

      {/* Divider */}
      <div className="flex items-center w-full my-6">
        <div className="flex-1 border-t border-gray-100"></div>
        <span className="px-4 text-xs text-gray-400 font-medium uppercase tracking-wider">Or sign up with</span>
        <div className="flex-1 border-t border-gray-100"></div>
      </div>

      {/* Social Login */}
      <div className="flex w-full space-x-3">
        <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-2xl hover:bg-gray-50 transition-all">
          <FaGoogle className="text-red-500" /> <span className="text-sm font-semibold text-gray-700">Google</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-2xl hover:bg-gray-50 transition-all">
          <FaFacebook className="text-blue-600" /> <span className="text-sm font-semibold text-gray-700">Facebook</span>
        </button>
      </div>
    </div>
  );
}