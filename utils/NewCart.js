import { setCookie, getCookie } from "cookies-next";
import { gql } from "@apollo/client";
import client from "../apollo-client";

setCookie("cart", { cartItems: [], id: String });

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

const ADD_TO_CART = gql`
  mutation AddToCart($input: AddToCartInput!) {
    addToCart(addToCart: $input) {
      id
      cartItems {
        product {
          name
        }
      }
    }
  }
`;

export async function CreateCart(id) {
  const result = await client.mutate({
    mutation: CREATE_CART,
    variables: {
      input: {
        cartItems: [
          {
            productId: id,
            quantity: 1,
          },
        ],
      },
    },
  });
}

export async function AddToCart(id) {
  const result = await client.mutate({
    mutation: ADD_TO_CART,
    variables: {
      input: {
        id: "055cba06-f917-44b2-954d-c3ab3b9dd2fb",
        cartItem: {
          productId: id,
          quantity: 1
        }
      }
    },
  });
}
