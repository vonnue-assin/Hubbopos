import React, { useEffect, useState } from 'react';

import ArrowButton from '../assets/svg/dropDownArrow.svg';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import Tabs from '../components/Tab';
import accordionData from '../data/Accordion.json';

import './styles.css';
import Header from '../components/Header';
import GrowBussiness from '../components/GrowBussiness';
import LeadingSystems from '../components/LeadingSystems';
import { RestuarentOperations } from '../components/RestaurantOperations';
import commentsJson from '../components/data/comments.json';
import InfiniteScroll from '../components/InfiniteScroll';
import './styles.css';
import PoweringBusiness from '../components/PoweringBussiness';
import RequestFreeDemo from '../components/RequestFreeDemo';

export const Home: React.FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div>
        <Header />
        <GrowBussiness />
        <LeadingSystems />
        <div className="main-container">
          <p className="text-heading">Tailored Solutions For Your Business</p>
          {isMobileView ? (
            <div className="container">
              {accordionData.map((section, index) => (
                <div className="accordion-section-wrapper" key={index}>
                  <Button
                    onClick={() => handleAccordionToggle(index)}
                    className={
                      openAccordionIndex === index ? 'button active' : 'button'
                    }
                  >
                    <p className="button-name">
                      {section.buttonLabel}
                      <img
                        src={ArrowButton}
                        alt="arrowButton"
                        className={`button-arrow-icon ${
                          openAccordionIndex === index ? 'rotate' : ''
                        }`}
                      />
                    </p>
                  </Button>
                  {openAccordionIndex === index && (
                    <Accordion data={[section]} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Tabs tabsData={accordionData} />
          )}
        </div>
        <RestuarentOperations />
        <div className="main-section">
          <p className="text-heading">
            Why 1,600+ F & B Business Owners Love HUBBO POS
          </p>
          <InfiniteScroll data={commentsJson} />
        </div>
        <PoweringBusiness />
      </div>
      <div>
        <RequestFreeDemo />
      </div>
    </div>
  );
};
