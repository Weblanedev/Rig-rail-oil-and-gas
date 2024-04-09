import "../Style/header.css";
const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="headerLogo">
          <h3 className="headerh3">Rigrail Oil & Gas</h3>
        </div>
        <div className="headerNavs">
          <p className="headerNavsText">Home</p>
          <p className="headerNavsText">About Us</p>
          <p className="headerNavsText">Our Services</p>
          <p className="headerNavsText">Contact Us</p>
        </div>
        <div className="headerButton">
          <button className="headerbtn">Buy Product</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
