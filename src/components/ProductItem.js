import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { getCart } from "../../utils/NewCart";
import AddToCart from "./AddToCart";

export default function ProductItem({ product, cartObj }) {
  const { t } = useTranslation();
  const [cartItem, setCartItem] = useState(cartObj);
  const [quantity, setQuantity] = useState(cartObj?.quantity);

  useEffect(() => {
    setQuantity(!cartItem ? 0 : cartItem.quantity);
  }, [cartItem]);

  useEffect(async () => {
    let cart = await getCart();
    setCartItem(cart?.cartItems?.find((obj) => obj.product.id === product.id));
  }, []);

  return (
    <div className="mb-5 block rounded-lg border border-gray-200 shadow-md">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product.image_url}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="text-sm">{product.brand}</p>
        <p className="my-2">${product.price}</p>
        <AddToCart
          product={product}
          setCart={() => {}}
          quantity={quantity}
          setQuantity={setQuantity}
          cartItem={cartItem}
          setCartItem={setCartItem}
          setPrice={() => {}}
        ></AddToCart>
      </div>
    </div>
  );
}
