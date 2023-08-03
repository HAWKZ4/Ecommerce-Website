import { SliderForProduct } from "./SliderForProduct";
import {AiOutlineClose} from "react-icons/ai"
import { Rating } from "./Rating";

export const QuickViewProduct = () => {
  return (
    <div className="viewProduct w-[940px] hidden p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
      <div className="box relative ">
        <button className="exitBtn absolute top-0 right-0 scale-125"><AiOutlineClose/></button>
        <div className="product flex justify-between ">
          <div className="left">
            <SliderForProduct />
          </div>
          <div className="right w-[450px] pl-6 pt-6">
            <h2 className="text-[25px] font-bold leading-normal text-q_r_h_f">
              Denim Blue Jeans
            </h2>
            <p className="text-[13px] text-q_r_c_f py-2 font-semibold">
              CATEGORY: Cosmetic
            </p>
            <p className="text-3xl font-black leading-normal text-main_c ">
              $140.00
            </p>
            <div className="stars">
              <Rating  />
            </div>
            <p className="my-4 text-main_text">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </p>
            <hr className="text-main_text h-[.5px] w-[97%]"/> 
            <button className="bg-main_c text-lg py-2 px-10 mt-4 leading-[1.75] text-white font-semibold rounded-md ">Add To Cart</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};
