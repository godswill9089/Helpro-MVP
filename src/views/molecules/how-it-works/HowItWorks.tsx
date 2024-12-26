import React from 'react';
import './HowItWorks.css';
import Button from '../button/Button';
import { getImages } from '../../../hooks/getImages';

const HowItWorks = () => {
  const { expandImg, howItWorks1, howItWorks2, howItWorks3 } = getImages();
  const steps = [
    {
      id: 1,
      title: 'Sign up and create your profile',
      info: 'Showcase your skills and availability',
      img: howItWorks1,
    },
    {
      id: 2,
      title: 'Receive leads',
      info: 'Get matched with service requests relevant to your expertise',
      img: howItWorks2,
    },
    {
      id: 3,
      title: 'Manage your business',
      info: 'Handle bookings and payments seamlessly',
      img: howItWorks3,
    },
  ];
  return (
    <div className='how-it-works'>
      <div className='wrapper'>
        <div className='img-wrapper'>
          <div className='img-con'>
            <img src={expandImg} alt='expand icon' />
          </div>
        </div>
        <div className='details'>
          <h1 className='title'>How it works</h1>
          <p className='info'>
            Expand your reach and grow your business with our support and tools
          </p>
          <div className='steps'>
            {steps.map((step) => (
              <div key={step.id} className='step'>
                <div className='img-con'>
                  <img src={step.img} alt='how it works' />
                </div>
                <div className='details-step'>
                  <h3 className='title-step'>{step.title}</h3>
                  <p className='info-step'>{step.info}</p>
                </div>
              </div>
            ))}
          </div>
          <Button text='Offer Service' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
