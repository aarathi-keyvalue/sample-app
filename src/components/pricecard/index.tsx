import { Router } from "@i18n";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "..";
import { Store } from "../../../utils/Store";

export default function PriceCard({ product }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of Stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    //router.push('/cart');
  };
  const status = product.countInStock>0 ? "In Stock" : "Out of Stock";
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
        onClick={addToCartHandler}
      >
        {" "}
        Add to cart{" "}
      </Button>
    </div>
  );
}
