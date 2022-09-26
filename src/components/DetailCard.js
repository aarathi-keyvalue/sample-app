import React from "react";

export default function DetailCard({ product }) {
  return (
    <div className="px-6">
      <p>
        <b> {product.name} </b>
      </p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Rating: {product.rating}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}
