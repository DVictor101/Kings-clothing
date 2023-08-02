import "./categorypreview.scss";
import ShopProducts from "../shopData/shopProduct";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
 return (
  <div className="categorypreview">
   <h2>
    <Link className="title" to={title}>
     {title.toUpperCase()}
    </Link>
   </h2>

   <div className="preview">
    {products
     .filter((_, idx) => idx < 4)
     .map((product) => (
      <ShopProducts
       key={product.id}
       product={product}
      />
     ))}
   </div>
  </div>
 );
};
export default CategoryPreview;
