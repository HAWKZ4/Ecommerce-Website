import React from 'react'
import {AiFillHeart, AiFillStar , AiOutlineHeart} from "react-icons/ai"
import {LiaCartPlusSolid} from "react-icons/lia"
import "./Css/ProductAni.css"



export const FeaturedProducts = () => {
  return (
    <div className="bestSellingProducts ">
    <h1 className="pt-10 pb-5 text-center text-2xl dark:text-white font-semibold">Featured Products</h1>
    <div className="products flex flex-wrap justify-between">
      {/* Individual Product */}
      <div className="product basis-[24%] overflow-hidden ">
      
        <div className="  bg-white relative shadow dark:bg-gray-800  ">
          {/* {/*max-w-sm*/}
          <a href="#">
            <img
              className="imgPro duration-500 p-1 rounded-t-lg"
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75"
              alt="product image"
            />
          <div className='quickShow absolute hidden bg-[#222222] w-full bottom-0 py-[10px] px-8 hover:bg-[#343434] duration-500 text-center text-white '>
          <p>Quick View</p>
        </div>
          </a>

          <div className='cartIcon text-[#ABB0B5] absolute top-0 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <LiaCartPlusSolid/>
          </div>
          <div className='HeartIcon text-[#ABB0B5]  absolute top-10 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <AiOutlineHeart/>
          </div>

        </div>
        <div className="detail text-center p-3 leading-8 mt-2  ">
          <p className="text-sec text-xs">Men's Fashion</p>
          <h4 className="dark:text-white text-sm py-2">Sliver High Neck Sweater</h4>
          <div className="dark:text-white font-bold">210$</div>
          <div className="stars flex justify-evenly items-center">
            <div className="starsForm flex flex-row text-yellow-300  ">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            <div className="reviews text-sec">(0 Reviews)</div>
          </div>
        </div>
      </div>
      {/* Individual Product */}
      {/* Individual Product */}
      <div className="product basis-[24%] overflow-hidden ">
      
        <div className="  bg-white relative shadow dark:bg-gray-800  ">
          {/* {/*max-w-sm*/}
          <a href="#">
            <img
              className="imgPro duration-500 p-1 rounded-t-lg"
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75"
              alt="product image"
            />
          <div className='quickShow absolute hidden bg-[#222222] w-full bottom-0 py-[10px] px-8 hover:bg-[#343434] duration-500 text-center text-white '>
          <p>Quick View</p>
        </div>
          </a>

          <div className='cartIcon text-[#ABB0B5] absolute top-0 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <LiaCartPlusSolid/>
          </div>
          <div className='HeartIcon text-[#ABB0B5]  absolute top-10 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <AiOutlineHeart/>
          </div>

        </div>
        <div className="detail text-center p-3 leading-8 mt-2  ">
          <p className="text-sec text-xs">Men's Fashion</p>
          <h4 className="dark:text-white text-sm py-2">Sliver High Neck Sweater</h4>
          <div className="dark:text-white font-bold">210$</div>
          <div className="stars flex justify-evenly items-center">
            <div className="starsForm flex flex-row text-yellow-300  ">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            <div className="reviews text-sec">(0 Reviews)</div>
          </div>
        </div>
      </div>
      {/* Individual Product */}
      {/* Individual Product */}
      <div className="product basis-[24%] overflow-hidden ">
      
        <div className="  bg-white relative shadow dark:bg-gray-800  ">
          {/* {/*max-w-sm*/}
          <a href="#">
            <img
              className="imgPro duration-500 p-1 rounded-t-lg"
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75"
              alt="product image"
            />
          <div className='quickShow absolute hidden bg-[#222222] w-full bottom-0 py-[10px] px-8 hover:bg-[#343434] duration-500 text-center text-white '>
          <p>Quick View</p>
        </div>
          </a>

          <div className='cartIcon text-[#ABB0B5] absolute top-0 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <LiaCartPlusSolid/>
          </div>
          <div className='HeartIcon text-[#ABB0B5]  absolute top-10 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <AiOutlineHeart/>
          </div>

        </div>
        <div className="detail text-center p-3 leading-8 mt-2  ">
          <p className="text-sec text-xs">Men's Fashion</p>
          <h4 className="dark:text-white text-sm py-2">Sliver High Neck Sweater</h4>
          <div className="dark:text-white font-bold">210$</div>
          <div className="stars flex justify-evenly items-center">
            <div className="starsForm flex flex-row text-yellow-300  ">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            <div className="reviews text-sec">(0 Reviews)</div>
          </div>
        </div>
      </div>
      {/* Individual Product */}
      {/* Individual Product */}
      <div className="product basis-[24%] overflow-hidden ">
      
        <div className="  bg-white relative shadow dark:bg-gray-800  ">
          {/* {/*max-w-sm*/}
          <a href="#">
            <img
              className="imgPro duration-500 p-1 rounded-t-lg"
              src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75"
              alt="product image"
            />
          <div className='quickShow absolute hidden bg-[#222222] w-full bottom-0 py-[10px] px-8 hover:bg-[#343434] duration-500 text-center text-white '>
          <p>Quick View</p>
        </div>
          </a>

          <div className='cartIcon text-[#ABB0B5] absolute top-0 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <LiaCartPlusSolid/>
          </div>
          <div className='HeartIcon text-[#ABB0B5]  absolute top-10 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]'>
            <AiOutlineHeart/>
          </div>

        </div>
        <div className="detail text-center p-3 leading-8 mt-2  ">
          <p className="text-sec text-xs">Men's Fashion</p>
          <h4 className="dark:text-white text-sm py-2">Sliver High Neck Sweater</h4>
          <div className="dark:text-white font-bold">210$</div>
          <div className="stars flex justify-evenly items-center">
            <div className="starsForm flex flex-row text-yellow-300  ">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            <div className="reviews text-sec">(0 Reviews)</div>
          </div>
        </div>
      </div>
      {/* Individual Product */}
     

    </div>
  </div>
  )
}
