import { useState } from "react";
import "../Style/header.css";
import DropDown from "./DDAboutUs";
import DDOurServices from "./DDOurServices";
import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
const Header: React.FC = () => {
  const [aboutHover, setAboutHover] = useState<boolean>(false);
  const [servicesHover, setServicesHover] = useState<boolean>(false);
  const [menuPop, setMenuPop] = useState<boolean>(false);
  const handleAbout = () => {
    setServicesHover(false)
    setAboutHover(true)
  };
  const handleService = () => {
    setAboutHover(false)
    setServicesHover(true)
  };
  return (
    <>
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="headerLogo">
            <h3 className="headerh3">Rigrail Oil & Gas</h3>
          </div>
          <div className="headerNavs">
            <p className="headerNavsText">Home</p>
            <p
              className="headerNavsText aboutUsHover"
              onMouseOver={handleAbout}
            >
              About Us
              {aboutHover && <DropDown setAboutHover={setAboutHover} />}
            </p>
            <p
              className="headerNavsText aboutUsHover"
              onMouseOver={handleService}
            >
              Our Services
              {servicesHover && (
                <DDOurServices setServicesHover={setServicesHover} />
              )}
            </p>
            <a href="/contact"  className="headerNavsText">Contact Us</a>
          </div>
          <div className="headerButton">
            <button className="headerbtn">Buy Product</button>
          </div>
          <div className="HeaderMenu">
            <img src="/icons/Menu.png" alt="" />
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
    </>
  );
};

export default Header;
