import { Router } from "@i18n";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Button } from "..";
import { Store } from "../../../utils/Store";
import { gql, useMutation } from "@apollo/client";
import client from "../../../apollo-client";

const CREATE_CART = gql`
  mutation CreateCart($input: CreateCartInput!) {
    createCart(createCartInput: $input) {
      id
      cartItems {
        product {
          id
        }
      }
      id
      isOrdered
    }
  }
`;

export default function PriceCard({ product }) {
  const { state, dispatch } = useContext(Store);
  // const [mutateFunction, { data, loading, error }] = useMutation(CREATE_CART);
  // const result = client.mutate({
  //   mutation: CREATE_CART,
  //   variables: { 
  //       "input": {
  //       "cartItems": [
  //         {
  //           "productId": "529a4bbe-5ec7-4a85-b360-77b681a1b114",
  //           "quantity": 20
  //         }
  //       ]
  //     }
  //   }
  //  })
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of Stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    //router.push('/cart');
  };
  const status = "Available";
  return (
    <div className="flex flex-col justify-between px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md">
      <div className="flex justify-between">
        <p>Price</p>
        <p>${product.price}</p>
      </div>
      <div className="flex justify-between">
        <p>Status</p>
        <p>{status}</p>
      </div>

      <Button
        className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
        onClick={() => client.mutate({
          mutation: CREATE_CART,
          variables: { 
              "input": {
              "cartItems": [
                {
                  "productId": "529a4bbe-5ec7-4a85-b360-77b681a1b114",
                  "quantity": 20
                }
              ]
            }
          }
         })}
      >
        {" "}
        Add to cart{" "}
      </Button>
    </div>
  );
}
