import Products from 'components/Products/Products';
import useFetch from 'hooks/useFetch';
import Loading from 'components/Loading/Loading';
import React from 'react';
import Container from 'components/Container/Container';

const ProductPage = () => {
  const { data, loading, error } = useFetch('http://localhost:3001/api/products');
  return (
    <Container>
      {loading && <Loading />}
      {error && <h1>SERVER ERROR</h1>}
      {data && !error && <Products products={data} />}
    </Container>
  );
};

export default ProductPage;
