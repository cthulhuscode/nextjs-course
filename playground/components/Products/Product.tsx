import React from "react";

interface ProductProps {
  product: TProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <img src={product?.image} alt={product?.name} />
      <h3>{product?.name}</h3>
      <p>{product?.price}</p>
    </div>
  );
};

export default Product;
