import { useState } from 'react';

import Button from '../components/Button';
import Accordion from '../components/Accordion';
import accordionData from '../data/Accordtion.json';
import { AccordionProps } from '../types';

import ArrowButton from '../assets/svg/dropDownArrow.svg';

import './styles.css';

export const Home: React.FC<AccordionProps> = () => {
  const [accordionOpen, setAccordtionOpen] = useState(false);

  const handleIntegrationPartnersClick = () => {
    setAccordtionOpen(!accordionOpen);
  };

  return (
    <div className="main-container">
      <p className="text-heading">Tailored Solutions For Your Business</p>

      <Button onClick={handleIntegrationPartnersClick}>
        <p className="button-name">
          Integration partners
          <img
            src={ArrowButton}
            alt="arrowButton"
            className={`button-arrow-icon ${accordionOpen ? 'rotate' : ''}`}
          />
        </p>
      </Button>
      {accordionOpen && <Accordion data={accordionData} />}
    </div>
  );
};
