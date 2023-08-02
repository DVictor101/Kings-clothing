import "./shop.scss";
import { useContext } from "react";
import { ShopDataContext } from "../../context/ShotDataContext";
import ShopProducts from "../shopData/shopProduct";

const Shop = () => {
 const { shopData } = useContext(ShopDataContext);
 return (
  <div className="shop">
   {shopData.map((product) => {
    return (
     <ShopProducts
      key={product.id}
      product={product}
     />
    );
   })}
  </div>
 );
};

export default Shop;
