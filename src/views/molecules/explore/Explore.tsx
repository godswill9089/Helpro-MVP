import React, { useContext } from 'react';
import './Explore.css';
import { getImages } from '../../../hooks/getImages';

import CardExplore from '../card-explore/CardExplore';

const Explore = () => {
  const { exploreCard1, exploreCard2, exploreCard3, exploreCard4 } =
    getImages();

  return (
    <div className='explore'>
      <h1 className='title'>
        Explore a wide range of services from trusted professionals in your area
      </h1>
      <div className='cards-explore'>
        <CardExplore
          title='Trusted Professionals'
          info='All providers are vetted and verified for quality'
          img={exploreCard1}
          index={1}
        />
        <CardExplore
          title='Transparent Pricing'
          info='No hidden fees; Know the cost upfront'
          img={exploreCard2}
          index={2}
        />
        <CardExplore
          title='Easy booking'
          info='Book services easily with a few taps'
          img={exploreCard3}
          index={3}
        />
        <CardExplore
          title='24/7 Customer support'
          info="We're here to help whenever you need us"
          img={exploreCard4}
          index={4}
        />
      </div>
    </div>
  );
};

export default Explore;
