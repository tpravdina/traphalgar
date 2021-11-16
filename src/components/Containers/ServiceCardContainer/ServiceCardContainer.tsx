import React from 'react';
import { ourServices } from '../../../mock';
import { ServiceCard } from '../../Cards/ServiceCard';
import './ServiceCardContainer.scss';

interface ServiceCardContainerProps {
  className: string;
}

export const ServiceCardContainer: React.FC<ServiceCardContainerProps> = ({ className }) => (
  <div className={`ServiceCardContainer ${className}`}>
    {ourServices.map((elem, index) => (
      <ServiceCard key={String(index)} title={elem.title} text={elem.text} img={elem.img} />
    ))}
  </div>
);
