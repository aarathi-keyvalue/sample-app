import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

// export function AppWrapper({ children }) {
//   let sharedState = { id: "f59332b3-9ad5-4d49-babf-7ca9397aece0" };

//   return (
//     <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
//   );
// }

export const AppWrapper = ({ children }) => {
  const [cartId, setCartId] = useState("");
  // useEffect(() => {
  //   setcartId(localStorage.getItem("cartId")?localStorage.getItem("cartId"):"");
  //   console.log("blah", cartId);
  // }, [cartId]);

  const setCart = (values) => {
    setCartId(values)
   };

   
  return (
    <AppContext.Provider
      value={{
        cartId,
        setCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
