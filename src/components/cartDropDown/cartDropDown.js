import "./cartdropdown.scss";
import CustomButton from "../custom-button/custumButton";
const CartDropDown = () => {
 return (
  <div className="cart-drop-down">
   <div className="cart-items"></div>
   <CustomButton>CHECKOUT</CustomButton>
  </div>
 );
};
export default CartDropDown;
