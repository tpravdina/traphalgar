import React from 'react';
import { BurgerMenu } from '../../components/BurgerMenu';
import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';
import './Header.scss';

export const Header: React.FC = () => (
  <div className="Header" id="Header">
    <Logo className="Header__logo" />
    <Navbar className="Header__navbar" />
    <BurgerMenu className="Header__burger" />
  </div>
);
