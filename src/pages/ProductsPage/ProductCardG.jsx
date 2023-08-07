import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../store/cartSlice";
import { useEffect, useState } from "react";
import { Rating } from "../../components/Elements";


export const ProductCardG = ({ product }) => {

  const { id, title, category, image, price , rating } = product;


  const [isInCart, setIsInCart] = useState(false)

  const products = useSelector(state => state.cartState.cartList)

  useEffect(() => {

    const inCart = products.find((item) => item.id === id)

    if (inCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)

    }
  }, [products, id])



  const dispatch = useDispatch()

  return (
    <div className="productCardG mb-6 flex bg-white relative shadow-md rounded-md overflow-hidden  ">
      <img src={image} className="w-40 h-[180px] p-4 basis-1/4" alt="img" />
      <div className="detail p-8 flex flex-col basis-3/4">
        <Link to={`/product/${id}`}>
          <h5 className="leading-normal text-lg font-semibold">
            {title}
          </h5>
        </Link>
        <div className="stars flex my-2">
          <Rating rating={rating.rate}/>
        </div>
        <div className="price&BougthTimes my-2">
          <span className="mr-2 text-main_c text-lg font-semibold">
            ${price}
          </span>
          <span>{rating.count}</span>
        </div>
        <button disabled={isInCart} onClick={() => dispatch(addProduct(product))} className={`font-bold py-1 w-28 text-white bg-main_c rounded-md ${isInCart ? "cursor-not-allowed" : "cursor-pointer"  }`}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
