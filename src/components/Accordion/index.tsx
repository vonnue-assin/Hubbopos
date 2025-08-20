import React, { useState } from 'react';

import { AccordionProps } from '../../types';

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <button
            className={`accordion-header ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => handleItemClick(index)}
            aria-expanded={index === activeIndex}
          >
            <h3>{item.content}</h3>
            <span>{index === activeIndex ? '-' : '+'}</span>
          </button>
          <div
            className={`accordion-content ${
              index === activeIndex ? 'open' : ''
            }`}
            style={{ maxHeight: index === activeIndex ? '200px' : '0px' }}
          >
            {item.image && <img src={item.image} alt={item.content} />}
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
