import React from 'react';
import { AccordionProps } from '../../types/footer';

import ArrowIcon from '../../assets/svg/expandIcon.svg';
import './styles.css';

const AccordionFooter: React.FC<AccordionProps> = ({
  data,
  openIndex,
  onToggle,
}) => {
  return (
    <div className="accordion-container-footer">
      {data.map((item, index) => (
        <div className="accordion-section-wrapper-footer" key={item.id}>
          <div
            onClick={() => onToggle(index)}
            className={`accordion-header ${
              openIndex === index ? 'active' : ''
            }`}
          >
            <h3 className="heading-footer">{item.content.heading}</h3>
            <img
              src={ArrowIcon}
              alt="arrowButton"
              className={`button-arrow-icon ${
                openIndex === index ? 'rotate' : ''
              }`}
            />
          </div>

          {openIndex === index && (
            <div className="accordion-item-card-footer">
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
                <ul className="features-container-footer">
                  {item.content.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="features-card-footer">
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

export default AccordionFooter;
