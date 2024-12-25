import React, { useContext } from 'react';
import './BannerHome.css';
import { getImages } from '../../../hooks/getImages';
import { AppContext } from '../../../context/Context';

const BannerHome = () => {
  const { appleLogo, googleLogo, bannerHome } = getImages();
  const { theme } = useContext<any>(AppContext);
  return (
    <div className='banner-wrapper'>
      <div className='banner'>
        <div className='connection'>
          <h1>
            <span>Connecting You</span> <br /> with trusted service providers
            for every need
          </h1>
          <p className='find'>
            Find reliable experts for cleaning, repairs and more,
            <br /> or offer your service to a wide audience
          </p>
          <div className='btns'>
            <button className='app-store'>
              <img src={appleLogo} alt='apple logo' />
              <div>
                <p>Download on the</p>
                <h3>App store</h3>
              </div>
            </button>
            <button className='app-store'>
              <img src={googleLogo} alt='apple logo' />
              <div>
                <p>Get it on</p>
                <h3>Google play</h3>
              </div>
            </button>
          </div>
        </div>
        <div className='slider'>
          <div className='img-con'>
            <img src={bannerHome} alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
