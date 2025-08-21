import React, { useState } from 'react';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import accordionData from '../data/Accordion.json';
import ArrowButton from '../assets/svg/dropDownArrow.svg';

import './styles.css';

export const Home: React.FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="main-container">
      <p className="text-heading">Tailored Solutions For Your Business</p>
      <div className="container">
        {accordionData.map((section, index) => (
          <div className="accordion-section-wrapper" key={index}>
            <Button
              onClick={() => handleAccordionToggle(index)}
              className={
                openAccordionIndex === index ? 'button active' : 'button'
              }
            >
              <p className="button-name">
                {section.buttonLabel}
                <img
                  src={ArrowButton}
                  alt="arrowButton"
                  className={`button-arrow-icon ${
                    openAccordionIndex === index ? 'rotate' : ''
                  }`}
                />
              </p>
            </Button>
            {openAccordionIndex === index && <Accordion data={[section]} />}
          </div>
        ))}
      </div>
    </div>
  );
};
