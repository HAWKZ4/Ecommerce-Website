import { AiOutlineClose ,AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";


export const SideCartItem = ({product}) => {

  const {image , title, price , quantity} = product

  const dispatch= useDispatch()

  return (
    <div className='sideCartItem h-32 bg-white flex justify-between  pl-6 pr-2  items-center'>
      <div className='left flex flex-col items-center'>
        <button onClick={()=> dispatch(increaseQuantity(product))} className="inc flex justify-center items-center rounded-full p-1 w-8 h-8 border-2 border-main_c">
          <AiOutlinePlus />
        </button>
        <div className="text-center text-main_text">
          {product.quantity}
        </div>
        <button onClick={()=> dispatch(decreaseQuantity(product))} className="dec flex justify-center items-center rounded-full p-1 w-8 h-8 border-2 border-main_c">
          <AiOutlineMinus/>
        </button>
      </div>
      <div className='middle'>
          <div className="product flex">
            <img className="w-14 mr-3" src={image} alt="productImg"/>
            <div className="detail">
              <h3 className="text-main_text font-semibold text-base">{title}</h3>
              <p className="text-xs text-off">${price.toFixed(2)} x {quantity}</p>
              <p className="total text-main_c mt-1 text-sm font-semibold">${(quantity*price).toFixed(2)} </p>
            </div>
          </div>
      </div>

      <div className='right'> 
      <button onClick={()=> dispatch(removeProduct(product))} className="close flex rounded-full ml-2  justify-end items-center">
      <AiOutlineClose/>

      </button>
      </div >
      <hr className="text-main_text h-[1px] "/>


    </div>
  )
}
