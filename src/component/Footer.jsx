import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-blue-600 text-2xl font-extrabold mb-3">
            ShopEase
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Your one-stop shop for all your needs. Fast delivery, great deals,
            and easy returns.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-700 rounded-full text-white hover:bg-blue-800 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-amber-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/myshoppinglist"
                className="hover:text-amber-500 transition-colors duration-200"
              >
                My Shopping List
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-amber-500 transition-colors duration-200"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-amber-500 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600 text-sm mb-2">Kathmandu, Nepal</p>
          <p className="text-gray-600 text-sm mb-2">+977-98XXXXXXXX</p>
          <p className="text-gray-600 text-sm">support@shopease.com</p>
        </div>

       
      </div>

      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
