import React from 'react';
import { IllustrationBlock } from '../../components/IllustrationBlock';
import './LeadingHealthcareProviders.scss';

export const LeadingHealthcareProviders: React.FC = () => (
  <div className="LeadingHealthcareProviders" id="LeadingHealthcareProviders">
    <IllustrationBlock
      title="Leading healthcare providers"
      text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
      button={{ text: 'Learn more', modifier: 'outlined' }}
      img="img/illustrations/leading-healthcare-providers.svg"
      imgSide="left"
    />
    <img className="LeadingHealthcareProviders__dots" src="img/bg-elements/dots.svg" alt="dots" />
  </div>
);
