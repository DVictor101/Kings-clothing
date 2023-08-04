import "./category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({
 title,
 id,
 imageUrl,
 route,
}) => {
 const navigate = useNavigate();
 const onNavigate = () => navigate(route);
 return (
  <div
   key={id}
   className="category-conainert"
   onClick={onNavigate}
  >
   <div
    style={{
     backgroundImage: `url(${imageUrl})`,
    }}
    className="background-image"
   />
   <div className="category-body-container">
    <h2>{title}</h2>
    <p>Shop Now</p>
   </div>
  </div>
 );
};
export default Category;
