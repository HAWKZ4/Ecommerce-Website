import React from 'react'
import { ForBox } from './ForBox/ForBox'
import manImage from "../../../images/manBox.jpg"
import girlImage from "../../../images/girlBox.jpg"


export const GenderBoxes = () => {
  return (
    <div className="flex justify-between">
      <ForBox image={manImage} alt={"manImage"}  heading={"For Men's"} direction={"left-[30px]"} eventText={"Starting At $29"}/>
      <ForBox image={girlImage} alt={"girlImage"} heading={"For Women's"} direction={"right-[30px]"} text_dir={"items-end"} eventText={"25% Off"}/>
    </div>
  )
}
