import React from "react";

import "./ForBox.css"

export const ForBox = ({image = "" , alt = "image" , heading , direction , text_dir = "" , eventText}) => {
  return (
    <div  className="forBox flex flex-col overflow-hidden w-[49%]  mt-4 bg-cover bg-center relative ">
      <img src={image} className="h-56 bg-clip-content" alt={alt}/>
      <div className="overlay absolute bg-black opacity-30 top-0 left-0 w-full h-full"></div>
      <div className={`text flex flex-col absolute ${direction} ${text_dir}  top-1/2 -translate-y-1/2 `} >

      <h3 className="relative text-white text-[28px] font-bold leading-normal">{heading}</h3>
      <p className="relative text-white text-base pb-3 ">{eventText}</p>
      <div>
        <hr className="w-14 bg-white h-[3px]" />
      </div>
      <div className="overflow-hidden"> 

      <button className="button relative cursor-pointer -ml-[3px] w-20 text-base text-white uppercase pt-3">
        
        SHOP NOW
        <div className="borderB border-b-2 border-white w-[78px] transform "></div>
        </button>
      </div>
      </div>

    </div>
  );
};
