import Layout from "../src/components/Layout";
import { Button } from "../src/components";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function shipping() {
  const [state, setState] = useState({
    name: "",
    mobileNumber: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
  });

  const onChangeValue = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Layout title="Shipping">
      <form className="max-auto max-w-screen-md">
        <h1 className="mb-4 text-xl"> Shipping Address </h1>
        <div className="mb-4 flex flex-col">
          <label htmlFor="name"> Full Name </label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("name", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="address">Address</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("address", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="city">City</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("city", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="postcode">Postal Code</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="postcode"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("pincode", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="country">Country</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("country", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="mobileno"> Mobile Number </label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileno"
            autoFocus
            type="text"
            onChange={(event) =>
              onChangeValue("mobileNumber", event.target.value)
            }
          ></input>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-600">
          <Link
            href={{
              pathname: "/place-order",
              query: state,
            }}
          >
            Next
          </Link>
        </Button>
      </form>
    </Layout>
  );
}
