import { setCookie, getCookie } from "cookies-next";
import { gql, useMutation } from "@apollo/client";

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

function NewCart() {
    const result = await client.mutate({
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
   })
  const [mutateFunction, { data, loading, error }] =
    useMutation(CREATE_CART);
}
