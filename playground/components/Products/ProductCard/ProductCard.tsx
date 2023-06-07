import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

interface ProductProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductProps) => {
  const router = useRouter();

  const handleClick = (id: string) => router.push(`/products/${id}`);

  return (
    <Card
      key={product.id}
      hoverable
      style={{ width: 340, position: "relative" }}
      bordered={true}
      loading={!product ? true : false}
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
      onClick={() => handleClick(product.id)}
    >
      <Meta title={product.name} description={`$${product.price}`} />
    </Card>
  );
};

export default ProductCard;
