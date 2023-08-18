
import { useState, useEffect } from "react";
import { InstgramBox } from "./InstgramBox";
import "./OurInstgram.css";
import { useSelector } from "react-redux";

export const OurInstgram = () => {


  // manage the products
  // const [products, setProducts] = useState([])

  const products = useSelector(state => state.imagesState.instagramImages)

  const instgramImages= products.filter((product)=> product.instagram)



  // useEffect(() => {
  //   async function getProducts() {
  //     const response = await fetch("http://localhost:8000/instgram")
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   getProducts()
  // }, [])


  return (
    <div className="ourInstgram mb-10">
      <h1 className="pt-10 pb-12  text-center text-2xl dark:text-white font-semibold">
        Our Instagram
      </h1>
      <div className="instgramBoxes grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-3">

        {instgramImages.map((product) => (
          <InstgramBox key={product.id} product={product} />
        ))}

      </div>
    </div>
  );
};
