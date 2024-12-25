import React, { useContext, useState } from 'react';
import './Expand.css';
import { getImages } from '../../../hooks/getImages';

import CardExplore from '../card-explore/CardExplore';
import { FaStar } from 'react-icons/fa';

const Expand = () => {
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
      <div className='top-section'></div>
    </div>
  );
};

export default Expand;
