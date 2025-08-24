import Button from '../Button';

import { ReactComponent as ArrowDownWard } from '../../assets/svg/chevron-down-surface-primary.svg';
import { ReactComponent as GlobeLogo } from '../../assets/svg/globe-white.svg';
import { ReactComponent as HubbobosLogo } from '../../assets/svg/hubboposlogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

import './styles.css';

const Header = () => {
  return (
    <div className="header-main-container">
      <div className="header-sub-container">
        <div className="header-component">
          <Button className="menuIcon">
            <MenuIcon color="#fff" />
          </Button>
          <HubbobosLogo />
        </div>
        <div className="solutions-menu-container">
          <Button className="solutions">
            <p className="solutions-text">
              Solutions
              <span>
                <ArrowDownWard />
              </span>
            </p>
            <p className="solutions-text">Plans & Pricing</p>
            <p className="solutions-text">
              Why HUBBO
              <span>
                <ArrowDownWard />
              </span>
            </p>
            <p className="solutions-text">Contact Us</p>
          </Button>
        </div>
        <div className="language-box">
          <Button className="languages">
            <div className="language-container">
              <GlobeLogo />
              <p className="feature-text">EN</p>
              <span>
                <ArrowDownWard className="arrow-downwards" />
              </span>
            </div>
          </Button>
          <p className="login">Log In</p>
          <Button className="get-started" variant="secondary">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
