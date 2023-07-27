import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import Header from "./components/header/header";
import ShopPage from "./pages/shoppage/shopPage";

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
    <Route path="shop" element={<ShopPage />} />
   </Routes>
  </div>
 );
};

export default App;
