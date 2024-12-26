import React from 'react';
import './Button.css';
interface IProps {
  text: string;
  onClick: () => void;
  variant?: string;
}
const Button = ({ text, onClick, variant }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn-main ${variant === 'outline' && 'outline'}`}
    >
      {text}
    </button>
  );
};

export default Button;
