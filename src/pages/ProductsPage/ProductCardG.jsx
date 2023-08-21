import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../store/cartSlice";
import { useEffect, useState } from "react";
import { Rating } from "../../components/Elements";
import { toast } from "react-toastify";


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

  const handleAddToCart=()=>{
    dispatch(addProduct(product))
    toast.success("Added To Cart")
  }

  return (
    <div className="productCardG mb-6 flex bg-white relative shadow-md rounded-md overflow-hidden dark:bg-gray-900 ">
      <img src={image} className="w-40 h-[180px] p-6 basis-1/4" alt="img" />
      <div className="detail p-8 flex flex-col basis-3/4">
        <Link to={`/product/${id}`}>
          <h5 className="leading-normal text-lg font-semibold dark:text-white">
            {title}
          </h5>
        </Link>
        <div className="stars flex my-2">
          <Rating rating={rating.rate}/>
        </div>
        <div className="price&BougthTimes my-2">
          <span className="mr-3 text-main_c text-xl font-semibold dark:text-blue-500">
            ${price}
          </span>
          <span className="dark:text-white ml-1">{rating.count}</span>
        </div>
        <button disabled={isInCart} onClick={handleAddToCart} className={`font-bold py-1 w-28 text-white bg-main_c rounded-md ${isInCart ? "cursor-not-allowed" : "cursor-pointer"  } dark:bg-blue-600`}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
