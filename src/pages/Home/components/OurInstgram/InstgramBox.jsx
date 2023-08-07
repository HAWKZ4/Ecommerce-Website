import { AiOutlineInstagram } from "react-icons/ai";

export const InstgramBox = ({ product }) => {

  const { id, image, title } = product


  return (
    <div className="overlayCon relative overflow-hidden cursor-pointer">
      <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
      <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
        <AiOutlineInstagram />
      </div>
      <img className="h-[156.8px] w-full " src={image} alt={title} />
    </div>
  )
}
