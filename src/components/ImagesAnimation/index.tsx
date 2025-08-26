import React from 'react';

import './styles.css';

import animationData from '../../data/animation.json';
import { AnimationProps } from '../../types';

const ImagesAnimation: React.FC = () => {
  const images = animationData as AnimationProps[];

  return (
    <div className="image-gallery-card">
      <div className="marquee-track">
        {images.map(item => (
          <div key={item.id} className="gallery-item-container">
            <img
              src={item.imageUrl}
              alt={`Image ID: ${item.id}`}
              className="gallery-item"
            />
          </div>
        ))}

        {images.map(item => (
          <div
            key={`clone-${item.id}`}
            className="gallery-item-container is-clone"
            aria-hidden="true"
          >
            <img
              src={item.imageUrl}
              alt={`Image ID: ${item.id}`}
              className="gallery-item"
            />
          </div>
        ))}
      </div>
      <div className="absolute-content-left"></div>
      <div className="absolute-content-right"></div>
    </div>
  );
};

export default ImagesAnimation;
