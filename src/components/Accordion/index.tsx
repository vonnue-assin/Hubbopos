import React from 'react';
import { AccordionProps } from '../../types';
import ArrowIcon from '../../assets/svg/expandIcon.svg';

import './styles.css';

const Accordion: React.FC<AccordionProps> = ({ data, openIndex, onToggle }) => {
  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div className="accordion-section-wrapper" key={item.id}>
          <div
            onClick={() => onToggle(index)}
            className={`accordion-header ${
              openIndex === index ? 'active' : ''
            }`}
          >
            <h3 className="heading">{item.content.heading}</h3>
            <img
              src={ArrowIcon}
              alt="arrowButton"
              className={`button-arrow-icon ${
                openIndex === index ? 'rotate' : ''
              }`}
            />
          </div>

          {openIndex === index && (
            <div className="accordion-item">
              {item.image1 && (
                <img
                  src={item.image1}
                  alt={item.content.heading}
                  className="image1"
                />
              )}

              {item.content.paragraph && (
                <p className="paragraph">{item.content.paragraph}</p>
              )}

              {item.content.features && item.content.features.length > 0 && (
                <ul className="features-container">
                  {item.content.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="features">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
