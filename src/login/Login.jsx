import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../authcontext/AuthContext"; // <-- Import useAuth

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();  // <-- Get login function from AuthContext

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Use login from context instead of localStorage.setItem directly
      login();

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/home");
        setIsSubmitting(false);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50">
      <ToastContainer />
      {/* Image Section */}
      <div className="hidden md:flex w-1/2 pl-20 pr-4 justify-start items-center">
        <img
          src="photos/shoppinggirl.png"
          alt="Shopping girl"
          className="w-full max-w-md h-auto object-contain animate__animated animate__fadeInLeft"
          loading="lazy"
        />
      </div>
      {/* Form Section */}
      <div className="w-full md:w-1/2 max-w-md bg-white shadow-2xl rounded-2xl p-8 mx-4 my-10 md:my-0 animate__animated animate__fadeInRight">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Welcome Back to ShopEase
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="flex-1 outline-none bg-transparent text-gray-700"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="flex-1 outline-none bg-transparent text-gray-700"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        {/* Extra Links */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
