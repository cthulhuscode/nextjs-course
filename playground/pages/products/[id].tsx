import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Col, InputNumber, Row, Space, Typography } from "antd";
import Image from "next/image";
import { SpaceContext } from "antd/es/space";

const { Title } = Typography;

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>();
  const router = useRouter();
  const { id } = router.query;

  const getEntry = () =>
    fetch(`/api/avocados/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));

  useEffect(() => {
    id && getEntry();
  }, [id]);

  return (
    <div>
      <Row gutter={[35, 0]} justify={"center"}>
        <Col>
          <Image
            src={product?.image!}
            width={340}
            height={340}
            alt={product?.name!}
            style={{ borderRadius: "8px" }}
          />
        </Col>
        <Col>
          <Title>{product?.name}</Title>
          <p>{`$${product?.price}`}</p>
          <p>{`SKU: ${product?.sku}`}</p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Amount: </span>
            <InputNumber min={1} defaultValue={1} size="large" />
          </div>
        </Col>
      </Row>
      <Space />
      <Row justify={"center"} style={{ gap: "30px" }}>
        <Col span={24} style={{ maxWidth: "655px" }}>
          <Title level={3}>About this avocado</Title>
          <p>{product?.attributes.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductItem;
