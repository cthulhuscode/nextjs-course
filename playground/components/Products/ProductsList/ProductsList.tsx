import { Col, Row } from "antd";

import ProductCard from "@components/Products/ProductCard/ProductCard";
import { useProducts } from "../../../hooks/useProducts";

const ProductsList = () => {
  const { products, loading } = useProducts();

  return (
    <Row gutter={[30, 30]} justify={"center"}>
      {products.length !== 0 && !loading && products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
