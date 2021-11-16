import React from 'react';
import { getAlt } from '../../getAlt';
import './ReviewBlock.scss';

interface ReviewBlockProps {
  className?: string;
  name: string;
  role: string;
  review: string;
  img: string;
}

export const ReviewBlock: React.FC<ReviewBlockProps> = ({ className, review, name, role, img }) => (
  <div className={`ReviewBlock ${className || ''}`}>
    <img className="ReviewBlock__img" src={img} alt={getAlt(img)} />
    <div className="ReviewBlock__name">{name}</div>
    <div className="ReviewBlock__role">{role}</div>
    <div className="ReviewBlock__review">{review}</div>
  </div>
);
