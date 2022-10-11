import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "./button";
import {
  addToCart,
  getCart,
  decrementQuantity,
  incrementQuantity,
  updateQuantity,
} from "../../utils/NewCart";

export default function ProductItem({ product, cartObj }) {
  const { t } = useTranslation();
  const [cartItem, setCartItem] = useState(cartObj);
  const [quantity, setQuantity] = useState(cartObj?.quantity);

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
        {quantity == 0 ? (
          <Button
            className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
            onClick={async () => {
              addToCart(product.id, setCartItem);
            }}
            type="button"
          >
            {t("addtocart")}
          </Button>
        ) : (
          <div className="flex rounded">
            <Button
              className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
              onClick={() => {
                decrementHandler(cartItem, quantity);
                decrementQuantity(cartItem, quantity, setQuantity);
              }}
              type="button"
            >
              -
            </Button>
            <div className="flex items-center mx-1">{quantity}</div>
            <Button
              className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
              onClick={() => {
                incrementHandler(cartItem, quantity);
                setQuantity(quantity + 1);
              }}
              type="button"
            >
              +
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
