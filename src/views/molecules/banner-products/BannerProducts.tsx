import React from 'react';
import './BannerProducts.css';
import { getImages } from '../../../hooks/getImages';

const BannerProducts = () => {
  const { bannerProducts } = getImages();

  return (
    <div className='banner-products-wrapper'>
      <div className='banner'>
        <div className='content'>
          <h1 className='title'>
            <span>Connecting people,</span> simplifying lives
          </h1>
          <p className='info'>
            Weather you're a service provider or a user, Helproo empowers you to
            acheive more effortlessy
          </p>
          <div className='img-con'>
            <img src={bannerProducts} alt='banner products' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerProducts;
