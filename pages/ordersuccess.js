import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function orderSuccess() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-200 h-screen">
      <div className="max-w-screen-lg mx-auto py-20 px-4">
        <div className="bg-white w-full shadow-lg pb-full rounded-xl text-center p-10">
          <Image
            src="/images/party-popper.png"
            alt="github"
            width="50"
            height="51"
          />
          <div className="my-3 font-medium text-2xl">{t("orderconfirm")}</div>
          <p className="my-3 text-sm text-gray-400">{t("confirm")}</p>
          <br />
          <a href="/">
            <button className="text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              {t("explore")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
