import React from 'react';
import './Banner.css';
interface IProps {
  title: string;
  info: string;
}
const Banner = ({ title, info }: IProps) => {
  return (
    <div className='banner-contact-us'>
      <div className='banner'>
        <h1 className='title'>{title}</h1>
        <p className='info'>{info}</p>
      </div>
    </div>
  );
};

export default Banner;
