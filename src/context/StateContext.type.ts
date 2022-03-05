import { CartInterface } from 'components/Cart/Cart.type';
import { ProductsInterface } from 'components/Products/Products.type';

export interface StateContextInterface {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export type State = {
  products: Array<ProductsInterface>;
  cart: Array<CartInterface>;
};

export type Action = {
  type: string;
  payload?: string | Array<ProductsInterface> | Array<any>;
};
