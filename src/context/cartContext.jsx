import {
 createContext,
 useEffect,
 useState,
} from "react";

const addCartItem = (cartItems, productToAdd) => {
 // check if cartItems contains producttoadd
 const existingCartItem = cartItems.find(
  (cartItem) => cartItem.id === productToAdd.id
 );

 //if found, increase the quantity

 if (existingCartItem) {
  return cartItems.map((cartItem) =>
   cartItem.id === productToAdd.id
    ? {
       ...cartItem,
       quantity: cartItem.quantity + 1,
      }
    : cartItem
  );
 }
 //returned array with the modified cartitems/ the new cart
 return [
  ...cartItems,
  { ...productToAdd, quantity: 1 },
 ];
};

const removeCartItem = (
 cartItems,
 productToRemove
) => {
 //find the cart item to remove
 const existingCartItem = cartItems.find(
  (cartItem) => cartItem.id === productToRemove.id
 );
 //check if cart item is =1
 if (existingCartItem.quantity === 1) {
  return cartItems.filter(
   (cartItem) =>
    cartItem.id !== productToRemove.id
  );
 }
 //if not - 1  reduce quantity
 if (existingCartItem) {
  return cartItems.map((cartItem) =>
   cartItem.id === productToRemove.id
    ? {
       ...cartItem,
       quantity: cartItem.quantity - 1,
      }
    : cartItem
  );
 }
};
const clearCartItem = (
 cartItems,
 cartItemToClear
) => {
 return cartItems.filter(
  (cartItem) => cartItem.id !== cartItemToClear.id
 );
};

export const CartContext = createContext({
 isCartOpen: false,
 setIsCartOpen: () => {},

 cartItems: [],
 addItemToCart: () => {},
 removeItemFromCart: () => {},
 clearItemFromCart: () => {},
 cartCount: 0,
 cartTotal: 0,
});

export const CartProvider = ({ children }) => {
 const [isCartOpen, setIsCartOpen] =
  useState(false);
 const [cartItems, setCartItems] = useState([]);
 const [cartCount, setCartCount] = useState(0);
 const [cartTotal, setCartTotal] = useState(0);
 useEffect(() => {
  const newCartCount = cartItems.reduce(
   (total, cartItem) => total + cartItem.quantity,
   0
  );
  setCartCount(newCartCount);
 }, [cartItems]);

 useEffect(() => {
  const newCartTotal = cartItems.reduce(
   (total, cartItem) =>
    total + cartItem.quantity * cartItem.price,
   0
  );
  setCartTotal(newCartTotal);
 }, [cartItems]);

 const addItemToCart = (productToAdd) => {
  setCartItems(
   addCartItem(cartItems, productToAdd)
  );
 };
 const removeItemFromCart = (productToRemove) => {
  setCartItems(
   removeCartItem(cartItems, productToRemove)
  );
 };
 const clearItemFromCart = (cartItemToClear) => {
  setCartItems(
   clearCartItem(cartItems, cartItemToClear)
  );
 };
 const value = {
  isCartOpen,
  setIsCartOpen,
  addItemToCart,
  cartItems,
  cartCount,
  removeItemFromCart,
  clearItemFromCart,
  cartTotal,
 };
 return (
  <CartContext.Provider value={value}>
   {children}
  </CartContext.Provider>
 );
};
