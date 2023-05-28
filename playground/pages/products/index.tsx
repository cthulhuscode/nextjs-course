import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getEntries = () =>
    fetch("api/avocados/")
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <style jsx>{`
        .products {
          margin-top: 20px;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
      `}</style>
    </div>
  );
};

export default Products;
