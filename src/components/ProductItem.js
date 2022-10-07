import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { useTranslation } from "react-i18next";
import {
  AddToCart,
  UpdateQuantity,
  getCart,
  DeleteCart,
} from "../../utils/NewCart";

export default function ProductItem({ product, cartObj }) {
  const { t } = useTranslation();
  let cart;
  const [cartObject, setCartObject] = useState(cartObj);
  const [quantity, setQuantity] = useState(cartObj?.quantity);

  useEffect(() => {
    setQuantity(!cartObject ? 0 : cartObject.quantity);
  }, [cartObject]);

  useEffect(async () => {
    cart = await getCart();
    setCartObject(
      cart?.cartItems?.find((obj) => obj.product.id === product.id)
    );
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
              const data = await AddToCart(product.id);
              const cartItem = data?.cartItems?.find(
                (obj) => obj.product.id === product.id
              );
              setCartObject(cartItem);
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
                UpdateQuantity(cartObject.id, quantity - 1);
                if (quantity == 1) {
                  DeleteCart(cartObject.id);
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
                UpdateQuantity(cartObject.id, quantity + 1);
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
