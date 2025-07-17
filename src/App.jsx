import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './home/Home';
import ShoppingList from './shoppinglist/Shoppinglist';
import Cart from './cart/Cart'; // ➡️ Import your Cart page
import Login from './login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myshoppinglist" element={<ShoppingList />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
