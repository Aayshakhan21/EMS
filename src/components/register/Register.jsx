import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authentication";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      navigate("/login"); // Redirect to login after registration
    } catch (err) {
      console.log("error is :", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-400 font-[Poppins] px-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAVgEZdN3i24u5KqiegG9MCyzQPyAgKvmMw&s"
            className="w-28 transition-transform duration-300 hover:scale-110"
            alt="LeftOver"
          />
        </Link>
        <h2 className="text-white text-3xl font-bold">EMS</h2>
      </div>

      {/* Register Form */}
      <div className="w-full max-w-lg bg-white/90 p-8 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to EMS
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block mb-1 font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block mb-1 font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 transform hover:scale-105 transition duration-300"
            >
              Register
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-4 text-sm text-gray-600">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
