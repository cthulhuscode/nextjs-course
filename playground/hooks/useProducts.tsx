import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<TProduct[]>([]);

  const getEntries = () =>
    fetch("api/avocados/")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data)
        setLoading(false);
      })
      .catch((error) => console.log(error));

  useEffect(() => {
    getEntries();
  }, []);

  return {products, loading};
}
