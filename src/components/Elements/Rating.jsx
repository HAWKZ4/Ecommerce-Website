import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export const Rating = ({ rating, ratingCount = false }) => {

  const roundedRating = Math.round(rating); // Round down the rating to the nearest whole number
  const fullStars = Math.min(roundedRating, 5); // Limit the number of full stars to 5
  const halfStars = rating - roundedRating >= 0.5 ? 1 : 0; // Check if there should be a half star
  const emptyStars = 5 - fullStars - halfStars; // Calculate the number of empty stars

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar className='text-stars_c' key={`full-${i}`} />);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(<FaStarHalfAlt className='text-stars_c' key={`half-${i}`} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar className='text-stars_c' key={`empty-${i}`} />);
  }

  return (
    <div className="star-rating flex justify-center items-center ">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      {ratingCount && (<span className='ml-3 font-semibold'>({ratingCount})</span>)}

    </div>
  );
}
    // <div className="stars">
    //   <div className="flex items-center">
    //     <svg
    //       className="w-4 h-4 text-[#FAAF00] mr-1"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 22 20"
    //     >
    //       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //     </svg>
    //     <svg
    //       className="w-4 h-4 text-[#FAAF00] mr-1"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 22 20"
    //     >
    //       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //     </svg>
    //     <svg
    //       className="w-4 h-4 text-[#FAAF00] mr-1"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 22 20"
    //     >
    //       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //     </svg>
    //     <svg
    //       className="w-4 h-4 text-[#FAAF00] mr-1"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 22 20"
    //     >
    //       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //     </svg>
    //     <svg
    //       className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 22 20"
    //     >
    //       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //     </svg>
    //     <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
    //       (50)
    //     </p>
    //   </div>
    // </div>
