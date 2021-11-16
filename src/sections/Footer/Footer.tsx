import React from 'react';
import { Link } from 'react-scroll';
import { company, help, region } from '../../mock/footerLists';
import './Footer.scss';

export const Footer: React.FC = () => (
  <div className="Footer" id="Footer">
    <div className="Footer__logoBlock">
      <img src="img/footer-logo.svg" alt="logo" className="Footer__logoBlock__logo" />
      <p className="Footer__logoBlock__text">
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
        for everyone
      </p>
      <p className="Footer__logoBlock__copyright">©Trafalgar PTY LTD 2020. All rights reserved</p>
    </div>
    <div className="Footer__list">
      <h3 className="Footer__list__title">Company</h3>
      <ul className="Footer__list__ul">
        {company.map((elem, index) => (
          <li key={String(index)}>
            <Link
              className="Footer__list__item"
              to={elem.id}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              {elem.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="Footer__list">
      <h3 className="Footer__list__title">Region</h3>
      <ul className="Footer__list__ul">
        {region.map((elem, index) => (
          <li key={String(index)}>
            <a href={elem.href} className="Footer__list__item">
              {elem.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="Footer__list">
      <h3 className="Footer__list__title">Help</h3>
      <ul className="Footer__list__ul">
        {help.map((elem, index) => (
          <li key={String(index)}>
            <a href={elem.href} className="Footer__list__item">
              {elem.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <img className="Footer__dots" src="img/bg-elements/dots.svg" alt="dots" />
  </div>
);
