import React from "react"
import "../Style/DropDown.css"

type Props = {
  setAboutHover:  React.Dispatch<React.SetStateAction<boolean>>,
}
const DropDown: React.FC<Props> = ({ setAboutHover }) => {
  return (
    <div className='ddAboutUs' onMouseLeave={()=>setAboutHover(false)}>
      <p className="ddAboutUsText">Our Company</p>
      <p className="ddAboutUsText">Who We Are </p>
      <p className="ddAboutUsText">What We Do</p>
    </div>
  )
}

export default DropDown
