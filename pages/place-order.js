import Layout from "../src/components/Layout";
import { Button } from "../src/components";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCart } from "../utils/NewCart";
import { placeTheOrder } from "../utils/NewCart";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function placeOrder() {
  const { t } = useTranslation();
  const router = useRouter();
  const customer = router.query;
  const [cart, setCart] = useState();
  useEffect(() => {
    fetchCart();
  }, []);

  function fetchCart() {
    getCart().then((data) => {
      setCart(data);
    });
  }

  let total = 0;

  function fetchTotal(qnty, pr) {
    total = total + qnty * pr;
  }

  return (
    <Layout title="Place Order">
      <h1 className="mb-4 text-xl"> Place Order </h1>
      <div className="flex justify-between space-x-10">
        <div className="w-5/6">
          <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md ">
            <h2> {t("shipping")} </h2>
            <p>
              {" "}
              {customer.name}
              <br /> {customer.address}, {customer.city}, {customer.country},{" "}
              {customer.pincode}
              <br /> {customer.mobileNumber}{" "}
            </p>
            <Link href="/shipping">
              <a className="text-blue-600">{t("edit")}</a>
            </Link>
          </div>
          <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md my-5">
            <h2> {t("payment")} </h2>
            <p> Cash On Delivery </p>
            <Link href="/payment">
              <a className="text-blue-600">{t("edit")}</a>
            </Link>
          </div>
          <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md my-5">
            <h2> {t("orderitems")} </h2>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">{t("item")}</th>
                  <th className="p-5 text-center">{t("quantity")}</th>
                  <th className="p-5 text-center">{t("unitprice")}</th>
                  <th className="p-5 text-center">{t("subtotal")}</th>
                </tr>
              </thead>
              <tbody>
                {cart?.cartItems.map((item) => (
                  <tr key={item.product.id} className="border-b">
                    <td>
                      <Link href={`/product/${item.product.id}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.product.image_url}
                            alt={item.product.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.product.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-center">{item.quantity}</td>
                    <td className="p-5 text-center">${item.product.price}</td>
                    <td className="p-5 text-center">
                      ${item.product.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="/cart">
              <a className="text-blue-600">{t("edit")}</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between px-6 py-5 border-solid border-2 space-y-2 rounded-lg shadow-md h-1/4 w-1/6">
          <h1>{t("summary")}</h1>
          <div className="flex justify-between">
            <p>{t("total")}</p>
            <p>
              $
              {cart?.cartItems.map((item) =>
                fetchTotal(item.quantity, item.product.price)
              )}
              {total}
            </p>
          </div>
          <Button
            className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
            onClick={() => {
              placeTheOrder(customer);
              localStorage.removeItem("cartId");
            }}
          >
            {" "}
            <Link href={"/ordersuccess"}>{t("placeorder")}</Link>{" "}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
