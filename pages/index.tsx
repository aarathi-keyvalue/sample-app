import React from "react";
import Layout from "../src/components/Layout";
import ProductItem from "../src/components/ProductItem";
import data from "../utils/data";
import { Container, Header, Main, Footer, Cards } from "@components";
import SliderComponent from "../src/components/SliderComponent";

const Home: React.FC = () => {
  return (
    <Container>
      {/* <Header />
      <Main />
      <Cards />
      <Footer /> */}
      <Layout title="HomePage">
<<<<<<< HEAD
        <div className="my-5">
          <SliderComponent></SliderComponent>
        </div>
 <h1 className="text-2xl my-3">Featured Products</h1>
       
=======
>>>>>>> 09e3d8a8f1eb71dc8c18ad94f80013b251946489
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
