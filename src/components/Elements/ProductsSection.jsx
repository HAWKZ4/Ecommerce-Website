import { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import { useSelector } from 'react-redux';
import { ProductCardG } from '../../pages/ProductsPage/ProductCardG';


export const ProductsSection = () => {

  const products = useSelector(state => state.filterState.filteredProducts)

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const [showArrows, setShowArrows] = useState(true)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Number(Math.ceil(products.length / itemsPerPage));

  // show the next and previous arrows

  useEffect(() => {
    if (products.length <= itemsPerPage) {
      setShowArrows(false)
    }else {
      setShowArrows(true)
    }
  }, [products])


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

// styling for paginate

const pagination= "list-none flex justify-end mr-8 items-center mb-20 text-base gap-2 text-gray-700"
const page_num="flex justify-center items-center w-[33px] h-[33px] cursor-pointer border border-1 rounded-full bg-transparent font-normal border-lightgray text-center dark:text-white hover:bg-[F2E3E8] "
const active="border border-rgb-210-63-87 text-rgb-210-63-87 bg-rose-200 dark:bg-blue-600"

  return (
    <>
      <div className='products min-h-[1374px] mb-8'>
        {currentItems.map(product => (
          <ProductCardG key={product.id} product={product} />
        ))}
      </div>
      <ReactPaginate

        breakLabel="..."
        nextLabel={showArrows ? " > " : ""}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={showArrows ? pageCount : 0}
        previousLabel={showArrows ?' < ' : ""}
        renderOnZeroPageCount={null}
        containerClassName={pagination}
        pageLinkClassName={showArrows ?page_num : ""}
        previousLinkClassName={showArrows ?page_num : ""}
        nextLinkClassName={showArrows ?page_num : ""}
        activeClassName="active"
        activeLinkClassName={active}
        
      />
    </>
  );
}
