import "./category.scss";
const Category = ({ title, id, imageUrl }) => {
 return (
  <div key={id} className="category-conainert">
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
