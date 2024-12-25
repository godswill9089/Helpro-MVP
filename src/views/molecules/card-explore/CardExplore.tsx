import React, { useContext } from 'react';
import './CardExplore.css';
import { getImages } from '../../../hooks/getImages';
import { AppContext } from '../../../context/Context';
interface IProps {
  title: string;
  info: string;
  img: string;
  index: number;
}
const CardExplore = ({ title, info, img, index }: IProps) => {
  const { exploreCard1 } = getImages();
  const { theme } = useContext<any>(AppContext);
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
