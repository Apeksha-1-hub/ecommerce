import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useShoppingList } from "../shoppinglistcontext/ShoppingListContext";
import { useCart } from "../contexts/CartContext";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToShoppingList } = useShoppingList();
  const { clearCart } = useCart();

  // Safely handle missing state
  const cartItems = location.state?.cartItems || [];
  const totalPrice = location.state?.totalPrice || 0;

  const handlePaymentSuccess = () => {
    if (cartItems.length === 0) {
      alert("No items to purchase.");
      navigate("/cart");
      return;
    }

    // Simulate payment success
    addToShoppingList(cartItems);
    clearCart();

    alert("Payment successful. Items added to your Shopping List.");
    navigate("/shopping-list");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
        Payment
      </h1>

      <div className="bg-white rounded-xl shadow p-8">
        <p className="text-lg text-gray-700 mb-6">
          Total Amount to Pay: <span className="font-bold">Rs. {totalPrice.toLocaleString("en-IN")}</span>
        </p>

        <button
          onClick={handlePaymentSuccess}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold shadow transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
