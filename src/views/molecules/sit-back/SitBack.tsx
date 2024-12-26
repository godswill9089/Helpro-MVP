import React from 'react';
import './SitBack.css';
import Button from '../button/Button';
import { getImages } from '../../../hooks/getImages';

const SitBack = () => {
  const { expandImg } = getImages();
  return (
    <div className='expand'>
      <div className='expand-2'>
        <div className='top-section'></div>
        <div className='wrapper'>
          <div className='details'>
            <p className='title'>
              Expand your reach and grow your business with our support and
              tools
            </p>
            <p className='info'>
              Expand your reach and grow your business with our support and
              tools
            </p>
            <Button text='Offer Service' onClick={() => {}} />
          </div>
          <div className='img-wrapper'>
            <div className='img-con'>
              <img src={expandImg} alt='expand icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitBack;
