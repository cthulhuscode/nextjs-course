import  Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      xd
    </div>
  );
};

export default ProductItem;
