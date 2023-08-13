import { useState } from 'react';

import ReactPaginate from 'react-paginate';

import { useSelector } from 'react-redux';
import { ProductCardG } from '../../pages/ProductsPage/ProductCardG';
import "./ProductsSection.css"

export const ProductsSection = () => {

  const products = useSelector(state => state.cartState.allProducts)

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='products'>
        {currentItems.map(product => (
          <ProductCardG product={product} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeClassName='active'
      />
    </>
  );
}
