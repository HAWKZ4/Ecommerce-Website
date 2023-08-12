import { SliderForProduct } from "./SliderForProduct";
import { AiOutlineClose } from "react-icons/ai"
import { Rating } from "./Rating";
import { useDispatch } from "react-redux";
import { updateShowQuickViewBox } from "../../store/propsSlice";
import { useSelector } from "react-redux";

export const QuickViewProduct = () => {

  const dispatch= useDispatch()

  const productDetail = useSelector((state)=> state.propsState.productDetail)

  const hideQuickViewBox=()=>{
    dispatch(updateShowQuickViewBox(false))
    document.body.style.overflow="visible"
  }

  return (
    <div className="parent fixed top-0 left-0 w-full h-full">
      <div onClick={hideQuickViewBox} className="overlay absolute bg-black w-full h-full top-0 left-0 opacity-50 z-10"></div>

      <div className="viewProduct w-[940px] z-20 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
        <div className="box relative ">
          <button onClick={hideQuickViewBox} className="exitBtn absolute top-0 right-0 scale-125"><AiOutlineClose /></button>
          <div className="product flex justify-between ">
            <div className="left">
              <SliderForProduct images= {productDetail.image}/>
            </div>
            <div className="right w-[450px]  pt-6">
              <h2 className="text-[25px] font-bold leading-normal text-q_r_h_f">
              {productDetail.title}
              </h2>
              <p className="text-[13px] text-q_r_c_f py-2 font-semibold">
                CATEGORY: {productDetail.category}
              </p>
              <p className="text-3xl font-black leading-normal text-main_c ">
                ${productDetail.price}
              </p>
              <div className="stars">
                <Rating />
              </div>
              <p className="my-4 text-main_text">
                {productDetail.description}
              </p>
              <hr className="text-main_text h-[.5px] w-[97%]" />
              <button className="bg-main_c text-lg py-2 px-10 mt-4 leading-[1.75] text-white font-semibold rounded-md ">Add To Cart</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
