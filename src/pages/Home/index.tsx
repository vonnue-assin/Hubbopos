import React, { useEffect, useState } from 'react';

import ArrowButton from '../../assets/svg/dropDownArrow.svg';
import Accordion from '../../components/AccordionHeader';
import Button from '../../components/Button';
import Tabs from '../../components/Tab';
import accordionData from '../../data/Accordion.json';

import './styles.css';
import Header from '../../components/Header';
import GrowBussiness from '../../components/GrowBussiness';
import LeadingSystems from '../../components/LeadingSystems';
import { RestuarentOperations } from '../../components/RestaurantOperations';
import commentsJson from '../../data/comments.json';
import InfiniteScroll from '../../components/InfiniteScroll';
import PoweringBusiness from '../../components/PoweringBussiness';
import RequestFreeDemo from '../../components/RequestFreeDemo';
// import { FooterCard } from '../../components/FooterCard';
import { Accordionpics } from '../../components/Accordionpics';

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <GrowBussiness />
      <LeadingSystems />
      <Accordionpics />

      <div className="main-container"></div>

      <RestuarentOperations />

      <div className="main-section">
        <p className="text-heading-infinite-roll">
          Why 1,600+ F & B Business Owners Love HUBBO POS
        </p>
        <InfiniteScroll data={commentsJson} />
      </div>

      <PoweringBusiness />
      <RequestFreeDemo />
      {/* <FooterCard /> */}
    </div>
  );
};
