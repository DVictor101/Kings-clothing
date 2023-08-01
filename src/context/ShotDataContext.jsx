import { createContext, useState } from "react";
import { SHOPDATA } from "../shopData/shopData";

export const ShopDataContext = createContext({
 shopData: [],
});

export const ShopDataProvider = ({
 children,
}) => {
 const [shopData, setShopData] =
  useState(SHOPDATA);
 const value = { shopData, setShopData };
 return (
  <ShopDataContext.Provider value={value}>
   {children}
  </ShopDataContext.Provider>
 );
};
