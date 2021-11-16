import React from 'react';
import './Logo.scss';
import { Link } from 'react-scroll';

interface LogoProps {
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <div className={`Logo ${className}`}>
    <Link to="FirstScreen" spy smooth offset={-70} duration={500}>
      <img className="Logo__img" src="img/logo.svg" alt="logo" />
    </Link>
    <Link to="FirstScreen" spy smooth offset={-70} duration={500}>
      <p className="Logo__text">Trafalgar</p>
    </Link>
  </div>
);
