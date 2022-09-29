import React from "react";
import { useTranslation } from "react-i18next";

export default function DetailCard({ product }) {
  const { t } = useTranslation();
  return (
    <div className="px-6">
      <p>
        <b> {product.name} </b>
      </p>
      <p>{t("category")}: {product.category}</p>
      <p>{t("brand")}: {product.brand}</p>
      <p>{t("rating")}: {product.rating}</p>
      <p>{t("description")}: {product.description}</p>
    </div>
  );
}
