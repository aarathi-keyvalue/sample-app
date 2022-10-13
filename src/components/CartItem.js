import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/outline";
import { Button } from "./button";
import {
  deleteCart,
  getCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
} from "../../utils/NewCart";
import AddToCart from "./AddToCart";

export default function CartItem({ item, setCart, setPrice }) {
  const [quantity, setQuantity] = useState(item.quantity);
  useEffect(() => {
    setPrice((currPrice) => currPrice + quantity * item.product.price);
  }, []);

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
        <AddToCart
          quantity={quantity}
          setCart={setCart}
          setQuantity={setQuantity}
          cartItem={item}
          setPrice={setPrice}
        ></AddToCart>
      </td>

      <td className="p-5 text-right">${item.product.price}</td>
      <td className="p-5 text-center">
        <button
          onClick={() => {
            deleteCart(item.id).then((data) => {
              getCart().then((data) => {
                setCart(data);
              });
            });
          }}
        >
          <XCircleIcon className="h-5 w-5"></XCircleIcon>
        </button>
      </td>
    </tr>
  );
}
