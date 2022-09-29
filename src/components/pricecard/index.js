import React from "react";
import { Button } from "..";
import { AddToCart } from "../../../utils/NewCart";
import { useTranslation } from "react-i18next";

export default function PriceCard({ product }) {
  const { t } = useTranslation();
  const status = "Available";
  return (
    <div className="flex flex-col justify-between px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md">
      <div className="flex justify-between">
        <p>{t("price")}</p>
        <p>${product.price}</p>
      </div>
      <div className="flex justify-between">
        <p>{t("status")}</p>
        <p>{status}</p>
      </div>

      <Button
        className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
        onClick={() => {
          AddToCart(product.id);
        }}
      >
        {" "}
        {t("addtocart")}{" "}
      </Button>
    </div>
  );
}
