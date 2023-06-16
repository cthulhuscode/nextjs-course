import React from "react";
import { CartItem } from "@components/Cart/CartItem/CartItem";
import { Col, Row, Typography } from "antd";
import { useCart } from "store/Cart";
import Link from "next/link";

const { Title } = Typography;

const Cart = () => {   
  const { state } = useCart();
  const { items, count, totalPrice } = state;    

    return (      
      <Row justify={"space-between"} style={{gap: "50px"}}>
        <Col style={{display: "flex", flexDirection: "column", gap: "30px"}} flex={1}>
          { items.length === 0 
              ? 
                <>
                  <Title level={3}>No items yet :c</Title>
                  <Link href={"/"}>Go to products</Link>              
                </>
              : items.map(item => <CartItem key={item.product.id} item={item} />) 
          }      
        </Col>
        <Col flex={1} style={{backgroundColor: "#fff"}}>
          <Title level={3}>Cart summary</Title>
          <p>{count} items</p>
          <p>Subtotal: ${totalPrice.toFixed(2)}</p>
        </Col>
      </Row>
    );  
};

export default Cart;
