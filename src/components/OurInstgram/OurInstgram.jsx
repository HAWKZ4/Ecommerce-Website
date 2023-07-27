import insta from "../../images/insta.jpg";
import { AiOutlineInstagram } from "react-icons/ai";
import "./OurInstgram.css";

export const OurInstgram = () => {
  return (
    <div className="ourInstgram mb-10">
      <h1 className="pt-10 pb-6 text-center text-2xl dark:text-white font-semibold">
        Our Instagram
      </h1>
      <div className="instgramBoxes grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="overlayCon relative overflow-hidden">
          <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
          <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
            <AiOutlineInstagram />
          </div>
          <img className="h-[190.4px]" src={insta} alt="insta images" />
        </div>
        <div className="overlayCon relative overflow-hidden">
          <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
          <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
            <AiOutlineInstagram />
          </div>
          <img className="h-[190.4px]" src={insta} alt="insta images" />
        </div>{" "}
        <div className="overlayCon relative overflow-hidden">
          <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
          <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
            <AiOutlineInstagram />
          </div>
          <img className="h-[190.4px]" src={insta} alt="insta images" />
        </div>{" "}
        <div className="overlayCon relative overflow-hidden">
          <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
          <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
            <AiOutlineInstagram />
          </div>
          <img className="h-[190.4px]" src={insta} alt="insta images" />
        </div>{" "}
        <div className="overlayCon relative overflow-hidden">
          <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
          <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
            <AiOutlineInstagram />
          </div>
          <img className="h-[190.4px]" src={insta} alt="insta images" />
        </div>{" "}
        <div className="overlayCon relative overflow-hidden">
          <div className="overlayInsBox absolute top-0 left-0 bg-black opacity-40"></div>
          <div className="instagramIcon absolute text-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5] rotate-180">
            <AiOutlineInstagram />
          </div>
          <img className="h-[190.4px]" src={insta} alt="insta images" />
        </div>
      </div>
    </div>
  );
};
