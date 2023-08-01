import "./shopproducts.scss";
import CustomButton from "../custom-button/custumButton";

const ShopProducts = ({
 id,
 price,
 imageUrl,
 name,
}) => {
 return (
  <div className="shop-products">
   <img src={`${imageUrl}`} alt={name} />
   <div className="footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
   </div>
   <CustomButton buttonType="inverted">
    Add to cart
   </CustomButton>
  </div>
 );
};
export default ShopProducts;
