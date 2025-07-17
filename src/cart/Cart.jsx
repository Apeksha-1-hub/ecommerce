import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useShoppingList } from "../shoppinglistcontext/ShoppingListContext";

const Cart = () => {
  
  const { cartItems, removeFromCart, clearCart } = useCart();

  const { addToShoppingList } = useShoppingList();

  const handleCheckout = () => {
    addToShoppingList(cartItems); // Add cart items to shopping list
    clearCart(); // Clear cart after checkout
    alert("Purchase successful. Items added to your Shopping List.");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-30">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-10 flex items-center gap-3">
        <FaShoppingCart className="text-blue-600" /> My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-6">Your cart is empty.</p>
          <Link
            to="/home"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow hover:shadow-lg transition p-4 border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-md mr-6 bg-gray-50 p-2"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm mb-1">
                  Rs. {item.price.toLocaleString("en-IN")} x {item.quantity}
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  Subtotal: Rs. {(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 transition p-2 rounded-full hover:bg-red-50"
                aria-label="Remove item"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}

          <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10">
            <p className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
              Total: Rs. {totalPrice.toLocaleString("en-IN")}
            </p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold shadow transition"
              >
                Clear Cart
              </button>
               <button
                 onClick={handleCheckout}
                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow transition"
    >
                 Proceed to Checkout
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
