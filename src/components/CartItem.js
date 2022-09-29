import React, { useEffect, useState } from "react";
import { DeleteCart } from "../../utils/NewCart";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/outline";
import { getCart } from "../../utils/NewCart";

import Image from "next/image";

export default function CartItem({ item }) {
  const [cart, setCart] = useState();
  useEffect(() => {
    fetchCart();
  }, []);
  function fetchCart() {
    getCart().then((data) => {
      setCart(data);
    });
  }
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
      <td className="p-5 text-right">
        {item.quantity}
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
