import { Router } from "@i18n";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "..";
import { Store } from "../../../utils/Store";
import { AddToCart } from "../../../utils/NewCart";

export default function PriceCard({ product }) {
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
        }}
      >
        {" "}
        Add to cart{" "}
      </Button>
    </div>
  );
}
