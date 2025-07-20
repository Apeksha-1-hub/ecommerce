import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './home/Home';
import ShoppingList from './shoppinglist/Shoppinglist';
import Cart from './cart/Cart'; // ➡️ Import your Cart page
import Login from './login/Login';
import Signup from './signup/Signup';
import Payment from './payment/Payment';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myshoppinglist" element={<ShoppingList />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
