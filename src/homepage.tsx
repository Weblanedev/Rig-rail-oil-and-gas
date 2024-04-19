import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const navigate = useNavigate();

  const purchase = (name: any, price: any) => {
    const product = {
      name,
      price,
    };
    localStorage.setItem('item', JSON.stringify(product));
    navigate('/billing');
  };
  return (
    <>
      <section className='header'>
        <div className='text-box'>
          <h1>Welcome to Rigrail Oil and Gas Limited</h1>
          <p>Where Every Gift Tells a Story and Every Connection Matters</p>
          <Link to='about-us' className='hero-btn'>
            Visit Us to Know More
          </Link>
        </div>
      </section>
      <section className='about-us' id='discover'>
        <div className='rowws'>
          <div className='aboutt-col' data-aos='fade-left'>
            <h1>Discover our story</h1>
            <p>
              In the heart of the dynamic energy sector, where innovation meets
              tradition, lies the narrative of Rigrail Oil and Gas Limited. Our
              journey is one of resilience, vision, and a relentless pursuit of
              excellence in the realm of oil and gas exploration and production.
              <br />
              <br />
              Founded on the principles of integrity and forward-thinking,
              Rigrail emerged as a beacon of possibility in the ever-evolving
              landscape of energy. From humble beginnings to a global presence,
              our story embodies the spirit of ambition tempered with
              responsibility.
            </p>
          </div>
          <div className='aboutt-col' data-aos='fade-right'>
            <img
              src='https://images.pexels.com/photos/3207536/pexels-photo-3207536.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='image about the company'
              id='ProductImg'
            />
          </div>
        </div>
      </section>
      <section className='produce'>
        <div className=''>
          <div className='produce-col'>
            <section className='product-banner' data-aos='fade-right'>
              <h1>OUR PRODUCTS</h1>
            </section>
            <p className='text-center text-md'>Some products we offer </p>
          </div>
          <div className='produce-col'>
            <div className='produce-img-row'>
              <div className='produce-img-col' data-aos='fade-left'>
                <div className='about'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCGdMgQ7q_bEyD4JHslahuwxF8sVZXqKbQw&s'
                    alt=''
                    className='small-imgs'
                  />
                </div>
                <div className='about'>
                  <h5>Gasoline</h5>
                  <p>$50.00</p>
                  <p
                    className='cart-btn'
                    onClick={() => purchase('Power bank', '50')}>
                    <p>Purchase</p>
                  </p>
                </div>
              </div>
              <div className='produce-img-col' data-aos='fade-left'>
                <div className='about'>
                  <img
                    src='https://media.istockphoto.com/id/1133546968/photo/metal-oil-barrels.jpg?b=1&s=612x612&w=0&k=20&c=X4M24Reib_Vn2fhW5Y1VLu3wN-4ysH_z-Slr5CIWvmI='
                    alt=''
                    className='small-imgs'
                  />
                </div>
                <div className='about'>
                  <h5>Fuel oil</h5>
                  <p>$50.00</p>
                  <p
                    className='cart-btn'
                    onClick={() => purchase('Elecric Fan', '250')}>
                    <p>Purchase</p>
                  </p>
                </div>
              </div>
              <div className='produce-img-col' data-aos='fade-left'>
                <div className='about'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaCfsDg9koemA_2rMb8zeNkpR3st9Zu6xuw&s'
                    alt=''
                    className='small-imgs'
                  />
                </div>
                <div className='about'>
                  <h5>Lubricants</h5>
                  <p>$10.99</p>
                  <p
                    className='cart-btn'
                    onClick={() => purchase('Phone charger', '9.99')}>
                    <p>Purchase</p>
                  </p>
                </div>
              </div>
              <div className='produce-img-col' data-aos='fade-left'>
                <div className='about'>
                  <img
                    src='https://images.pexels.com/photos/2835296/pexels-photo-2835296.jpeg?auto=compress&cs=tinysrgb&w=800'
                    alt=''
                    className='small-imgs max-h-96'
                  />
                </div>
                <div className='about'>
                  <h5>Liquefied petroleum gas</h5>
                  <p>$300.00</p>
                  <p
                    className='cart-btn'
                    onClick={() => purchase('Apple airpod', '300')}>
                    <p>Purchase</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
