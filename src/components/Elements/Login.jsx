import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    
    <form className="w-1/3 h-[500px] pt-8 pb-20 px-10 bg-white z-10  fixed top-1/2 left-1/2 tranfsorm -translate-x-1/2 -translate-y-1/2 rounded-lg dark:bg-gray-400">
      <div className="intro flex flex-col justify-center items-center mb-6">
        <img
          className="w-14 mb-4"
          src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg"
        />
        <h2>Welcome To Bazaar</h2>
      </div>
      <div className="mb-6">
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-login_font_c"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-login_font_c  "
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="********"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          className="ml-2 text-sm font-medium text-login_font_c  "
        >
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
      <div className="my-6 flex justify-center">
        Don't have account?
        <Link to="/register"
          onClick={() => handleSignUp}
          className="ml-2 border-black border-b-[0.6px] "
        >
          Sign Up
        </Link>
      </div>
    </form>
    
  );
};
