import React from 'react';
import { Button } from '../../components/Button';
import { ServiceCardContainer } from '../../components/Containers/ServiceCardContainer';
import { TitleWithText } from '../../components/TitleWithSubtitle';
import './OurServices.scss';

export const OurServices: React.FC = () => (
  <div className="OurServices" id="OurServices">
    <TitleWithText
      className="OurServices__titleWithText"
      title="Our services"
      // eslint-disable-next-line max-len
      text="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
      align="center"
    />
    <ServiceCardContainer className="OurServices__serviceCardContainer" />
    <Button
      className="OurServices__button"
      modifier="outlined"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick={() => {}}
    >
      Learn more
    </Button>
    <img className="OurServices__bgElement" src="img/bg-elements/bg-element.svg" alt="bg-element" />
    <img className="OurServices__dots" src="img/bg-elements/dots.svg" alt="bg-element" />
  </div>
);
