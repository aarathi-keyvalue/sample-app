import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { Store } from "utils/Store";
import { Button } from "./button";

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  // const router=useRouter();

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of Stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    //router.push('/cart');
  };

  return (
    <div className="mb-5 block rounded-lg border border-gray-200 shadow-md">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <Button
          className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600"
          onClick={addToCartHandler}
          type="button"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
