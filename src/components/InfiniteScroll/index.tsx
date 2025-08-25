import React, { useState, useRef, useEffect } from 'react';

import Button from '../Button';

import { InfiniteScrolProps } from '../../types';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrow.svg';

import './styles.css';

const InfiniteScroll: React.FC<InfiniteScrolProps> = ({ data }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [cardVisibleWidth, setCardVisibleWidth] = useState(0);

  const extendedData = [data[data.length - 1], ...data, data[0]];

  const slideTo = (i: number) => {
    setIndex(i);
    setTransition(true);
  };

  const prev = () => slideTo(index - 1);
  const next = () => slideTo(index + 1);

  
  useEffect(() => {
    if (cardRef.current) {
      const { width } = cardRef.current.getBoundingClientRect();
      const cardMarginRight = parseFloat(
        window.getComputedStyle(cardRef.current).marginRight || '0',
      );
      setCardVisibleWidth(width + cardMarginRight);
    }
  }, []);

  
  useEffect(() => {
    if (!wrapperRef.current || !cardVisibleWidth) return;

    const wrapper = wrapperRef.current;
    wrapper.style.transition = transition
      ? 'transform 500ms ease-in-out'
      : 'none';
    wrapper.style.transform = `translate3d(${
      -index * cardVisibleWidth
    }px, 0, 0)`;
  }, [index, transition, cardVisibleWidth]);

  // Handle infinite loop snapping
  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(data.length);
      }, 500);
    } else if (index === data.length + 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 500);
    }
  }, [index, data.length]);

  return (
    <div className="main-card">
    
      <div className="scroll-peek-wrapper">
        <div className="image-card-wrapper">
          <div className="swiper-wrapper" ref={wrapperRef}>
            {extendedData.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`card-container ${
                  idx === index ? 'full-visible' : 'partial-visible'
                }`}
                ref={idx === 1 ? cardRef : null}
              >
                <div className="image-container">
                  <img src={item.quoteSvg} alt="Quote Icon" className="logo" />
                  <img
                    src={item.image}
                    alt="Client"
                    className="clients-image"
                  />
                </div>
                <div className="content-container">
                  <div className="content-card">
                    <p className="comment">{item.content}</p>
                  </div>
                  <div className="owner-details-card">
                    <img
                      src={item.subheading.logo}
                      alt={`${item.subheading.name} Logo`}
                      className="brand-image"
                    />
                    <div className="details-card">
                      <p className="name">{item.subheading.name}</p>
                      <p className="owner">{item.subheading.owner}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  
      <div className="arrow-button">
        <Button onClick={prev}>
          <LeftArrowIcon className="arrowIcon" />
        </Button>
        <Button onClick={next}>
          <LeftArrowIcon className="arrowIcon rotateRight" />
        </Button>
      </div>
    </div>
  );
};

export default InfiniteScroll;
