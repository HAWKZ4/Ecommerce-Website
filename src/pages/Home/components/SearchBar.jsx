import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { search } from "../../../store/filterSlice";
import { updateSearchDetail } from "../../../store/propsSlice";
export const SearchBar = () => {

  const dispatch=useDispatch()

  const navigate = useNavigate()
  const searchRef = useRef()



  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/products`)
    dispatch(search(searchRef.current.value))
    dispatch(updateSearchDetail(searchRef.current.value))
    // navigate(`/products?q=${searchRef.current.value}`)

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Shopping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Images
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Finance
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-max flex  flex-row">
            <svg // added inline SVG element for logo
              className="absolute w-5 h-5 text-gray-400 mr-2.5 top-1/2 left-2.5 transform -translate-y-1/2 z-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 16a7 7 0 100-14 7 7 0 000 14zM18.707 17.293a1 1 0 11-1.414 1.414l-3.182-3.182a8 8 0 111.414-1.414l3.182 3.182z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              name="search"
              id="search-dropdown"
              className="pl-10 w-96 relative block p-2.5 z-0 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search"
              required
              autoComplete="off"
              ref={searchRef}
            />
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-r-lg hover:bg-gray-200  focus:outline-none  dark:bg-gray-600 dark:hover:bg-gray-700 "
              type="button"
            >
              All Categories
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

          </div>
        </div>
      </form>
    </div>
  );
};
