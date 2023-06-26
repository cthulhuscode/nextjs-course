import ProductsList from "@components/Products/ProductsList/ProductsList";
import { InferGetStaticPropsType } from "next";
import React from "react";

/**
 * This page is created as static file in the build process
 */
export const getStaticProps = async (params) => {
  const res = await fetch(
    "https://avocados-nextjs-livid.vercel.app/api/avocados/"
  );
  const { data: productsList }: TAPIAvoResponse = await res.json();

  return {
    props: { productsList },
  };
};

const Home = ({
  productsList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <ProductsList productsList={productsList} />
    </div>
  );
};
export default Home;
