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
    addToCart(cartInput: $input) {
      id
      cartItems {
        id
        product {
          id
          name
        }
        quantity
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
    }
  }
`;

const CHECK_CART = gql`
  query ProductQuantityInCart($pid: String!, $cid: String!) {
    productQuantityInCart(productId: $pid, cartId: $cid)
  }
`;

const UPDATE_QUANTITY = gql`
  mutation UpdateQuantity($input: UpdateQuantityInput!) {
    updateQuantity(updateQuantity: $input) {
      id
      quantity
      product {
        name
        id
      }
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

export async function AddToCart(pId, qty = 1) {
  let id = localStorage.getItem("cartId");
  id = id ? id : "";
  const result = await client.mutate({
    mutation: ADD_TO_CART,
    variables: {
      input: {
        id: id,
        cartItem: {
          productId: pId,
          quantity: qty,
        },
      },
    },
  });
  localStorage.setItem("cartId", result.data.addToCart.id);
  return result.data.addToCart;
}

export async function DeleteCart(id) {
  const result = await client.mutate({
    mutation: DELETE_CART,
    variables: {
      id: id,
    },
  });
}

export async function UpdateQuantity(id, qty) {
  const result = await client.mutate({
    mutation: UPDATE_QUANTITY,
    variables: {
      input: {
        cartItemsId: id,
        quantity: qty,
      },
    },
  });
}

export async function checkProduct(id) {
  const { data } = await client.query({
    query: CHECK_CART,
    variables: {
      pid: id,
      cid: "6026254c-ecdf-453d-8a11-8ea62f617f29",
    },
    fetchPolicy: "no-cache",
  });
  return data.productQuantityInCart;
}
