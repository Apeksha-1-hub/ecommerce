import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";

// Initialize AOS once
AOS.init({ duration: 800, once: true });

const ProductCard = ({ product }) => {
  // Format price with commas
  const formattedPrice = product.price.toLocaleString("en-IN");

  // Simulated rating (in real apps, fetch from product data)
  const rating = 4; // out of 5

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-2xl shadow hover:shadow-xl transition-transform duration-300 overflow-hidden flex flex-col border border-gray-200 group transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer" // added cursor-pointer here for entire card
    >
      {/* Image */}
      <div className="relative bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain p-4 bg-white"
        />
        {product.onSale && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
            SALE
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Product name */}
        <h3 className="text-gray-900 font-semibold text-lg mb-1">
          {product.name}
        </h3>

        {/* Ratings */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ) : (
              <FaRegStar key={i} className="text-gray-300 text-sm" />
            )
          )}
          <span className="ml-2 text-gray-500 text-xs">(200)</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4 flex-grow">
          {product.description}
        </p>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            {product.onSale ? (
              <>
                <span className="text-gray-400 text-sm line-through mr-2">
                  Rs. {(product.price * 1.2).toLocaleString("en-IN")}
                </span>
                <span className="text-blue-700 font-extrabold text-lg">
                  Rs. {formattedPrice}
                </span>
              </>
            ) : (
              <span className="text-blue-700 font-extrabold text-lg">
                Rs. {formattedPrice}
              </span>
            )}
          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 rounded-md shadow transition duration-200 cursor-pointer">
            <FaShoppingCart className="text-sm" />
            <span className="text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
