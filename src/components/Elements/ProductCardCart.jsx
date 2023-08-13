import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "./Rating";
import { addProduct, decreaseQuantity, increaseQuantity } from "../../store/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


export const ProductCardCart = ({ product }) => {


  const { id, title, category, image, price, rating } = product;


  const [isInCart, setIsInCart] = useState(false)

  const products = useSelector(state => state.cartState.cartList)

  useEffect(() => {

    const inCart = products.find((item) => item.id === id)

    if (inCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)

    }
  }, [products, id])



  const dispatch = useDispatch()

  return (
    <div className="productCardG mb-6 flex bg-white relative shadow-lg rounded-lg overflow-hidden  ">
      <img src={image} className="w-40 h-[162.6px] p-8 basis-1/4" alt="img" />
      <div className="detail p-8 flex flex-col basis-3/4">
        <Link to={`/product/${id}`}>
          <h5 className="leading-normal text-lg font-semibold">
            {title}
          </h5>
        </Link>

        <div className="price&BougthTimes my-2">
        <span className="text-base text-off mr-3">${price.toFixed(2)} x {product.quantity}</span>
        <span className="text-base total text-main_c mt-1 font-semibold">${(product.quantity*price).toFixed(2)} </span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={()=> dispatch(decreaseQuantity(product))} className="border-[1px] border-main_c text-main_c p-1.5 rounded-md"><AiOutlineMinus size={18} /></button>
          <span className="font-bold">{product.quantity}</span>
          <button onClick={()=> dispatch(increaseQuantity(product))} className="border-[1px] border-main_c text-main_c p-1.5 rounded-md"><AiOutlinePlus size={18} /></button>
        </div>
      </div>
    </div>
  )
}
