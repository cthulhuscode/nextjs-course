import { useEffect, useState } from "react";
import { Col, Row } from "antd";

import ProductCard from "@components/Products/ProductCard/ProductCard";

const ProductsList = () => {
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
    <Row gutter={[30, 30]} justify={"center"}>
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
