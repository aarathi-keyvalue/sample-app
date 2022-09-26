import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { Store } from "utils/Store";
import { Button } from "./button";
import { useTranslation, Trans } from "react-i18next";
import { AddToCart } from "../../utils/NewCart";
import { useRouter } from "next/router";

export default function ProductItem({ product }) {
  // const router = useRouter();
  //  async function refreshData () {
  //   await router.replace(router.asPath);
  //   console.log("helllooooooiiii refreshingnggggggt");
  //   // console.log("path", router);
  // };
  // const { state, dispatch } = useContext(Store);

  // const addToCartHandler = () => {
  //   const existItem = state.cart.cartItems.find((x) => x.id === product.id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;

  //   if (product.countInStock < quantity) {
  //     alert("Sorry. Product is out of Stock");
  //     return;
  //   }
  //   dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  //   //router.push('/cart');
  // };
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

// export async function addToCart(pid) {
//   setCookie("cartId", await AddToCart(getCookie("cartId"), pid));
// }
