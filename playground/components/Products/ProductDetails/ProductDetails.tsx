import React from "react";
import { Col, InputNumber, List, Row, Space, Typography } from "antd";
import Image from "next/image";

const { Title } = Typography;

type ProductDetailsProps = {
    product: TProduct
}

const ProductDetails = ({product}: ProductDetailsProps) => {
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
      <Row justify={"center"} style={{ gap: "30px", marginTop: "30px" }}>
        <Col span={24} style={{ maxWidth: "655px" }}>
          <Title level={3}>About this avocado</Title>
          <p>{product?.attributes.description}</p>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col style={{ width: "655px" }}>

          {/* Details list */}
          <List itemLayout="horizontal">
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">Shape</a>}
                description={product.attributes.shape}
              />
            </List.Item>

            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">Hardiness</a>}
                description={product.attributes.hardiness}
              />
            </List.Item>

            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">Taste</a>}
                description={product.attributes.taste}
              />
            </List.Item>
          </List>

        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails