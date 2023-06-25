import React from "react";
import ProductsList from "@components/Products/ProductsList/ProductsList";
import { InferGetServerSidePropsType } from "next";

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

const Products = ({
  productsList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <ProductsList productsList={productsList} />
);

export default Products;
