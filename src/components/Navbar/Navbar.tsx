import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navbarItems } from '../../mock';
import './Navbar.scss';

interface NavbarProps {
  className: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState('Home');
  return (
    <ul className={`Navbar ${className}`}>
      {navbarItems.map((elem, index) => (
        <li key={String(index)}>
          <Link
            className={`Navbar__item ${elem.text === activeItem && 'Navbar__activeItem'}`}
            to={elem.id}
            spy
            smooth
            offset={-70}
            duration={500}
            onClick={() => setActiveItem(elem.text)}
          >
            {elem.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
