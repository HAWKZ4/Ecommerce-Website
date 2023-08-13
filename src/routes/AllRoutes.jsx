import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { CartPage, HomePage, PaymentPage, ProductDetailPage, ProductsPage } from "../pages";
import { CheckoutPage } from "../pages";
import { ProductsSection } from "../components/Elements/ProductsSection";


export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:ID" element={<ProductDetailPage />} />
        <Route path="/cart" element={< CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/test" element={<ProductsSection/>} />

      </Routes>
    </main>
  );
};
