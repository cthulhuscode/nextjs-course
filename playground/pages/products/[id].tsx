import React from "react";
import ProductDetails from "@components/Products/ProductDetails/ProductDetails";
import { GetStaticProps, GetStaticPaths } from "next";


/**
 * This method is required for dynamic pages
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://avocados-nextjs-livid.vercel.app/api/avocados/"
  );
  const { data: productsList }: TAPIAvoResponse = await res.json();  

  const paths: {params: {id: string}}[] = productsList.map(
    ({id}) => ({params: {id}})
  );

  return {    
    paths,
    // Incremental Static Generation
    /**
     * fallback: any page that is not specified within these paths will give 404
     */
    fallback: false
  }
}

/**
 * This page is created as static file in the build process
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const id = params?.id as string;
  
  const res = await fetch(
    `https://avocados-nextjs-livid.vercel.app/api/avocados/${id}`
  );
  const {data: product}: {data: TProduct} = await res.json(); 

  return {
    props: { product },
  };
};

const ProductItem = ({product}) => {  
  if (!product) return;   

  return (
    <ProductDetails product={product} />
  );
};

export default ProductItem;
