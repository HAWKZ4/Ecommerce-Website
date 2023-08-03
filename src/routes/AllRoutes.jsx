import { Routes, Route } from "react-router-dom";

import { Register } from "../pages/Register";
import { HomePage, ProductDetailPage, ProductsPage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:ID" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
};
