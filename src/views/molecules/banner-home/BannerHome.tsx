import React, { useContext, useEffect, useState } from 'react';
import './BannerHome.css';
import { getImages } from '../../../hooks/getImages';
import { AppContext } from '../../../context/Context';
import AppStore from '../app-store/AppStore';
import useWindowSize from '../../../hooks/useWindowSize';

const BannerHome = () => {
  const { theme } = useContext<any>(AppContext);
  const { isMobile, windowSize } = useWindowSize();
  const { bannerHome, bannerHome2, bannerHome3, bannerHome4, bannerHome5 } =
    getImages();
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive === 5 ? 1 : prevActive + 1));
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  const images = [
    bannerHome,
    bannerHome2,
    bannerHome3,
    bannerHome4,
    bannerHome5,
  ];

  return (
    <div className='banner-wrapper'>
      <div className='banner'>
        <div className='connection'>
          <h1>
            <span>Connecting You</span> {!isMobile && <br />}with Trusted
            Service Providers for Every Need
          </h1>
          <p className='find'>
            Find reliable experts for cleaning, repairs and more,
            {!isMobile && <br />} or offer your service to a wide audience
          </p>
          <div className='btns'>
            <AppStore variant='ios' onClick={() => {}} />
            <AppStore variant='android' onClick={() => {}} />
          </div>
        </div>
        <div className='slider'>
          <div className='img-con'>
            {/* <img src={bannerHome} alt='' className='' /> */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Banner ${index + 1}`}
                className={index + 1 === active ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
