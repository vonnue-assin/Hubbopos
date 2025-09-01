import { useState, useEffect } from 'react';

import Accordion from '../../components/Accordion';
import { FooterList } from '../../components/FooterList';
import FooterData from '../../data/footer.json';
import { AccordionItem, NewRawJsonData } from '../../types';

import { ReactComponent as HubboposLogo } from '../../assets/svg/hubboposlogo.svg';
import { ReactComponent as CountryLogo } from '../../assets/svg/malaysia-flag.svg';
import { ReactComponent as ArrowIcon } from '../../assets/svg/expandIcon.svg';
import AppStore from '../../assets/images/app-store-sm.png';
import GooglePlay from '../../assets/images/google-play-sm.png';
import faceBookIcon from '../../assets/images/facebook-icon.png';
import InstagramIcon from '../../assets/images/instagram-icon.png';

import './styles.css';
import Button from '../Button';

const accordionData: AccordionItem[] = FooterList(FooterData as NewRawJsonData);

export const FooterCard = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  const [shouldShowAccordion, setShouldShowAccordion] = useState(
    window.innerWidth >= 320 && window.innerWidth <= 1024,
  );

  useEffect(() => {
    const handleResize = () => {
      setShouldShowAccordion(
        window.innerWidth >= 320 && window.innerWidth <= 1024,
      );
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
        {shouldShowAccordion ? (
          <Accordion
            data={accordionData}
            openIndex={openAccordionIndex}
            onToggle={handleAccordionToggle}
          />
        ) : (
          <div className="footer-cards-container">
            <div className="app-store-card-container-1">
              <div className="app-store-card-container-1">
                <div className="app-store-container">
                  <div className="need-help">
                    <p className="need-help-text">Need help? Reach us at</p>
                    <p className="hello-link">hello.my@hubbopos.com</p>
                  </div>
                </div>
                <div className="app-store-card">
                  <img src={AppStore} alt="AppStore" className="appstore" />
                  <img src={GooglePlay} alt="googlePlay" className="appstore" />
                </div>
              </div>
            </div>
            <div className="footer-container">
              {accordionData.map(section => (
                <div className="footer-card" key={section.id}>
                  <h3 className="header">{section.content.heading}</h3>
                  {section.content.features && (
                    <ul className="footer-features">
                      {section.content.features.map((feature, index) => (
                        <li key={index} className="feature-card">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="footer-base-main-container">
          <div className="footer-base-sub-container">
            <div className="footer-card">
              <div className="logo-card">
                <HubboposLogo className="hubboposLogo" />
              </div>
              <Button className="button-logo">
                <div className="button-card">
                  <div className="button-card-container">
                    <CountryLogo className="country-logo" />
                    <p className="button-card-text">MY</p>
                    <ArrowIcon style={{ padding: '0.5rem' }} />
                  </div>
                </div>
              </Button>
            </div>
          </div>

          <div className="social-store-tabsize">
            <img
              src={faceBookIcon}
              alt="facebookIcon"
              className="image-social"
            />
            <img
              src={InstagramIcon}
              alt="InstagramIcon"
              className="image-social"
            />
          </div>
          <div className="app-store-card-container">
            <div className="app-store-container">
              <div className="need-help">
                <p className="need-help-text">Need help? Reach us at</p>
                <p className="hello-link">hello.my@hubbopos.com</p>
              </div>
            </div>

            <div className="app-store-card">
              <img src={AppStore} alt="AppStore" className="appstore" />
              <img src={GooglePlay} alt="googlePlay" className="appstore" />
            </div>
          </div>
          <div className="social-store">
            <img
              src={faceBookIcon}
              alt="facebookIcon"
              className="image-social"
            />
            <img
              src={InstagramIcon}
              alt="InstagramIcon"
              className="image-social"
            />
          </div>

          <p className="privacy-notice">Privacy Notice</p>
        </div>
      </div>
    </div>
  );
};
