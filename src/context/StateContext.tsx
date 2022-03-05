import React, { useReducer } from 'react';
import { Action, State, StateContextInterface } from './StateContext.type';

const initialState: State = {
  products: [],
  cart: [],
};

const StateContext = React.createContext<StateContextInterface>({ state: initialState, dispatch: () => null });

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set_products':
      const newProducts = action.payload || [];
      return { ...state, products: [...newProducts] };
    case 'category_desc':
      const sortArrayDesc = state.products.sort((a, b) => (a.category.name > b.category.name ? -1 : 1));
      return { ...state, products: sortArrayDesc };
    case 'category_asc':
      const sortArrayAsc = state.products.sort((a, b) => (b.category.name > a.category.name ? -1 : 1));
      return { ...state, products: sortArrayAsc };
    case 'price_desc':
      const sortPriceArrayDesc = state.products.sort((a, b) => (a.price > b.price ? -1 : 1));
      return { ...state, products: sortPriceArrayDesc };
    case 'price_asc':
      const sortPriceArrayAsc = state.products.sort((a, b) => (b.price > a.price ? -1 : 1));
      return { ...state, products: sortPriceArrayAsc };
    case 'add_prod':
      let index = state.cart.findIndex((item) => item.id === action.payload);
      if (index === -1) {
        const itemAdd = state.products.find((item) => item.id === action.payload);
        if (!itemAdd) return state;
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: itemAdd.id,
              category: itemAdd.category.name,
              name: itemAdd.name,
              price: itemAdd.price,
              qty: 1,
            },
          ],
        };
      } else {
        const newQty = [...state.cart];
        newQty[index].qty += 1;
        return { ...state, cart: [...newQty] };
      }
    case 'remove_prod':
      let indexRem = state.cart.findIndex((item) => item.id === action.payload);
      if (indexRem === -1) return state;
      const newQty = [...state.cart];
      if (newQty[indexRem].qty === 1) {
        newQty.splice(indexRem, 1);
        return { ...state, cart: [...newQty] };
      } else {
        newQty[indexRem].qty -= 1;
        return { ...state, cart: [...newQty] };
      }
    case 'remove_full':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
}

const StateContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export { StateContextProvider, StateContext };
