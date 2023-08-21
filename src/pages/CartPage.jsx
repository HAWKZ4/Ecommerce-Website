import { Breadcrumb, ProductCardCart } from '../components/Elements'
import { useSelector } from 'react-redux'
import { DropDownWithSearch } from '../components/Elements/DropDownWithSearch'
import { Link } from 'react-router-dom'



export const CartPage = () => {
  const cartList = useSelector(state => state.cartState.cartList)
  const total = useSelector(state=> state.cartState.total)

  return (
    <section className='cartPage container bg-pro_det_bg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 dark:bg-gray-800'>
      <Breadcrumb />
      <div className='info flex gap-6'>
        <div className='left basis-8/12'>
          <div className="productList basis-3/4 h-fit   ">
            {/* Product */}

            {cartList.map((product) => (
              <ProductCardCart key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className='right h-fit rounded-lg shadow-md basis-4/12 mb-10 bg-white p-5 dark:bg-gray-900'>
          <div className='total flex justify-between mb-4'>
            <span className='text-off dark:text-slate-400'>Total:</span>
            <span className='font-semibold text-xl text-main_text dark:text-white'>${total}</span>
          </div>
          <hr className='mb-4' />
          <div className='note'>
            <div className='mb-4 '><span className='mr-2 font-medium dark:text-slate-400'>Additional Comments</span> <span className='text-main_c text-sm font-normal px-3 py-[2px] bg-n_active_main_c dark:bg-blue-300 dark:text-blue-600 rounded-sm'>Note</span></div>
            <textarea className='resize-none rounded-sm w-full p-2 h-40 border-solid border-[1px] border-gray-300 focus:outline-main_c dark:focus:outline-blue-600 dark:bg-slate-300 text-lg focus:outline-1' name="" id=""  ></textarea>
          </div>
          <hr className='mt-2'/>
          <div className="relative my-4">
            <input type="text" id="voucher" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-main_c peer" placeholder="Voucher" />
            <label htmlFor="voucher" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-main_c peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Voucher</label>
          </div>
          <button className='text-center w-full border-[1px] rounded-md border-main_c py-2 mb-2 hover:bg-n_active_main_c dark:text-white dark:border-blue-600 dark:hover:bg-blue-300 '>Apply Voucher</button>
          <hr className='bg-500-red h-1 mt-6 mb-4' />
          <div className='shipping'>
            <p className='font-medium dark:text-slate-400 mb-5  '>Shipping Estimates</p>
            {/* <div className="relative my-4">
              <input type="text" id="floating_outlined" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Select Country" />
              <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 pr-10 py-1 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Country</label>
            </div> */}
            <DropDownWithSearch/>

             


            <div className="relative my-4">
              <input type="text" id="floating_outlined" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-main_c peer" placeholder="3100" />
              <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-main_c peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Zip Code</label>
            </div>
            <button className='w-full bg-white dark:bg-slate-300 border-[1px] py-2 border-main_c dark:border-blue-600  text-main_c dark:text-blue-600 font-medium mb-3 hover:bg-n_active_main_c dark:hover:bg-blue-200'>Calculate Shipping</button>
            <Link to="/checkout" className='block text-center w-full bg-main_c dark:bg-blue-600 py-2 text-white font-medium mb-3'>Checkout Now</Link>



          </div>
        </div>

      </div>

    </section>
  )
}
