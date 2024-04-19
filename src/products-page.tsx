import { useNavigate  } from 'react-router-dom'

import { useEffect } from "react";


const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();


  const purchase = (name: string, price: string | number) => {
    const product = {
        name,
        price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    navigate("/billing");
}
  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
       <section className="product">
    <div className="text-box">
      <h1>Explore Our Energy Solutions</h1>
      <p>
      Innovative Solutions for Sustainable Energy Production and Exploration
      </p>
    </div>
  </section>

      <section className="flex bg-white w-full flex-col px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 pb-14 md:pb-20"> 
      <h1 className='text-4xl py-[100px] font-[600] text-[#171b43]'>All Products</h1>
       <div data-aos="fade-up" className="grid grid-cols-4 gap-[50px]">
   

       <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCGdMgQ7q_bEyD4JHslahuwxF8sVZXqKbQw&s"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Gasoline</h5>
              <p>$50.00</p>
              <p className="cart-btn" onClick={() => purchase("Power bank", "50")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://media.istockphoto.com/id/1133546968/photo/metal-oil-barrels.jpg?b=1&s=612x612&w=0&k=20&c=X4M24Reib_Vn2fhW5Y1VLu3wN-4ysH_z-Slr5CIWvmI="
                alt=""
                className="small-imgs"
              />
              
            </div>
            <div className="about">
              <h5>Fuel oil</h5>
              <p>$50.00</p>
              <p className="cart-btn" onClick={() => purchase("Elecric Fan", "250")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaCfsDg9koemA_2rMb8zeNkpR3st9Zu6xuw&s"
                alt=""
                className="small-imgs"
              />
            </div>
            <div className="about">
              <h5>Lubricants</h5>
              <p>$10.99</p>
              <p className="cart-btn" onClick={() => purchase("Phone charger", "9.99")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>
          <div className="produce-img-col" data-aos="fade-left">
            <div className="about">
              <img
                src="https://images.pexels.com/photos/2835296/pexels-photo-2835296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="small-imgs max-h-96"
              />
            </div>
            <div className="about">
              <h5>Liquefied petroleum gas</h5>
              <p>$300.00</p>
              <p className="cart-btn" onClick={() => purchase("Apple airpod", "300")}>
                <p>Purchase</p>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
