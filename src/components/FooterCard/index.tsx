import { useState, useEffect } from 'react';

import Accordion from '../../components/Accordion';
import { FooterList } from '../../components/FooterList';
import FooterData from '../../data/footer.json';
import { AccordionItem, NewRawJsonData } from '../../types';

import { ReactComponent as HubboposLogo } from '../../assets/svg/hubboposlogo.svg';

import './styles.css';
import Button from '../Button';

const accordionData: AccordionItem[] = FooterList(FooterData as NewRawJsonData);

export const FooterCard = () => {
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
    <div className="footer-main-container">
      <div className="footer-sub-container">
        {isMobileView ? (
          <Accordion
            data={accordionData}
            openIndex={openAccordionIndex}
            onToggle={handleAccordionToggle}
          />
        ) : (
          <div className="footer-cards-container">
            {accordionData.map(section => (
              <div className="footer-card" key={section.id}>
                <h3>{section.content.heading}</h3>
                {section.content.features && (
                  <ul className="footer-features">
                    {section.content.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="footer-base-main-container">
          <div className="footer-base-sub-container">
            <div className="logo-card">
              <HubboposLogo />
            </div>
            <Button className='button-logo'>
                <div className='button-card'>

                </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
