import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import Header from "./components/header/header";
import ShopPage from "./pages/shoppage/shopPage";
import SignIn from "./pages/registration/signin";

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
    <Route path="/signin" element={<SignIn />} />
   </Routes>
  </div>
 );
};

export default App;
