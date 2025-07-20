
import React from "react";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../authcontext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const formattedPrice = product.price.toLocaleString("en-IN");
  const rating = 4;

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to add items to your cart.",
        icon: "info",
        confirmButtonText: "Login Now",
        confirmButtonColor: "#3b82f6",
        showCancelButton: true,
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          // Pass redirect path and product id
          navigate(`/login?redirect=${location.pathname}&addProductId=${product.id}`);
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
    <div className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 overflow-hidden flex flex-col border border-gray-200 group transform hover:-translate-y-1 hover:scale-[1.02] hover:brightness-105 cursor-pointer">
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
        <h3 className="text-gray-900 font-semibold text-lg mb-1">{product.name}</h3>

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

        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

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
