import { useRouter } from "next/router";
import React from "react";
import Layout from "../../src/components/Layout";
import PriceCard from "../../src/components/pricecard";
import ReviewCard from "../../src/components/review";
import DetailCard from "../../src/components/DetailCard";
import Link from "next/link";

const PRODUCT_QUERY = `
{
  getAllProducts{
    name
    category
    brand
    rating
    description
    price
    image_url
    slug
    id 
  }
}
`;

export default function ProductList() {
  const products = useProducts();

  const { query } = useRouter();
  const { slug } = query;
  const product = products.find((item) => item.slug === slug);
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

function useProducts() {
  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: PRODUCT_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setProduct(data.data.getAllProducts));
  }, []);
  return products;
}
