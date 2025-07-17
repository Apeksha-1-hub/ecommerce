import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white rounded-lg shadow p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600">
                  Rs. {item.price.toLocaleString("en-IN")} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-xl font-bold text-gray-800">
              Total: Rs. {totalPrice.toLocaleString("en-IN")}
            </p>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold shadow transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
