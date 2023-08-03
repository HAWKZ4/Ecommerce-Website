
import { useState, useEffect } from "react";
import { InstgramBox } from "./InstgramBox";
import "./OurInstgram.css";

export const OurInstgram = () => {


  // manage the products
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:8000/instgram")
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])


  return (
    <div className="ourInstgram mb-10">
      <h1 className="pt-10 pb-6 text-center text-2xl dark:text-white font-semibold">
        Our Instagram
      </h1>
      <div className="instgramBoxes grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-3">

        {products.map((product) => (
          <InstgramBox key={product.id} product={product} />
        ))}

      </div>
    </div>
  );
};
