import React, { useState } from 'react';
import './ExploreOurServices.css';
import { getImages } from '../../../hooks/getImages';
import Button from '../button/Button';
import useWindowSize from '../../../hooks/useWindowSize';

const ExploreOurServices = () => {
  const { isMobile } = useWindowSize();
  const { exploreCardIcon, ratingStar } = getImages();
  const exploreBtns = [
    { id: 1, title: 'Cleaning' },
    { id: 2, title: 'Gardening' },
    { id: 3, title: 'Maintenance' },
    { id: 4, title: 'Personal care' },
    { id: 5, title: 'Pet care' },
    { id: 6, title: 'Fabric care' },
  ];
  const [activeExploreBtn, setActiveExploreBtn] = useState({
    id: 1,
    title: 'Cleaning',
  });
  const cardsExplore = [
    {
      id: 1,
      title: 'Plumbing',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: isMobile ? ['bottom'] : ['bottom'],
    },
    {
      id: 2,
      title: 'Door & window',
      info: 'Targeting hard-to-reach areas  accumulating dirt and grime with time',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: isMobile ? ['bottom', 'left'] : ['bottom', 'left', 'right'],
    },
    {
      id: 3,
      title: 'Locks & screens',
      info: 'Maintaining cleanliness and hygiene in outdoor areas of your home',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: isMobile ? ['bottom'] : ['bottom'],
    },
    {
      id: 4,
      title: 'Tiles & flooring',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: isMobile ? ['left', 'bottom'] : [],
    },
    {
      id: 5,
      title: 'Furniture repair',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: isMobile ? [] : ['left', 'right'],
    },
    {
      id: 6,
      title: 'Rubbish removal',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: isMobile ? ['left'] : [],
    },
  ];

  return (
    <div className='explore-our-services'>
      <div className='top-section'>
        <h1 className='title'>Explore ourservices & solutions</h1>
        <p className='info'>
          From cleaning and equipment repair to lawn care and window cleaning,
          we make it easy to find and book reliable professionals, or to grow
          your bussiness by reaching more clients
        </p>
        <div className='explore-btns'>
          {exploreBtns.map((btn) => (
            <div
              key={btn.id}
              onClick={() => {
                setActiveExploreBtn(btn);
              }}
              className={`explore-btn ${
                btn.id === activeExploreBtn.id && 'active'
              }`}
            >
              {btn.title}
            </div>
          ))}
        </div>
      </div>
      <div className='cards-explore-our-services-wrapper'>
        <div className='cards-explore-our-services'>
          {cardsExplore.map((card) => (
            <div
              key={card.id}
              className={`card-explore-our-services ${card.borders.join(' ')}`}
            >
              <div className='icon-wrapper'>
                <div className='icon'>
                  <img src={card.icon} alt='explore card icon' className='' />
                </div>
              </div>
              <div className='title-wrapper'>
                <h5 className='title-card'>{card.title}</h5>
                <p className='distance'>{card.distance}</p>
              </div>
              <div className='price-wrapper'>
                <div className='price'>{card.price}</div>
                <div className='rating-wrapper'>
                  <div className='number'>{card.rating}</div>
                  <div className='stars'>
                    <img src={ratingStar} alt='rating star' className='star' />
                    <img src={ratingStar} alt='rating star' className='star' />
                    <img src={ratingStar} alt='rating star' className='star' />
                    <img src={ratingStar} alt='rating star' className='star' />
                    <img src={ratingStar} alt='rating star' className='star' />
                  </div>
                </div>
              </div>
              <p className='info-card'>{card.info}</p>
              <button>Request service</button>
            </div>
          ))}
        </div>
      </div>
      <div className='btn-wrapper'>
        <Button
          text='See more'
          onClick={() => {}}
          width={isMobile ? '15.8rem' : ''}
        />
      </div>
      <div className='bottom-wrapper'>
        <div className='sec-bottom bottom-1'></div>
        <div className='sec-bottom bottom-2'></div>
        <div className='sec-bottom bottom-3'></div>
      </div>
    </div>
  );
};

export default ExploreOurServices;
