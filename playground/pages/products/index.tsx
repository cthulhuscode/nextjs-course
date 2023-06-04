import { Card } from "antd";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const { Meta } = Card;

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
          <Card
            key={product.id}
            hoverable
            style={{ width: 340, position: "relative" }}
            cover={
              <div>
                <Image
                  alt={product.name}
                  src={product.image}
                  width={340}
                  height={340}
                />
              </div>
            }
          >
            <Meta title={product.name} description={`$${product.price}`} />
          </Card>
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
