import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { CartPage, HomePage, PaymentPage, ProductDetailPage, ProductsPage } from "../pages";
import { CheckoutPage } from "../pages";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:ID" element={<ProductDetailPage />} />
        <Route path="/cart" element={< CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
};
