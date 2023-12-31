import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia"
import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../store/cartSlice";
import { BsFillCartXFill } from "react-icons/bs";
import { setProductDetail, updateShowQuickViewBox } from "../../store/propsSlice";
import { toast } from "react-toastify"



export const ProductCardF = ({ product }) => {
  const { id, image, title, category, price, rating } = product

  const dispatch = useDispatch()
  const [inCartList, setInCartList] = useState(false)

  const products = useSelector(state => state.cartState.cartList)


  useEffect(() => {
    const isInCartList = products.find((item) => item.id === id)
    if (isInCartList) {
      setInCartList(true)
    } else {
      setInCartList(false)
    }
  }, [products, id])

  const showQuickViewBox = () => {
    dispatch(updateShowQuickViewBox(true))
    document.body.style.overflow = "hidden"
    dispatch(setProductDetail(product))
  }

  const handleAddProduct = () => {
    dispatch(addProduct(product))
    toast.success('Added To Cart')

  }
  const handleRemoveProduct=()=>{
    dispatch(removeProduct(product))
    toast.warn('Removed From Cart')
  }



  return (
    /* Individual Product */
    <div className="product basis-[24%] overflow-hidden  ">
      <div className="  bg-white relative shadow dark:bg-transparent  dark:shadow-none ">
        {/* {/*max-w-sm*/}
        <Link to={`/product/${id}`}>
          <img
            className="imgPro h-[250px] w-full duration-500 pr-14 pl-4 py-6 rounded-t-lg"
            src={image}
            alt="product image"
          />
        </Link>
        <div className="quickShow absolute hidden bg-[#222222] w-full bottom-0 py-[10px] px-8 hover:bg-[#343434] duration-500 text-center text-white ">
          <p onClick={showQuickViewBox} className="cursor-pointer">Quick View</p>
        </div>
        {inCartList ? (<div onClick={handleRemoveProduct} className="cartIcon text-[#ABB0B5] absolute top-0 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]">
          <BsFillCartXFill />
        </div>) : (<div onClick={handleAddProduct} className="cartIcon text-[#ABB0B5] absolute top-0 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]">
          <LiaCartPlusSolid />
        </div>)}


        <div className="HeartIcon text-[#ABB0B5]  absolute top-10 -right-10 scale-150 m-4 p-0.5 cursor-pointer rounded-full hover:bg-[#DAE0E6]">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="detail text-center p-3 leading-8 mt-2  ">
        <p className="text-sec text-xs">{category}</p>
        <h4 className="dark:text-white text-sm py-2">
          {title}
        </h4>
        <div className="dark:text-white font-bold">${price}</div>
        <div className="stars flex justify-evenly items-center">
          <Rating rating={rating.rate} />
          <div className="reviews text-sec">({rating.count} Reviews)</div>
        </div>
      </div>
    </div>
    /* Individual Product */
  );
};
