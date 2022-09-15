import React from "react";
import Layout from "../src/components/Layout";
import ProductItem from "../src/components/ProductItem";
import { Container } from "@components";
import SliderComponent from "../src/components/SliderComponent";
import { useTranslation, Trans } from "react-i18next";

const PRODUCTS_QUERY = `
{
  getAllProducts{
    name
    brand
    price
    image_url
    id
  }
}
`;

const Home: React.FC = () => {
  const products = useProducts();

  const { t } = useTranslation();

  return (
    <Container>
      <Layout title="HomePage">
        <div className="my-10">
          <SliderComponent />
        </div>
        <h1 className="text-2xl my-3">{t("featuredproducts")}</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem product={product} key={product.id}></ProductItem>
          ))}
        </div>
      </Layout>
    </Container>
  );
};

function useProducts() {
  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setProduct(data.data.getAllProducts));
  }, []);
  return products;
}

export default Home;
