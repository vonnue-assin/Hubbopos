import React from 'react';
import { AccordionProps } from '../../types/footer';

import ArrowIcon from '../../assets/svg/expand-more-arrow-button.svg';
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
              alt="Expand"
              className={`button-arrow-icons  ${
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

              {item.content.link && (
                <a
                  href={item.content.link}
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content.link}
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionFooter;
