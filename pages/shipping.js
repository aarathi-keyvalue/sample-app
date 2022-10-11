import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Layout from "../src/components/Layout";
import { Button } from "../src/components";

export default function shipping() {
  const { t } = useTranslation();
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

  return (
    <Layout title="Shipping">
      <form className="py-12 max-auto max-w-screen-md">
        <div>
          <h1 className="mb-4 text-xl"> {t("shipping")} </h1>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="name"> {t("fullname")} </label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("name", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="address">{t("address")}</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("address", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="city">{t("city")}</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("city", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="postcode">{t("postcode")}</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="postcode"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("pincode", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="country">{t("country")}</label>
          <input
            className=" appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            autoFocus
            type="text"
            onChange={(event) => onChangeValue("country", event.target.value)}
          ></input>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="mobileno"> {t("mobno")} </label>
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
            {t("next")}
          </Link>
        </Button>
      </form>
    </Layout>
  );
}
