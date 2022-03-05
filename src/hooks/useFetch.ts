import { ProductsInterface } from 'components/Products/Products.type';
import { useState, useEffect } from 'react';

interface UseFetch {
  data: Array<ProductsInterface>;
  loading: Boolean;
  error: Boolean;
}

const useFetch = (url: string): UseFetch => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
