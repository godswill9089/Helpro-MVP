import React from 'react';
import './SitBack.css';
import Button from '../button/Button';
import { getImages } from '../../../hooks/getImages';
import AppStore from '../app-store/AppStore';

const SitBack = () => {
  const { sitBackImg } = getImages();
  return (
    <div className='sit-back'>
      <div className='expand-2'>
        <div className='top-section'></div>
        <div className='wrapper'>
          <div className='img-wrapper'>
            <div className='img-con'>
              <img src={sitBackImg} alt='expand icon' />
            </div>
          </div>
          <div className='details'>
            <p className='title'>
              Sit back while our verified experts complete the job to your
              satisfaction
            </p>
            <p className='info'>
              Expand your reach and grow your business with our support and
              tools
            </p>
            <div className='btns'>
              <AppStore variant='ios' onClick={() => {}} />
              <AppStore variant='android' onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitBack;
