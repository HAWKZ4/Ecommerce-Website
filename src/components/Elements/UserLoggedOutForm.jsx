import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateShowLoginForm } from "../../store/propsSlice";
import { login } from "../../services";

export const UserLoggedOutForm = () => {

  const handleSignUp = () => {
    dispatch(updateShowLoginForm(false))
    document.body.style.overflow = "visible"
  };

  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  async function handleLogin(event) {
    event.preventDefault();

    const authDetail = {
      email: email.current.value,
      password: password.current.value
    }


    const data = await login(authDetail)


    { data.accessToken ? <>{navigate("/products")}{dispatch(updateShowLoginForm(false))}{document.body.style.overflow = "visible"}</> : toast.error(data) }



  }

  const hideLoginForm = () => {
    dispatch(updateShowLoginForm(false))
    document.body.style.overflow = "visible"
  }


  return (
    <div className="parent  top-0 left-0 w-full h-full">
      <div onClick={hideLoginForm} className="overlay absolute bg-black w-full h-full top-0 left-0 opacity-50 z-20"></div>

      <form onSubmit={handleLogin} className="w-1/3 h-[500px] pt-8 pb-20 px-10 bg-white z-30  fixed top-1/2 left-1/2 tranfsorm -translate-x-1/2 -translate-y-1/2 rounded-lg dark:bg-gray-400">
        <div className="intro flex flex-col justify-center items-center mb-6">
          <img
            className="w-14 mb-4"
            src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg"
          />
          <h2 className="text-2xl">Welcome To Bazaar</h2>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-login_font_c"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
            ref={email}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-login_font_c  "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            required
            ref={password}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-login_font_c  "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-main_c hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="my-6 flex justify-center">
          Don't have account?
          <Link to="/register"
            onClick={handleSignUp}
            className="ml-2 border-black border-b-[0.6px] "
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
