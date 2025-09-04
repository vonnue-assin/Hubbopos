import React, { useState, useEffect } from 'react';

import './styles.css';

import animationMobileData from '../../data/animationmobile.json';
import animationTabData from '../../data/animationTab.json';
import { AnimationProps } from '../../types/types';

const ImagesAnimation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentMobile =
        window.innerWidth >= 320 && window.innerWidth <= 425;
      setIsMobile(isCurrentMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = isMobile
    ? (animationMobileData as AnimationProps[])
    : (animationTabData as AnimationProps[]);

  return (
    <div className="image-gallery-card">
      <div className="marquee-track">
        {images.map(item => (
          <div key={item.id} className="gallery-item-container">
            <img
              src={item.imageUrl}
              alt={`Image ID: ${item.id}`}
              className="gallery-item-1"
            />
            <img
              src={item.imageUrl}
              alt={`Image ID: ${item.id}`}
              className="gallery-item-2"
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
