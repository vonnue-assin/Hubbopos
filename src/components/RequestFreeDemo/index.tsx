import { ReactComponent as RequestFreeDemoFirstImage } from '../../assets/svg/RequestFreeDemo1.svg';
import { ReactComponent as RequestFreeDemoSecondImage } from '../../assets/svg/RequestFreeDemo2.svg';

import './styles.css';

const RequestFreeDemo = () => {
  return (
    <div>
      <div className="background-image">
        <RequestFreeDemoFirstImage className="freedemoImage-1" />
        <RequestFreeDemoSecondImage className="freedemoImage-2" />
        <div className="content-card">
          <h1 className="text-header">All-in-One POS for your restaurant</h1>
          <h1 className="sub-header">
            Streamline your F＆B operations and supercharge your business growth
          </h1>
          <a className='Request-free'>Request Free Demo</a>
        </div>
      </div>
    </div>
  );
};

export default RequestFreeDemo;
