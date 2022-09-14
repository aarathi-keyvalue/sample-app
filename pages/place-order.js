import Layout from "../src/components/Layout";
import { Button } from "../src/components";
import Link from "next/link";
import Image from "next/image";
import { Store } from "../utils/Store";
import { useContext } from "react";

export default function placeOrder() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <Layout title="Place Order">
      {/* <form className='max-auto max-w-screen-md'> */}
      <h1 className="mb-4 text-xl"> Place Order </h1>
      <div className="flex justify-between space-x-10">
        <div className="w-5/6">
          <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md ">
            <h2> Shipping Address </h2>
            <p> xxx, xxx, xxx, xxx </p>
            <Link href="/shipping">
              <a className="text-blue-600">Edit</a>
            </Link>
          </div>
          <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md my-5">
            <h2> Payment Method </h2>
            <p> Cash On Delivery </p>
            <Link href="/payment">
              <a className="text-blue-600">Edit</a>
            </Link>
          </div>
          <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md my-5">
            <h2> Order Items </h2>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-center">Quantity</th>
                  <th className="p-5 text-center">Unit Price</th>
                  <th className="p-5 text-center">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <Link href={`/product/${item.id}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image_url}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-center">{item.quantity}</td>
                    <td className="p-5 text-center">${item.price}</td>
                    <td className="p-5 text-center">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="/cart">
              <a className="text-blue-600">Edit</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between px-6 py-5 border-solid border-2 space-y-2 rounded-lg shadow-md h-1/4 w-1/6">
          <h1>Order Summary</h1>
          <div className="flex justify-between">
            <p>Total</p>
            <p>${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</p>
          </div>
          <Button className=" bg-yellow-300 shadow outline-none hover:bg-yellow-400 active:bg-yellow-600">
            {" "}
            <Link href={"/ordersuccess"}>Place Order</Link>{" "}
          </Button>
        </div>
      </div>
      {/* <Button className="bg-yellow-400 hover:bg-yellow-600 my-5"> Next </Button> */}

      {/* </form> */}
    </Layout>
  );
}
