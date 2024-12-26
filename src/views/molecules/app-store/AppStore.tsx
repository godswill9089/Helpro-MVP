import React from 'react';
import './AppStore.css';
import { getImages } from '../../../hooks/getImages';

interface IProps {
  variant: string;
  onClick: () => void;
  size?: string;
}
const AppStore = ({ variant, onClick, size }: IProps) => {
  const { appleLogo, googleLogo } = getImages();
  return (
    <button className={`app-store ${size === 'md' && 'md'}`} onClick={onClick}>
      <img
        src={variant === 'ios' ? appleLogo : googleLogo}
        alt='app store logo'
      />
      <div>
        {variant === 'ios' ? (
          <>
            <p>Download on the</p>
            <h3>App Store</h3>
          </>
        ) : (
          <>
            <p>GET IT ON</p>
            <h3>Google Play</h3>
          </>
        )}
      </div>
    </button>
  );
};

export default AppStore;
