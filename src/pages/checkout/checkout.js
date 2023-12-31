import "./checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context///cartContext";
import CheckOutItem from "../../components/checkOutItem/checkOutItem";

const CheckOut = () => {
 const { cartItems, cartTotal } =
  useContext(CartContext);
 return (
  <div className="checkout-cont">
   <div className="checkout-header">
    <div className="header-block">
     <span>Product</span>
    </div>
    <div className="header-block">
     <span>Description</span>
    </div>
    <div className="header-block">
     <span>Quantity</span>
    </div>
    <div className="header-block">
     <span>Price</span>
    </div>
    <div className="header-block">
     <span>Remove</span>
    </div>
   </div>

   {cartItems.map((cartItem) => {
    return (
     <CheckOutItem
      key={cartItem.id}
      cartItem={cartItem}
     />
    );
   })}
   <span className="total">
    Total: #{cartTotal * 750}
   </span>
  </div>
 );
};
export default CheckOut;
