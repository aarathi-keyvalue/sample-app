import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import CartItem from "../../src/components/CartItem";
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
                  <CartItem item={item} fetchCart={fetchCart} key={item.product.id}></CartItem>
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
