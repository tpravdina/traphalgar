import React from 'react';
import './ArticleCard.scss';
import { getAlt } from '../../../getAlt';

interface ArticleCardProps {
  className?: string;
  title: React.ReactNode;
  text: string;
  img: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ className, title, text, img }) => (
  <div className={`ArticleCard ${className || ''}`}>
    <img className="ArticleCard__img" src={img} alt={getAlt(img)} />
    <div className="ArticleCard__container">
      <h3 className="card-title ArticleCard__title">{title}</h3>
      <p className="card-text ArticleCard__text">{text}</p>
      <button className="ArticleCard__button" type="button">
        Read more
        <div className="next-arrow ArticleCard__button__icon" />
      </button>
    </div>
  </div>
);
