import React from 'react'
import {
  BestSellingProducts,
  FeaturedProducts,
  GenderBoxes,
  Offers,
  OurInstgram,
  TopCategories,
  Slide
} from "../Home/components";
import { QuickViewProduct } from '../../components/Elements';

export const HomePage = () => {
  return (
    <>
  <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <Slide/>
        <GenderBoxes/>
        <BestSellingProducts />
        <TopCategories />
        <FeaturedProducts />
        <Offers />
        <OurInstgram />
        
      </main> 
        <QuickViewProduct/>
        </>
  )
}
