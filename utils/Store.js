import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : { cartItems: [] },
};
console.log("Cookies");
console.log(Cookies.get("cart"));

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      console.log("KKKKK", newItem);
      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      console.log("EE", existItem);
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
