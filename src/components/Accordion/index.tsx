import React from 'react';

import { AccordionProps } from '../../types';

import './styles.css';

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  return (
    <div className="accordion-container">
      {data.map(item => (
        <div className="accordion-item" key={item.id}>
          {item.image1 && (
            <img
              src={item.image1}
              alt={item.content.heading}
              className="image1"
            />
          )}

          <h3 className="heading">{item.content.heading}</h3>
          <p className="paragraph">{item.content.paragraph}</p>

          {item.content.features?.length > 0 && (
            <ul className="features-container">
              {item.content.features.map((feature, index) => (
                <li key={index} className="features">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <span className="learn-more">{item.content.link}</span>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
