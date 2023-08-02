import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import Header from "./components/header/header";

import Registration from "./pages/registration/registration";
import CheckOut from "./pages/checkout/checkout";
import Shop from "./components/shop/shop";

const App = () => {
 return (
  <div>
   <Header />
   <Routes>
    <Route
     index="true"
     path="/"
     element={<HomePage />}
    />
    <Route path="shop/*" element={<Shop />} />
    <Route
     path="/signin"
     element={<Registration />}
    />
    <Route
     path="/checkout"
     element={<CheckOut />}
    />
   </Routes>
  </div>
 );
};

export default App;
