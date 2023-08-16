import React, { useState } from 'react'
import { Breadcrumb, TotalInfo } from '../components/Elements'

export const PaymentPage = () => {

  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }


  return (


    <div className='bg-pro_det_bg cartPage'>
      <section className=' container   mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4'>
        <Breadcrumb third={true} />
        <div className='info flex gap-6'>
          <div className='left basis-8/12'>

            <div className='box p-5 bg-white rounded-lg shadow-md mb-8'>
              <div className="flex items-center  mt-4 mb-8">
                <input id="credit" type="radio" onChange={handleOptionChange} checked={selectedOption === "Pay with credit card"} value="Pay with credit card" name="paid_method" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="credit" className="cursor-pointer ml-2 text-base font-semibold text-gray-900 dark:text-gray-300">Pay with credit card</label>
              </div>
              <hr className='mt-8 mb-2 ' />
              {selectedOption === "Pay with credit card" && (<form >
                <div className='box flex flex-wrap gap-x-4'>

                  <div className="relative my-4 basis-[46%]  ">
                    <input type="text" id="card_number" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="card_number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Card Number</label>
                  </div>

                  <div className="relative my-4 basis-[46%] ">
                    <input type="text" id="exp_date" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="exp_date" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Exp Date</label>
                  </div>

                  <div className="relative my-4 basis-[46%] ">
                    <input type="text" id="name_on_card" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="name_on_card" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name on Card</label>
                  </div>


                  <div className="relative my-4 basis-[46%] ">
                    <input type="text" id="key_on_card" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="key_on_card" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Key on Card</label>
                  </div>
                  <input type="submit" className='px-4 py-1 cursor-pointer text-main_c border-[1px] rounded-md border-border_c_b_b_a my-2 ' />
                </div>


              </form>)}

              <div className="flex items-center  mt-4 mb-8">
                <input id="pay" type="radio" name="paid_method" onChange={handleOptionChange} value="Pay with Paypal" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="pay" className="cursor-pointer ml-2 text-base font-semibold text-gray-900 dark:text-gray-300">Pay with Paypal</label>
              </div>
              <hr className='mt-8 mb-2' />


              {selectedOption === "Pay with Paypal" && (


                <form >
                  <div className='flex gap-x-4 items-center'>
                    <div className="relative my-4 basis-10/12">
                      <input type="text" id="paypal_main" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='Paypal Email' required />

                    </div>
                    <input type="submit" className='basis-1/12 py-[0.6rem] px-3  cursor-pointer text-main_c border-[1px] rounded-md border-border_c_b_b_a ' />
                  </div>
                </form>

              )}

              <div className="flex items-center  mt-4 mb-8">
                <input id="delivery" type="radio" name="paid_method" onChange={handleOptionChange} value="Cash On Deleivery" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="delivery" className="cursor-pointer ml-2 text-base font-semibold text-gray-900 dark:text-gray-300">Cash On Delivery</label>
              </div>
            </div>


          </div>
          <TotalInfo input={true} button={true} />



        </div>
      </section>

    </div>
  )
}
