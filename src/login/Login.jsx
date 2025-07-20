import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../authcontext/AuthContext";
import { useCart } from "../contexts/CartContext";
import { products } from "../product/Product"; // Adjust path as needed

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();

  const redirectPath = searchParams.get("redirect") || "/home";
  const addProductId = searchParams.get("addProductId");

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
      login();

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });

      setTimeout(() => {
        if (addProductId) {
          const productToAdd = products.find(p => p.id === parseInt(addProductId));
          if (productToAdd) {
            addToCart(productToAdd);
          }
        }
        navigate(redirectPath);
        setIsSubmitting(false);
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50">
      <ToastContainer />

      {/* Left side image section */}
    
    <div className="hidden md:flex md:w-1/2 items-center justify-center">
    <img
    src="photos/shoppinggirl.png" // Replace with your actual image path
    alt="Login Illustration"
    className="w-full h-120 object-contain p-4"
    />
    </div>

      {/* Login form section */}
      <div className="w-full md:w-1/2 max-w-md bg-white shadow-2xl rounded-2xl p-8 mx-4 my-10 md:my-0">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">Email</label>
            <div className="flex items-center border rounded-md px-3 py-2">
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

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-700">Password</label>
            <div className="flex items-center border rounded-md px-3 py-2">
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
