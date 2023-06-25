import ProductsList from "@components/Products/ProductsList/ProductsList";
import { InferGetServerSidePropsType } from "next";
import React from "react";

/**
 * This is executed in the server
 */
export const getServerSideProps = async (params) => {
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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <ProductsList productsList={productsList} />
    </div>
  );
};
export default Home;
