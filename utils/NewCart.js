import { setCookie, getCookie } from "cookies-next";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import {CartScreen} from "../pages/cart";

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


const DELETE_CART = gql`
  mutation DeleteCart($id: String!) {
    deleteCartItem(cartItemId: $id) {
      id
      product {
        name
    }
  }
  }
`;
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
        id: "2765b849-c101-415c-b1e9-5562cec757b0",
        cartItem: {
          productId: id,
          quantity: 1
        }
      }
    },
  });
}

export async function DeleteCart(id) {
  const result = await client.mutate({
    mutation: DELETE_CART,
    variables: {
      id: id,
    },
  });

  console.log("Cart Item Deleted!!!");
}

