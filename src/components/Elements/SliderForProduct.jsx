import React from "react";
import s1img from "../../images/S1img.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

export const SliderForProduct = () => {
  return (
    <Splide
      aria-label="Sliider with sales"
      options={{ arrows: true, speed: "800" , width: "450px"  }}
    >
      <SplideSlide>
        <div className="img">
          <img
            src={s1img}
            className="w-[450px] h-[400px]"
            alt="girl with sunglasses cover"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="img">
          <img
            src={s1img}
            className="w-[450px] h-[400px]"
            alt="girl with sunglasses cover"
          />
        </div>
      </SplideSlide>
      {/* <SplideSlide>
        <div className="bg-black pl-[40px] pr-[90px] py-[60px]">
          <div className="flex flex-row justify-between items-center">
            <div className="left pl-10">
              <h2 className="text-white text-3xl uppercase mb-2 font-normal">Lifestyle collection</h2>
              <p className="text-white uppercase text-6xl font-bold">Men</p>
              <p className="text-white uppercase mb-3 font-semibold text-3xl">SALE UP TO <span className="text-[#D23F57] ">30% off</span></p>
              <p className="text-white mb-8 leading-7 text-lg">Get Free Shipping on orders over $99.00</p>
              <button className="text-white py-[10px] px-[40px] hover:bg-[#343434] transition duration-500 bg-[#222222]  font-bold">Shop Now</button>
            </div>
            <div className="right ">
            <div className="img">
            <img src={s1img} className="w-[450px] h-[350px]" alt="girl with sunglasses cover"/>
            </div>
            </div>
          </div>
        </div>
      </SplideSlide> */}
    </Splide>
  );
};
