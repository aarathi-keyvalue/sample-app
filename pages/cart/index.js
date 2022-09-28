import Link from "next/link";
import React, { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import { DeleteCart } from "../../utils/NewCart";
import { getCart } from "../../utils/NewCart";

export default function CartScreen() {
  const [cart, setCart] = useState();
  useEffect(() => {
    fetchCart();
  }, []);

  let total = 0;

  function fetchTotal(quantity, price) {
    total = total + quantity * price;
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
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
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
                    <td className="p-5 text-right">
                      {item.quantity}
                      {/* <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(it055cba06-f917-44b2-954d-c3ab3b9dd2fb
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select> */}
                    </td>

                    <td className="p-5 text-right">${item.product.price}</td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => {
                          DeleteCart(item.id).then(fetchCart);
                        }}
                      >
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-5 block rounded-lg border border-gray-200 shadow-md p-5 ">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Total : $
                  {cart?.cartItems.map((item) =>
                    fetchTotal(item.quantity, item.product.price)
                  )}
                  {total}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("/shipping")}
                  className="rounded bg-yellow-300 py-2 px-4 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600 w-full"
                >
                  Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
