import React from 'react';

import { Accordionpics } from '../../components/Accordionpics';
import { FooterCard } from '../../components/FooterCard';
import GrowBussiness from '../../components/GrowBussiness';
import Header from '../../components/Header';
import InfiniteScroll from '../../components/InfiniteScroll';
import LeadingSystems from '../../components/LeadingSystems';
import PoweringBusiness from '../../components/PoweringBussiness';
import RequestFreeDemo from '../../components/RequestFreeDemo';
import { RestuarentOperations } from '../../components/RestaurantOperations';
import commentsJson from '../../data/comments.json';

import './styles.css';

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <GrowBussiness />
      <LeadingSystems />
      <Accordionpics />

      <RestuarentOperations />

      <div className="main-section">
        <p className="text-heading-infinite-roll">
          Why 1,600+ F & B Business Owners Love HUBBO POS
        </p>
        <InfiniteScroll data={commentsJson} />
      </div>

      <PoweringBusiness />
      <RequestFreeDemo />
      <FooterCard />
    </div>
  );
};
