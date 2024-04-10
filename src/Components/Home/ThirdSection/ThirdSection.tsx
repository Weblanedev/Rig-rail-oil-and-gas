import "./ThirdSection.css";
const ThirdSection: React.FC = () => {
  return (
    <div className="thirdSectionContainer">
      <div className="thirdSectionWrapper">
        <div className="thirdSectionformContainer">
          <h1 className="thirdSectionFormTitle">Bulk Order</h1>
          <form action="" method="post" className="thirdSectionForm">
            <div className="thirdSectionFormName">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Company Name" />
            </div>
            <input
              className="thirdSectionFormInput"
              type="Address"
              placeholder="Your Delivery Address"
            />
            <div className="thirdSectionFormName">
              <input type="email" placeholder="Email Address" />
              <input type="number" placeholder="Phone No" />
            </div>
            <select className="thirdSectionFormInput" name="" id="">
              <option value="Select Product Type">Select Product Type</option>
              <option value="Select Product Type">Select Product Type</option>
              <option value="Select Product Type">Select Product Type</option>
              <option value="Select Product Type">Select Product Type</option>
            </select>
            <select className="thirdSectionFormInput" name="" id="">
              <option value="How Many Litres?">How Many Litres?</option>
            </select>
            <div className="thirdSectionFormBtnContainer">
              <button type="submit" className="thirdSectionFormBtn">
                ORDER NOW
              </button>
            </div>
          </form>
        </div>
        <div className="thirdSectionExposure">
          <div className="thirdSectionFeatures">
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★ &nbsp;</span>
              Quality Driven
            </p>
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★ &nbsp;</span>
              Customer Focused
            </p>
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★★ &nbsp;</span>
              Global Sourcing
            </p>
          </div>
          <h1 className="thirdSectionFeaturesHeader">
            Leading the downstream oil & gas industry in Nigeria since 2004
          </h1>
          <p className="thirdSectionFeaturesdesc">
            We service global clients, in more than 20 countries in Africa & in
            Nigeria.
          </p>
          <div className="thirdSectionCardsContainer">
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/gas-station2.png" alt="" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">Next Day Delivery</p>
                <p className="thirdSectionCardRightContent">
                  At Pinnacle Oil and Gas Company, 92% of our orders are
                  successfully delivered within 24 hours
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img
                  src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/gas-station2.png"
                  alt=""
                />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">Low Prices</p>
                <p className="thirdSectionCardRightContent">
                  Our aim is to buy fuel at the lowest price possible and pass
                  the savings on to you.
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/gas-station2.png" alt="" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">
                  Dedicated Account Managers
                </p>
                <p className="thirdSectionCardRightContent">
                  We will assign you an account manager who will be your point
                  of contact from day one.
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/gas-station2.png" alt="" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">
                  Same Day Emergency Delivery
                </p>
                <p className="thirdSectionCardRightContent">
                  At Pinnacle Oil and Gas Company, 92% of our orders are
                  successfully delivered within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="thirdSectionBgImage"
        src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/bgoverlay3-scaled.jpg"
        alt=""
      />
    </div>
  );
};

export default ThirdSection;
