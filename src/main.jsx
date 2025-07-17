import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./contexts/CartContext.jsx";
import { ShoppingListProvider } from './shoppinglistcontext/ShoppingListContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
  <ShoppingListProvider>
    <App />
  </ShoppingListProvider>
  </CartProvider>
  </StrictMode>
)
