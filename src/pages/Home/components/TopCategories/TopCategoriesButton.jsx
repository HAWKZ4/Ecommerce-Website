import React from 'react'

export const TopCategoriesButton = ({text}) => {
  return (
    <button className='py-2 px-10 font-semibold bg-white text-black hover:bg-black hover:text-white duration-500'>
      {text}
    </button>
  )
}
