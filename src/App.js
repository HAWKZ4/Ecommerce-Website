import "./App.css";
import { useEffect, useState } from "react";
import { Header,Footer } from "./components/Layout/";

import { AllRoutes } from "./routes/AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import { QuickViewProduct, UserLoggedOutForm } from "./components/Elements";
import { addAllProductsToCart } from "./store/cartSlice";
import { addInstagramImages } from "./store/imagesSlice";
import {
  addAllProductsToAllProducts,
  addAllProductsToFiltered,
} from "./store/filterSlice";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  });

  async function fetchProducts() {
    const response = await fetch(`http://localhost:8000/products`);
    const data = await response.json();

    // // Add the quentity property to each item in fetched api
    // const itemsWithQuantity = data.map((item) => ({ ...item, quantity: 1 }));

    const addToStore = () => {
      dispatch(addAllProductsToCart(data));
      dispatch(addAllProductsToFiltered(data));
      dispatch(addAllProductsToAllProducts(data));
      dispatch(addInstagramImages(data));
    };
    addToStore();

    setIsLoading(false);
  }

  const showQuickViewBox = useSelector(
    (state) => state.propsState.showQuickViewBox
  );
  const showLoginForm = useSelector((state) => state.propsState.showLoginForm);
  const token = sessionStorage.getItem("token");

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="App dark:bg-slate-800 ">
          <Header />
          <AllRoutes />
          <Footer />
        </div>
      )}
      {showQuickViewBox && (
        <QuickViewProduct showQuickViewBox={showQuickViewBox} />
      )}
      {showLoginForm && (!token ? <UserLoggedOutForm /> : "")}
    </>
  );
};

export default App;
