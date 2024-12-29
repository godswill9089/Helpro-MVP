import React from 'react';
import './Seeing.css';
import { getImages } from '../../../hooks/getImages';

const Seeing = () => {
  const { userSeeing, verifiedTick, ratingStar } = getImages();
  const cardsSeeing = [
    {
      id: 1,
      name: 'Janet Doe',
      info: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
      rating: '4.0',
      img: userSeeing,
      verified: true,
    },
    {
      id: 2,
      name: 'Janet Doe',
      info: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
      rating: '4.0',
      img: userSeeing,
      verified: true,
    },
    {
      id: 3,
      name: 'Janet Doe',
      info: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
      rating: '4.0',
      img: userSeeing,
      verified: true,
    },
    {
      id: 4,
      name: 'Janet Doe',
      info: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
      rating: '4.0',
      img: userSeeing,
      verified: true,
    },
    {
      id: 5,
      name: 'Janet Doe',
      info: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
      rating: '4.0',
      img: userSeeing,
      verified: true,
    },
  ];
  return (
    <div className='seeing'>
      <h1 className='title'>Seeing is believing!</h1>
      <p className='info'>
        Read what people all over the world who have used our info are saying
      </p>
      <div className='cards-seeing'>
        {cardsSeeing.map((user) => (
          <div key={user.id} className='card-seeing'>
            <div className='img-con'>
              <img src={user.img} alt='user' className='user' />
              {user.verified && (
                <img src={verifiedTick} alt='' className='verified' />
              )}
            </div>
            <h3 className='name'>{user.name}</h3>
            <p className='card-info'>{user.info}</p>
            <div className='rating-wrapper'>
              <div className='number'>{user.rating}</div>
              <div className='stars'>
                <img src={ratingStar} alt='rating star' className='' />
                <img src={ratingStar} alt='rating star' className='' />
                <img src={ratingStar} alt='rating star' className='' />
                <img src={ratingStar} alt='rating star' className='' />
                <img src={ratingStar} alt='rating star' className='' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seeing;
