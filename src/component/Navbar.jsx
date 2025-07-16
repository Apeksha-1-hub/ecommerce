import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Navbar = ({ cartItemCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchTerm}`);
  };

  return (
    <nav className="bg-white fixed w-full top-0 left-0 shadow-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/home"
            className="text-red-600 font-extrabold text-3xl tracking-tight"
          >
            ShopEase
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-8 font-semibold text-gray-900">
              <li>
                <Link
                  to="/home"
                  className="px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/myshoppinglist"
                  className="px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
                >
                  My Shopping List
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-64 flex-shrink-0"
            >
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-500"
                aria-label="Search"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </form>

            {/* User Account */}
            <Link
              to="/login"
              className="flex items-center px-3 py-2 rounded-md text-gray-900 hover:text-amber-500 font-semibold transition-colors duration-200"
            >
              <UserCircleIcon className="w-6 h-6 mr-1" />
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="bg-red-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold shadow transition"
            >
              Sign Up
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-amber-500 text-white rounded-full text-xs px-1.5 font-semibold shadow-lg">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XIcon className="w-6 h-6 text-gray-900" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-6 space-y-6 font-semibold text-gray-900">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/myshoppinglist"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
          >
            My Shopping List
          </Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-500"
              aria-label="Search"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </form>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
          >
            <UserCircleIcon className="w-6 h-6 mr-1" />
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold shadow transition"
          >
            Sign Up
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="relative flex items-center px-3 py-2 rounded-md hover:text-amber-500 transition-colors duration-200"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-amber-500 text-white rounded-full text-xs px-1.5 font-semibold shadow-lg">
                {cartItemCount}
              </span>
            )}
            <span className="ml-2">Cart</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
