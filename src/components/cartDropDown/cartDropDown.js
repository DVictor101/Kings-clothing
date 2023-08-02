import "./cartdropdown.scss";
import CustomButton from "../custom-button/custumButton";
import CartItem from "../cart-Item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartDropDown = () => {
 const { cartItems } = useContext(CartContext);


 return (
  <div className="cart-drop-down">
   <div className="cart-items">
    {cartItems.map((item) => (
     <CartItem key={item.id} item={item} />
    ))}
   </div>
   <CustomButton>CHECKOUT</CustomButton>
  </div>
 );
};
export default CartDropDown;
