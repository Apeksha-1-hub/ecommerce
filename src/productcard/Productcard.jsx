import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from "../contexts/CartContext"; // Adjust path if needed

// Initialize AOS once (you can move this to a higher-level component if you want)
AOS.init({ duration: 800, once: true });

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Format price with commas
  const formattedPrice = product.price.toLocaleString("en-IN");

  // Simulated rating (replace with real rating if available)
  const rating = 4; // out of 5

  return (
    <div
      data-aos="fade-up"
      className="bg-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 overflow-hidden flex flex-col border border-gray-200 group transform hover:-translate-y-1 hover:scale-[1.02] hover:brightness-105 cursor-pointer"
    >
      {/* Image */}
      <div className="relative bg-gray-200">
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
        <h3 className="text-gray-900 font-semibold text-lg mb-1">{product.name}</h3>

        {/* Ratings */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) =>
            i < rating ? (
              <FaStar
                key={i}
                className="text-yellow-400 text-sm transition-transform duration-200 group-hover:scale-110"
              />
            ) : (
              <FaRegStar
                key={i}
                className="text-gray-300 text-sm transition-transform duration-200 group-hover:scale-110"
              />
            )
          )}
          <span className="ml-2 text-gray-500 text-xs">(200)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

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
              <span className="text-blue-700 font-extrabold text-lg">Rs. {formattedPrice}</span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 rounded-md shadow transition duration-200 cursor-pointer"
          >
            <FaShoppingCart className="text-sm" />
            <span className="text-sm font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
