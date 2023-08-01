import { createContext, useEffect } from "react";
import { useState } from "react";
import { onAuthStateChangedLiistener } from "../firebase/firebase";
import { CreateUserDocument } from "../firebase/firebase";

//VALUE TO BE ADDED
export const UserContext = createContext({
 currentUser: null,
 setCurrentUser: () => null,
});

//CONPONENT THAT WILL WRAP AROUND OTHER COMPONENT
export const UserProvider = ({ children }) => {
 const [currentUser, setCurrentUser] =
  useState(null);
 const value = { currentUser, setCurrentUser };

 useEffect(() => {
  const unSubScirbe = onAuthStateChangedLiistener(
   (user) => {
    if (user) {
     CreateUserDocument(user);
    }
    console.log(user);
    setCurrentUser(user);
   }
  );
  return unSubScirbe;
 }, []);
 return (
  <UserContext.Provider value={value}>
   {children}
  </UserContext.Provider>
 );
};
