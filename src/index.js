import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { ShopDataProvider } from "./context/ShotDataContext";
import { CartProvider } from "./context/cartContext";

const root = ReactDOM.createRoot(
 document.getElementById("root")
);
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <UserProvider>
    <ShopDataProvider>
     <CartProvider>
      <App />
     </CartProvider>
    </ShopDataProvider>
   </UserProvider>
  </BrowserRouter>
 </React.StrictMode>
);
