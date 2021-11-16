import React from 'react';
import { Button } from '../../components/Button';
import './FirstScreen.scss';

export const FirstScreen: React.FC = () => (
  <div className="FirstScreen" id="FirstScreen">
    <div className="FirstScreen__container">
      <h1 className="FirstScreen__title">Virtual healthcare for you</h1>
      <p className="FirstScreen__text">
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
        for everyone
      </p>
      <Button
        className="FirstScreen__button"
        modifier="filled"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={() => {}}
      >
        Consult today
      </Button>
    </div>
    <img
      className="FirstScreen__illustration"
      src="img/illustrations/first-screen.svg"
      alt="first-screen-illustrations"
    />
    <img className="FirstScreen__dots" src="img/bg-elements/dots.svg" alt="dots" />
  </div>
);
