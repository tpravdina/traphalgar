import React from 'react';
import './TitleWithText.scss';

interface TitleWithTextProps {
  className: string;
  title: string;
  text: string;
  align: string;
}

export const TitleWithText: React.FC<TitleWithTextProps> = ({ className, title, text, align }) => (
  <div className={`TitleWithText TitleWithText--${align} ${className}`}>
    <h2 className="TitleWithText__title">{title}</h2>
    <hr className="TitleWithText__line" />
    <p className="TitleWithText__text">{text}</p>
  </div>
);
