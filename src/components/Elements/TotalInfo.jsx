import React from 'react'
import { useSelector } from 'react-redux'

export const TotalInfo = ({ input = false, button = false }) => {

  const total = useSelector(state=> state.cartState.total)
  const finalTotal= useSelector(state=> state.cartState.finalTotal)

  return (
    <div className='right h-fit rounded-lg shadow-md mb-10 basis-4/12 bg-white p-5 dark:bg-gray-900'>
      <div className=' flex justify-between mb-2'><span className='text-off dark:text-slate-300'>Subtotal:</span> <span className='font-semibold text-lg dark:text-white'>${total}</span></div>
      <div className=' flex justify-between mb-2'><span className='text-off dark:text-slate-300'>Shipping:</span> <span className='font-semibold text-lg dark:text-white'>$10.00</span></div>
      <div className=' flex justify-between mb-2'><span className='text-off dark:text-slate-300'>Tax:</span> <span className='font-semibold text-lg dark:text-white'>${(total*5/100).toFixed(2)}</span></div>
      <div className=' flex justify-between mb-2'><span className='text-off dark:text-slate-300'>Discount:</span> <span className='font-semibold text-lg dark:text-white'>$0.00</span></div>
      <hr className='mt-4 mb-6' />
      <div className='text-right font-semibold text-3xl dark:text-white'>${finalTotal}</div>

      {input && (<div className="relative my-4">
        <input type="text" id="voucher" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-main_c peer" placeholder="Voucher" />
        <label htmlFor="voucher" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-main_c peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Voucher</label>
      </div>)}
      {button && <button className='text-center w-full border-[1px] rounded-sm border-main_c dark:border-blue-600 py-2 mb-2 dark:text-slate-300'>Apply Voucher</button>
      }


    </div>
  )
}
