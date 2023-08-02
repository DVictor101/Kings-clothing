import "./categorylist.scss";
import {
 useContext,
 useState,
 useEffect,
 Fragment,
} from "react";
import { useParams } from "react-router-dom";
import { ShopDataContext } from "../../context/ShotDataContext";
import ShopProducts from "../../components/shopData/shopProduct";

const CategoryList = () => {
 const { categorylist } = useParams();
 const { shopDatasMap } = useContext(
  ShopDataContext
 );
 const [products, setProducts] = useState(
  shopDatasMap[categorylist]
 );
 useEffect(() => {
  setProducts(shopDatasMap[categorylist]);
 }, [categorylist, shopDatasMap]);
 return (
  <Fragment>
   <h2 className="cattitle">{categorylist.toUpperCase()}</h2>
   <div className="category-cont">
    {products &&
     products.map((product) => (
      <ShopProducts
       key={product.id}
       product={product}
      />
     ))}
   </div>
  </Fragment>
 );
};
export default CategoryList;
