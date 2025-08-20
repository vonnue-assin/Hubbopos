import React, { useState } from 'react';

import { AccordionProps } from '../../types';

import './styles.css';

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div
            className={`accordion-content ${
              index === activeIndex ? 'open' : ''
            }`}
            style={{ maxHeight: index === activeIndex ? 'auto' : '0px' }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.content.heading}
                className="image"
              />
            )}
            <h3 className="heading">{item.content.heading}</h3>
            <p className="paragraph">{item.content.paragraph}</p>
            <ul className="options-container">
              {item.content.Option1 && (
                <li className="options">{item.content.Option1}</li>
              )}
              {item.content.Option2 && (
                <li className="options">{item.content.Option2}</li>
              )}
              {item.content.Option3 && (
                <li className="options">{item.content.Option3}</li>
              )}
              {item.content.Option4 && (
                <li className="options">{item.content.Option4}</li>
              )}
              {item.content.Option5 && (
                <li className="options">{item.content.Option5}</li>
              )}
              {item.content.Option6 && (
                <li className="options">{item.content.Option6}</li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
