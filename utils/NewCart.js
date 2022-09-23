import { setCookie, getCookie } from "cookies-next";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { CartScreen } from "../pages/cart/[id]";

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

// export async function AddToCart(pId) {
//   const result = await client.mutate({
//     mutation: ADD_TO_CART,
//     variables: {
//       input: {
//         id: id,
//         cartItem: {
//           productId: pId,
//           quantity: 1,
//         },
//       },
//     },
//   });
//   return result.data.addToCart.id;
// }

export async function AddToCart(pId) {
  let id = localStorage.getItem("cartId");
  id = id ? id : "";
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
  location.reload();
  // setCookie("cartId", result.data.addToCart.id);
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
