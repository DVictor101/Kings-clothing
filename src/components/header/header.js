import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/304489-ffc107.svg";
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../firebase/firebase";
import Cart from "../cart/cart";
import CartDropDown from "../cartDropDown/cartDropDown";
import { CartContext } from "../../context/cartContext";
import {
 HeaderContainer,
 LogoContainer,
 Navigation,
 NavLink,
} from "./headerstyle";

const Header = () => {
 const { currentUser } = useContext(UserContext);

 const { isCartOpen } = useContext(CartContext);

 return (
  <Fragment>
   <HeaderContainer>
    <LogoContainer to="/">
     <Logo className="logo" />
    </LogoContainer>
    <Navigation>
     <NavLink to="/shop">SHOP</NavLink>
     {currentUser ? (
      <span
       onClick={SignOutUser}
       className="link"
      >
       SIGNOUT
      </span>
     ) : (
      <NavLink to="/signin">SIGNIN</NavLink>
     )}
     <Cart />
    </Navigation>
    {isCartOpen && <CartDropDown />}
    <Outlet />
   </HeaderContainer>
  </Fragment>
 );
};
export default Header;
