import "./shop.scss";
import { useContext } from "react";
import { ShopDataContext } from "../../context/ShotDataContext";
import ShopProducts from "../shopData/shopProduct";

const Shop = () => {
 const { shopData } = useContext(ShopDataContext);
 return (
  <div className="shop">
   {shopData.map(
    ({ id, name, imageUrl, price }) => {
     return (
      <ShopProducts
       id={id}
       name={name}
       imageUrl={imageUrl}
       price={price}
      />
     );
    }
   )}
  </div>
 );
};

export default Shop;
