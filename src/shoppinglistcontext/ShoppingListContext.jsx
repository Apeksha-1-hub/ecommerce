// src/contexts/ShoppingListContext.jsx

import React, { createContext, useContext, useState } from "react";

const ShoppingListContext = createContext();

export const useShoppingList = () => useContext(ShoppingListContext);

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const addToShoppingList = (items) => {
    // Add multiple items ensuring no duplicate IDs
    setShoppingList((prevList) => {
      const newItems = items.filter(
        (item) => !prevList.some((i) => i.id === item.id)
      );
      return [...prevList, ...newItems];
    });
  };

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  return (
    <ShoppingListContext.Provider
      value={{ shoppingList, addToShoppingList, clearShoppingList }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};
