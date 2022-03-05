import { StateContext } from 'context/StateContext';
import { StateContextInterface } from 'context/StateContext.type';
import React, { useContext } from 'react';
import { CartInterface } from './Cart.type';
import styles from './styles.module.css';

const ButtonsCart = ({ id, type }: { id: string; type: boolean }) => {
  const { state, dispatch }: StateContextInterface = useContext(StateContext);

  const numberInCart = state.cart.find((item: CartInterface) => item.id === id)?.qty || 0;

  const addProducts = (id: string) => {
    dispatch({
      type: 'add_prod',
      payload: id,
    });
  };

  const removeProducts = (id: string) => {
    dispatch({
      type: 'remove_prod',
      payload: id,
    });
  };

  const removeFull = (id: string) => {
    dispatch({
      type: 'remove_full',
      payload: id,
    });
  };

  return (
    <div className={styles.button_group}>
      <button
        className={styles.button_element}
        onClick={() => removeProducts(id)}
        disabled={!numberInCart ? true : false}
      >
        -
      </button>
      {type ? (
        <button className={styles.button_element} onClick={() => removeFull(id)}>
          Remove
        </button>
      ) : (
        <span>Selected: {numberInCart}</span>
      )}
      <button className={styles.button_element} onClick={() => addProducts(id)}>
        +
      </button>
    </div>
  );
};

export default ButtonsCart;
