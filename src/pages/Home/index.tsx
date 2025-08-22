import React from 'react';
import commentsJson from '../../components/data/comments.json';
import InfiniteScroll from '../../components/InfiniteScroll';

import './styles.css';

export const Home = () => {
  return (
    <div className="main-section">
      <p className="text-heading">
        Why 1,600+ F & B Business Owners Love HUBBO POS
      </p>
      <InfiniteScroll data={commentsJson} />
    </div>
  );
};
