import "./cartdropdown.scss";
import CustomButton from "../custom-button/custumButton";
import CartItem from "../cart-Item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
 const { cartItems } = useContext(CartContext);
 const navigate = useNavigate();
 const goToCheckOut = () => {
  navigate("/checkout");
 };

 return (
  <div className="cart-drop-down">
   <div className="cart-items">
    {cartItems.map((item) => (
     <CartItem key={item.id} item={item} />
    ))}
   </div>
   <CustomButton
    buttonType="button"
    onClick={goToCheckOut}
   >
    CHECKOUT
   </CustomButton>
  </div>
 );
};
export default CartDropDown;
