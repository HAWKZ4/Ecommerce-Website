import { useParams } from "react-router-dom";
import { Rating } from "../components/Elements";
import girl from "../images/girlBox.jpg";
import { useEffect, useState } from "react";
import { add, addProduct } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


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

  // const [isActive, setIsActive] = useState(false);
  const [CurrentActiveOption, setCurrentActiveOption] = useState(1)
  const [CurrentActveType, setCurrentActiveType] = useState(1)

  const buttons = document.querySelectorAll(".list li button")

  const handleActiveOptionButton = (id) => {
    setCurrentActiveOption(id)
  }

  const handleActiveTypeButton = (id) => {
    setCurrentActiveType(id)
  }

  // buttons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     buttons.forEach((btn) => {
  //       btn.classList.remove("active");
  //     });

  //     button.classList.add("active");
  //     setIsActive(true)

  //   });
  // });

  // const handleActiveClass = (e) => {
  //   // e.target.classList.add("active")
  // };


  const handleAddProduct = () => {
    dispatch(addProduct(product))
    toast.success("AddedToCart")
  }





  return (
    <section className=" bg-pro_det_bg pt-4 pb-20 dark:bg-gray-800">
      <div className="productDetail flex pt-10  container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="left basis-1/2 flex flex-col">
          <div className="img m-auto text-center">
            <img src={image} className="w-[400px] h-[350px]" />
          </div>
          <div className="control mt-10 flex gap-4 m-auto items-center">
            <div className="p-4 bg-white rounded-lg cursor-pointer border-main_c border-[1px]">
              <img src={image} className="w-14 h-14 rounded-sm" />
            </div>
            <div className="p-4 bg-white rounded-lg cursor-pointer border-border_c_na border-[1px]">
              <img src={image} className="w-14 h-14 rounded-sm" />
            </div>
            <div className="p-4 bg-white rounded-lg cursor-pointer border-border_c_na border-[1px]">
              <img src={image} className="w-14 h-14 rounded-sm" />
            </div>
          </div>
        </div>
        <div className="right basis-1/2">
          <h1 className="font-bold text-main_text text-4xl leading-normal mb-2 dark:text-sec">
            {title}
          </h1>
          <p className="text-main_text dark:text-sec ">
            Brand: <span className="font-medium  dark:text-white">{brand}</span>
          </p>
          <div className="flex gap-2 my-4 items-center text-main_text dark:text-sec">
            Rated:  <Rating rating={rating.rate} ratingCount={rating.count} />
          </div>
          <div className="options ">
            <h6 className=" my-4 font-semibold text-main_text dark:text-sec">Option</h6>
            <ul className="list flex flex-wrap text-sm font-medium text-center text-main_text  dark:text-main_text">
              <li className="mr-2">
                <button

                  className={`inline-block px-5 py-2  bg-btn_bg rounded-md hover:bg-main_c hover:text-white  dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActiveOption === 1 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveOptionButton(1)}
                >
                  Option 1
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`inline-block px-5 py-2 transition-all duration-300  bg-btn_bg rounded-md hover:bg-main_c hover:text-white dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActiveOption === 2 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveOptionButton(2)}

                >
                  Option 2
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`inline-block px-5 py-2 transition-all duration-300  bg-btn_bg rounded-md hover:bg-main_c hover:text-white dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActiveOption === 3 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveOptionButton(3)}
                >
                  Option 3
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`inline-block px-5 py-2 transition-all duration-300  bg-btn_bg rounded-md hover:bg-main_c hover:text-white  dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActiveOption === 4 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveOptionButton(4)}
                >
                  Option 4
                </button>
              </li>
            </ul>
          </div>
          <div className="type mb-4">
            <h6 className="my-4 font-semibold text-main_text dark:text-sec">Type</h6>
            <ul className="flex flex-wrap text-sm font-medium text-center text-main_text dark:text-main_text">
              <li className="mr-2">
                <button
                  className={`transition-all duration-300 inline-block px-5 py-2  bg-btn_bg rounded-md hover:bg-main_c hover:text-white  dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActveType === 1 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveTypeButton(1)}
                >
                  Type 1
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`transition-all duration-300 inline-block px-5 py-2  bg-btn_bg rounded-md hover:bg-main_c hover:text-white  dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActveType === 2 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveTypeButton(2)}

                >
                  Type 2
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={` transition-all duration-300inline-block px-5 py-2  bg-btn_bg rounded-md hover:bg-main_c hover:text-white  dark:hover:bg-blue-600 dark:hover:text-white ${CurrentActveType === 3 ? "bg-main_c dark:bg-blue-600 text-white" : "dark:text-main_text"}`}
                  onClick={() => handleActiveTypeButton(3)}

                >
                  Type 3
                </button>
              </li>
            </ul>
          </div>
          <h2 className="text-main_c font-bold text-3xl my-2 text-[25px] dark:text-blue-600">${price}</h2>
          <p className="mb-4 text-main_text dark:text-green-500">Stock Available</p>
          <button disabled={inCartList} onClick={handleAddProduct} className={`${inCartList ? "cursor-not-allowed	" : ""} bg-main_c text-white mb-10 px-10 py-2 rounded-md dark:bg-blue-600`}>
            Add To Cart
          </button>
          <p className="text-main_text dark:text-sec">
            Sold By: <span className="dark:text-white font-semi-bold text-lg">{company_name}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
