import React from 'react';

import { InfiniteScrollProps } from '../../types';

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ data }) => {
  return (
    <div>
      <div>
        {data.map(item => (
          <div key={item.id}>
            <img src={item.image} alt="Testimonial Image" />
            <p>{item.content}</p>
            <p>{item.subheading.name}</p>
            <p>{item.subheading.name}</p>
            <p>{item.subheading.owner}</p>
            <img src={item.subheading.logo} alt={item.subheading.name} />
            <img src={item.quoteSvg} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
