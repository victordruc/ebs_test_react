import CartPage from 'pages/CartPage.tsx/CartPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import React from 'react';
import { Routes as RoutesReact, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </RoutesReact>
  );
};

export default Routes;
