import React from 'react';

import LeadingSystemsData from '../../data/leadingSystems.json';

import HubboposPos from '../../assets/images/HubboPosMain.png';

import './styles.css';
import SystemDetails from '../SystemDetails';

const LeadingSystems = () => {
  return (
    <div className="leading-systems-container">
      <div className="leading-systems">
        <div className="content-card-main">
          <h2 className="leading-systems-heading-1">
            Leading POS system in Malaysia
          </h2>
          <h2 className="leading-systems-heading-2">
            One Platform, total control
          </h2>

          <div className="pos-card">
            <div className="content-card-main-box">
              <img
                src={HubboposPos}
                alt="Hubbopos(POS)"
                className="hubbopos-pos"
              />

              <div className="contents">
                <div className="content-card">
                  <h2 className="leading-systems-heading-3">
                    Leading POS system in Malaysia
                  </h2>
                  <h2 className="leading-systems-heading-4">
                    One Platform, total control
                  </h2>
                  <p className="hubbopos-content">
                    HUBBO POS is a point-of-sale (POS) system that gives total
                    control over your G＆B operations.
                  </p>
                  <p className="hubbopos-content">
                    From one-click menu updates to contactless ordering,
                    experience seamless workflows and enhanced efficiency that
                    will help you reduce operational costs and deliver
                    exceptional customer experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SystemDetails systemsData={LeadingSystemsData} />
    </div>
  );
};

export default LeadingSystems;
