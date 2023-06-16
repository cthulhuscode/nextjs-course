import React from "react";
import { Col, InputNumber, Row, Typography } from "antd";
import Image from "next/image";
import styles from "./cartItem.module.css";
import { removeProductFromCart, setItemAmount, useCart } from "store/Cart";

const { Title } = Typography;

type CartItemProps = {
    item: { product: TProduct; amount: number; price: number };
}

export const CartItem = ({item}: CartItemProps) => {
  const { dispatch } = useCart();
  const { product, amount, price } = item;

  return (
    <Row className={styles.cartItem}>
      <Col>
        <Image
          src={product?.image!}
          width={140}
          height={140}
          alt={product?.name!}
          style={{ borderRadius: "8px" }}
        />        
      </Col>
      <Col className={styles.cartItem__info}>
        <Title level={3}>{product.name}</Title>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Amount: </span>
            <InputNumber min={1} defaultValue={1} size="small" value={amount} onChange={val => dispatch(setItemAmount({product, amount: val!}))}/>            
        </div>
        <p>Total price: ${price.toFixed(2)}</p>
      </Col>      
      <button 
        className={styles.cartItem__close} 
        onClick={() => dispatch(removeProductFromCart({product, amount, price}))}
      >X</button>      
    </Row>
  );
};
