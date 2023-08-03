import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


export const ProductCardG = ({ product }) => {
  const { id, title, category, image, price, rating } = product;

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
          <AiFillStar size={20} className="text-stars_c mr-1" />
          <AiFillStar size={20} className="text-stars_c mr-1" />
          <AiFillStar size={20} className="text-stars_c mr-1" />
          <AiFillStar size={20} className="text-stars_c mr-1" />
          <AiFillStar size={20} className="text-stars_c mr-1" />
        </div>
        <div className="price&BougthTimes my-2">
          <span className="mr-2 text-main_c text-lg font-semibold">
            ${price}
          </span>
          <span>0</span>
        </div>
        <button className="font-bold py-1 w-28 text-white bg-main_c rounded-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
