import React from "react";
import girlBox from "../../images/girlBox.jpg"
import "./ForBox.css"

export const ForBox = () => {
  return (
    <div  className="forBox flex flex-col overflow-hidden w-[49%]  mt-4 bg-cover bg-center relative ">
      <img src={girlBox} className="h-52"/>
      <div className="overlay absolute bg-black opacity-30 top-0 left-0 w-full h-full"></div>
      <div className="text flex flex-col absolute top-1/2 -translate-y-1/2 ml-5" >

      <h3 className="relative text-white text-[25px] font-bold leading-normal">For Men's</h3>
      <p className="relative text-white text-[14px] py-3 ">Starting At $29</p>
      <div>
        <hr className="w-14 bg-white h-[3px]" />
      </div>
      <div className="overflow-hidden"> 

      <button className="button relative cursor-pointer -ml-[3px] w-20 text-base text-white uppercase pt-2">
        
        SHOP NOW
        <div className="borderB border-b-2 border-white w-[78px] transform "></div>
        </button>
      </div>
      </div>

    </div>
  );
};
