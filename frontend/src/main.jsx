import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import SearchProvider from "./context/SearchContext";
import CategoryProvider from "./context/CategoryContext";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CategoryProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </CategoryProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);