import { setCookie } from "cookies-next";
import { gql } from "@apollo/client";
import client from "../apollo-client";

setCookie("cart", { cartItems: [], id: String });

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

const PLACE_ORDER = gql`
  mutation PlaceOrder($input: CreateOrderCascadeInput!) {
    createOrderWithCascade(createOrderCascadeInput: $input) {
      id
      customer {
        name
      }
      orderItems {
        product {
          id
          name
          price
        }
        price
        quantity
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

export async function getCart() {
  const id = localStorage.getItem("cartId");
  const { data } = await client.query({
    query: GET_CART_QUERY,
    variables: { id: id },
    fetchPolicy: "no-cache",
  });
  return data.getCart;
}

export async function placeTheOrder(obj) {
  let id = localStorage.getItem("cartId");
  id = id ? id : "";
  const result = await client.mutate({
    mutation: PLACE_ORDER,
    variables: {
      input: {
        name: obj.name,
        mobileNumber: obj.mobileNumber,
        address: obj.address,
        city: obj.city,
        pincode: obj.pincode,
        country: obj.country,
        cartId: id,
      },
    },
  });
  localStorage.setItem("orderId", result.data.createOrderWithCascade.id);
}

export async function AddToCart(pId) {
  let id = localStorage.getItem("cartId");
  id = id ? id : "";
  console.log(process.env);
  const result = await client.mutate({
    mutation: ADD_TO_CART,
    variables: {
      input: {
        id: id,
        cartItem: {
          productId: pId,
          quantity: 1,
        },
      },
    },
  });
  localStorage.setItem("cartId", result.data.addToCart.id);
  return result.data.addToCart.id;
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
