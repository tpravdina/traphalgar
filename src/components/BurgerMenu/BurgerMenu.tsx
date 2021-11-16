import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { navbarItems } from '../../mock';
import { BurgerIcon } from '../BurgerIcon';
import './BurgerMenu.scss';

interface BurgerMenuProps {
  className?: string;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ className }) => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const overlay = useRef<HTMLButtonElement | null>(null);
  return (
    <div className={`BurgerMenu ${className}`}>
      <button
        className="BurgerMenu__button"
        type="button"
        onClick={() => setIsContainerVisible(!isContainerVisible)}
      >
        <BurgerIcon isContainerVisible={isContainerVisible} />
      </button>
      <ul className={`BurgerMenu__container ${!isContainerVisible && 'hidden'}`}>
        {navbarItems.map((elem, index) => (
          <li key={String(index)}>
            <Link className="BurgerMenu__item" to={elem.id} spy smooth offset={-70} duration={500}>
              {elem.text}
            </Link>
          </li>
        ))}
      </ul>
      {/* eslint-disable jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className={`BurgerMenu__overlay ${!isContainerVisible && 'zero-opacity'}`}
        onClick={() => {
          setIsContainerVisible(false);
          if (overlay.current) {
            setTimeout(() => {
              overlay.current?.classList.toggle('display-none');
            }, 500);
          }
        }}
        ref={overlay}
      />
    </div>
  );
};
