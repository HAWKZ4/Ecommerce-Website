import { BiLogoFacebook } from "react-icons/bi";
import { CgTwitter, CgYoutube } from "react-icons/cg";
import {
  
  AiOutlineGoogle,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#222935] dark:bg-gray-900 py-10 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      <div className=" grid mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="mb-6 md:mb-0 ">
            <Link to="/">
              <img
                src="	https://bazaar.ui-lib.com/assets/images/logo.svg"
                className="inline h-8 mr-3 transform scale-150 ml-2.5 bg-gray-400 p-0.5 rounded-2xl dark:bg-transparent dark:rounded-none dark:p-0 "
                alt="Logo"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
            </Link>
            <div className=" mt-10 text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus.
            </div>

            <div className="download">
              <div className="flex items-center">
                <button
                  type="button"
                  className="flex items-center justify-right w-30 mt-3 mr-3 p-3 text-white bg-black rounded-md h-14"
                >
                  <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="20">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      ></path>
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[8px] text-left">GET IT ON</div>
                    <div className="-mt-1 font-sans text-sm font-bold">
                      Google Play
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-30  mt-3 p-3 text-white bg-black h-14 rounded-md"
                >
                  <div className="mr-3">
                    <svg viewBox="0 0 384 512" width="20">
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[8px] text-left">Download on the</div>
                    <div className="-mt-1 font-sans text-sm font-bold">
                      App Store
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase ">
              About Us
            </h2>
            <ul className="text-gray-400  font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Our Stores
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Our Cares
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase ">
              Customer Care
            </h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href=""
                  className="hover:underline "
                >
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  How to Buy
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Track Your Order
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Corporate & Bulk Purchasing
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-white uppercase ">
              Contact Us
            </h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  70 Washington Square South, New York, NY 10012, United States
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Email: uilib.help@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Phone: +1 1123 456 780
                </a>
              </li>
              <li className="flex flex-row gap-4">
                <a className="hover:bg-slate-400 hover:text-black  cursor-pointer rounded-full p-2  duration-500">
                  <BiLogoFacebook size={20}/>
                </a>
                <a className="hover:bg-slate-400 hover:text-black  cursor-pointer rounded-full p-2  duration-500">
                  <CgTwitter size={20} />
                </a>
                <a className="hover:bg-slate-400 hover:text-black  cursor-pointer rounded-full p-2  duration-500">
                  <CgYoutube size={20} />
                </a>
                <a className="hover:bg-slate-400 hover:text-black  cursor-pointer rounded-full p-2  duration-500">
                  <AiOutlineGoogle size={20}/>
                </a>
                <a className="hover:bg-slate-400 hover:text-black  cursor-pointer rounded-full p-2  duration-500">
                  <AiFillInstagram size={20}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
