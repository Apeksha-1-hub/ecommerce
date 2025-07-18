import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import Swal from "sweetalert2";

AOS.init({ duration: 800, once: true });

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();


  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


  const formattedPrice = product.price.toLocaleString("en-IN");
  const rating = 4;

  const handleAddToCart = () => {
  if (!isLoggedIn) {
    Swal.fire({
      title: "Login Required",
      text: "Please login or create an account to add items to your cart.",
      icon: "info",
      showConfirmButton: true,
      confirmButtonText: "Go to Login",
      confirmButtonColor: "#3b82f6",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHFmZzM2aGI2ZG5vNG8xaHlzZWVjN21kNThwcTZ6NTRwaWZybTFhYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rqN9wy8JErk1HjQ2IM/giphy.gif")
        left top
        no-repeat
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/login";
      }
    });
  } else {
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${product.name} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  }
};


  return (
    <div
      data-aos="fade-up"
      className="bg-gray-100 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.35)] transition-transform duration-300 overflow-hidden flex flex-col border border-gray-200 group transform hover:-translate-y-1 hover:scale-[1.02] hover:brightness-105 cursor-pointer"
    >
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

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-gray-900 font-semibold text-lg mb-1">
          {product.name}
        </h3>

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

        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {product.description}
        </p>

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

          <button
            onClick={handleAddToCart}
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
