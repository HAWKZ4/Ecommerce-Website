import { Breadcrumb } from '../components/Elements'
import { useSelector } from 'react-redux'
import { ProductCardG } from './ProductsPage/ProductCardG'


export const CartPage = () => {
  const products = useSelector(state => state.cartState.allProducts)

  return (
    <section className='cartPage container  bg-pro_det_bg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4'>
      <Breadcrumb />
      <div className='info flex gap-6'>
        <div className='left basis-8/12'>
          <div className="productList basis-3/4 h-fit   ">
            {/* Product */}

            {products.map((product) => (
              <ProductCardG key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className='right h-fit rounded-lg shadow-md basis-4/12 bg-white p-5'>
          <div className='total flex justify-between'>
            <span>Total:</span>
            <span>$1,128.00</span>
          </div>
          <hr />
          <div className='note'>
            <div><span>Additional Comments</span></div>
            <textarea className='resize-none w-full p-2 h-40' name="" id=""  ></textarea>
          </div>
          <hr />
          <div className="relative my-4">
            <input type="text" id="voucher" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Voucher" />
            <label for="voucher" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Voucher</label>
          </div>
          <button className='text-center w-full border-[1px] rounded-sm border-main_c py-2 mb-2'>Apply Voucher</button>
          <hr className='bg-500-red h-1' />
          <div className='shipping'>
            <span>Shipping Estimates</span>
            <div className="relative my-4">
              <input type="text" id="floating_outlined" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Voucher" />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Voucher</label>
            </div>

            <div className="relative my-4">

              <select id="country" name="country" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ">
                <option value="New York" selected={true}>New York</option>
                <option value="Alabama">Alabama</option>
                <option value="Texas">Texas</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
              </select>
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">State</label>
            </div>

            <div className="relative my-4">
              <input type="text" id="floating_outlined" className="border-[1px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="3100" />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Zip Code</label>
            </div>
            <button className='w-full bg-white border-[1px] py-2 border-main_c  text-main_c font-medium mb-3'>Calculate Shipping</button>
            <button className='w-full bg-main_c py-2 text-white font-medium mb-3'>Checkout Now</button>



          </div>
        </div>

      </div>

    </section>
  )
}
