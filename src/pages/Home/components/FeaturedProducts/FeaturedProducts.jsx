import { useEffect, useState } from "react"
import { ProductCartF } from "../../../../components/Elements"
import { Link } from "react-router-dom"
import "./ProductAni.css"
import { useSelector } from "react-redux"

export const FeaturedProducts = () => {

  // manage the products
  // const [products, setProducts] = useState([])


  const products=useSelector(state=> state.cartState.allProducts)

  const featuredProducts= products.filter((product)=> product.featured_product)

  // useEffect(() => {

  //   async function getProducts() {
  //     const response = await fetch("http://localhost:8000/featured_products")
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   getProducts()
  // }, [])

  return (
    <div className="bestSellingProducts ">
      <h1 className="pt-10 pb-5 text-center text-2xl dark:text-white font-semibold">Featured Products</h1>
      <div className="products flex flex-wrap justify-between">

        {featuredProducts.map((product) => (
          <ProductCartF key={product.id} product={product} />

        ))}


      </div>
    </div>
  )
}
