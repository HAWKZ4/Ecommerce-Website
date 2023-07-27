import React from "react";

export const Offers = () => {
  return (
    <div className="offers border-t-[1px] border-b-[1px] border-[#aaa] my-10 ">
      <div className="flex flex-row justify-around  ">
        <div className="info my-8 text-center">
          <h3 className="text-xl dark:text-white font-medium">Fast Delivery</h3>
          <p className="text-off leading-normal">Start from $10</p>
        </div>
        <div className="info my-8 text-center">
          <h3 className="text-xl dark:text-white font-medium">Money Guarantee</h3>
          <p className="text-off leading-normal">7 Days Back</p>
        </div>
        <div className="info my-8 text-center">
          <h3 className="text-xl dark:text-white font-medium">365 Days</h3>
          <p className="text-off leading-normal">For free return</p>
        </div>
        <div className="info my-8 text-center">
          <h3 className="text-xl dark:text-white font-medium">Payment</h3>
          <p className="text-off leading-normal">Secure system</p>
        </div>
       
      </div>
    </div>
  );
};
