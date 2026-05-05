import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function Forgot() {
  return (
    <div className="flex flex-col w-full">
      <Link to="/login" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 font-medium transition-colors">
        <FaArrowLeft className="mr-2" /> Back to login
      </Link>
      
      <h1 className="text-6xl font-smooch font-bold text-gray-900 mb-2 tracking-tight">Reset Password</h1>
      <p className="text-gray-500 mb-10 text-sm leading-relaxed">
        Enter the email address associated with your account and we'll send you a link to reset your password.
      </p>

      <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaEnvelope className="text-gray-400" />
          </div>
          <input
            type="email"
            className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-gray-100 rounded-2xl text-sm transition-all outline-none"
            placeholder="Enter your email address"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-gray-900/20 tracking-wide text-sm"
        >
          SEND RESET LINK
        </button>
      </form>
    </div>
  );
}