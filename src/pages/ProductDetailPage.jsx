import { useParams } from "react-router-dom";
import { Rating } from "../components/Elements";
import girl from "../images/girlBox.jpg";
import { useEffect, useState } from "react";
import { add, addProduct } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";


export const ProductDetailPage = () => {

  const productsInCart = useSelector(state => state.cartState.cartList)

  const [inCartList, setInCartList] = useState(false)

  // related to search 

  const { ID } = useParams()

  const [product, setProduct] = useState({})

  const { image, title, price, rating = 0, brand, company_name, id } = product


  const dispatch = useDispatch()
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`http://localhost:8000/products/${ID}`)
      const data = await response.json()
      setProduct(data)
    }
    getProduct()

  }, [id])


  useEffect(() => {
    const isInCartList = productsInCart.find(item => item.id === id)
    if (isInCartList) {
      setInCartList(true)
    } else {
      setInCartList(false)
    }

  }, [productsInCart, id])





  return (
    <section className=" bg-pro_det_bg pt-4 pb-20">
      <div className="productDetail flex pt-10  container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="left basis-1/2 flex flex-col">
          <div className="img m-auto text-center">
            <img src={image} className="w-[500px] h-[550px]" />
          </div>
          <div className="control mt-10 flex gap-4 m-auto items-center">
            <div className="p-4 bg-white rounded-lg cursor-pointer border-main_c border-[1px]">
              <img src={girl} className="w-14 rounded-sm" />
            </div>
            <div className="p-4 bg-white rounded-lg cursor-pointer border-border_c_na border-[1px]">
              <img src={girl} className="w-14 rounded-sm" />
            </div>
            <div className="p-4 bg-white rounded-lg cursor-pointer border-border_c_na border-[1px]">
              <img src={girl} className="w-14 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="right basis-1/2">
          <h1 className="font-bold text-3xl leading-normal mb-2">
            {title}
          </h1>
          <p>
            Brand: <span className="font-medium">{brand}</span>
          </p>
          <div className="flex gap-2 my-2 items-center">
            Rated:  <Rating rating={rating.rate} />
          </div>
          <div className="options ">
            <h6 className=" my-4 font-semibold">Option</h6>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 text-white bg-main_c rounded-md active"
                  aria-current="page"
                >
                  Tab 1
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-btn_bg rounded-md hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Tab 2
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-btn_bg rounded-md hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Tab 3
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-btn_bg rounded-md hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Tab 4
                </a>
              </li>
            </ul>
          </div>
          <div className="type mb-4">
            <h6 className="my-4 font-semibold">Type</h6>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 text-white bg-main_c rounded-md active"
                  aria-current="page"
                >
                  Tab 1
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-btn_bg rounded-md hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Tab 3
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-btn_bg rounded-md hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Tab 3
                </a>
              </li>
            </ul>
          </div>
          <h2 className="text-main_c font-bold  text-[25px]">${price}</h2>
          <p className="mb-4">Stock Available</p>
          <button disabled={inCartList} onClick={() => dispatch(addProduct(product))} className={`${inCartList ? "cursor-not-allowed	" : ""} bg-main_c text-white mb-8 px-10 py-2 rounded-md`}>
            Add To Cart
          </button>
          <p>
            Sold By: <span>{company_name}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
