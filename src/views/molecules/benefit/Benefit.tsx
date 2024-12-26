import React, { useContext } from 'react';
import './Benefit.css';
import { getImages } from '../../../hooks/getImages';

const Benefit = () => {
  const {} = getImages();
  const cardsBenefit = [
    {
      id: 1,
      title: 'Expand your reach',
      info: ' Connect with a broader audience looking for your expertise',
    },
    {
      id: 2,
      title: 'Simplified management',
      info: 'Easily handle bookings, payments and communications',
    },
    {
      id: 3,
      title: 'Flexible pricing options',
      info: 'Negotiate rates directly with customers and set terms that work',
    },
  ];

  return (
    <div className='benefit'>
      <h1 className='title'>Benefit for Service Providers </h1>
      <p className='info'>A powerful platform to grow your business</p>
      <div className='cards-benefit'>
        {cardsBenefit.map((card) => (
          <div key={card.id} className='card-benefit'>
            <div className='card-main'>
              <h3 className='card-title'>{card.title}</h3>
              <p className='card-info'>{card.info}</p>
            </div>
            <div className='bottom-1'></div>
            <div className='bottom-2'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
