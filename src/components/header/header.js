import { Fragment, useContext } from "react";
import "./header.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/304489-ffc107.svg";
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../firebase/firebase";
import Cart from "../cart/cart";
import CartDropDown from "../cartDropDown/cartDropDown";
import { CartContext } from "../../context/cartContext";

const Header = () => {
 const { currentUser } = useContext(UserContext);
 console.log(currentUser);
 const { isCartOpen } = useContext(CartContext);

 return (
  <Fragment>
   <div className="header">
    <Link className="logo-cont" to="/">
     <Logo className="logo" />
    </Link>
    <div className="link-cont">
     <Link className="link" to="/shop">
      SHOP
     </Link>
     {currentUser ? (
      <span
       onClick={SignOutUser}
       className="link"
      >
       SIGNOUT
      </span>
     ) : (
      <Link className="link" to="/signin">
       SIGNIN
      </Link>
     )}
     <Cart />
    </div>
    {isCartOpen && <CartDropDown /> }
   </div>
   <Outlet />
  </Fragment>
 );
};
export default Header;
