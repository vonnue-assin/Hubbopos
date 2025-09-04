import RestaurentIcon from '../../assets/images/hubbo-home-video-banner-thumbnail.png';
import LearnAbout from '../../assets/images/play-circle.2b34745c.svg';

import './styles.css';

export const RestuarentOperations = () => {
  return (
    <div className="main-containers">
      <div className="restuarent-operations-main-container">
        <div className="image-container">
          <div className="image-box-container">
            <img
              src={RestaurentIcon}
              alt="resturaentIcon"
              className="image-box"
            />
            <div className="image-box-card">
              <img src={LearnAbout} alt="videoPlayer" />
              <div className="learn-text">Learn about HUBBO POS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-container">
        <h3 className="text-head-main">
          The Only Restaurant Operations Platform You'll Need
        </h3>
        <p className="text-content">
          Designed to serve both small individual establishments and chain
          stores, HUBBO POS is the key to scaling your F＆B business operations
          and growing your overall sales.
        </p>
        <button className="get-started-button primary-button">
          Get your free demo today
        </button>
      </div>
    </div>
  );
};
