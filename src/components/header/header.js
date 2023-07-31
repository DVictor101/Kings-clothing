import { Fragment } from "react";
import "./header.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/304489-ffc107.svg";

const Header = () => {
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
     <Link className="link" to="/signin">
      SIGNIN
     </Link>
     <Link className="link" to="/contact">
      CONTACT
     </Link>
    </div>
   </div>
   <Outlet />
  </Fragment>
 );
};
export default Header;
