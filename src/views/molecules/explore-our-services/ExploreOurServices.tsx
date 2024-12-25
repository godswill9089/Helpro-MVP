import React, { useContext, useState } from 'react';
import './ExploreOurServices.css';
import { getImages } from '../../../hooks/getImages';

import CardExplore from '../card-explore/CardExplore';
import { FaStar } from 'react-icons/fa';

const ExploreOurServices = () => {
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
      borders: ['bottom'],
    },
    {
      id: 2,
      title: 'Door & window',
      info: 'Targeting hard-to-reach areas  accumulating dirt and grime with time',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: ['bottom', 'left', 'right'],
    },
    {
      id: 3,
      title: 'Locks & screens',
      info: 'Maintaining cleanliness and hygiene in outdoor areas of your home',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: ['bottom'],
    },
    {
      id: 4,
      title: 'Tiles & flooring',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: [],
    },
    {
      id: 5,
      title: 'Furniture repair',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: ['left', 'right'],
    },
    {
      id: 5,
      title: 'Rubbish removal',
      info: 'Include dusting, sweeping, vacuuming, or mopping  surfaces and steam cleaning',
      price: '$30/hr',
      rating: '4.0',
      distance: '23 km',
      icon: exploreCardIcon,
      borders: [],
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
              <div className='icon'>
                <img src={card.icon} alt='explore card icon' className='' />
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
                    <img src={ratingStar} alt='rating star' className='' />
                    <img src={ratingStar} alt='rating star' className='' />
                    <img src={ratingStar} alt='rating star' className='' />
                    <img src={ratingStar} alt='rating star' className='' />
                    <img src={ratingStar} alt='rating star' className='' />
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
        <button className='see-all'>See all</button>
      </div>
    </div>
  );
};

export default ExploreOurServices;
