import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { CartPage, HomePage, PaymentPage, ProductDetailPage, ProductsPage, TestPage } from "../pages";
import { CheckoutPage } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";



export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:ID" element={<ProductDetailPage />} />
        <Route path="/cart" element={< CartPage />} />
        <Route path="/checkout" element={<ProtectedRoutes><CheckoutPage /></ProtectedRoutes>} />
        <Route path="/payment" element={<ProtectedRoutes><PaymentPage /></ProtectedRoutes>} />
        <Route path="/test" element={<TestPage/>} />

      </Routes>
    </main>
  );
};
