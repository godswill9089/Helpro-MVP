import React from 'react';
import './AppStore.css';
import { getImages } from '../../../hooks/getImages';

interface IProps {
  variant: string;
  onClick: () => void;
}
const AppStore = ({ variant, onClick }: IProps) => {
  const { appleLogo, googleLogo } = getImages();
  return (
    <button className='app-store' onClick={onClick}>
      <img
        src={variant === 'ios' ? appleLogo : googleLogo}
        alt='app store logo'
      />
      <div>
        {variant === 'ios' ? (
          <>
            <p>Download on the</p>
            <h3>App store</h3>
          </>
        ) : (
          <>
            <p>Get it on</p>
            <h3>Google play</h3>
          </>
        )}
      </div>
    </button>
  );
};

export default AppStore;
