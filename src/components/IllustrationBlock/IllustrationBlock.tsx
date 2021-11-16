import React from 'react';
import { getAlt } from '../../getAlt';
import { Button } from '../Button';
import './IllustrationBlock.scss';

interface IllustrationBlockProps {
  className?: string;
  title: React.ReactNode;
  text: string;
  button: { text: string; modifier: string; icon?: string };
  img: string;
  imgSide: string;
  icon?: string;
}

export const IllustrationBlock: React.FC<IllustrationBlockProps> = ({
  className,
  title,
  text,
  button,
  img,
  imgSide,
}) => (
  <div className={`IllustrationBlock IllustrationBlock--${imgSide} ${className}`}>
    <div className="IllustrationBlock__container">
      <h2 className="title">{title}</h2>
      <hr className="line" />
      <p className="text">{text}</p>
      <Button
        className="IllustrationBlock__button"
        modifier={button.modifier}
        icon={button.icon}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={() => {}}
      >
        {button.text}
      </Button>
    </div>
    <img className="illustration IllustrationBlock__img" src={img} alt={getAlt(img)} />
  </div>
);
