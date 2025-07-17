import React, { useState } from "react";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";

const ShoppingList = () => {
  // Dummy data for demo
  const [shoppingList, setShoppingList] = useState([
    {
      id: 1,
      name: "Blue Denim Jacket",
      price: 800,
      image: "photos/p1.png",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 5000,
      image: "photos/p3.png",
    },
    {
      id: 3,
      name: "Sunglasses",
      price: 1150,
      image: "photos/p5.png",
    },
  ]);

  // Remove item handler
  const handleRemove = (id) => {
    setShoppingList(shoppingList.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          My Shopping List
        </h1>

        {shoppingList.length === 0 ? (
          <div className="text-center text-gray-500">
            Your shopping list is empty.
          </div>
        ) : (
          <div className="space-y-6">
            {shoppingList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 sm:p-6 border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-contain rounded mb-4 sm:mb-0 sm:mr-6 bg-gray-100 p-2"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Rs. {item.price.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="flex items-center mt-4 sm:mt-0 space-x-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex items-center px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm transition text-sm font-medium"
                  >
                    <FaTrashAlt className="mr-2" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {shoppingList.length > 0 && (
          <div className="mt-10 text-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-md shadow-md transition">
              <FaShoppingCart className="mr-3" />
              Add All to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
