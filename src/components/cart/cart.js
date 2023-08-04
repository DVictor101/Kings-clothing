import "./cartstyle.scss";
import { ReactComponent as CartIcon } from "../../Assets/004 shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";


const Cart = () => {
 const { isCartOpen, setIsCartOpen, cartCount } =
  useContext(CartContext);
 const toggleIsCartOpen = () =>
  setIsCartOpen(!isCartOpen);

 return (
  <div
   className="cart"
   onClick={toggleIsCartOpen}
  >
   <CartIcon className="carticon" />
   <span className="item-count">{cartCount}</span>
  </div>
 );
};
export default Cart;
