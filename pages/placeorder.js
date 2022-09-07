import Layout from "../src/components/Layout";
import { Button } from "../src/components";
import Link from "next/link";
import data from "../utils/data";
import Image from "next/image";

export default function register() {
  return (
    <Layout title="Place Order">
      {/* <form className='max-auto max-w-screen-md'> */}
      <h1 className="mb-4 text-xl"> Place Order </h1>
      <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md w-3/4">
        <h2> Shipping Address </h2>
        <p> xxx, xxx, xxx, xxx </p>
        <Link href="/shipping">
          <a className="text-blue-600">Edit</a>
        </Link>
      </div>
      <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md w-3/4 my-5">
        <h2> Payment Method </h2>
        <p> Cash On Delivery </p>
        <Link href="/payment">
          <a className="text-blue-600">Edit</a>
        </Link>
      </div>
      <div className="px-6 py-5 border-solid border-2  space-y-2 rounded-lg shadow-md w-3/4 my-5">
        <h2> Order Items </h2>
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-5 text-left">Item</th>
              <th className="p-5 text-center">Quantity</th>
              <th className="p-5 text-center">Price</th>
              <th className="p-5 text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((item) => (
              <tr key={item.slug} className="border-b">
                <td>
                  <Link href={`/product/${item.slug}`}>
                    <a className="flex items-center">
                      <Image
                        src={item.image}
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
                <td className="p-5 text-center">{item.price}</td>
                <td className="p-5 text-center">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/cart">
          <a className="text-blue-600">Edit</a>
        </Link>
      </div>
      <Button className="bg-yellow-400 hover:bg-yellow-600 my-5"> Next </Button>

      {/* </form> */}
    </Layout>
  );
}
