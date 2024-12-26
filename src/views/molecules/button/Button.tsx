import React from 'react';
import './Button.css';
interface IProps {
  text: string;
  onClick: () => void;
  variant?: string;
  width?: string;
}
const Button = ({ text, onClick, variant, width }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn-main ${variant === 'outline' && 'outline'}`}
      style={{ width }}
    >
      {text}
    </button>
  );
};

export default Button;
