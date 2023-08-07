
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { SideCartItem } from "../SideCartItem";
import "./SideCart.css"
import { useSelector } from "react-redux";




export const SideCart = ({sideCart , setSideCart}) => {

  const products=useSelector(state=> state.cartState.cartList)
  const total = useSelector(state=> state.cartState.total)
  const allProducts= useSelector(state=> state.c)

  return (

    <div className={` ${sideCart ? "flex" : "hidden"} flex-col fixed right-0 top-0 z-50 w-1/4 bg-white min-h-full `}>
      <div className="top flex flex-row justify-between">
        <div className="left flex items-center justify-between p-4 pl-7">
          <HiOutlineShoppingBag size={25} />
          <p className="ml-4">{products.length} items</p>
        </div>
        <div className="closeBtn flex justify-center  mr-4 items-center cursor-pointer" onClick={()=>setSideCart(false) }>
        <AiOutlineClose size={20} />
        </div>
      </div>
      <hr className="text-main_text h-[1px] "/>

      {/* Product */}
      <div className="products max-h-[530px] overflow-auto mb-5 ">
      {products.map((product)=> (
      <SideCartItem key={product.id} product={product}/>
      ))}

      
      </div>

      <div className="buttons flex flex-col px-5">
      <button className="bg-main_c text-white  py-2 rounded-md" >Checkout Now (${total})</button>
      <button className="bg-white text-main_c my-4 py-2 rounded-md border-main_c border-[1px]  ">View Cart</button>
    </div>
    </div>
    
    
  );
};
