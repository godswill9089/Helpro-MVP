import React from 'react';
import './Button.css';
interface IProps {
  text: string;
  icon?: string;
  onClick: () => void;
  variant?: string;
  width?: string;
  height?: string;
}
const Button = ({ text, icon, onClick, variant, width, height }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn-main ${variant === 'outline' && 'outline'}`}
      style={{ width, height }}
    >
      {text}
      {icon && <span className='icon'>{icon}</span>}
    </button>
  );
};

export default Button;
