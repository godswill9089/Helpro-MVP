import React from 'react';
import './Expand.css';
import Button from '../button/Button';
import { getImages } from '../../../hooks/getImages';
import useWindowSize from '../../../hooks/useWindowSize';

const Expand = () => {
  const { expandImg } = getImages();
  const { isMobile } = useWindowSize();
  return (
    <div className='expand'>
      <div className='wrapper'>
        <div className='details'>
          <p className='title'>
            Expand your reach and grow your business with our support and tools
          </p>
          <p className='info'>
            Expand your reach and grow your business with our support and tools
          </p>
          <div className='btn-wrapper'>
            <Button
              text='Offer Service'
              onClick={() => {}}
              width={isMobile ? '13.8rem' : ''}
            />
          </div>
        </div>
        <div className='img-wrapper'>
          <div className='img-con'>
            <img src={expandImg} alt='expand icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expand;
