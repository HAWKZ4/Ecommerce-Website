import React from "react";
import menT from "../../../../images/menT.jpg";
import womentT from "../../../../images/womenT.jpg";
import paddedClothes from "../../../../images/paddedClothes.jpg";
import bannerBackground from "../../../../images/bannerBackground.avif";
import "./TopCircle.css";
import { TopCategoriesButton } from "./TopCategoriesButton";

export const TopCategories = () => {
  return (
    <div className="topCategories">
      <h1 className="pt-10 pb-12 text-center text-2xl dark:text-white font-semibold">
        Top Categories
      </h1>
      <div className="Categories flex flex-row justify-between">
        <div className="left basis-[49%]">
          <div className="product  ">
            <div className="shadow relative flex justify-center ">
              <img
                className="p-1 h-[580px] "
                src={paddedClothes}
                alt="product image"
              />

              <div className="text flex flex-col absolute top-0 text-center pt-8 text-main_text ">
                <h2 className="uppercase text-2xl text-main_text font-bold">
                  PADDED CLOTHES
                </h2>
                <p className="text-2xl">Collection</p>
              </div>

              <div className="buttons flex justify-between absolute bottom-4 gap-2">
                <TopCategoriesButton text={"Women's"} />
                <TopCategoriesButton text={"Men's"}/>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col justify-between basis-[48%] gap-5">
          <div className="productT  relative ">
            <div className="shadow">
              <img
                className="p-1  h-[280px] w-full object-cover"
                src={womentT}
                alt="product image"
              />
            </div>
            <div className=" absolute bottom-4 left-1/2 -translate-x-1/2">
              <TopCategoriesButton text={"Women's T-shirt"} />
            </div>
          </div>
          <div className="productB relative ">
            <div className="shadow">
              <img
                className="p-1  h-[280px] w-full  "
                src={menT}
                alt="product image"
              />
            </div>
            <div className=" absolute bottom-4 left-1/2 -translate-x-1/2">
              <TopCategoriesButton text={"Men's T-shirt"} />
            </div>
          </div>
        </div>
      </div>
      {/* F */}
      <div className="Sale my-5">
        <div className="h-[220px] img relative">
          {/* <div className="overlay opacity"></div> */}
          <img
            className="h-[220px] w-full "
            src={bannerBackground}
            alt="girl image"
          />
          
            <div className="text absolute left-10 top-1/2 transform -translate-y-1/2">
              <h3 className="text-xl font-semibold ">END OF SEASON</h3>
              <div>
                <hr className="bg-white " />
              </div>
              <p className="leading-none font-bold text-[75px]">SALE</p>
            </div>
            <div className="container_circle absolute top-1/2 -translate-y-1/2 left-64">
            <div className="circle leading-tight  border-black border-2 text-lg rounded-full w-32 h-32  flex flex-col justify-center items-center">
              <div className="content transform -rotate-[20deg]">
                <div className="text-white text-center text-base font-semibold">
                  AT UP TO
                </div>
                <div>
                  <span className="text-3xl text-[#D23F57] font-bold mr-1">
                    50% 
                  </span>
                  <span className="text-white text-base font-semibold ">
                    OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>

        
      </div>
    </div>
  );
};
