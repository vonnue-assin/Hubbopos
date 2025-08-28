import React, { useState } from 'react';

import { TabData } from '../../types';
import Button from '../Button';

import './styles.css';

type TabsProps = {
  tabsData: TabData[];
};

const Tabs: React.FC<TabsProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0]?.id || '');
  const currentTab = tabsData.find(tab => tab.id === activeTab);

  return (
    <div className="tabs-container">
      <div className="tab-sub-container">
        <div className="button-container">
          <div className="tab-headers">
            {tabsData.map(tab => (
              <Button
                key={tab.id}
                className={`tab-header ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.buttonLabel}
              </Button>
            ))}
          </div>
        </div>

        {currentTab && (
          <div className="tab-content active">
            <div className="tab-pane-inner">
              <div className="image-container">
                <img
                  src={currentTab.image1}
                  alt={currentTab.buttonLabel}
                  className="image"
                />
                <img
                  src={currentTab.image2}
                  alt={currentTab.buttonLabel}
                  className="image2"
                />
              </div>

              <div className="options-main-container">
                <div className="content-container">
                  <h2 className="header">{currentTab.content.heading}</h2>
                  <p className="tab-paragraph">
                    {currentTab.content.paragraph}
                  </p>
                </div>

                <ul className="options-container">
                  {currentTab.content.features.map((feature, index) => (
                    <li key={index} className="tab-options">
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={currentTab.content.link} className="link-learn-more">
                  <p className='content-link'>{currentTab.content.link}</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
