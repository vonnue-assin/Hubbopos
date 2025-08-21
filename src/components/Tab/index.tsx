import React, { useState } from 'react';

import { TabData } from '../../types';
import Button from '../Button';

import './styles.css';

type TabsProps = {
  tabsData: TabData[];
};

const Tabs: React.FC<TabsProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0]?.id || '');

  return (
    <div className="tabs-container">
      <div className="tab-sub-container">
        <div className='button-container'>
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

        <div className="tab-content">
          {tabsData.map(tab => (
            <div
              key={tab.id}
              className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
            >
              {activeTab === tab.id && (
                <div className="tab-pane-inner">
                  <div className="image-container">
                    <img
                      src={tab.image2}
                      alt={tab.buttonLabel}
                      className="image"
                    />
                  </div>

                  <div className="options-main-container">
                    <div className="content-container">
                      <h2 className="header">{tab.content.heading}</h2>
                      <p className="tab-paragraph">{tab.content.paragraph}</p>
                    </div>

                    <ul className="options-container">
                      {Object.keys(tab.content)
                        .filter(key => key.startsWith('Option'))
                        .map(optionKey => (
                          <li key={optionKey} className="tab-options">
                            {tab.content[optionKey]}
                          </li>
                        ))}
                    </ul>
                    <a href={tab.content.link} className="link-learn-more">
                      {tab.content.link}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
