import { Button } from "..";

import {
  AddToCart,
  UpdateQuantity,
  getCart,
  DeleteCart,
} from "../../../utils/NewCart";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function PriceCard({ product }) {
  const { t } = useTranslation();

  let cart;
  const [cartObject, setCartObject] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(async () => {
    cart = await getCart();
    const cartItem = cart?.cartItems?.find(
      (obj) => obj.product.id === product.id
    );
    setCartObject(cartItem);
  }, []);

  useEffect(() => {
    setQuantity(!cartObject ? 0 : cartObject.quantity);
  }, [cartObject]);

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
          <div className="flex rounded justify-center">
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
