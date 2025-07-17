import React from "react";
import { useShoppingList } from "../shoppinglistcontext/ShoppingListContext";
import { FaShoppingBag } from "react-icons/fa";

const ShoppingList = () => {
  const { shoppingList } = useShoppingList();

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-10 flex items-center gap-3">
        <FaShoppingBag className="text-amber-500" /> Purchased Items
      </h1>

      {shoppingList.length === 0 ? (
        <p className="text-gray-500">You have not purchased any items yet.</p>
      ) : (
        <div className="space-y-6">
          {shoppingList.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow p-4 border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-md mr-6 bg-gray-50 p-2"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-500">
                  Rs. {item.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
