import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS once
AOS.init({ duration: 800, once: true });

const ProductCard = ({ product }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col border border-gray-100 group transform hover:-translate-y-1 hover:scale-[1.02]"
    >
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-contain" // shows full image without cropping
          style={{ maxHeight: "250px" }} // adjust as needed for your layout
        />
        {product.onSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
            SALE
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-900 font-semibold text-lg mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-3 flex-grow">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-blue-600 font-bold text-xl">
            Rs.{product.price}
          </span>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95 text-white px-4 py-2 rounded-md shadow-md text-sm font-semibold transition duration-200 transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
