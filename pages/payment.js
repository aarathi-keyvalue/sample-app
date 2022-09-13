import Layout from "../src/components/Layout";
import { Button } from "../src/components";
import Link from "next/link";

export default function payment() {
  return (
    <Layout title="Payment">
      <form className="max-auto max-w-screen-md">
        <h1 className="mb-4 text-xl"> Payment Method </h1>
        <div className="flex items-center mb-4">
          <input type="radio" id="paypal" name="payment" value="paypal" />
          <label className="mx-1.5" for="html">
            PayPal
          </label>{" "}
          <br />
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="stripe" name="payment" value="stripe" />
          <label className="mx-1.5" for="html">
            Stripe
          </label>{" "}
          <br />
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="cod" name="payment" value="cod" />
          <label className="mx-1.5" for="html">
            Cash On Delivery
          </label>{" "}
          <br />
        </div>
        <div className="flex justify-between">
          <Button className="bg-gray-400 hover:bg-gray-500">
            <Link href="/shipping">Back</Link>
          </Button>
          <Button className="bg-yellow-400 hover:bg-yellow-500">
            <Link href="/place-order">Next</Link>
          </Button>
        </div>
      </form>
    </Layout>
  );
}
