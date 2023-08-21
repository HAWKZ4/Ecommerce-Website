
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { SideCartItem } from "../SideCartItem";
import "./SideCart.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateShowSideCart } from "../../../store/propsSlice";





export const SideCart = () => {

  const productsInCartList = useSelector(state => state.cartState.cartList)
  const total = useSelector(state => state.cartState.total)

  const navigate= useNavigate()


  const handleGoToCart=()=>{
    navigate("/cart")
    dispatch(updateShowSideCart(false))
    document.body.style.overflow = "visible"
    
  }

  const dispatch= useDispatch()

  const hideShowSideCart = () => {
    dispatch(updateShowSideCart(false))
    document.body.style.overflow = "visible"
  }

  return (
    <div className="parent top-0 left-0 w-full h-full">
      <div onClick={hideShowSideCart} className="overlay absolute bg-black w-full h-full top-0 left-0 opacity-50 z-30"></div>


    <div className={`  flex flex-col fixed right-0 top-0 z-50 w-1/4 bg-white min-h-full dark:bg-gray-900  `}>
      <div className="top flex flex-row justify-between ">
        <div className="left flex items-center justify-between p-4 pl-7 text-blue-950 dark:text-sec">
        <svg className=" w-6 h-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-bbh01c" focusable="false" aria-hidden="true" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33329 7.37181V5.37181C5.33329 2.79431 7.42079 0.705139 9.99996 0.705139C12.5791 0.705139 14.6666 2.79431 14.6666 5.37181V7.37181H17.3333C18.4375 7.37181 19.3333 8.26764 19.3333 9.37181V18.0385C19.3333 20.2468 17.5416 22.0385 15.3333 22.0385H4.66663C2.45746 22.0385 0.666626 20.2468 0.666626 18.0385V9.37181C0.666626 8.26764 1.56204 7.37181 2.66663 7.37181H5.33329ZM7.33329 7.37181H12.6666V5.37181C12.6666 3.89889 11.4708 2.70514 9.99996 2.70514C8.52913 2.70514 7.33329 3.89889 7.33329 5.37181V7.37181ZM2.66663 9.37181V18.0385C2.66663 19.1426 3.56204 20.0385 4.66663 20.0385H15.3333C16.4375 20.0385 17.3333 19.1426 17.3333 18.0385V9.37181H14.6666V11.7051C14.6666 12.2593 14.2208 12.7051 13.6666 12.7051C13.1125 12.7051 12.6666 12.2593 12.6666 11.7051V9.37181H7.33329V11.7051C7.33329 12.2593 6.88746 12.7051 6.33329 12.7051C5.77913 12.7051 5.33329 12.2593 5.33329 11.7051V9.37181H2.66663Z" fill="currentColor"></path></svg>
          <p className="ml-4">{productsInCartList.length} items</p>
        </div>
        <div className="closeBtn flex justify-center  mr-4 items-center cursor-pointer" onClick={hideShowSideCart}>
          <AiOutlineClose size={25} className=" dark:text-white" />
        </div>
      </div>
      <hr className="text-main_text h-[1px] " />

      {/* Product */}
      <div className="products max-h-[530px] overflow-auto mb-5 ">
        {productsInCartList.map((product) => (
          <SideCartItem key={product.id} product={product} />
          
        ))}


      </div>

      <div className="buttons flex flex-col px-5">
        <button onClick={handleGoToCart} className="bg-main_c text-white text-center py-2 rounded-md dark:bg-blue-600 dark:border-blue-500" >Checkout Now (${total})</button>
        <button className="bg-white text-main_c my-4 py-2 rounded-md border-main_c border-[1px] dark:text-blue-600 dark:border-blue-500 dark:bg-slate-200 dark:hover:bg-blue-200  ">View Cart</button>
      </div>
    </div>
</div>

  );
};
