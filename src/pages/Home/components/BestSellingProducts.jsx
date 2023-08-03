import { useState, useEffect } from "react";

import { ProductCartF } from "../../../components/Elements";

export const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:8000/best_selling");
      const data = await response.json();
      setProducts(data);
      console.log(data)
    }
    getProducts();
  },[]);

  return (
    <div className="bestSellingProducts ">
      <h1 className="pt-10 pb-5 text-center text-2xl dark:text-white font-semibold">
        Best Selling Products
      </h1>
      <div className="products flex flex-wrap justify-between">
        {products.map((product)=>(
          <ProductCartF key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
