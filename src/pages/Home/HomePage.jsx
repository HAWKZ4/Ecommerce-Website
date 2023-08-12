import React, { useState } from 'react'
import {
  BestSellingProducts,
  FeaturedProducts,
  GenderBoxes,
  Offers,
  OurInstgram,
  TopCategories,
  Slide
} from "../Home/components";



export const HomePage = () => {

  return (

    <>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <Slide />
        <GenderBoxes />
        <BestSellingProducts />
        <TopCategories />
        <FeaturedProducts />
        <Offers />
        <OurInstgram />

      </div>

    </>
  )
}
