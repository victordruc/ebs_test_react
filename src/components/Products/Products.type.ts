export interface ProductsInterface {
  id: string;
  name: string;
  category: Category;
  price: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface ProductsProps {
  products: Array<ProductsInterface>;
}
