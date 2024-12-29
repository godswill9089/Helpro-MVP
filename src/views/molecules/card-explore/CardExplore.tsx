import React from 'react';
import './CardExplore.css';

interface IProps {
  title: string;
  info: string;
  img: string;
  index: number;
}
const CardExplore = ({ title, info, img, index }: IProps) => {
  return (
    <div className={`card-explore card-explore-${index}`}>
      <div className='img-con'>
        <img src={img} alt='explore card' className='' />
      </div>
      <div className='details'>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default CardExplore;
