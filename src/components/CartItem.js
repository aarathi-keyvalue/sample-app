import React, { useState } from "react";
import { DeleteCart } from "../../utils/NewCart";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/outline";
import { Button } from "./button";
import Image from "next/image";
import { UpdateQuantity } from "../../utils/NewCart";

export default function CartItem({ item, fetchCart }) {
  const [quantity, setQuantity] = useState(item.quantity);
  return (
    <tr key={item.product.id} className="border-b">
      <td>
        <Link href={`/product/${item.product.id}`}>
          <a className="flex items-center">
            <Image
              src={item.product.image_url}
              alt={item.product.name}
              width={50}
              height={50}
            ></Image>
            &nbsp;
            {item.product.name}
          </a>
        </Link>
      </td>
      <td className="p-5 items-center">
        <div className="flex rounded items-center justify-center">
          <Button
            className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
            onClick={() => {
              UpdateQuantity(item.id, quantity - 1);
              if (quantity == 1) {
                DeleteCart(item.id).then(fetchCart);
              }
              setQuantity(quantity - 1);
            }}
            type="button"
          >
            -
          </Button>
          <div className="flex items-center mx-1">{quantity}</div>
          <Button
            className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
            onClick={() => {
              UpdateQuantity(item.id, quantity + 1);
              setQuantity(quantity + 1);
            }}
            type="button"
          >
            +
          </Button>
        </div>
        {/* <select
          value={item.quantity}
          onChange={(e) =>
            updateCartHandler(it055cba06-f917-44b2-954d-c3ab3b9dd2fb
        >
          {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select> */}
      </td>

      <td className="p-5 text-right">${item.product.price}</td>
      <td className="p-5 text-center">
        <button
          onClick={() => {
            DeleteCart(item.id).then(fetchCart);
          }}
        >
          <XCircleIcon className="h-5 w-5"></XCircleIcon>
        </button>
      </td>
    </tr>
  );
}
