import {
 createContext,
 useState,
 useEffect,
} from "react";
//import SHOP_DATA from "../shopData/shop-Data";
import { getCategoryAndDocument } from "../firebase/firebase";

export const ShopDataContext = createContext({
 shopDatasMap: {},
});

export const ShopDataProvider = ({
 children,
}) => {
 const [shopDatasMap, setShopDatasMap] = useState(
  {}
 );
 useEffect(() => {
  const getCategoryMap = async () => {
   const categoryMap =
    await getCategoryAndDocument();
   console.log(categoryMap);
   setShopDatasMap(categoryMap);
  };
  getCategoryMap();
 }, []);
 const value = { shopDatasMap };
 return (
  <ShopDataContext.Provider value={value}>
   {children}
  </ShopDataContext.Provider>
 );
};
