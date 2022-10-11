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

export default function CartItem({ item, setCart, updatePrice }) {
  const [quantity, setQuantity] = useState(item.quantity);
  useEffect(() => {
    updatePrice(quantity, item.product.price);
  }, []);

  const decrementHandler = useCallback(
    debounce(
      (cartItem, quantity) => updateQuantity(cartItem.id, quantity - 1),
      600
    ),
    []
  );

  const incrementHandler = useCallback(
    debounce(
      (cartItem, quantity) => updateQuantity(cartItem.id, quantity + 1),
      600
    ),
    []
  );
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
              decrementHandler(item, quantity);
              decrementQuantity(item, quantity, setQuantity, setCart);
              updatePrice(-1, item.product.price);
            }}
            type="button"
          >
            -
          </Button>
          <div className="flex items-center mx-1">{quantity}</div>
          <Button
            className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
            onClick={() => {
              incrementHandler(item, quantity);
              setQuantity(quantity + 1);
              updatePrice(1, item.product.price);
            }}
            type="button"
          >
            +
          </Button>
        </div>
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
