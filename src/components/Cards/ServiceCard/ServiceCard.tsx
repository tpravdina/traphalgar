import React from 'react';
import { getAlt } from '../../../getAlt';
import './ServiceCard.scss';

interface ServiceCardProps {
  className?: string;
  title: React.ReactNode;
  text: string;
  img: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ className, title, text, img }) => (
  <div className={`ServiceCard ${className || ''}`}>
    <img className="ServiceCard__img" src={img} alt={getAlt(img)} />
    <h3 className="card-title ServiceCard__title">{title}</h3>
    <p className="card-text ServiceCard__text">{text}</p>
  </div>
);
