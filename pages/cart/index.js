import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCart } from "../../utils/NewCart";
import Layout from "../../src/components/Layout";
import CartItem from "../../src/components/CartItem";

export default function CartScreen() {
  const { t } = useTranslation();
  const [cart, setCart] = useState();

  useEffect(
    () =>
      getCart().then((data) => {
        setCart(data);
      }),
    []
  );

  const [price, setPrice] = useState(0);

  function updatePrice(quantity, rate) {
    setPrice((currPrice) => currPrice + quantity * rate);
  }

  function fetchCart() {
    getCart().then((data) => {
      setCart(data);
    });
  }
  const router = useRouter();

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cart?.cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left"> {t("item")}</th>
                  <th className="p-5 text-center"> {t("quantity")}</th>
                  <th className="p-5 text-right"> {t("price")}</th>
                  <th className="p-5"> {t("action")}</th>
                </tr>
              </thead>
              <tbody>
                {cart?.cartItems.map((item) => (
                  <CartItem
                    item={item}
                    setCart={setCart}
                    key={item.product.id}
                    setPrice={setPrice}
                  ></CartItem>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-5 block rounded-lg border border-gray-200 shadow-md p-5 ">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  {t("total")} : $
                  {/* {cart?.cartItems.map((item) =>
                    fetchTotal(item.quantity, item.product.price)
                  )} */}
                  {price}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("/shipping")}
                  className="rounded bg-yellow-300 py-2 px-4 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600 w-full"
                >
                  {t("checkout")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
