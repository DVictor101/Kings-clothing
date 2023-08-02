import "./shopproducts.scss";
import CustomButton from "../custom-button/custumButton";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ShopProducts = ({ product }) => {
 const { name, price, imageUrl } = product;
 const { addItemToCart } =
  useContext(CartContext);

 const addProductToCart = () => {
  addItemToCart(product);
 };

 return (
  <div className="shop-products">
         <img src={imageUrl} alt={`${name}`} />
   <div className="footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
   </div>
   <CustomButton
    buttonType="inverted"
    onClick={addProductToCart}
   >
    Add to cart
   </CustomButton>
  </div>
 );
};
export default ShopProducts;
