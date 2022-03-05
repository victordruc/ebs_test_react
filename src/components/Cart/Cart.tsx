import React, { useContext } from 'react';
import { StateContext } from 'context/StateContext';
import ButtonsCard from 'components/Cart/ButtonsCart';
import styles from './styles.module.css';
import { CartInterface } from './Cart.type';
import { StateContextInterface } from 'context/StateContext.type';

const Cart = () => {
  const { state }: StateContextInterface = useContext(StateContext);
  if (!state.cart.length) {
    return <h1>YOUR CART IS EMPTY</h1>;
  }
  return (
    <div className={styles.wrapper_table}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item: CartInterface) => (
            <tr key={item.id}>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>
                <ButtonsCard type={true} id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
