import React from 'react';
import Container from 'components/Container/Container';
import Cart from 'components/Cart/Cart';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const CartPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className={styles.container_wrapper}>
        <button className={styles.go_back} onClick={() => navigate(-1)}>
          {'<--GoBack'}
        </button>
        <Cart />
      </div>
    </Container>
  );
};

export default CartPage;
