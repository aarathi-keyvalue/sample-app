import { useRouter } from "next/router";
import { gql, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import React from "react";
import Layout from "../../src/components/Layout";
import PriceCard from "../../src/components/pricecard";
import ReviewCard from "../../src/components/review";
import DetailCard from "../../src/components/DetailCard";
import Link from "next/link";
import client from "../../apollo-client";

const PRODUCT_QUERY = gql`
  query product($product_id: String!) {
    product(id: $product_id) {
      id
      name
      category
      brand
      rating
      description
      price
      image_url
    }
  }
`;

export default function ProductList({ product }) {
  if (!product) {
    return (
      <Layout>
        <div> Product Not Found </div>
      </Layout>
    );
  }
  return (
    <Layout title={product.name}>
      <div className="py-2 h-full">
        <Link href="/"> back to products </Link>
        <div className="grid md:grid-cols-4 py-4">
          <div className="md:col-span-2">
            <img src={product.image_url} alt={product.name} />
          </div>
          <div className="col-span-1">
            <DetailCard product={product} />
          </div>
          <div className="col-span-1 px-4">
            <PriceCard product={product} />
          </div>
        </div>
        <h1 className="text-lg">Customer Reviews</h1>
        <h5 className="text-sm">No review found </h5>
        <ReviewCard />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await client.query({
    query: PRODUCT_QUERY,
    variables: { product_id: id },
  });
  return {
    props: {
      product: data.product,
    },
  };
}
