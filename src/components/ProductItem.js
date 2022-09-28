import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { useTranslation } from "react-i18next";
import { AddToCart } from "../../utils/NewCart";

export default function ProductItem({ product }) {
  const { t } = useTranslation();

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
        <Button
          className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
          onClick={() => AddToCart(product.id)}
          type="button"
        >
          {t("addtocart")}
        </Button>
      </div>
    </div>
  );
}
