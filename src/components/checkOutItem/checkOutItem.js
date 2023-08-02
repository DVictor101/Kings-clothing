import "./checkoutitem.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CheckOutItem = ({ cartItem }) => {
 const { name, imageUrl, price, quantity } =
  cartItem;
 const {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
 } = useContext(CartContext);
 const clearItemHandler = () =>
  clearItemFromCart(cartItem);
 const addItemToCartHandler = () => {
  addItemToCart(cartItem);
 };
 const removeItemFromCartHandler = () => {
  removeItemFromCart(cartItem);
 };

 return (
  <div className="checkout-item-cont">
   <div className="img-cont">
    <img src={imageUrl} alt={`${name}`} />
   </div>
   <span className="name">{name}</span>
   <div className="quantity">
    <div
     className="arrow"
     onClick={removeItemFromCartHandler}
    >
     &#10094;
    </div>
    <span className="value"> {quantity}</span>
    <div
     className="arrow"
     onClick={addItemToCartHandler}
    >
     &#10095;
    </div>
   </div>
   <span className="price">{price * 750}</span>

   <div
    className="remove-button"
    onClick={clearItemHandler}
   >
    &#10005;
   </div>
  </div>
 );
};
export default CheckOutItem;
