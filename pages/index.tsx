import React from "react";
import Layout from "../src/components/Layout";
import ProductItem from "../src/components/ProductItem";
import { Container } from "@components";
import SliderComponent from "../src/components/SliderComponent";
import { useTranslation, Trans } from "react-i18next";
import { gql } from "@apollo/client";
import client from "../apollo-client";

const Home: React.FC = ({products}) => {

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

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Products {
        getAllProducts {
          name
          brand
          price
          image_url
          id
        }
      }
    `,
  });

  return {
    props: {
      products: data.getAllProducts,
    },
  };
}

export default Home;
