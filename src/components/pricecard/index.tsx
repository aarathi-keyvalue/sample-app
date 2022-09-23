import { Router } from "@i18n";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "..";
import { Store } from "../../../utils/Store";
import { AddToCart } from "../../../utils/NewCart";

export default function PriceCard({ product }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    // console.log("path", router);
  };
  // const { state, dispatch } = useContext(Store);

  // const addToCartHandler = () => {
  //   const existItem = state.cart.cartItems.find((x) => x.id === product.id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;

  //   if (product.countInStock < quantity) {
  //     alert("Sorry. Product is out of Stock");
  //     return;
  //   }
  //   dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  //   //router.push('/cart');
  // };
  const status = "Available";
  return (
    <div className="flex flex-col justify-between px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md">
      <div className="flex justify-between">
        <p>Price</p>
        <p>${product.price}</p>
      </div>
      <div className="flex justify-between">
        <p>Status</p>
        <p>{status}</p>
      </div>

      <Button
        className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
        onClick={() => {
          AddToCart(product.id);
          refreshData();
        }}
      >
        {" "}
        Add to cart{" "}
      </Button>
    </div>
  );
}
