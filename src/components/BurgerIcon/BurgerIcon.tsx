import React from 'react';
import './BurgerIcon.scss';

interface BurgerIconProps {
  isContainerVisible: boolean;
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({ isContainerVisible }) => (
  <div className={`BurgerIcon ${isContainerVisible && 'BurgerIcon--cross'}`}>
    <div className="BurgerIcon__up BurgerIcon__line" />
    <div className="BurgerIcon__middle BurgerIcon__line" />
    <div className="BurgerIcon__bottom BurgerIcon__line" />
  </div>
);
