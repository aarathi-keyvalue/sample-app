import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCart } from "../../../utils/NewCart";
import AddToCart from "../AddToCart";

export default function PriceCard({ product }) {
  const { t } = useTranslation();
  const [cartItem, setCartItem] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(async () => {
    let cart = await getCart();
    setCartItem(cart?.cartItems?.find((obj) => obj.product.id === product.id));
  }, []);

  useEffect(() => {
    setQuantity(!cartItem ? 0 : cartItem.quantity);
  }, [cartItem]);

  const status = "Available";
  return (
    <div>
      <div className="flex flex-col justify-between px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md">
        <div className="flex justify-between">
          <p>{t("price")}</p>
          <p>${product.price}</p>
        </div>
        <div className="flex justify-between">
          <p>{t("status")}</p>
          <p>{status}</p>
        </div>
        <AddToCart
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          cartItem={cartItem}
          setCartItem={setCartItem}
        ></AddToCart>
      </div>
    </div>
  );
}
