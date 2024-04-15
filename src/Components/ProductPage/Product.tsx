import { useNavigate } from "react-router-dom";
import "./Product.css";
// import { Link } from "react-scroll";

const Product = () => {
  const nav = useNavigate();
  // const handleNav = () => {
  //   nav("/");
  // };
  const handleNav = () => {
    nav("/");

    setTimeout(() => {
      const priceSection = document.getElementById("price");
      if (priceSection) {
        priceSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productTop">
          <h1 className="productTitle">Buy High-Quality</h1>
          <h1 className="productTitle">Petroleum Products & Lubricants</h1>
        </div>
        <hr className="producthr" />
        <div className="productDown">
          <div className="productCard">
            <div className="productCardTop">
              <img
                className="productCardTopImg"
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/04/AGO-Sales-1.jpg"
                alt=""
              />
            </div>
            <div className="productCardDown">
              <p className="productCardDownText">
                Automotive Gas Oil or Diesel (AGO)
              </p>
            </div>
            <div className="productCardDownLast">
              <p className="productCardDownLastText1">
                Available at our Stations and Depots
              </p>
              <p className="productCardDownLastText2">
                Contact us for Price Today
              </p>
              <span style={{ color: "#ff9900" }}>★★★★★</span>
              <a
                onClick={handleNav}
                href="#price"
                className="productCardDownLastBtn"
              >
                <abbr
                  style={{ textDecoration: "none" }}
                  title="Get in touch with us"
                >
                  {" "}
                  Order Now!{" "}
                </abbr>{" "}
              </a>
            </div>
          </div>
          <div className="productCard">
            <div className="productCardTop">
              <img
                className="productCardTopImg"
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/04/Diesel-at-Your-Doorstep.jpg"
                alt=""
              />
            </div>
            <div className="productCardDown">
              <p className="productCardDownText">
                (AGO) Diesel at your Doorstep
              </p>
            </div>
            <div className="productCardDownLast">
              <p className="productCardDownLastText1">
                Place your Order & we Deliver
              </p>
              <p className="productCardDownLastText2">
                Contact us for Price Today
              </p>
              <span style={{ color: "#ff9900" }}>★★★★★</span>
              {/* <Link
                to="price"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={handleNav}
                className="productCardDownLastBtn"
              >
                <abbr
                  style={{ textDecoration: "none" }}
                  title="Get in touch with us"
                >
                  Order Now!
                </abbr>
              </Link> */}
              <a
                onClick={handleNav}
                href="#price"
                className="productCardDownLastBtn"
              >
                <abbr
                  style={{ textDecoration: "none" }}
                  title="Get in touch with us"
                >
                  {" "}
                  Order Now!{" "}
                </abbr>{" "}
              </a>
            </div>
          </div>
          <div className="productCard">
            <div className="productCardTop">
              <img
                className="productCardTopImg"
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/04/Lubricants.jpg"
                alt=""
              />
            </div>
            <div className="productCardDown">
              <p className="productCardDownText">
                LUBRICANT(In Partnership with Total)
              </p>
            </div>
            <div className="productCardDownLast">
              <p className="productCardDownLastText1">
                All ranges available at our Stations
              </p>
              <p className="productCardDownLastText2">
                Contact us for Price Today
              </p>
              <span style={{ color: "#ff9900" }}>★★★★★</span>
              <a
                onClick={handleNav}
                href="#price"
                className="productCardDownLastBtn"
              >
                <abbr
                  style={{ textDecoration: "none" }}
                  title="Get in touch with us"
                >
                  {" "}
                  Order Now!{" "}
                </abbr>{" "}
              </a>
            </div>
          </div>
          <div className="productCard">
            <div className="productCardTop">
              <img
                className="productCardTopImg"
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/05/Premium-Motor-Spirit-PMS.jpg"
                alt=""
              />
            </div>
            <div className="productCardDown">
              <p className="productCardDownText">Premium Motor Spirit </p>
            </div>
            <div className="productCardDownLast">
              <p className="productCardDownLastText1">
                Available at our Stations and Depots
              </p>
              <p className="productCardDownLastText2">
                Contact us for Price Today
              </p>
              <span style={{ color: "#ff9900" }}>★★★★★</span>
              <a
                onClick={handleNav}
                href="#price"
                className="productCardDownLastBtn"
              >
                <abbr
                  style={{ textDecoration: "none" }}
                  title="Get in touch with us"
                >
                  {" "}
                  Order Now!{" "}
                </abbr>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
