import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { SearchBar } from "../../pages/Home/components/SearchBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SideCart, UserLoggedInDropdown } from "../Elements";
import { useSelector, useDispatch } from "react-redux";


import "./Header.css";
import { updateShowLoginForm, updateShowSideCart } from "../../store/propsSlice";

export const Header = () => {
  // handle Dropdowns
  const [categories, setCategories] = useState(false);

  // Manage Login form
  const [login, setLogin] = useState(false);


  // Handle Dark mode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );

  // Handle SideCart
  const [sideCart, setSideCart] = useState(false)

  // Handle cart items nums
  const products = useSelector(state => state.cartState.cartList)


  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const token = sessionStorage.getItem("token")

  const dispatch = useDispatch()

  const handleShowLoginForm = () => {
    if (!token) {
      dispatch(updateShowLoginForm(true))
      document.body.style.overflow = "hidden"
    } 
    if (token) {
      setLogin(!login)
    }
  }

  const showSideCart= useSelector(state=>state.propsState.showSideCart)

  const handleShowSideCart=()=>{
    dispatch(updateShowSideCart(true))
    document.body.style.overflow="hidden"
  }

  return (
    <header className="flex flex-col container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      {/* <SideCart sideCart={sideCart} setSideCart={setSideCart} /> */}
      <div className="header flex flex-row justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img
              className="transform scale-[1.4] ml-3"
              src={"/logo2.svg"}
              width={80}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="serach ">
          <SearchBar />
        </div>
        <div className="icons flex w-48 justify-between">
          <button
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setDarkMode(!darkMode)}
          >
            <CgDarkMode size={20} />


          </button>
          <div className="relative">
            <button
              type="button"
              className=" inline-flex items-center p-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleShowLoginForm}
            >
              <RxAvatar size={20} />

            </button>
            {login && token && <UserLoggedInDropdown setLogin={setLogin} />}
            {/* { token ? <UserLoggedIn setLogin={setLogin} /> : ""} */}
          </div>
          <button
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleShowSideCart}
          >
            <MdOutlineShoppingBag size={20} />

            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {products.length}
            </div>
          </button>
        </div>
      </div>
      {/* {login && (token ? "": <UserLoggedOut setLogin={setLogin} /> )} */}


      {/* Header section 2 */}
      <div className="Header_SEC_2 pt-10 pb-4 flex flex-row items-center justify-between">
        <div className="left">
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className=" relative  bg-gray-100 text-main_text  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setCategories(!categories)}
          >
            Categories:
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
                className="text-main_text dark:text-white"
              />
            </svg>
            {/* <!-- Dropdown menu --> For Categories */}
            <div
              id="dropdown"
              className={`z-10 top-[45px] left-0 ${categories ? "block" : "hidden"
                } absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  {/*  */}
                  <span
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dropdown
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </span>
                  {/*  */}
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </button>
        </div>

        <div className="right flex gap-8">
          {/* First Normal */}

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="homeBtn  relative text-main_text bg-white focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Home
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
                className="text-main_text dark:text-white"
              />
            </svg>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              className="z-10 homeDrop hidden absolute transform -translate-x-1/2 top-[40px] left-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </button>

          {/* Second Normal */}

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="megaMenuBtn relative text-main_text bg-white  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Mega Menu
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
                className="text-main_text dark:text-white"
              />
            </svg>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              className="megaMenuDrop absolute transform -translate-x-1/2 left-1/2 top-[40px] z-10 hidden   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </button>

          {/* Third With Extended Mega full */}
          <li>
            <button
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              className="fullScreenMenuBtn relative text-main_text bg-white  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Full Screen Menu
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
                  className="text-main_text dark:text-white"
                />
              </svg>
              {/* Mega */}
              <div
                id="mega-menu-full-dropdown"
                className="fullScreenMenuDrop mt-1 hidden  bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
              >
                <div className="grid max-w-screen-xl bg-white z-10 w-[1200px] absolute left-1/2 -translate-x-1/2  top-[40px] px-4 py-5 mx-auto  text-gray-900 dark:bg-[#374151] dark:text-white hover:bg-gray-100  dark:hover:text-whitesm:grid-cols-2 md:grid-cols-3 md:px-6">
                  {/* dark:hover:bg-gray-600 */}
                  <ul aria-labelledby="mega-menu-full-dropdown-button">
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="hidden md:block">
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Audience Management</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">Creative Tools</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div className="font-semibold">
                          Marketing Automation
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </li>

          {/* Fourth With Dropdown */}

          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="pagesBtn relative text-main_text bg-white   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Pages
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
                className="text-main_text dark:text-white"
              />
            </svg>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="pagesDrop z-10 hidden absolute transform -translate-x-1/2 left-1/2 top-[40px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <span
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dropdown
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </span>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </button>

          {/* Fifth With Dropdown */}

          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="userAccBtn relative  text-main_text bg-white focus:outline-none  font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            User Account
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
                className="text-main_text dark:text-white"
              />
            </svg>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="userAccDrop absolute transform -translate-x-1/2 left-1/2 top-[40px] z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <span
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dropdown
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </span>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </button>

          {/* Sixth With Dropdown */}

          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="vendAccBtn relative text-main_text bg-white  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Vendor Account
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
                className="text-main_text dark:text-white"
              />
            </svg>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdown"
              className="vendAccDrop absolute transform -translate-x-1/2 left-1/2 top-[40px] z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <span
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dropdown
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </span>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </button>

          {/* F */}
        </div>
      </div>
      <div className="border-b-[1px]"></div>
    </header>
  );
};
