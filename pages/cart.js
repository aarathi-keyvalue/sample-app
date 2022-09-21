import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Layout from "../src/components/Layout";
import { Router, useRouter } from "next/router";
import dynamic from "next/dynamic";
// import { gql, useMutation } from "@apollo/client";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import { DeleteCart } from "../utils/NewCart";
import { get } from "https";

// export async function getCart(){
//   const { data } = await client.query({
//     query: GET_CART_QUERY,
//     variables: { id: "231b1f4c-4cfc-4ce6-b294-aa08e5c41126" },
//     fetchPolicy: 'no-cache'
//   });
//   console.log("data",data);
//   return {
//     props: {
//       cart: data.getCart,
//     },
//   };
// }
const GET_CART_QUERY = gql`
  query Cart($id: String!) {
    getCart(id: $id) {
      id
      cartItems {
        id
        product {
          id
          name
          price
          image_url
        }
        quantity
      }
      isOrdered
    }
  }
`;

export default function CartScreen({ cart }) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  // const { state, dispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  // } = state;

  // const updateCartHandler = (item, qty) => {
  //   const quantity = Number(qty);
  //   dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  // };

  // const removeItemHandler = (item) => {
  //   dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  // };

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
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
                {cart.cartItems.map((item) => (
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
                          DeleteCart(item.id);
                          refreshData();
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
                  Subtotal ({cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  ) : $
                  {cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
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

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_CART_QUERY,
    variables: { id: "99a69c01-3a27-45b5-aa19-ed76db26f8a0" },
    fetchPolicy: "no-cache",
  });
  console.log(
    "ITEM-ID",
    data.getCart.cartItems.map((item) => item.id)
  );

  return {
    props: {
      cart: data.getCart,
    },
  };
}

// export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
