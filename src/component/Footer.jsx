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
    <footer className="bg-black  text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-3xl font-extrabold mb-4">
            ShopEase
          </h2>
          <p className="text-white text-sm leading-relaxed mb-6">
            Your one-stop shop for all your needs. Fast delivery, great deals,
            and easy returns with 24/7 support.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full text-white hover:bg-blue-600 transition transform hover:scale-110 shadow"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full text-white hover:bg-pink-600 transition transform hover:scale-110 shadow"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full text-white hover:bg-blue-400 transition transform hover:scale-110 shadow"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full text-white hover:bg-blue-700 transition transform hover:scale-110 shadow"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg pl-25 mb-4">Quick Links</h3>
          <ul className="space-y-4 text-white text-sm pl-25">
            <li>
              <Link
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/myshoppinglist"
                
              >
                My Shopping List
              </Link>
            </li>
            <li>
              <Link
                to="/login"
               
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
               
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg pl-30 mb-4">Contact Us</h3>
          <p className=" text-sm mb-3 leading-relaxed pl-30">
            Kathmandu, Nepal
          </p>
          <p className=" text-sm mb-3 leading-relaxed pl-30">
            +977-98XXXXXXXX
          </p>
          <p className=" text-sm leading-relaxed pl-30">
            support@shopease.com
          </p>
        </div>
      </div>

      <div className="bg-gray-200 py-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
