import { CartInterface } from 'components/Cart/Cart.type';
import { StateContext } from 'context/StateContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import cartSVG from 'images/cart.svg';
import { StateContextInterface } from 'context/StateContext.type';

const Header = () => {
  const { state }: StateContextInterface = useContext(StateContext);
  let numberInCart = 0;
  state.cart.forEach((item: CartInterface) => {
    numberInCart += item.qty;
  });

  return (
    <header className={styles.header}>
      <div className={styles.link_wrapper}>
        <Link to="cart">
          <img src={cartSVG} alt="cart-img" />
        </Link>
        {Boolean(numberInCart) && <span className={styles.cart_qty}>{numberInCart}</span>}
      </div>
    </header>
  );
};

export default Header;
