import React, { useState } from "react";
import "../Style/HeaderBurgerPopUp.css";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";


type Props = {
    setMenuPop: React.Dispatch<React.SetStateAction<boolean>>
}
const HeaderBurgerPopUp: React.FC<Props> = ({ setMenuPop }) => {
  const nav = useNavigate()

  const handleNavClick = (navItem:string) => {
    if (navItem === "home") {
      nav("/");
      setMenuPop(false);
    } else if (navItem === "about") {
      nav("/aboutUs");
      setMenuPop(false);
    } else if (navItem === "contact") {
      nav("/contactUs");
      setMenuPop(false);
    } else if (navItem === "blog") {
      nav("/blog");
      setMenuPop(false);
    }
  };
  return (
    <div className="burgerMenu">
      <div className="burgerMenu__cancelIcon" onClick={() => setMenuPop(false)}>
        <ImCancelCircle />
      </div>
      <div className="burgerMenu__content--container">
        {/* <p>Home</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>About us</p> */}
        <p onClick={() => handleNavClick("home")}>Home</p>
        <p onClick={() => handleNavClick("about")}>About Us</p>
        <p onClick={() => handleNavClick("blog")}>Blog</p>
        <p onClick={() => handleNavClick("contact")}>Contact Us</p>
        <p className="burgerMenu__getStarted">Buy Product</p>
      </div>
    </div>
  );
};

export default HeaderBurgerPopUp;