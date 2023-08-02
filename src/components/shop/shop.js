import "./shop.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../pages/categoriesPreview/CategoriesPreview";
import CategoryList from "../../pages/categoryList/categoryList";

const Shop = () => {
 return (
  <Routes>
   <Route index element={<CategoriesPreview />} />
   <Route
    path=":categorylist"
    element={<CategoryList />}
   />
  </Routes>
 );
};
export default Shop;
