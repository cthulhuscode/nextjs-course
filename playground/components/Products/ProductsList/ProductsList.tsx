import { Col, Row } from "antd";

import ProductCard from "@components/Products/ProductCard/ProductCard";

const ProductsList = ({ productsList }: { productsList: TProduct[] }) => {
  return (
    <Row gutter={[30, 30]} justify={"center"}>
      {productsList &&
        productsList.length !== 0 &&
        productsList.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
    </Row>
  );
};

export default ProductsList;
