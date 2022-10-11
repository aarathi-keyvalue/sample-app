import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Container } from "@components";
import Layout from "../src/components/Layout";
import ProductItem from "../src/components/ProductItem";
import SliderComponent from "../src/components/SliderComponent";
import { getCart } from "../utils/NewCart";

const PRODUCTS_QUERY = gql`
  query Products {
    getAllProducts {
      name
      brand
      price
      image_url
      id
      rating
    }
  }
`;

const Home = ({ products }) => {
  const { t } = useTranslation();
  const [cart, setCart] = useState();

  useEffect(async () => {
    const cart = await getCart();
    setCart(cart);
  }, []);

  return (
    <Container>
      <Layout title="HomePage">
        <div className="my-10">
          <SliderComponent />
        </div>
        <h1 className="text-2xl my-3">{t("featuredproducts")}</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            const cartObj = cart?.cartItems?.find(
              (obj) => obj.product.id === product.id
            );
            return (
              <ProductItem
                product={product}
                key={product.id}
                cartObj={cartObj}
              ></ProductItem>
            );
          })}
        </div>
      </Layout>
    </Container>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: PRODUCTS_QUERY,
  });

  return {
    props: {
      products: data.getAllProducts,
    },
  };
}

export default Home;
