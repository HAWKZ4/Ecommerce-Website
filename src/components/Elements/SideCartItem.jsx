import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


export const SideCartItem = ({ product }) => {

  const { image, title, price, quantity } = product

  const dispatch = useDispatch()

  const [isJustOne, setIsJustOne] = useState(quantity)

  useEffect(() => {

    if (product.quantity === 1) {
      setIsJustOne(true)
    } else {
      setIsJustOne(false)
    }
  }, [product.quantity])

  const longText = title;
  const truncatedText = longText.split(' ').slice(0, 5).join(' ');

  return (
    <div className='sideCartItem h-32 bg-white flex justify-between  pl-6 pr-2 mb-8 items-center border-b-[1px]'>
      <div className='left flex flex-col basis-1/12 items-center '>
        <button onClick={() => dispatch(increaseQuantity(product))} className="inc flex justify-center items-center rounded-full p-1 w-8 h-8 border-[1px] border-main_c">
          <AiOutlinePlus />
        </button>
        <div className="text-center text-main_text font-bold my-1">
          {product.quantity}
        </div>
        <button onClick={() => dispatch(decreaseQuantity(product))} className={`dec  flex justify-center items-center rounded-full p-1 w-8 h-8 border-[1px] ${!isJustOne && "border-main_c"}  ${isJustOne ? "border-gray-400 cursor-default" : ""}`}>
          <AiOutlineMinus className={`${isJustOne ? "text-gray-400" : ""}`} />
        </button>
      </div>
      <div className='middle basis-8/12'>
        <div className="product flex">
          <img className=" mr-3 w-[76px] h-[76px]" src={image} alt="productImg" />
          <div className="detail">
            <h3 className="text-main_text font-semibold text-base">
              {truncatedText}{longText.split(' ').length > 5 && '...'}</h3>
            <p className="text-xs text-off">${price.toFixed(2)} x {quantity}</p>
            <p className="total text-main_c mt-1 text-sm font-semibold">${(quantity * price).toFixed(2)} </p>
          </div>
        </div>
      </div>

      <div className='right basis-1/12'>
        <button onClick={() => dispatch(removeProduct(product))} className="close flex rounded-full ml-2  justify-end items-center">
          <AiOutlineClose />

        </button>
      </div >


    </div>

  )
}
