import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";
import { Button } from "..";
import {
  addToCart,
  getCart,
  decrementQuantity,
  incrementQuantity,
  updateQuantity,
} from "../../../utils/NewCart";

export default function PriceCard({ product }) {
  const { t } = useTranslation();
  let cart;
  const [cartItem, setCartItem] = useState();
  const [quantity, setQuantity] = useState();

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

  useEffect(async () => {
    cart = await getCart();
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
        {quantity == 0 ? (
          <Button
            className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
            onClick={() => {
              addToCart(product.id, setCartItem);
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
