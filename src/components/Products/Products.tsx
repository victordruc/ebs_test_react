import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from 'context/StateContext';
import { ProductsInterface, ProductsProps } from './Products.type';
import ButtonsCard from 'components/Cart/ButtonsCart';
import styles from './styles.module.css';
import { StateContextInterface } from 'context/StateContext.type';

const Products = (props: ProductsProps) => {
  const [sortCategoryType, setSortCategoryType] = useState<boolean>(false);
  const [sortPriceType, setSortPriceType] = useState<boolean>(false);

  const { state, dispatch }: StateContextInterface = useContext(StateContext);
  const { products } = props;
  useEffect(() => {
    dispatch({
      type: 'set_products',
      payload: products,
    });
  }, [products]);

  const sortCategory = () => {
    if (sortCategoryType) {
      dispatch({
        type: 'category_desc',
      });
      setSortCategoryType(false);
    } else {
      dispatch({
        type: 'category_asc',
      });
      setSortCategoryType(true);
    }
  };

  const sortPrice = () => {
    if (sortPriceType) {
      dispatch({
        type: 'price_desc',
      });
      setSortPriceType(false);
    } else {
      dispatch({
        type: 'price_asc',
      });
      setSortPriceType(true);
    }
  };

  return (
    <div className={styles.wrapper_table}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <button onClick={sortCategory} className={`${styles.btn_action} ${sortCategoryType && styles.desc}`}>
                Category
              </button>
            </th>
            <th>Name</th>
            <th>
              <button onClick={sortPrice} className={`${styles.btn_action} ${sortPriceType && styles.desc}`}>
                Price
              </button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((item: ProductsInterface) => (
            <tr key={item.id}>
              <td>{item.category.name}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <ButtonsCard type={false} id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
