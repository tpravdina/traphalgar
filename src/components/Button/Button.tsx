import React from 'react';
import './Button.scss';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  modifier: string;
  icon?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ className, children, modifier, icon, onClick }) => (
  <button className={`Button Button--${modifier} ${className}`} type="button" onClick={onClick}>
    {children}
    {icon && <div className={`${icon} Button__icon`} />}
  </button>
);
