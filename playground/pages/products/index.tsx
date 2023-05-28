import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getEntries = () => fetch("api/avocados/")
    .then(res => res.json())
    .then(res => setProducts(res.data))
    .catch(error => console.log(error));

  useEffect(() => {
    getEntries();    
  } ,[])

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  )
}

export default Products