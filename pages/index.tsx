import React from "react";
import Layout from "../src/components/Layout";
import ProductItem from "../src/components/ProductItem";
import data from "../utils/data";
import { Container, Header, Main, Footer, Cards } from "@components";
import SliderComponent from "../src/components/SliderComponent";
import { useTranslation, Trans } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Layout title="HomePage">
        <div className="my-10">
          <SliderComponent />
        </div>
        <h1 className="text-2xl my-3">{t("featuredproducts")}</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </Layout>
    </Container>
  );
};

export default Home;
