import { useContext, Fragment } from "react";
import { ShopDataContext } from "../../context/ShotDataContext";
import CategoryPreview from "../../components/categoryPreview/categoryPreview";

const CategoriesPreview = () => {
 const { shopDatasMap } = useContext(
  ShopDataContext
 );
 return (
  <Fragment>
   {Object.keys(shopDatasMap).map((title) => {
    const products = shopDatasMap[title];

    return (
     <CategoryPreview
      key={title}
      title={title}
      products={products}
     />
    );
   })}
  </Fragment>
 );
};
export default CategoriesPreview;
