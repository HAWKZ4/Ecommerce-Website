import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { SearchBar } from "../SearchBar";
import { useEffect, useState } from "react";
import "./Header.css";

export const Header = () => {
  // Manage dropdowns
  const [categories, setCategories] = useState(false);

  // Handle Dark mode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex flex-col container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      <div className="header flex flex-row justify-between items-center">
        <div className="logo">
          <img
            className="transform scale-[1.4] ml-3"
            src={"/logo2.svg"}
            width={80}
            alt="Logo"
          />
        </div>
        <div className="serach ">
          <SearchBar />
        </div>
        <div className="icons flex w-48 justify-between">
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setDarkMode(!darkMode)}
          >
            <CgDarkMode />

            <span className="sr-only">Notifications</span>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <RxAvatar />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              20
            </div>
          </button>

          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MdOutlineShoppingBag />

            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              20
            </div>
          </button>
        </div>
      </div>
      {/* Header section 2 */}
      <div className="Header_SEC_2 pt-10 pb-4 flex flex-row items-center justify-between">
        <div className="left">
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              />
            </svg>
            {/* <!-- Dropdown menu --> For Categories */}
            <div
              id="dropdown"
              className={`z-10 top-[45px] left-0 ${
                categories ? "block" : "hidden"
              } absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="multiLevelDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
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
                  </button>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
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
            className="homeBtn text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
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
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </button>

          {/* Second Normal */}

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="megaMenuBtn relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
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
                  <a
                    href="#"
                    className="block  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </button>

          {/* Third With Extended Mega full */}
          <li>
            <button
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              class="fullScreenMenuBtn relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Full Screen Menu
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
              {/* Mega */}
              <div
                id="mega-menu-full-dropdown"
                class="fullScreenMenuDrop mt-1 hidden  bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
              >
                <div class="grid max-w-screen-xl z-10 w-[1200px] absolute transform -translate-x-1/2 left-1/2 top-[40px] px-4 py-5 mx-auto  text-gray-900 dark:bg-[#374151] dark:text-white hover:bg-gray-100  dark:hover:text-whitesm:grid-cols-2 md:grid-cols-3 md:px-6">
                  {/* dark:hover:bg-gray-600 */}
                  <ul aria-labelledby="mega-menu-full-dropdown-button">
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul class="hidden md:block">
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Audience Management</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Creative Tools</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <div class="font-semibold">Marketing Automation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Connect with third-party tools that you're already
                          using.
                        </span>
                      </a>
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
            className="pagesBtn relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
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
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </button>

          {/* Fifth With Dropdown */}

          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="userAccBtn relative  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
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
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </button>

          {/* Sixth With Dropdown */}

          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            className="vendAccBtn relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
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
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="doubleDropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My downloads
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Rewards
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
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
