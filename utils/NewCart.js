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
  console.log("Cart created!!!");
}
