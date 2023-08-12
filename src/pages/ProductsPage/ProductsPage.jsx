import { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { ProductCardG } from "./ProductCardG";

import { useDispatch } from "react-redux";
import { addAllProducts } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { featureProducts, clearFilter, sort } from "../../store/filterSlice";
import { rate } from "../../store/filterSlice";


export const ProductsPage = () => {

  const [products, setProducts] = useState([])

  // handle bathPrepDropdown
  const [bathPrepDropdown, setBathPrepDropdown] = useState("");

  // handle Dropdown
  const [sortByDropdown, setSortByDropdown] = useState(false);

  // manage products
  // const [products, setProducts] = useState([]);

  // manage numbers of results
  const [numberOfResults, setNumberOfResults] = useState(0)

  const dispatch = useDispatch()


  // const { filteredProducts, sort , rate , featureProducts} = useSelector((state) => state.filterState)



  //      const response = await fetch(`http://localhost:8000/products?title_like=${searchTerm}`);


  const filteredProducts = useSelector(state => state.filterState.filteredProducts)
  const featuredValue = useSelector(state => state.filterState.featured)

  const radios = document.getElementsByName("rating")


  // const ratedValue = useSelector(state => state.filterState.rating)


  useEffect(() => {
    setProducts(filteredProducts)
  })

  const handleClear = () => {
    dispatch(clearFilter())
    radios.forEach(function (radio) {
      radio.checked = false
    })
  }

  const handleLowToHigh=()=>{
    dispatch(sort("lowToHigh"))
    document.getElementById("dropdownButton").textContent=document.getElementById("lowToHigh").textContent
    setSortByDropdown(!sortByDropdown)
  }
  const handleHighToLow=()=>{
    dispatch(sort("highToLow"))
    document.getElementById("dropdownButton").textContent=document.getElementById("highToLow").textContent

    setSortByDropdown(!sortByDropdown)
  }



  return (
    <div className="productsPage  container bg-pro_det_bg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      <section className="resultDetail bg-white flex flex-row justify-between items-center py-4 px-8">
        <div className="left flex flex-col">
          <p>Searching for “ { } ”</p>
          <p>{filteredProducts.length} results found</p>
        </div>
        <div className="right flex items-center">
          <div className="sortBy flex items-center mr-6  ">
            <span className="mr-2">Sort by: </span>
            <div className="dropdown relative">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setSortByDropdown(!sortByDropdown)}
              >
                Relevance
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

                <div
                  id="dropdown"
                  className={`z-10  ${sortByDropdown ? "block" : "hidden"
                    } absolute top-[42px] left-1/2 -translate-x-1/2  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200 text-center"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >

                      Relevance

                    </li>
                    <li
                      className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >


                      Date

                    </li>
                    <li
                    id={"lowToHigh"}
                      onClick={handleLowToHigh} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >

                      Price Low to High

                    </li>
                    <li
                    id={"highToLow"}
                      onClick={handleHighToLow} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >

                      Price High to Low

                    </li>
                  </ul>
                </div>
              {/* <!-- Dropdown menu --> */}
            </div>
          </div>
          <div className="view flex justify-between gap-4 items-center ">
            <span>View: </span>
            <span className="text-products_c cursor-pointer">
              <BsFillGrid3X3GapFill />
            </span>
            <span className="text-main_c cursor-pointer">
              <FaThList />
            </span>
          </div>
        </div>
      </section>
      <div className="flex gap-4 mt-16 ">
        {/* This is the button to open it for sm devices */}
        {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button> */}

        <aside
          id="default-sidebar"
          className=" basis-1/4 top-0 left-0 z-0 w-64 mb-4 transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-fit px-6 py-4 overflow-y-auto rounded-lg shadow-sm  bg-white flex flex-col gap-4  dark:bg-gray-800">
            <div className="text-black dark:text-white">Categories</div>
            <div className="dropdown">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-off  rounded-lg text-base text-center w-full flex justify-between items-center "
                type="button"
                onClick={() => setBathPrepDropdown(!bathPrepDropdown)}
              >
                Bath Preparations
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={`z-10 ${bathPrepDropdown ? "block" : "hidden"
                  }  bg-transparent   w-44 `}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-off hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Bubble Bath
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-off hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Bath Capsules
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-off hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Others
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <a href="#">
                <span className="flex-1  whitespace-nowrap text-off">
                  Eye Makeup Preparations
                </span>
              </a>
            </div>
            <div>
              <a href="#">
                <span className="flex-1  whitespace-nowrap text-off">
                  Fragrance
                </span>
              </a>
            </div>
            <div>
              <a href="#">
                <span className="flex-1  whitespace-nowrap text-off">
                  Hair Preparations
                </span>
              </a>
            </div>

            <hr className="h-[1px]  w-full" />
            <div className="priceRange flex flex-col gap-4 item">
              <span className="text-black dark:text-white">Price Range</span>
              <div className="fromTo flex items-center">
                <input
                  type="number"
                  placeholder="0"
                  className="w-20 border-[1px] p-1 "
                />
                <span className="px-4 text-black dark:text-white scale-x-150">-</span>
                <input
                  type="number"
                  placeholder="250"
                  className="w-20 border-[1px] p-1 "
                />
              </div>
            </div>
            <div className="brands mb-8  flex flex-col gap-4 item">
              <span className="text-black dark:text-white" >Brands</span>
              <div className="brandsCon  ">
                <div className="flex items-center mb-2">
                  <input
                    id="macc"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="macc"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Macc
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="karts"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="karts"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Karts
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="baals"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="baals"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Baals
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="bukks"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bukks"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bukks
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="luasis"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="luasis"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Luasis
                  </label>
                </div>
                <hr className="h-[1px] mt-4  w-full" />
              </div>
              <div className="state">
                <div className="flex items-center mb-2">
                  <input
                    id="six"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="six"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    On Sale
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="seven"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="seven"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    In Stock
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="eight"
                    type="checkbox"
                    value=""
                    checked={featuredValue}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => dispatch(featureProducts(!featuredValue))}
                  />
                  <label
                    htmlFor="eight"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Featured
                  </label>
                </div>
                <hr className="h-[1px] mt-4 w-full" />
              </div>
              <div className="ratings  flex flex-col gap-4">
                <span className="text-black dark:text-white"> Ratings</span>
                <div className="ratingCon">
                  <div className="5Stars flex mb-2">
                    <input
                      id="five"
                      type="radio"

                      name="rating"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => dispatch(rate("5Stars"))}
                    />
                    <label
                      htmlFor="five"

                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center gap-1"
                    >
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                    </label>
                  </div>
                  <div className="4Stars flex mb-2">
                    <input
                      id="four"
                      type="radio"

                      name="rating"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => dispatch(rate("4Stars"))}
                    />
                    <label
                      htmlFor="four"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center gap-1"
                    >
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiOutlineStar className="text-gray-300" />
                    </label>
                  </div>
                  <div className="3Stars flex mb-2">
                    <input
                      id="three"
                      type="radio"

                      name="rating"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => dispatch(rate("3Stars"))}
                    />
                    <label
                      htmlFor="three"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center gap-1"
                    >
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />

                      <AiOutlineStar className="text-gray-300" />
                      <AiOutlineStar className="text-gray-300" />
                    </label>
                  </div>
                  <div className="2Stars flex mb-2">
                    <input
                      id="two"
                      type="radio"

                      name="rating"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => dispatch(rate("2Stars"))}
                    />
                    <label
                      htmlFor="two"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center gap-1"
                    >
                      <AiFillStar className="text-stars_c" />
                      <AiFillStar className="text-stars_c" />
                      <AiOutlineStar className="text-gray-300" />
                      <AiOutlineStar className="text-gray-300" />
                      <AiOutlineStar className="text-gray-300" />
                    </label>
                  </div>
                  <div className="1Star flex mb-2">
                    <input
                      id="one"
                      type="radio"

                      name="rating"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => dispatch(rate("1Star"))}
                    />
                    <label
                      htmlFor="one"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-center items-center gap-1"
                    >
                      <AiFillStar className="text-stars_c" />

                      <AiOutlineStar className="text-gray-300" />
                      <AiOutlineStar className="text-gray-300" />
                      <AiOutlineStar className="text-gray-300" />
                      <AiOutlineStar className="text-gray-300" />
                    </label>
                  </div>
                  <hr className="h-[1px] mt-4 w-full" />
                </div>
                <div className="colors flex flex-col gap-4">
                  <span className="text-black dark:text-white">Colors</span>
                  <div className="colorsCon flex">
                    <span className="rounded-full w-6 h-6 mr-2 cursor-pointer bg-red-200"></span>
                    <span className="rounded-full w-6 h-6 mr-2 cursor-pointer bg-orange-200"></span>
                    <span className="rounded-full w-6 h-6 mr-2 cursor-pointer bg-green-200"></span>
                    <span className="rounded-full w-6 h-6 mr-2 cursor-pointer bg-yellow-200"></span>
                    <span className="rounded-full w-6 h-6 mr-2 cursor-pointer bg-blue-200"></span>
                    <span className="rounded-full w-6 h-6 mr-2 cursor-pointer bg-purple-200"></span>
                  </div>
                  <button onClick={handleClear} className="clear text-white bg-gray-500 py-2 px-8 rounde-md mt-4">Clear Filters</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="productList basis-3/4 h-fit   ">
          {/* Product */}

          {products.map((product) => (
            <ProductCardG key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
